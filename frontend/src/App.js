import {Routes,Route} from "react-router-dom"
import Login from "./Pages/Login";
 

function App() {
  return (
    <div className="App">
        <Routes>
              <Route path="/account" element={<Login/>}/>
        </Routes>   
    </div>
  );
}

export default App;
