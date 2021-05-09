import { useState, useEffect } from 'react'
import { Form, Input, Button, Select } from 'antd';
import Product from 'service/productService';
import CommonUtil from 'util/common';

let _commonUtil = new CommonUtil();
const _product = new Product();
const { Option } = Select;


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
    span: 16,
  },
};

const CategoryAdd = (props) => {
  const [categoryList, setCategoryList] = useState([]);

  // 加载品类类表
  const loadCategoryList = () => {
    _product.getCategoryList().then(res => {
      setCategoryList(res)
    }).catch(err => {
      _commonUtil.errorTips(err)
    })
  }

  useEffect(() => {
    loadCategoryList()
  }, [])

  // 商品添加数据提交
  const onFinish = (values) => {
    let parentId = values.categoryId === '根品类' ? 0 : values.categoryId;
    _product.addCategory({
      parentId: parentId,
      categoryName: values.name
    }).then(res => {
      _commonUtil.successTips(res);
      props.history.push('/product/categoryList');
    }).catch(err => {
      _commonUtil.errorTips(err);
    })
  };

  const onFinishFailed = (errorInfo) => {
    _commonUtil.errorTips(errorInfo);
    console.log('Failed:', errorInfo);
  };

  return (
    <Form
      {...layout}
      name="basic"
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label="所属品类"
        name="categoryId"
        initialValue='根品类'
        rules={[
          {
            required: true,
            message: '请选择商品品类!',
          },
        ]}
      >
        <Select
          style={{ width: 186, marginRight: 14 }}
          // defaultValue='0'
          placeholder="请选择品类">
            <Option value="0">根品类</Option>
            {categoryList.map(category => (
              <Option value={category.id} key={category.id}>根品类/{category.name}</Option>
            ))}
        </Select>
      </Form.Item>
      <Form.Item
        label="品类名称"
        name="name"
        rules={[
          {
            required: true,
            message: '请输入商品名称!',
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default CategoryAdd;