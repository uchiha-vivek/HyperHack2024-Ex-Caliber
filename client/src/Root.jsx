import { Route, Routes } from "react-router-dom"
import LandingPage from "./Pages/LandingPage"
import App from "./App"
 



function Root(){

    return (
        <>
        
    
         <Routes>
            <Route path='/' element={<LandingPage/>} />
            <Route path="/home" element={<App/>}/>
        </Routes>
       
        
        </>
    )
}
export default Root