/*
 * @Author: Guifen Shangguan 
 * @Date: 2021-04-08 13:50:03 
 * @Last Modified by: Guifen Shangguan
 * @Last Modified time: 2021-04-08 16:09:25
 */
import CommonUtil from 'util/common';

let _commonUtil = new CommonUtil();

class Order{
  // 获取订单列表
  getOrderList(listParam) {
    let url = '';
    let data = {};
    data.pageNum = listParam.pageNum;
    if(listParam.listType === 'list') {
      url = '/manage/order/list.do';
    } else if(listParam.listType === 'search') {
      url = '/manage/order/search.do';
      data.orderNo = listParam.orderNo;
    }
    return _commonUtil.request({
      type: 'post',
      url: url,
      data: data,
    })
  }

  // 获取订单详情
  getOrderDetail(id) {
    return _commonUtil.request({
      type: 'post',
      url: '/manage/order/detail.do',
      data    : {
        orderNo : id
    }
    })
  }

  // 点击发货
  sendGoods(id) {
    return _commonUtil.request({
      type: 'post',
      url: '/manage/order/send_goods.do',
      data: {
        orderNo: id
      }
    })
  }

}
export default Order;