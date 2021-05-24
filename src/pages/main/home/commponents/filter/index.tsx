import React, { useEffect } from 'react'
import { Form, Input, InputNumber, Button } from 'antd'

const SignFilter = (props:any) => {
  useEffect(() => {
    console.log('filter props',props)
  }, [])
  const onFinish = (values: any) => {
    console.log(values);
    props.close()
  };
  return (
    <Form name="nest-messages" onFinish={(values) =>onFinish(values)}>
      <Form.Item name={['user', 'name']} label="Name">
        <Input />
      </Form.Item>
      <Form.Item name={['user', 'email']} label="Email" rules={[{ type: 'email' }]}>
        <Input />
      </Form.Item>
      <Form.Item name={['user', 'age']} label="Age" rules={[{ type: 'number', min: 0, max: 99 }]}>
        <InputNumber />
      </Form.Item>
      <Form.Item name={['user', 'website']} label="Website">
        <Input />
      </Form.Item>
      <Form.Item name={['user', 'introduction']} label="Introduction">
        <Input.TextArea />
      </Form.Item>
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form>
  )
}
export default SignFilter
