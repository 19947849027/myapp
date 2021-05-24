import React, { useState,FC, Dispatch } from 'react'
import { Table, Button, Space,Popconfirm, message } from 'antd';
import { connect ,useSelector,useDispatch} from 'umi';
import Usermodal from "./commponents/Usermodal"

const UserPage:FC = () => {
  const state:any = useSelector((dva: any) => dva);
  const dispatch:any = useDispatch();
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [record, setRecord] = useState<any>(undefined)
  const [formRe,setFormRe] = useState<boolean>(false)
  const columns:any = [
    {title: 'id',key: 'id' ,dataIndex:'id'},
    {title: 'Name',key: 'name',dataIndex:'name'},
    {title: '邮箱',key: 'email',dataIndex:'email'},
    {title: 'status',key: 'status',dataIndex:'status'},
    {title: '上传时间',key: 'update_time',dataIndex:'update_time'},
    {
      title: 'Action',
      key: 'x',
      render: (text:string, record:any) => (
        <Space size="middle">
          <a onClick={() =>eddClick(record)}>Edd</a>
          <Popconfirm
            title="是否刪除?"
            onConfirm={() =>delectClick(record)}
            onCancel={cancel}
            okText="Yes"
            cancelText="No"
          >
            <a>Delete</a>
          </Popconfirm>
          
        </Space>
      ),
    },
  ];
  const delectClick=(record:any)=> {
    let id:any= record.id
    dispatch({
      type:"users/delect",
      id
    })
  }
  
  const cancel=(e:any) => {
    message.error('Click on No');
  }
  const eddClick =(record:any) =>{
    setRecord(record)
    setIsModalVisible(true)
  }
  const handleCancel =() =>{
    setFormRe(true)
    setIsModalVisible(false)
  }
  const onFinish =(values:any) =>{
    let id=0;
    if(record){
       id=record.id;
    }
    if(id){
      dispatch({
        type:'users/edit',
        payload:{
          id,
          values
        }
      })
    }else{
      dispatch({
        type:'users/add',
        payload:{
          values
        }
      })
    }
    setIsModalVisible(false)
    setFormRe(false)
    setFormRe(true)

  }
  const addClick =() =>{
    setFormRe(false)
    setRecord(undefined)
    setIsModalVisible(true)

  }
  return (
    <div>
    <Button type="primary" onClick={() =>addClick()}>添加</Button>
    <Table columns={columns} 
           dataSource={state.users.data}
           rowKey="id"
           loading={state.loading.global}
    />
    
    <Usermodal 
      isModalVisible={isModalVisible} 
      handleCancel={() =>handleCancel()} 
      onFinish={onFinish}
      data={record}
      formRe={formRe}
    />
    </div>
  )
}
export default UserPage