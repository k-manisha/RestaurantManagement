import HomeComponent from './components/HomeComponent.vue';
import SignUpComponent from './components/SignUpComponent.vue';
import LoginComponent from './components/LoginComponent.vue';
import AddComponent from './components/AddComponent.vue';
import UpdateComponent from './components/UpdateComponent.vue';
import { createRouter,createWebHistory } from 'vue-router';

const routes = [
    {
        name: 'Home',
        component: HomeComponent,
        path:'/'
    },
    {
        name: 'SignUp',
        component: SignUpComponent,
        path:'/sign-up'
    },
    {
        name: 'Login',
        component: LoginComponent,
        path:'/login'
    },
    {
        name: 'Add',
        component: AddComponent,
        path:'/add'
    },
    {
        name: 'Update',
        component: UpdateComponent,
        path:'/update/:id'
    }
];

const router = createRouter({
   history: createWebHistory(),
    routes
});
export default router;