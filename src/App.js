import Navbar from "./components/Navbar";

import { Route, Routes } from "react-router-dom";
import { publicRoute } from "./routes/publicRoutes";
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';


function App() {

  useEffect(()=>{
    AOS.init();
  },[])
  return (
    <>
      <Navbar>
        <Routes>
          
          {
            publicRoute.map(({path,Component},index) => (
            <Route key={index} path={path} element={<Component/>}></Route>
            ))}
        </Routes>
        

        
      </Navbar>
      

    </>
  );
}

export default App;
