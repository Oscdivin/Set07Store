import { createBrowserRouter } from "react-router-dom";
import LayOut from "../Components/common/LayOut";
// import HomeSceen from "../pages/HomeSceen";
import Home from "../pages/Home";


export const  mainRouter = createBrowserRouter([{
    path:"",
    element:<LayOut/>,

    children:[
        {
        path:"",
        element:<Home/>,
        index:true,
}
],
}
])