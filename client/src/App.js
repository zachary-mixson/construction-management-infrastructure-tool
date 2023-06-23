import React from "react";
import './App.css';
import LoginBox from "./LoginUI/loginUI";
import {BrowserRouter, Routes,Route} from "react-router-dom";
import SignUp from "./LoginUI/signUp";
import Restore from "./LoginUI/restore";




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
            <p>{!data ? "Loading..." : data}</p>
            <Routes>
                <Route path = "/" element={<LoginBox/>}/>
                <Route path = "/signUp" element={<SignUp/>}/>
                <Route path = "/restore" element={<Restore/>}/>
            </Routes>
        </div>
    </BrowserRouter>
);
}

export default App;

