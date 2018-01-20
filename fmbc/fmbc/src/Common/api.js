import axios from 'axios'

export const getList = (url,opts)=>{
    return axios.get(url,opts)
    .then((res)=>{
        return res
    })
    .catch((e)=>{
        throw Error(e)
    })
}
