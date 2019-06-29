import amendPassword from "../components/admin/amendPassword.vue"
import login from '../components/Login.vue'
import itemUpshelf from '../components/admin/itemUpshelf.vue'
import classify from '../components/admin/classify.vue'
import trademark from '../components/admin/trademark.vue'
import recycle from '../components/admin/recycle.vue'
import userManage from '../components/admin/userManage.vue'
import commodity from '../components/admin/commodity.vue'
import allindent from '../components/admin/allindent.vue'
import untreatedindent from '../components/admin/untreatedindent.vue'
import outstandingpayment from '../components/admin/outstandingpayment.vue'
import doneindent from '../components/admin/doneindent.vue'
import classification from '../components/admin/classification.vue'
import detailpage from '../components/admin/detailpage.vue'
import computer from '../components/admin/computer.vue'
import ipad from '../components/admin/ipad.vue'                   //ipad页面
import priceticket from '../components/admin/priceticket.vue'     //优惠券页面
import allindentxq from '../components/admin/allindentxq.vue'    //订单详情页面





const routes = [
    {path: '/',component: userManage},
    {path: '/login',component: login},
    {path:"/amendPassword",component:amendPassword},
    {path: '/itemUpshelf',component: itemUpshelf},
    {path: '/classify',component: classify},
    {path: '/trademark',component: trademark},
    {path: '/recycle',component: recycle,},
    {path: '/commodity',component: commodity},
    {path: '/allindent',component: allindent},
    {path: '/untreatedindent',component: untreatedindent},
    {path: '/outstandingpayment',component: outstandingpayment},
    {path: '/doneindent',component: doneindent},
    {path: '/classification/:id',name:'classification',component: classification},
    {path: '/detailpage/:id',name:'detailpage',component: detailpage},
    {path: '/computer/:id',name:'computer',component: computer},
    {path: '/ipad/:id',name:'ipad',component: ipad},
    {path: '/priceticket',name:'priceticket',component: priceticket},
    {path: '/allindentxq/:id',name:'allindentxq',component: allindentxq},
]


export default routes
