import request, { extend } from 'umi-request';
import { message } from 'antd';

const errorHandler = function(error:any) {
  const codeMap = {
    '021': 'An error has occurred',
    '022': 'It’s a big mistake,',
    // ....
  };
  if (error.response) {
    console.log(error.response.status);
    if(error.response>400){
      message.error(error.data.message?error.data.message:error.data)
    }
  } else {
    message.error("Network Error.")
  }
};
const extendRequest = extend({ errorHandler });

export const getRemotList = async (params:any) =>{
  return  extendRequest('http://public-api-v1.aspirantzhang.com/users', {
            method: 'get',
          })
            .then((respost) =>{
              return respost
            })
            .catch(()=> {
             return false
            });
 
}

export const editRecord = async ({id,values}:any) =>{
  return  extendRequest(`http://public-api-v1.aspirantzhang.com/users/${id}`, {
            method: 'put',
            data: values,
          })
          .then(() =>{
            return true
          })
          .catch(()=> {
           return false
          });
}

export const delectRecord = async (id:any) =>{
  return  extendRequest(`http://public-api-v1.aspirantzhang.com/users/${id}`, {
            method: 'put',
          })
          .then(() =>{
            return true
          })
          .catch(()=> {
           return false
          });
 
}

export const addRecord = async (values:any) =>{
  return  request("http://public-api-v1.aspirantzhang.com/users", {
            method: 'put',
            data:values
          })
          .then(() =>{
            return true
          })
          .catch(()=> {
           return false
          });
 
}