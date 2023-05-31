import  React from 'react';
import "./Header.css";
import Booking from "./Booking";
import  About from './About';
import Acception from './Acception';
import Service from './Service';
import { Link } from 'react-router-dom';



function Header() {
   

    return (
      
        <nav className="navbar">
       
        <div className="navbar__content">
        <Service />
        <Acception />
          <Booking />
          <About />
          
          
        </div>
      </nav>
              

                 
     
    );
}
export default Header;