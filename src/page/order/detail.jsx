/*
 * @Author: Guifen Shangguan 
 * @Date: 2021-04-08 14:54:54 
 * @Last Modified by: Guifen Shangguan
 * @Last Modified time: 2021-04-12 21:44:46
 */
import { useEffect, useState } from 'react';
import { List, Table, Button } from 'antd';
import Order from 'service/orderService';
import CommonUtil from 'util/common';
import './detail.scss'

let _commonUtil = new CommonUtil();
const _order = new Order();

const initData = [{
  name: '订单号',
  target: 'orderNo',
  content: ''
}, {
  name: '创建时间',
  target: 'createTime',
  content: ''
}, {
  name: '收件人',
  target: 'desc',
  content: ''
}, {
  name: '订单状态',
  target: 'statusDesc',
  content: ''
}, {
  name: '支付方式',
  target: 'paymentTypeDesc',
  content: ''
}, {
  name: '订单金额',
  target: 'payment',
  content: ''
}];

const columns = [
  {
    title: '商品图片',
    dataIndex: 'image',
    key: 'image',
    width: '10%',
    render: image => {
      return <img className="product-image" src={image} alt="product.img"/>
    }
  },
  {
    title: '商品信息',
    dataIndex: 'productName',
    key: 'productName',
  },
  {
    title: '单价 / ￥',
    dataIndex: 'currentUnitPrice',
    key: 'currentUnitPrice',
  },
  {
    title: '数量',
    dataIndex: 'quantity',
    key: 'quantity',
  },
  {
    title: '合计 / ￥',
    dataIndex: 'totalPrice',
    key: 'totalPrice',
  },
];


function OrderDetail (props) {
  const [detaiData, setDetailData] = useState([]);
  const [productList, setProductList] = useState([]);
  
  // 发货处理
  const handleSendGoods = () => {
    if(window.confirm('是否确认该订单已经发货？')){
      _order.sendGoods(props.match.params.id).then((res) => {
          _commonUtil.successTips('发货成功');
         loadOrderDetail(props.match.params.id);
      }, (errMsg) => {
          _commonUtil.errorTips(errMsg);
      });
  }
  }
  
  // 加载订单详情
  const loadOrderDetail = (id) => {
    _order.getOrderDetail(id).then(res => {
      initData.forEach(item => {
        if(item.target === 'desc') {
          return item.content = `${res.shippingVo.receiverName}, ${res.shippingVo.receiverProvince || ''}, ${res.shippingVo.receiverCity || ''}, ${res.shippingVo.receiverAddress || ''}, ${res.shippingVo.receiverMobile || res.shippingVo.receiverPhone || ''}`;
        }
        item.content = res[item.target];
        item.status = res.status;
      })
      setDetailData(initData);
      const products = res.orderItemVoList;
      products.forEach(item => {
        item.image = res.imageHost + item.productImage;
        item.key = item.productId;
      });
      setProductList(products);
      
    }).catch(err => {
      _commonUtil.errorTips(err);
    })
  }

  useEffect(() => {
    loadOrderDetail(props.match.params.id);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.match.params.id])

  return <div>
      <List
      className="list"
      itemLayout="horizontal"
      dataSource={detaiData}
      renderItem={item => (
        <List.Item>
          <span className="list-title">{item.name} :</span>
          {item.content}
          {
            item.name === '订单状态' && item.status === 20 ? <Button type="primary" style={{marginLeft: 16}} onClick={handleSendGoods}>立即发货</Button> : null
          }
        </List.Item>
      )}
    />
    <Table dataSource={productList} columns={columns} />;
  </div>
}

export default OrderDetail;