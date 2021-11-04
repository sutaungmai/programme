import React, { Component } from 'react'
import { Form,Input,Button, } from 'antd'
import 'antd/dist/antd.css';

class form extends Component {


    
    render() {
        return (
            <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 4 }}
      autoComplete="off"
    >
      <h1 style={{textAlign:'left'}}>Sign In</h1>
      <Form.Item
        label="Username"
        name="username"
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password />
      </Form.Item>



      <Form.Item wrapperCol={{ offset: 8, span: 3 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
        )
    }
}

export default form
