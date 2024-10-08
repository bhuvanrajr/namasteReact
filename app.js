import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import Body from "./Components/Body";
import Footer from "./Components/Footer";
import Error from "./Components/Error";
import ContactUs from "./Components/ContactUs.js";
import RestaurantDetails from "./Components/RestaurantDetails";
import {createBrowserRouter, RouterProvider, Outlet} from "react-router-dom";
import { lazy, Suspense, useContext, useState } from "react";
import { UserContext } from "./Utils/UserContext.js";
import AppStore from "./Utils/AppStore.js";
import { Provider } from "react-redux";
import Cart from "./Components/Cart.js";

const About = lazy(()=> import("./Components/About"));
const Layout = () =>
    {
        const userName = useContext(UserContext);
        const [userInfo, setUserInfo] = useState(userName);
        return(
            <Provider store={AppStore}>
                <UserContext.Provider value = {{userName: userInfo, setUserInfo}}>
                    <div>
                        <Header/>
                        <Outlet />
                        <Footer/>
                    </div>
                </UserContext.Provider>
            </Provider>
            );
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
            },
            {
                path:"/cart",
                element : <Cart />
            }
        ]
    },
]
);

var root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={routConfig} />);