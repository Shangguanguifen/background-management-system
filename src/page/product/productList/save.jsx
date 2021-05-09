import { Form, Input, Button, InputNumber } from 'antd';

import CategorySelect from './categorySelect';
import ImgUpload from './imgUpload';
import RichEditor from 'util/richEditor';
import { useEffect, useState, useCallback, useRef } from 'react';

import Product from 'service/productService';
import CommonUtil from 'util/common';

let _commonUtil = new CommonUtil();
const _product = new Product();



// 表单样式
const layout = {
  labelCol: {
    span: 4,
  },
  wrapperCol: {
    span: 8,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 4,
    span: 8,
  },
};
const richEditorLayout = {
  wrapperCol: {
    span: 16,
  },
};

const ProductSave = (props) => {
  const [detailDate, setDetailDate] = useState({})
  const [categoryId, setCategoryId] = useState(0);
  const [subImages, setSubImages] = useState('');
  const [detail, setDetail] = useState({});
  const [id, setId] = useState(props.match.params.id);
  const [init, setInit] = useState('');
  const addForm = useRef(null);

  const onFinish = (values) => {
    const product = values;
    if(id) {
      product.id = id;
    }
    product.categoryId = categoryId;
    product.subImages = subImages;
    product.detail = detail;
    product.status = 1;  //商品提交之后默认状态1为在售

    _product.addProduct(product).then(res => {
      _commonUtil.successTips(res);
      props.history.push('/product/productList')
    }).catch(err => {
      _commonUtil.successTips(err);
    })
  };

  const onFinishFailed = (errorInfo) => {
    _commonUtil.errorTips(errorInfo);
    console.log('Failed:', errorInfo);
  };

  // 获取品类信息
  const onCategoryChange = (categoryId, parentCategoryId) => {
    setCategoryId(categoryId);
  }

  // 获取图片信息response
  const onGetImageDesc = (imageList, init) => {
    const reg = new RegExp(/(\.[a-z]*)/g);
    let subImages = imageList.map(image => {
      const initType = (image.uid).match(reg)
      const type = (image.name).match(reg)[0];
      const result = initType ? image.uid : image.uid + type;
      return result;
    }).join(',');
    setSubImages(subImages);
    setInit(init)
  }

  // 获取富文本信息
  const onEditorValueChange = (value) => {
    setDetail(value);
  }


  // 加载商品详情
  const loadProduct = useCallback((id) => {
    if(id) {
      _product.getProduct(id).then(res => {
        addForm.current.setFieldsValue({
          name: res.name,
          subtitle: res.subtitle,
          price: res.price,
          stock: res.stock,
        })
        setDetailDate(res)
      }).catch(err => {
        _commonUtil.errorTips(err);
      })
    }
  }, [])

  useEffect(() => {
    setId(props.match.params.id)
    loadProduct(id)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])


  return (
    <Form
      {...layout}
      // name="basic"
      ref={addForm}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      scrollToFirstError={true}
    >
      <Form.Item
        label="商品名称"
        name="name"
        
        rules={[
          {
            required: true,
            message: '商品名称不能为空!',
          },
        ]}
      >
        <Input/>
      </Form.Item>

      <Form.Item
        label="商品描述"
        name="subtitle"
        rules={[
          {
            required: true,
            message: '商品描述不能为空!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      {/* 商品分类 */}
      <Form.Item
        label="所属分类"
        rules={[
          {
            required: true,
            message: '请选择商品品类!',
          },
        ]}>
        <CategorySelect
          onCategoryChange={onCategoryChange}
          categoryId={[detailDate.categoryId, detailDate.parentCategoryId]}/>
      </Form.Item>

      <Form.Item label="商品价格">
        <Form.Item name="price" noStyle rules={[
          {
            required: true,
            message: '请输入商品价格!',
          },
        ]}>
          <InputNumber />
        </Form.Item>
        <span className="ant-form-text"> 元</span>
      </Form.Item>
      <Form.Item label="商品库存">
        <Form.Item name="stock" noStyle  rules={[
          {
            required: true,
            message: '请输入库存数量!',
          },
        ]}>
          <InputNumber />
        </Form.Item>
        <span className="ant-form-text"> 件</span>
      </Form.Item>

      {/* 上传图片 */}
      <Form.Item label="商品图片">
        <ImgUpload
          onGetImageDesc={onGetImageDesc}
          images={init || subImages ? subImages : {
            uri: detailDate.subImages,
            urlHost: detailDate.imageHost}}
          />
      </Form.Item>

      {/* 富文本编辑框 */}
      <Form.Item label="商品详情" {...richEditorLayout}>
        <RichEditor onEditorValueChange={onEditorValueChange} detail={detailDate.detail}></RichEditor>
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default ProductSave;