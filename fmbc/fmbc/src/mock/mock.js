import axios from 'axios'
import AxiosMockAdapter from 'axios-mock-adapter'
import Datas from './data/datas'
let newData=[]
const datas =Datas.data
const mock = new AxiosMockAdapter(axios)


const MockAdapter = () => {
    mock.onPost('/100125')
        .reply((config) => {
            console.log(config)
            const dataS = JSON.parse(config.data).message
            const prizeTabStatus=dataS.data.prizeTabStatus
            const pageIndex = dataS.page.pageIndex
            const pageSizes = dataS.page.pageSize
            const newdata = datas.slice((pageIndex - 1) * pageSizes, pageIndex * pageSizes)

            if(prizeTabStatus ==0){
                newData = datas.slice((pageIndex - 1)* pageSizes,pageIndex * pageSizes)
            }else{
                 for(let item of datas){
                    if(item.winningStatus === prizeTabStatus){
                        newData.push(item)
                    }
                }
                newData = newData.slice((pageIndex - 1)* pageSizes,pageIndex * pageSizes)
            }

            const olderdata={
                code: 0 ,
                command: '100125',
                data: {
                    data: newData
                },
                message: 'ok',
                page: {
                    count:pageSizes,
                    pageIndex:pageIndex,
                    pageSize:pageIndex,
                    total: datas.length
                },
                timestamp: new Date().getTime()
            }
            
            return new Promise((resolve, reject) => {
                resolve([200, olderdata])
            })
        })
}
export default MockAdapter