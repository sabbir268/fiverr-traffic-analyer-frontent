import Vue from 'vue';
import Router from 'vue-router';
import Landing from './pages/Landing.vue';
import Blog from './pages/Blog.vue';
import Details from './pages/Details.vue';
import Login from './pages/Login.vue';
import MainNavbar from './layout/MainNavbar.vue';
import MainFooter from './layout/MainFooter.vue';

Vue.use(Router);

export default new Router({
    linkExactActiveClass: 'active',
    routes: [{
            path: '/',
            name: 'landing',
            components: { default: Landing, header: MainNavbar, footer: MainFooter },
            props: {
                header: { colorOnScroll: 400 },
                footer: { backgroundColor: 'black' }
            }
        },
        {
            path: '/blog',
            name: 'blog',
            components: { default: Blog, header: MainNavbar, footer: MainFooter },
            props: {
                header: { colorOnScroll: 400 },
                footer: { backgroundColor: 'black' }
            }
        },
        {
            path: '/details',
            name: 'details',
            components: { default: Details, header: MainNavbar, footer: MainFooter },
            props: {
                header: { colorOnScroll: 400 },
                footer: { backgroundColor: 'black' }
            }
        },
    ],
    scrollBehavior: to => {
        if (to.hash) {
            return { selector: to.hash };
        } else {
            return { x: 0, y: 0 };
        }
    }
});