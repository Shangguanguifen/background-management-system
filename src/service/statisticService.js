import CommonUtil from 'util/common';

let _commonUtil = new CommonUtil();


class Statistic {
  getHomeCount() {
    return _commonUtil.request({
      url: '/manage/statistic/base_count.do'
    })
  }
}

export default Statistic