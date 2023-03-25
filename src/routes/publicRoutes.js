import Home from "../pages/Home/Home";

import Login from "../pages/Login";
import Contact from "../pages/Contact";

export const publicRoute = [
    {path: "/" , name: "Home" , Component: Home},
    
    {path: "/contact" , name: "Contact" , Component: Contact},
    {path: "/login" , name: "Login" , Component: Login},
  ];

  