import React,{useState } from 'react'
import { Form, Input, InputNumber, Button,Modal } from 'antd';
export const PopPage = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const onFinish = (values: any) => {
    console.log(values);
  };
  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  return (
    <Modal title="Basic Modal" visible={isModalVisible} onCancel={handleCancel}>
      <Form  name="nest-messages" onFinish={(values) =>onFinish(values)}>
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
    </Modal>
    
  )
}
