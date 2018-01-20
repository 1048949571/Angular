import routers from './router'
import router from './router';
export const routermap = {
    NAV:[
        {
            to:'/Home',
            text:'首页'
        },
        {
            to:'/Collection',
            text:'Coll'
        },
        {
            to:'/My',
            text:'个人'
        }
        
    ],
    ROUTE:[
        {
            path:"/Home",
            component:routers.Home
        },
        {
            path:"/Collection",
            component:routers.Collection
        },
        {
            path:"/My",
            component:routers.My
        },
        {
            path:"/Details:id",
            component:routers.Details
        },
        {
            path:"/user:order",
            component:routers.Tab
        }
    ]
}