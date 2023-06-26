import React from "react";
import './App.css';
import LoginBox from "./LoginUI/loginUI";
import {BrowserRouter, Routes,Route} from "react-router-dom";
import SignUp from "./LoginUI/signUp";
import Restore from "./LoginUI/restore";
import Navbar from "./components/Navbar";
import Home from "./pages/home";




function App() {

   const [data, setData] = React.useState(null);

   React.useEffect(() => {
     fetch("/api")
         .then((res) => res.json())
         .then((data) => setData(data.message));
   }, []);

  return (
    <BrowserRouter>
        <div className="App">
            <Navbar/>
            <p>{!data ? "Loading..." : data}</p>
            <Routes>
                <Route path = "/" element={<LoginBox/>}/>
                <Route path = "/SignUp" element={<SignUp/>}/>
                <Route path = "/restore" element={<Restore/>}/>
                <Route path = "/home" element = {<Home/>}/>
            </Routes>
        </div>
    </BrowserRouter>
);
}

export default App;

