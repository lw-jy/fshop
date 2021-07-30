import Vue from "vue"
import VueRouter from 'vue-router'
// import { component } from "vue/types/umd"

import Msite from '../pages/Msite'
import Order from '../pages/Order'
import Profile from '../pages/Profile'
import Search from '../pages/Search'
import Login from '../pages/Login'

Vue.use(VueRouter)

export default new VueRouter({
    routes:[
        {
            path:'/',
            redirect:'/msite',
            meta:{
                showFooter:true
            }
        },
        {
            path:'/msite',
            component:Msite,
            meta:{
                showFooter:true
            }
        },
        {
            path:'/order',
            component:Order,
            meta:{
                showFooter:true
            }
        },
        {
            path:'/profile',
            component:Profile,
            meta:{
                showFooter:true
            }
        },
        {
            path:'/search',
            component:Search,
            meta:{
                showFooter:true
            }
        },
        {
            path:'/login',
            component:Login
        },
    ]
})