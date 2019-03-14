import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)
import Sho from "@/components/commons/pages/Shopping/Sho"

export default new Router({
  routes: [
   {path:"/",redirect:"/shopping"},
   {path:"/shopping",component:Sho},
  
  //  {path:"*",redirect:"/notfound"},
  ]
})
