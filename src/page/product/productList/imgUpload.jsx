/*
 * @Author: Guifen Shangguan 
 * @Date: 2021-04-04 20:01:05 
 * @Last Modified by: Guifen Shangguan
 * @Last Modified time: 2021-04-08 20:06:55
 */
import { Upload, Modal } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { useEffect, useState } from 'react';

import CommonUtil from 'util/common';

let _commonUtil = new CommonUtil();



function ImgUpload(props) {
  const [fileList, setFileList] = useState([]);
  const [previewImage, setPreviewImage] = useState('');
  const [previewTitle, setPreviewTitle] = useState('');
  const [previewVisible, setPreviewVisible] = useState(false);

  const loadInitFileList = (images) => {
    console.log(images)
    if(images.uri) {
      // console.log('kk')
      let imagesUri = images.uri ? images.uri : ''
      let imagesArr = imagesUri.split(',').map((uri, index) => {
        let file = {};
        file.uid = uri;
        file.name = 'image.png';
        file.status = 'done';
        file.url = props.images.urlHost + uri;
        return file;
      })
      setFileList(imagesArr)
    }
    
  }

  useEffect(() => {
    loadInitFileList(props.images)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.images])

  const getBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = error => reject(error);
    });
  }
  
  const handleCancel = () => {
    setPreviewVisible(false);
  };
  const handlePreview = async file => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }
    setPreviewImage(file.url || file.preview);
    setPreviewVisible(true);
    setPreviewTitle(file.name || file.url.substring(file.url.lastIndexOf('/') + 1))
  };

  const handleChange = ({fileList}) => {
    setFileList(fileList);
    if(fileList.length > 0 && fileList[0].status === 'error') {
      _commonUtil.errorTips('上传失败');
    } else {
      props.onGetImageDesc(fileList, 'init');
    }
  };

  const uploadButton = (
    <div>
      <PlusOutlined />
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );

  // http://admintest.happymmall.com
  return (
    <div>
      <Upload
          action="/manage/product/upload.do"
          method="post"
          enctype="multipart/form-data"
          name="upload_file"
          listType="picture-card"
          fileList={fileList}
          onPreview={handlePreview}
          onChange={handleChange}
        >
          {fileList.length >= 100 ? null : uploadButton}
        </Upload>
        <Modal
          visible={previewVisible}
          title={previewTitle}
          footer={null}
          onCancel={handleCancel}
        >
          <img alt={previewTitle} style={{ width: '100%' }} src={previewImage} />
        </Modal>
    </div>
  );
}

export default ImgUpload;
