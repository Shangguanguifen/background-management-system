import CommonUtil from 'util/common';

let _commonUtil = new CommonUtil();

export function getProductList(pageNum, url) {
  return _commonUtil.request({
    type: 'post',
    url: url,
    data: {
      pageNum: pageNum
    }
  })
}
