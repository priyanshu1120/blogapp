import {Routes,Route} from "react-router-dom"
import PrivateRoute from "./Auth/PrivateRoute";
import CreateBlog from "./Components/CreateBlog";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import DetailsBlog from "./Pages/DetailsBlog";

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
              <Route path="/create" element= {<PrivateRoute><CreateBlog/></PrivateRoute>}/>
              <Route path="/blog/:id" element= {<PrivateRoute><DetailsBlog/></PrivateRoute>}/>
        </Routes>   
    </div>
  );
}

export default App;
