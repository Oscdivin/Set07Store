import { Outlet } from "react-router-dom"
import Header from "./Header"
import Footer from "./Footer"
import MainSider from "../Static/MainSider"


const LayOut = () => {
  return (
    <div>
        <Header/>
      <div className="flex"> 
   <MainSider/>
      <Outlet/>
    </div>
      <Footer/>
   </div>
  )
}

export default LayOut
