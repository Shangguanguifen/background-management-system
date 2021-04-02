import CommonUtil from 'util/common';

let _CommonUtil = new CommonUtil();

class User{
  login(loginInfo) {
    return _CommonUtil.request({
      type: 'post',
      url: '/manage/user/login.do',
      data: loginInfo
    });
  };
  onLogOut() {
    return _CommonUtil.request({
      type: 'post',
      url: '/user/logout.do'
    });
  };
  getUserList(pageNum) {
    return _CommonUtil.request({
      type: 'post',
      url: '/manage/user/list.do',
      data: {
        pageNum: pageNum
      }
    })
  }
}

export default User;
