import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const About = () => {
    

    const [aboutContentVisible, setAboutContentVisible] = useState(false);
    const handleAboutToggle = () => {
        setAboutContentVisible(!aboutContentVisible); // Toggle the visibility of the about content
      };

  return (
    <>
      <Link to="/about" className="navbar__link" onClick={handleAboutToggle}>
        About Us
      </Link>

      {aboutContentVisible && (
        <div className="about-content-container">
          <div className="about-content">
            <h3>About Us</h3>
            
           
<p>
Choose Sylvia's for Unmatched Care:
When you choose our dog boarding service, you can rest assured that your beloved pet will receive the utmost care, attention, and love. Our dedicated staff is committed to providing a safe and comfortable environment, ensuring that your dog feels right at home throughout their stay.
</p>
Book your dog's boarding experience with us today and give them the vacation they deserve. Contact [Your Service Name] at [Contact Information] to schedule a reservation or to inquire about our services. We look forward to welcoming your furry friend into our family!
         
          </div>
        </div>
      )}
    </>
  )
}

export default About