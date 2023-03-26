import Home from '@/pages/Home.vue'
import Login from '@/pages/Login.vue'
import Signup from '@/pages/Signup.vue'
import SocialSignupPage from "@/pages/SocialSignupPage.vue";
import Error from "@/pages/Error.vue"

import {createRouter, createWebHistory} from "vue-router";
import Profile from "@/pages/Profile.vue";

const routes = [
    {path: '/', component: Home},
    {path: '/login', component: Login},
    {path: '/signup', component: Signup},
    {path: '/error', component: Error},
    {path: '/signup/social-post', component: SocialSignupPage},
    {path: '/profile', component: Profile},
    {path: '/oauth2/redirect/signup', redirect: "/signup/social-post"},
    {
        path: '/oauth2/redirect/login', redirect: to => {
            if (to.query.error) {
                return "/error"
            } else if (to.query.email) {
                return "/profile"
            } else {
                return "/"
            }
        }
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;