import SearchBooks from "../component/Books/SearchBooks";
import About from "../Pages/About";
import BookAPICall from "../Pages/BookAPICall";
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
    },
     {
        path: "/search",
        exact: true,
        name:'Book Api',
        component: SearchBooks
    }
]

export default routes;