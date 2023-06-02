import React, {useState} from 'react';
import "./Header.css";
import Booking from "./Booking";
import About from './About';
import Acception from './Acception';
import Service from './Service';
import { Link } from 'react-router-dom';



function Header() {

    const [aboutOpen, setAboutOpen] = useState(false);
    const [serviceOpen, setServiceOpen] = useState(false);
    const [bookingOpen, setBookingOpen] = useState(false);

    const handleAboutToggle = () => {
        setAboutOpen(!aboutOpen);
        setServiceOpen(false);
        setBookingOpen(false);
    };

    const handleServiceToggle = () => {
        setServiceOpen(!serviceOpen);
        setAboutOpen(false);
        setBookingOpen(false);
    };

    const handleBookingToggle = () => {
        setBookingOpen(!bookingOpen);
        setAboutOpen(false);
        setServiceOpen(false);
    };


    return (
        <nav className="navbar">
            <div className="navbar__content">
                <Service isOpen={serviceOpen} onToggle={handleServiceToggle} />
                <Acception  />
                <Booking isOpen={bookingOpen} onToggle={handleBookingToggle} />
                <About isOpen={aboutOpen} onToggle={handleAboutToggle} />
            </div>
      </nav>
    );
}
export default Header;