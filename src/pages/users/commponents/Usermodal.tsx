import React, { useEffect} from 'react';
import { Modal,Form, Input } from 'antd';
const Usermodal = (props:any) => {
  const [form] = Form.useForm();
  console.log(props)
  const {isModalVisible,onFinish,handleCancel,data,formRe} = props
  const onOk = () => {
    form.submit()

  };
 
  const onFinishFailed=(errorInfo:any) =>{
    console.log('Failed:', errorInfo);
  }
  useEffect(() => {
     if(data ==undefined){
       form.resetFields()
     }else{
      form.setFieldsValue(data);
     }
  }, [data])
  useEffect(() => {
    if(props.formRe==true){
      form.resetFields()
    }
 }, [formRe])
  return (
    <>
      <Modal title="Basic Modal" 
             visible={isModalVisible} 
             onOk={onOk} 
             onCancel={handleCancel} 
             forceRender
      >
        <Form  name="nest-messages" 
               form={form}
               onFinish={onFinish}
               onFinishFailed={onFinishFailed}
        >
          <Form.Item name={'name'} label="Name">
            <Input />
          </Form.Item>
          <Form.Item name={'email'} label="郵箱">
            <Input />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};
export default Usermodal