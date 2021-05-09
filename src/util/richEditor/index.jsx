/*
 * @Author: Guifen Shangguan 
 * @Date: 2021-04-04 21:04:45 
 * @Last Modified by: Guifen Shangguan
 * @Last Modified time: 2021-04-06 19:00:50
 */
import { useRef, useEffect } from 'react';
import Simditor from 'simditor';
import 'simditor/styles/simditor.scss';

// 通用的富文本编辑器，依赖jquery
function RichEditor(props) {
  const textarea = useRef(null);

  const loadEditor = (element, detailValue) => {
    const editor = new Simditor({
      // eslint-disable-next-line no-undef
      textarea: $(element),
      placeholder: props.placeholder || '请输入内容',
      upload: {
        url: '/manage/product/richtext_img_upload.do',
        fileKey: 'upload_file'
      },
      pasteImage: true
    });

    // 获取初始数据
    if(detailValue) {
      editor.setValue(detailValue);
    }

    editor.on('valuechanged', () => {
      props.onEditorValueChange(editor.getValue())
    })
    return editor;
  }
  
  useEffect(() => {
    loadEditor(textarea.current, props.detail);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [textarea.current, props.detail])

  return (
    <div>
      <textarea ref={textarea}></textarea>
    </div>
  );
}

export default RichEditor;
