import PageContent from './components/PageContent.vue'
import AddItem from './components/AddItem.vue'
import Home from './components/Home.vue'
import Axios_BC from './components/Axios_BC.vue'
import FirebaseData from "./components/FirebaseData.vue";
import BubbleData from "./components/BubbleChart.vue"

export default[
    {path:'/list',component:PageContent},
    {path:'/',component:Home},
    {path:'/add',component:AddItem},
    { path: '/axios', component: Axios_BC},
    { path: '/data', component: FirebaseData},
    { path: '/bubble', component: BubbleData}

]