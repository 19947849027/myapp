import { Effect, Reducer, Subscription } from 'umi';
import {getRemotList,editRecord,delectRecord,addRecord} from './service'
import { message } from 'antd';

interface singleUserType{
  create_time: string;
  email:string;
  id:number;
  name: string;
  status: number;
  update_time:string;
  }
interface UserState{
  data:singleUserType[];
  meta:{
    page: number;
    per_page: number;
    total:number;
  }
}
export interface IndexModelType {
  namespace: 'users';
  state: UserState;
  effects: {
    getRemot: Effect;
    edit:Effect;
    delect:Effect
    add:Effect

  };
  reducers: {
    getList: Reducer;
  };
  subscriptions: { setup: Subscription };
}
const UserModel:IndexModelType ={
  namespace:'users',
  state:{
    data:[],
    meta:{
    page: 0,
    per_page: 5,
    total: 10
    }
  },
  effects:{
    *getRemot(acction,{put,call}){
      const data = yield call (getRemotList)
      if(data){
        yield put({
          type:"getList",
          payload:data
        });
      }
      
    },
    *edit({payload:{id,values}},{put,call}){
      const data = yield call (editRecord,{id,values})
      if(data){
        message.success('Eddit successfull')
        yield put({
          type:"getRemot"
        }) 
      }else{
        message.error('Edit failed.')
      }
      
    },
    *add({payload:{values}},{put,call}){
     const data= yield call (addRecord,values)
     if(data){
      message.success('add successfull')
      yield put({
        type:"getRemot"
      }) 
    }else{
      message.error('add failed.')
    }
    },
    *delect(payload,{put,call}){
      const data = yield call(delectRecord,payload.id)
      if(data){
      message.success('delect successfull')
      yield put({
        type:"getRemot"
      }) 
      }else{
        message.error('delect failed.')
      }
   }
  },
  reducers:{
    getList(state, {payload}){
      console.log(payload)
      return payload
    }
  },
  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname }) => {
        if (pathname === '/users') {
          dispatch({
            type: 'getRemot',
          });
        }
      });
    },
  },
}
export default UserModel