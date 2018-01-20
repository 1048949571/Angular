import request from '../utils/request'


export const getList = ()=>{
   return request('http://localhost:3000/api/JD')
    .then(data=>{return data})
    .catch(e=>{
        throw Error(e)
    })
}