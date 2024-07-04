import { createBrowserRouter, RouterProvider } from "react";
import AuthProvider from "./AuthProvider";
import PrivateRoutes from ".PrivateRoutes";
import Login from "../pages/Login";
import Singnup from "..pages/home";
import Home from "../pages/Home";
import Adopcion from "./Adopcion";

const router = createBrowserRouter([
    {path: "/", element: <Login/> },
    {path: "/login", element: <Login/> },
    {path: "/singnup", element: <Singnup/> },
    {path: "/home", element: <PrivateRoutes route={<Home/>} /> },
    {path: "/adopcion", element: <PrivateRoutes route={<Adopcion/>} /> },
    {path: "/*", element: <h1>404 Not Found</h1> },
]);

const Routes = () => {
    return(
        <AuthProvider>
            <RouterProvider router={router}/>
        </AuthProvider>
    );
};

export default Routes