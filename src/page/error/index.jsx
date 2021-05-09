/*
 * @Author: Guifen Shangguan 
 * @Date: 2021-04-12 16:12:04 
 * @Last Modified by: Guifen Shangguan
 * @Last Modified time: 2021-05-09 18:48:34
 */
import React, { PureComponent } from 'react';
import { Result, Button, Typography } from 'antd';
import { Link } from 'react-router-dom';
import _ from 'lodash';

const { Paragraph } = Typography;

//页面错误类型枚举
const ERROR_ENUM = {
  LOAD_FAIL: 'LOAD_FAIL',
  RELOADING: 'RELOADING'
}
 
class MyErrorBoundary extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { hasError: false, errorText: '' };
    this.clearError = this.clearError.bind(this);
  }

  static getDerivedStateFromError(error) {
    // 更新 state 使下一次渲染可以显降级 UI
    return { hasError: true, errorText: JSON.stringify(error) };
  }

  componentDidCatch(error, errorInfo) {
    this.handleError(error, errorInfo);
  }

  handleError = (error, errorInfo) => {
    this.setData({hasError: true})
    this.handleLoadingChunkError(error)
  }
  
  handleLoadingChunkError = (error, errorInfo) => {
    //页面浏览期间重新发布，会出现浏览器缓存文件名和服务器文件名不一致，导致下载js失败白屏的问题
    const loadFailed = new RegExp(/Loading chunk (\d)+ failed/g)
    if (error && error.message && error.message.match(loadFailed)) {
      this.setData({errorType: ERROR_ENUM.RELOADING})
      let loadingChunk = sessionStorage.getItem('loadingChunk')
      loadingChunk = _.isNumber(loadingChunk) ? loadingChunk + 1 : 1
      if (loadingChunk > 2) {
        this.setData({errorType: ERROR_ENUM.LOAD_FAIL})
        //当前流程结束，重置loadingChunk
        sessionStorage.setItem('loadingChunk', 0)
      } else {
        sessionStorage.setItem('loadingChunk', loadingChunk)
        window.location.reload()
      }
    }
  }
  clearError () {
    this.setState({
      hasError: false,
      errorText: '',
    });
  }

  render() {
    const { hasError, errorText } = this.state;
    const { children } = this.props;
    if (hasError) {
      // 你可以渲染任何自定义的降级  UI
      return (
        <Result
          status="error"
          title="页面出现错误"
          subTitle="组件渲染时出现的错误"
          extra={
            <Link to="/">
              <Button onClick={this.clearError} type="primary">忽略错误，返回首页</Button>
            </Link>
          }
        >
          <div className="desc">
            <Paragraph>{errorText}</Paragraph>
          </div>
        </Result>
      );
    }
    return children;
  }
}


export default MyErrorBoundary;