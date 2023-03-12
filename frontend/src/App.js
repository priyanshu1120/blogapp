import {Routes,Route} from "react-router-dom"
import PrivateRoute from "./Auth/PrivateRoute";
import About from "./Pages/About";
import Contact from "./Pages/Contact";

import Home from "./Pages/Home";
import Login from "./Pages/Login";
 

function App() {
  return (
    <div className="App">
        <Routes>
              <Route path="/" element={<PrivateRoute><Home/></PrivateRoute>}/>
              <Route path="/account" element={<Login/>}/> 
              <Route path="/contact" element= {<Contact/>}/>
              <Route path="/about" element= {<About/>}/>
        </Routes>   
    </div>
  );
}

export default App;
