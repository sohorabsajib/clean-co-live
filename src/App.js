import Navbar from "./components/Navbar";

import { Route, Routes } from "react-router-dom";
import { publicRoute } from "./routes/publicRoutes";
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Services from "./pages/Services";
import PrivateRoute from "./authentication/PrivateRoute";
import About from "./pages/About";
import { privateRoutes } from "./routes/privateRoutes";
import AdminRoute from "./authentication/AdminRoute";
import Dashboard from "./pages/Dashboard/Dashboard";

function App() {

  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <>
      <Navbar>
        <Routes>
          {publicRoute.map(({ path, Component }, index) => (
              <Route key={index} path={path} element={<Component />}></Route>
            ))}


          <Route element={<PrivateRoute></PrivateRoute>}>
            {privateRoutes.map(({ path, Component }, index) => (
              <Route key={index} path={path} element={<Component />}></Route>
            ))}
          </Route>

          <Route element={<AdminRoute></AdminRoute>}>

              <Route path="/dashboard" element={<Dashboard></Dashboard>}></Route>
          </Route>

        </Routes>
      </Navbar>
    </>
  );
}

export default App;
