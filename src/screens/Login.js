import React from 'react';
import { Input, Button, Breadcrumb, Form, Checkbox } from 'antd';
import { ROUTES, itemRender } from '../constants/Routing_Register';

const Login = () => {
  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <div className="container register">
      <Breadcrumb itemRender={itemRender} routes={ROUTES} className="register__breadcrumb" />
      <h1>CUSTOMER LOGIN</h1>
      <div className=" register__Loginform">
        <Form
          layout={'vertical'}
          name="basic"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <h3>Registered Customers</h3>
          <p>If you have an account, sign in with your email address.</p>
          <Form.Item
            label="Email"
            name="email"
            rules={[
              {
                required: true,
                message: 'Please input your email!',
              },
            ]}
          >
            <Input  className="register__Loginform--input" placeholder="Enter your email..." />
          </Form.Item>
          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: 'Please input your password!',
              },
            ]}
          >
            <Input.Password className="register__Loginform--input"  placeholder="Enter your password..." />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Sign In
            </Button>
            <a>Forgot Your Password?</a>
          </Form.Item>
        </Form>
      </div>
      <div className=" register__Linkform">
        <Form>
          <h3>New Customer?</h3>
          <Form.Item>
            <p>Creating an account has many benefits:</p>
          </Form.Item>
          <Form.Item>
            <li>• Check out faster</li>
            <li>• Keep more than one address</li>
            <li>• Track orders and more</li>
          </Form.Item>
          <Form.Item>
            <Button type="primary">Create An Account</Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Login;
