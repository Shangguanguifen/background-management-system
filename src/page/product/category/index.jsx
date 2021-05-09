import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import { Table, Input, InputNumber, Popconfirm, Form, Typography, Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons'

import Product from 'service/productService';
import CommonUtil from 'util/common';

let _commonUtil = new CommonUtil();
const _product = new Product();


const EditableCell = ({
  editing,
  dataIndex,
  title,
  inputType,
  record,
  index,
  children,
  ...restProps
}) => {
  if(dataIndex === 'id') {
    editing = false;
  }
  const inputNode = inputType === 'number' ? <InputNumber /> : <Input />;
  return (
    <td {...restProps}>
      {editing ? (
        <Form.Item
          name={dataIndex}
          style={{
            margin: 0,
          }}
          rules={[
            {
              required: true,
              message: `Please Input ${title}!`,
            },
          ]}
        >
          {inputNode}
        </Form.Item>
      ) : (
        children
      )}
    </td>
  );
};

const CategoryList = (props) => {
  const [form] = Form.useForm();
  const [data, setData] = useState();
  const [editingKey, setEditingKey] = useState('');
  const [categoryId, setCategoryId] = useState(0);

  // 加载品类列表
  const loadCategoryList = (categoryId) => {
    _product.getCategoryList(categoryId).then(res => {
      res.forEach(item => {
        item.key = item.id
      })
      setData(res);
    }).catch(err => {
      _commonUtil.errorTips(err);
    })
  }

  useEffect(() => {
    setCategoryId(props.match.params.id || 0)
  }, [props.match.params.id])

  useEffect(() => {
    loadCategoryList(categoryId);
  }, [categoryId])


  const isEditing = (record) => record.key === editingKey;

  const edit = (record) => {
    form.setFieldsValue({
      name: '',
      ...record
    });
    setEditingKey(record.key);
  };

  const cancel = () => {
    setEditingKey('');
  };

  // 更改品类名称
  const save = async (key) => {
    try {
      const row = await form.validateFields();
      _product.updateCategoryName({
        categoryId: key,
        categoryName: row.name
      }).then(res => {
        _commonUtil.successTips(res);
        setEditingKey('')
        loadCategoryList(categoryId);

      }).catch(err => {
        setEditingKey('')
        _commonUtil.errorTips(err);
      })
      
    } catch (errInfo) {
      _commonUtil('Validate Failed:' + errInfo)
      console.log('Validate Failed:', errInfo);
    }
  };

  const columns = [
    {
      title: '品类Id',
      dataIndex: 'id',
      width: '15%',
      editable: true,
    },
    {
      title: '品类名称',
      dataIndex: 'name',
      width: '60%',
      editable: true,
    },
    {
      title: 'operation',
      dataIndex: 'operation',
      render: (_, record) => {
        const editable = isEditing(record);
        return <div>
          {
            editable ? (
              <span>
                <span
                  onClick={() => save(record.key)}
                  style={{
                    marginRight: 8,
                    color: '#1890ff'
                  }}
                >
                  save
                </span>
                <Popconfirm title="Sure to cancel?" onConfirm={cancel}>
                  <span style={{color: '#1890ff'}}>Cancel</span>
                </Popconfirm>
              </span>
            ) : (
              <Typography.Link disabled={editingKey !== ''} onClick={() => edit(record)} >
                修改名称
              </Typography.Link>
            )
          }
          {categoryId ? 
            null : <Link 
                      to={`/product/categoryList/${record.id}`} 
                      disabled={editingKey !== ''} 
                      style={{marginLeft: 16, pointerEvents: 'auto'}}>
                        查看其子品类
                  </Link>}
        </div>
      },
    },
  ];


  const mergedColumns = columns.map((col) => {
    if (!col.editable) {
      return col;
    }

    return {
      ...col,
      onCell: (record) => ({
        record,
        inputType: col.dataIndex === 'age' ? 'number' : 'text',
        dataIndex: col.dataIndex,
        title: col.title,
        editing: isEditing(record),
      }),
    };
  });

  return (
    <Form form={form} component={false}>
      <div>
        <p>父品类Id: {categoryId}</p>
      </div>
      <Link to="/category/add">
          <Button type="primary" size={'large'} className="table-button" icon={<PlusOutlined style={{fontWeight: 700}}/>}>
            添加商品
          </Button>
        </Link>
      <Table
        components={{
          body: {
            cell: EditableCell,
          },
        }}
        bordered
        dataSource={data}
        columns={mergedColumns}
        rowClassName="editable-row"
        pagination={{
          onChange: cancel,
        }}
      />
    </Form>
  );
};

export default CategoryList;