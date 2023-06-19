import HomePage from './components/HomePage.vue'
import SignUp from './components/SignUp.vue'
import UserLogin from './components/UserLogin.vue'
import AddRestaurant from './components/AddRestaurant.vue'
import UpdateRestaurant from './components/UpdateRestaurant.vue'
import UpdateForm from './components/UpdateForm.vue'
import { createRouter, createWebHistory } from 'vue-router'

const routes=[
    {
        name:'Home',
        component:HomePage,
        path:'/'
    },
    {
        name:'SingUp',
        component:SignUp,
        path:'/signup'
    },
    {
        name:'Login',
        component:UserLogin,
        path:'/login'

    },
    {
        name:'AddRestaurant',
        component:AddRestaurant,
        path:'/add_restaurant'

    },
    {
        name:'UpdateRestaurant',
        component:UpdateRestaurant,
        path:'/update_restaurant'

    },
    {
        name:'UpdateForm',
        component:UpdateForm,
        path:'/update/:id'

    }

]
const router = createRouter({
    history:createWebHistory(),
    routes
})
export default router