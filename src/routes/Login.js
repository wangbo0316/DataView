import { Form, Icon, Input, Button, Row,Col } from 'antd';
import styles from './Login.css'
import Cookies from 'js-cookie';


const FormItem = Form.Item;

class NormalLoginForm extends React.Component {

  state = {
    infomations:'',
  };

  handleSubmit = (e) => {
    const {history} = this.props
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        const userName = values['userName']
        const password = values['password']
        if(userName==='admin'&&password==='111111'){
          Cookies.set('isLogin',true)
          history.push('/')
        }
        else {
          this.setState({
            infomations:'*用户名或密码错误,请重新输入!',
          })
        }
      }
    });
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className={styles.contain}>
        <Row>
          <Col offset={17} span={4} style={{marginTop:'23rem'}}>
            <Form onSubmit={this.handleSubmit} className={styles["login-form"]}>
              <FormItem>
                <h1 style={{color:'#ffffff'}}>请先登录</h1>
                <p style={{fontFamily:'微软雅黑',color:'red'}}>{this.state.infomations}</p>
              </FormItem>
              <FormItem>
                {getFieldDecorator('userName', {
                  rules: [{ required: true, message: '请输入账号!' }],
                })(
                  <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="账号" />
                )}
              </FormItem>
              <FormItem>
                {getFieldDecorator('password', {
                  rules: [{ required: true, message: '请输入密码!' }],
                })(
                  <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="Password" placeholder="密码" />
                )}
              </FormItem>
              <FormItem>


                <Button type="primary" htmlType="submit" className={styles["login-form-button"]}>
                  登  <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>   录
                </Button>

              </FormItem>
            </Form>
          </Col>
        </Row>
      </div>
    );
  }
}

const WrappedNormalLoginForm = Form.create()(NormalLoginForm);
export default WrappedNormalLoginForm
