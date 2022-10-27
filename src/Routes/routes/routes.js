import { createBrowserRouter } from "react-router-dom";
import Blogs from "../../Components/Blogs/Blogs";
import Checkout from "../../Components/Checkout/Checkout";
import Courses from "../../Components/Courses/Courses";
import Details from "../../Components/Details/Details";
import FAQ from "../../Components/FAQ/FAQ";
import Home from "../../Components/Home/Home";
import Login from "../../Components/Login/Login";
import Register from "../../Components/Register/Register";
import ThankYou from "../../Components/Shared/ThankYou/ThankYou";
import Main from "../../Layout/Main";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            { path: "/home", element: <Home></Home> },
            {
                path: "/courses",
                loader: async () => fetch("http://localhost:5000/courses"),
                element: <Courses></Courses>
            },
            {
                path: "/courses/:cat_id",
                loader: async ({ params }) => fetch(`http://localhost:5000/categories/${params.cat_id}`),
                element: <Courses></Courses>
            },
            {
                path: "/courses/type/:type",
                loader: async ({ params }) => fetch(`http://localhost:5000/course-type/${params.type}`),
                element: <Courses></Courses>
            },
            {
                path: "/course-details/:id",
                loader: async ({ params }) => fetch(`http://localhost:5000/courses-details/${params.id}`),
                element: <Details></Details>
            },
            {
                path: "/checkout/:id",
                loader: async ({ params }) => fetch(`http://localhost:5000/courses-details/${params.id}`),
                element: <PrivateRoute><Checkout></Checkout></PrivateRoute>
            },
            {
                path: "/order-confirmed",
                element: <PrivateRoute><ThankYou></ThankYou></PrivateRoute>
            },
            { path: "/faq", element: <FAQ></FAQ> },
            { path: "/blogs", element: <Blogs></Blogs> },
            { path: "/login", element: <Login></Login> },
            { path: "/register", element: <Register></Register> },
        ]
    }
]);

export default router;