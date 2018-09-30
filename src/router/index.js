import Vue from 'vue'
import Router from 'vue-router'
import hello1 from '@/components/HelloWorld'
import dashboard from '@/components/dashboard'
import child from "@/components/child.vue"
Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: 'HelloWorld',
            component: hello1
        },
        {
            path: '/dashboard',
            component: dashboard,
            children: [
                { path: '/dashboard/child', component: child }
            ]
        }
    ]
})