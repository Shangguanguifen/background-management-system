import { message } from 'antd';

class CommonUtil {
  request(params) {
    return new Promise((resolve, reject) => {
      // eslint-disable-next-line no-undef
      $.ajax({
        type: params.type || 'get',
        url: params.url || '',
        dataType: params.dataType || 'json',
        data: params.data || null,
        success: res => {
          // 数据请求成功
          if (res.status === 0) {
            typeof resolve === 'function' && resolve(res.data, res.msg);
          } else if(res.status === 10) {
            // 没有登录，强制登录
            this.doLogin();
          } else {
            typeof reject === 'function' && reject(res.msg || res.data);
          }
  
        },
        error: err => {
          typeof reject === 'function' && reject(err.msg || err.data);
        }
      })
    })
  }
  // 跳转登录
  doLogin() {
    window.location.href = '/login?redirect=' + encodeURIComponent(window.location.pathname);
  }

  //获取URL参数
  getUrlParam(name) {
    // 获取问号之后的参数
    let queryString = window.location.search.split('?')[1] || '',
      reg = new RegExp("(^|&)" + name + "=([^&]*()&|$)"),
      result = queryString.match(reg);
    return result ? decodeURIComponent(result[2]) : null;
  }
  // 错误提示
  errorTips(errMsg) {
    message.error(errMsg || 'An error has occurred');
  }
  // 成功提示
  successTips(res) {
    message.success(res || 'Successful operation');
  }
  // 本地存储
  setStorage(name, data) {
    let dataType = this.checkedType(data)
    if(dataType === 'Object') {
      window.localStorage.setItem(name, JSON.stringify(data));
    } else if (['Number', 'String', 'Boolean'.indexOf(dataType)] !== -1) {
      window.localStorage.setItem(name, data);
    } else {
      this.errorTips('该类型不能用于本地存储');
    }    
  }

  // 取出本地存储的内容
  getStorage(name) {
    let data = window.localStorage.getItem(name);
    return data ? JSON.parse(data) : '';
  }

  // 删除本地存储
  removeStorage(name) {
    window.localStorage.removeItem(name);
  }

  // 类型判断
  checkedType(target) {
    //[Object Array].slice(8, -1) = Array
    return Object.prototype.toString.call(target).slice(8, -1)
  }
  
}






export default CommonUtil;
