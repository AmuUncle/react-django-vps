import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import avtar from "./avtar.png";
import { fetchData, receiveData } from '@/action';
import { Modal } from 'antd';
import { notification ,Form, Input, Tooltip, Icon, Cascader, Select, Row, Col, Checkbox, Button, AutoComplete } from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;
const AutoCompleteOption = AutoComplete.Option;

const residences = [{
  value: 'zhejiang',
  label: 'Zhejiang',
  children: [{
    value: 'hangzhou',
    label: 'Hangzhou',
    children: [{
      value: 'xihu',
      label: 'West Lake',
    }],
  }],
}, {
  value: 'jiangsu',
  label: 'Jiangsu',
  children: [{
    value: 'nanjing',
    label: 'Nanjing',
    children: [{
      value: 'zhonghuamen',
      label: 'Zhong Hua Men',
    }],
  }],
}];

function info() {
  Modal.info({
    title: '服务条款',
    okText:'阅读完毕',
    content: (
      <div>
<p className="color:#333333;font-family:宋体, &quot;font-size:16px;text-indent:32px;">
	在注册前，敬请您阅读以下内容，在进行注册程序过程中点击“同意”按钮即表示用户完全接受本协议项下的全部条款。
</p>
<p className="color:#333333;font-family:宋体, &quot;font-size:16px;text-indent:32px;">
	第一条 会员资格
</p>
<p className="color:#333333;font-family:宋体, &quot;font-size:16px;text-indent:32px;">
	在您承诺完全同意本服务条款并在<strong>阿木大叔</strong>网站完成注册程序后，即可成为本网站会员，享受<strong>阿木大叔</strong>网站为您提供的服务。如用户拒绝支付该项费用，则不能使用相关的网络服务。
</p>
<p className="color:#333333;font-family:宋体, &quot;font-size:16px;text-indent:32px;">
	第二条 会员权限
</p>
<p className="color:#333333;font-family:宋体, &quot;font-size:16px;text-indent:32px;">
	1、会员须交纳会员费才能享有本网站提供的服务，可参阅会员收费标准及服务内容表；
</p>
<p className="color:#333333;font-family:宋体, &quot;font-size:16px;text-indent:32px;">
	2、任何会员均有义务遵守本规定及<a href="http://china.findlaw.cn/info/hy/fanben/qita/">其它</a>网络服务的协议、规定、程序及惯例。
</p>
<p className="color:#333333;font-family:宋体, &quot;font-size:16px;text-indent:32px;">
	第三条 会员资料
</p>
<p className="color:#333333;font-family:宋体, &quot;font-size:16px;text-indent:32px;">
	1、为了使我们能够更好地为会员提供服务，请您提供详尽准确的个人资料，如更改请及时更新，提供虚假资料所造成的后果由会员承担；
</p>
<p className="color:#333333;font-family:宋体, &quot;font-size:16px;text-indent:32px;">
	2、会员有责任保管好自己的注册密码并定期修改避免造成损失，由于会员疏忽所造成的损失由会员承担。用户应当对以其用户帐号进行的所有活动和事件负法律责任。
</p>
<p className="color:#333333;font-family:宋体, &quot;font-size:16px;text-indent:32px;">
	第四条 会员资格的取消
</p>
<p className="color:#333333;font-family:宋体, &quot;font-size:16px;text-indent:32px;">
	如发现任何会员有以下故意行为之一，本网保留取消其使用服务的权利，并无需做出任何补偿；
</p>
<p className="color:#333333;font-family:宋体, &quot;font-size:16px;text-indent:32px;">
	1、可能造成本网站全部或局部的服务受影响，或危害本网站运行；
</p>
<p className="color:#333333;font-family:宋体, &quot;font-size:16px;text-indent:32px;">
	2、以任何欺诈行为获得会员资格；
</p>
<p className="color:#333333;font-family:宋体, &quot;font-size:16px;text-indent:32px;">
	3、在本网站内从事非法商业行为，发布涉及敏感政治、宗教、色情或其它违反有关国家法律和政府法规的文字、图片等信息；
</p>
<p className="color:#333333;font-family:宋体, &quot;font-size:16px;text-indent:32px;">
	4、以任何非法目的而使用网络服务系统；
</p>
<p className="color:#333333;font-family:宋体, &quot;font-size:16px;text-indent:32px;">
	第五条 服务商的权利
</p>
<p className="color:#333333;font-family:宋体, &quot;font-size:16px;text-indent:32px;">
	1、有权审核、接受或拒绝会员的入会申请，有权撤销或停止会员的全部或部分服务内容；
</p>
<p className="color:#333333;font-family:宋体, &quot;font-size:16px;text-indent:32px;">
	2、有权修订会员的权利和义务，有权修改或调整本网站的服务内容；
</p>
<p className="color:#333333;font-family:宋体, &quot;font-size:16px;text-indent:32px;">
	3、有权将修订的会员的权利和义务以E-mail形式通知会员，会员收到通知后仍继续使用本网站服务者即表示会员同意并遵守新修订内容。
</p>
<p className="color:#333333;font-family:宋体, &quot;font-size:16px;text-indent:32px;">
	4、本网提供的服务仅供会员独立使用，未经本网授权，会员不得将会员号授予或转移给第三方。会员如果有违此例，本网有权向客户追索商业损失并保留追究法律责任的权利。
</p>
<p className="color:#333333;font-family:宋体, &quot;font-size:16px;text-indent:32px;">
	第六条 服务商的义务
</p>
<p className="color:#333333;font-family:宋体, &quot;font-size:16px;text-indent:32px;">
	1、认真做好本网站所涉及的网络及通信系统的技术维护工作，保证本网站的畅通和高效；
</p>
<p className="color:#333333;font-family:宋体, &quot;font-size:16px;text-indent:32px;">
	2、除不可抗拒的因素导致本网站临时停止或短时间停止服务以外，乙方如需停止本网站的全部或部分服务时，须提前在本网站上发布通知通告会员。
</p>
<p className="color:#333333;font-family:宋体, &quot;font-size:16px;text-indent:32px;">
	3、如本网站因系统维护或升级等原因需暂停服务，将事先通过主页、电子邮件等方式公告会员；
</p>
<p className="color:#333333;font-family:宋体, &quot;font-size:16px;text-indent:32px;">
	4、因不可抗力而使本网站服务暂停，所导致会员任何实际或潜在的损失，本网不做任何补偿；
</p>
<p className="color:#333333;font-family:宋体, &quot;font-size:16px;text-indent:32px;">
	5、本网不承担会员因遗失密码而受到的一切损失。
</p>
<p className="color:#333333;font-family:宋体, &quot;font-size:16px;text-indent:32px;">
	6、本网仅提供相关的网络服务，除此之外与相关网络服务有关的设备（如电脑、调制解调器及其他与接入互联网有关的装置）及所需的费用（如为接入互联网而支付的电话费及上网费）均应由用户自行负担。
</p>
<p className="color:#333333;font-family:宋体, &quot;font-size:16px;text-indent:32px;">
	第七条 附则
</p>
<p className="color:#333333;font-family:宋体, &quot;font-size:16px;text-indent:32px;">
	1、以上规定的范围仅限于<strong>阿木大叔</strong>网站；
</p>
<p className="color:#333333;font-family:宋体, &quot;font-size:16px;text-indent:32px;">
	2、本网会员因违反以上规定而触犯有关法律法规，一切后果自负。
</p>
<p className="color:#333333;font-family:宋体, &quot;font-size:16px;text-indent:32px;">
	3、本规则未涉及之问题参见有关法律法规，当本规定与有关法律法规冲突时，以相应的法律法规为准。在本条款规定范围内，<strong>阿木大叔</strong>网站拥有最终解释权。
</p>
<div>
	<br />
</div>
      </div>
    ),
    onOk() {},
  });
}

function success() {
  Modal.success({
    title: 'This is a success message',
    content: 'some messages...some messages...',
  });
}

function error() {
  Modal.error({
    title: 'This is an error message',
    content: 'some messages...some messages...',
  });
}

function warning() {
  Modal.warning({
    title: 'This is a warning message',
    content: 'some messages...some messages...',
  });
}

const openNotification = (message,description,icon) => {
  notification.open({
    message: message,
    description: description,
    icon: <Icon type={icon} style={{ color: '#108ee9' }} />,
  });
};

class RegistrationForm extends React.Component {
  state = {
    confirmDirty: false,
    autoCompleteResult: [],
  };
  componentWillMount() {
        const { receiveData } = this.props;
        receiveData(null, 'reguser');
    }
    componentWillReceiveProps(nextProps) {
        const { reguser: nextAuth = {} } = nextProps;
        const { history } = this.props;
        if (undefined === nextAuth.data)
        {
            openNotification("Warning","注册失败，请检查用户名或密码。","frown-o");
        }
        if (nextAuth.data && nextAuth.data.reasoncode === 0) {
            openNotification("Congratulations","注册成功","smile-circle");
            history.push('/login');
        }
        else if (nextAuth.data && nextAuth.data.reasoncode === 1) {
            openNotification("Congratulations","注册失败，用户已存在！","smile-circle");
            const { receiveData } = this.props;
            receiveData(null, 'reguser');
        }
        else if (nextAuth.data && nextAuth.data.reasoncode === -1) {
            openNotification("Congratulations","注册失败，用户或密码错误！","smile-circle");
            const { receiveData } = this.props;
            receiveData(null, 'reguser');
        }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        //{Nickname: "23", prefix: "86", password: "123", confirm: "123", agreement: true}
        console.log('Received values of form: ', values);
        if (values.agreement)
        {
            const { fetchData } = this.props;
            console.log('register : ', values);
            fetchData({funcName: 'register',params: values, stateName: 'reguser'});
        }
        else{
            openNotification("Warning","注册失败，请接受许可条款。","frown-o");
        }
      }
    });
  }
  handleConfirmBlur = (e) => {
    const value = e.target.value;
    this.setState({ confirmDirty: this.state.confirmDirty || !!value });
  }
  compareToFirstPassword = (rule, value, callback) => {
    const form = this.props.form;
    if (value && value !== form.getFieldValue('password')) {
      callback('两次密码输入的不同，请确认后再次输入!');
    } else {
      callback();
    }
  }
  validateToNextPassword = (rule, value, callback) => {
    const form = this.props.form;
    if (value && this.state.confirmDirty) {
      form.validateFields(['confirm'], { force: true });
    }
    callback();
  }
  handleWebsiteChange = (value) => {
    let autoCompleteResult;
    if (!value) {
      autoCompleteResult = [];
    } else {
      autoCompleteResult = ['.com', '.org', '.net'].map(domain => `${value}${domain}`);
    }
    this.setState({ autoCompleteResult });
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    const { autoCompleteResult } = this.state;

    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
      },
    };
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0,
        },
        sm: {
          span: 16,
          offset: 8,
        },
      },
    };
    const prefixSelector = getFieldDecorator('prefix', {
      initialValue: '86',
    })(
      <Select style={{ width: 70 }}>
        <Option value="86">+86</Option>
        <Option value="87">+87</Option>
      </Select>
    );

    const websiteOptions = autoCompleteResult.map(website => (
      <AutoCompleteOption key={website}>{website}</AutoCompleteOption>
    ));

    return (
    <div className="register">
      <div className="register-form" >
          <div className="register-logo">
                        <img src={avtar} />
          </div>
      <Form onSubmit={this.handleSubmit}>
         <FormItem
          {...formItemLayout}
          label={(
            <span>
              用户名&nbsp;
              <Tooltip title="What do you want others to call you?">
                <Icon type="question-circle-o" />
              </Tooltip>
            </span>
          )}
        >
          {getFieldDecorator('userName', {
            rules: [{ required: true, message: '请输入您的用户名!', whitespace: true }],
          })(
            <Input />
          )}
        </FormItem>

        <FormItem
          {...formItemLayout}
          label="密码"
        >
          {getFieldDecorator('password', {
            rules: [{
              required: true, message: '请输入您的密码!',
            }, {
              validator: this.validateToNextPassword,
            }],
          })(
            <Input type="password" />
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="确认密码"
        >
          {getFieldDecorator('confirm', {
            rules: [{
              required: true, message: '请再次输入您的密码!',
            }, {
              validator: this.compareToFirstPassword,
            }],
          })(
            <Input type="password" onBlur={this.handleConfirmBlur} />
          )}
        </FormItem>

        <FormItem {...tailFormItemLayout}>
          {getFieldDecorator('agreement', {
            valuePropName: 'checked',
          })(
            <div><Checkbox>我已阅读  </Checkbox> <a onClick={info}>许可条款</a></div>
          )}
        </FormItem>
        <FormItem {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit">Register</Button>
        </FormItem>
      </Form>
      </div>
      </div>
    );
  }
}



const mapStateToPorps = state => {
    const { reguser } = state.httpData;
    return { reguser };
};
const mapDispatchToProps = dispatch => ({
    fetchData: bindActionCreators(fetchData, dispatch),
    receiveData: bindActionCreators(receiveData, dispatch)
});

export default connect(mapStateToPorps, mapDispatchToProps)(Form.create()(RegistrationForm));