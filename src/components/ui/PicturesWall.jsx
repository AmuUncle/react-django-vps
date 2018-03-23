/**
 * Created by hao.cheng on 2017/4/23.
 */
import React from 'react';
import BreadcrumbCustom from '../BreadcrumbCustom';

import { Upload, Icon, Modal, Button ,message} from 'antd';
const Dragger = Upload.Dragger;


function beforeUpload(file) {
  const isJPG = (file.type === 'image/jpeg' || file.type === 'image/png' || file.type === 'image/gif' || file.type === 'image/bmp');
  console.log(file.type);
  if (!isJPG) {
    message.error('你只允许上传jpeg/png/gif/bmp文件!');
  }
  const isLt10M = file.size / 1024 / 1024 < 10;
  if (!isLt10M) {
    message.error('不能上传超过 10MB!');
  }
  return isJPG && isLt10M;
}


class PicturesWall extends React.Component {
  state = {
    previewVisible: false,
    previewImage: '',
    fileList: [],
  };

  handleCancel = () => this.setState({ previewVisible: false })

  handlePreview = (file) => {
    this.setState({
      previewImage: file.url || file.thumbUrl,
      previewVisible: true,
    });
  }

  handleChange = ({ fileList }) => this.setState({ fileList })

  render() {
          const props = {
                      name: 'file',
                      accept:'image/*',
                      multiple: true,
                      listType:"picture",
                      action: 'http://23.106.155.65:8003/api/upload/',
                    };

    const { previewVisible, previewImage, fileList } = this.state;
    const uploadButton = (
            <p className="ant-upload-drag-icon">
              <Icon type="inbox" />
            </p>
    );
    return (
      <div >
          <Dragger {...props} fileList={fileList}
                    onPreview={this.handlePreview}
                     beforeUpload={beforeUpload}
                    onChange={this.handleChange}>
          {fileList.length >= 100 ? null : uploadButton}

            <p className="ant-upload-text">点击或者拖拽文件上传</p>
            <p className="ant-upload-hint">支持单个或批量上载</p>
          </Dragger>
        <Modal visible={previewVisible} footer={null} onCancel={this.handleCancel}>
          <img alt="example" style={{ width: '100%' }} src={previewImage} />
        </Modal>
      </div>
    );
  }
}

export default PicturesWall;
