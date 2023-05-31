import React,{useState} from 'react';
import { Link } from 'react-router-dom';

const Service = () => {
    const [serviceContentVisible, setServiceContentVisible] = useState(false);
    const handleServiceToggle = () => {
        setServiceContentVisible(!serviceContentVisible); // Toggle the visibility of the about content
      };


  return (
    <div>
    <Link to="/service" className="navbar__link" onClick={handleServiceToggle}>
        Service
      </Link>
     
      {serviceContentVisible && (
        <div className="service-content-container">
          <div className="service-content">
            <h3>Service</h3>
            <p>
                       At Sylvia's, we understand that your furry friend deserves the best care while you're away. That's why we offer top-notch dog boarding services in the beautiful city of Issaquah. With our exceptional facilities, dedicated staff, and personalized attention, your dog will feel right at home during their stay with us.
                       </p>
<p><h3>Our Pricing:</h3>

We offer competitive pricing at $60 per 24 hours, ensuring your dog's comfort and happiness throughout their stay. 
For those needing a little extra time, we provide the option to extend their stay at a rate of $5 per hour.
</p>
<p><h3>A Tail-Wagging Daily Routine:</h3>


Your dog's well-being is our priority. We believe in keeping them active, entertained, and well-exercised during their stay. 
Our professional caregivers take your dog for invigorating walks four times a day, following a structured timetable. 
Walks are scheduled at 8:00 am, 12:00 pm, 5:00 pm, and 9:30 pm, ensuring they get plenty of exercise and fresh air.
</p>
<p>
<h3>Ample Space for Play:</h3>

Although we don't have a yard, our conveniently located facility boasts a vast grassland area right in front of our house. Dogs are welcome to roam off-leash and have a blast playing and exploring their surroundings under the watchful eye of our experienced team.
</p>
<p>
<h3>Health and Nutrition:</h3>

We take your dog's dietary requirements seriously. We adhere strictly to the feeding instructions provided by the owner, ensuring their meals are served at the appropriate times and in the right quantities. If your dog has any allergies or illnesses, please inform us in advance, and we will take all necessary precautions to ensure their well-being.
</p>
<p>
<h3>Delightful Treats:</h3>
To make your dog's stay even more enjoyable, we provide complimentary goat milk and treats. Our aim is to pamper and indulge your furry companion, giving them a taste of luxury and making their time with us truly memorable.
</p>
            </div>
            </div>
      )}
    ;
    </div>
  )
      }
               

export default Service
