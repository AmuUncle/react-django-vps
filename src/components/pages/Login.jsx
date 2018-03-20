/**
 * Created by hao.cheng on 2017/4/16.
 */
import React from 'react';
import { Form, Icon, Input, Button, Checkbox, Row, Col } from 'antd';
import { notification } from 'antd';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchData, receiveData } from '@/action';
import avtar from "./avtar.png";
import { Link} from 'react-router-dom';
import Vcode from 'react-vcode';

const FormItem = Form.Item;

const openNotification = (message,description,icon) => {
  notification.open({
    message: message,
    description: description,
    icon: <Icon type={icon} style={{ color: '#108ee9' }} />,
  });
};

class Login extends React.Component {
      state = {
        code:"",
      };
    componentWillMount() {
        const { receiveData } = this.props;
        receiveData(null, 'auth');
    }
    componentWillReceiveProps(nextProps) {
        const { auth: nextAuth = {} } = nextProps;
        const { history } = this.props;
        if (undefined === nextAuth.data)
        {
            openNotification("Warning","登录失败，请检查用户名或密码。","frown-o");
            const { receiveData } = this.props;
            receiveData(null, 'auth');
        }
        if (nextAuth.data && nextAuth.data.uid) {   // 判断是否登陆
            localStorage.setItem('user', JSON.stringify(nextAuth.data));
            openNotification("Congratulations","登录成功","smile-circle");
            history.push('/');
        }
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
                const { fetchData } = this.props;
                fetchData({funcName: 'admin',params: values, stateName: 'auth'});
                }
        });
    };
    gitHub = () => {
        window.location.href = 'https://github.com/login/oauth/authorize?client_id=792cdcd244e98dcd2dee&redirect_uri=http://localhost:3006/&scope=user&state=reactAdmin';
    };

  compareToCode = (rule, value, callback) => {
    let code = this.state.code;
    if (value && value.toUpperCase() !== code) {
      callback('验证码不正确，不区分大小写!');
    } else {
      callback();
    }
  }

    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <div className="login">
                <div className="login-form" >
                    <div className="login-logo">
                        <img src={avtar} />
                    </div>
                    <Form onSubmit={this.handleSubmit} style={{maxWidth: '300px'}}>
                        <FormItem>
                            {getFieldDecorator('userName', {
                                rules: [{ required: true, message: '请输入用户名!' }],
                            })(
                                <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="管理员输入admin, 游客输入guest" />
                            )}
                        </FormItem>
                        <FormItem>
                            {getFieldDecorator('password', {
                                rules: [{ required: true, message: '请输入密码!' }],
                            })(
                                <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="管理员输入admin, 游客输入guest" />
                            )}
                        </FormItem>
                        <FormItem>
                           <Row gutter={8}>
                                <Col span={12}>
                            {getFieldDecorator('code', {
                                rules: [{ required: true, message: '请输入验证码!' }
                                , {
                                      validator: this.compareToCode,
                                    }],
                            })(
                                <Input prefix={<Icon type="key" style={{ fontSize: 13 }} />} placeholder="验证码" />
                            )}
                            </Col>
                            <Col span={12}>
                              <Vcode
                                  id='test'
                                  length={4}
                                  onChange={(v) => {this.setState({code:v})}}
                                  options={{ codes: [ 'A', 'B', 'C' , 'D', 'E' , 'F', 'G' , 'H', 'I' , 'J', 'K' , 'L',
                                  'M' , 'N', 'O' , 'P', 'Q' , 'R', 'S' , 'T', 'U' , 'V', 'W' , 'X', 'Y', 'Z'] }}
                                />
                            </Col>
                             </Row>
                        </FormItem>


                        <FormItem>
                            {getFieldDecorator('remember', {
                                valuePropName: 'checked',
                                initialValue: true,
                            })(
                                <Checkbox>记住我</Checkbox>
                            )}
                            <a className="login-form-forgot" href="" style={{float: 'right'}}>忘记密码</a>
                            <Button type="primary" htmlType="submit" className="login-form-button" style={{width: '100%'}}>
                                登录
                            </Button>
                            <p style={{display: 'flex', justifyContent: 'space-between'}}>
                                <Link to="/register">或 现在就去注册!</Link>
                                <a onClick={this.gitHub} ><Icon type="github" />(第三方登录)</a>
                            </p>
                        </FormItem>
                    </Form>
                </div>
            </div>

        );
    }
}

const mapStateToPorps = state => {
    const { auth } = state.httpData;
    return { auth };
};
const mapDispatchToProps = dispatch => ({
    fetchData: bindActionCreators(fetchData, dispatch),
    receiveData: bindActionCreators(receiveData, dispatch)
});


export default connect(mapStateToPorps, mapDispatchToProps)(Form.create()(Login));