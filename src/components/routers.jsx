import { Route,Routes } from "react-router-dom"; 
import Home from "./Home";
import Register from "./Contact";
import About from "./About";
import Founder from "./founder";


const Routers=()=>{

return(<div>
    
    <Routes>
    
    <Route path="/" element=<Home/>/>
    <Route path="register" element=<Register/>/>
    <Route path="about" element=<About/>/>
    <Route path="founder" element=<Founder/>/>
    
    
    
    </Routes>
    
    
    </div>)


}
export default Routers