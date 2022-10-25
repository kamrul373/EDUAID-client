import { createBrowserRouter } from "react-router-dom";
import Blogs from "../../Components/Blogs/Blogs";
import Courses from "../../Components/Courses/Courses";
import FAQ from "../../Components/FAQ/FAQ";
import Home from "../../Components/Home/Home";
import Login from "../../Components/Login/Login";
import Register from "../../Components/Register/Register";
import Main from "../../Layout/Main";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            { path: "/", element: <Home></Home> },
            { path: "/home", element: <Home></Home> },
            { path: "/courses", element: <Courses></Courses> },
            { path: "/faq", element: <FAQ></FAQ> },
            { path: "/blogs", element: <Blogs></Blogs> },
            { path: "/login", element: <Login></Login> },
            { path: "/register", element: <Register></Register> },
        ]
    }
]);

export default router;