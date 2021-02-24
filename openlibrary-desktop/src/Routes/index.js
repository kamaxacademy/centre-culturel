import About from "../Pages/About";
import Contact from "../Pages/Contact";
import Home from "../Pages/Home";

const routes = [
    {
        path: "/",
        exact: true,
        name:'Home',
        component: Home
    },
    {
        path: "/contact",
        exact: true,
        name:'Contact',
        component: Contact
    },

     {
        path: "/about",
        exact: true,
        name:'About',
        component: About
    }
]

export default routes;