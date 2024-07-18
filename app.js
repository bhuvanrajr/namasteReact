import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import Body from "./Components/Body";
import Footer from "./Components/Footer";
import Error from "./Components/Error";
import ContactUs from "./Components/ContactUs.js";
//import About from "./Components/About";
import RestaurantDetails from "./Components/RestaurantDetails";
import {createBrowserRouter, RouterProvider, Outlet} from "react-router-dom";
import { lazy, Suspense } from "react";

const About = lazy(()=> import("./Components/About"));
const Layout = () =>
    {
        return(<div>
            <Header/>
            <Outlet />
            <Footer/>
        </div>);
    }

const routConfig = createBrowserRouter(
[
    {
        path:"/",
        element:<Layout/>,
        errorElement: <Error />,
        children:[
            {
                path:"/about",
                element:<Suspense fallback={<h1>I am loading!</h1>}><About/></Suspense>
            },
            {
                path:"/",
                element:<Body/>
            },
            {
                path:"/contact",
                element:<ContactUs/>
            },
            {
                path:"/restInfo/:restId",
                element:<RestaurantDetails/>
            }
        ]
    },
]
);

var root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={routConfig} />);