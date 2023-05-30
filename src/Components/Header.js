import  React from 'react';
import {useState,useEffect} from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button'
import {Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField} from "@mui/material";
import axios from "axios";
import "./Header.css";



function Header() {
    const [anchorElNav, setAnchorElNav] = useState(null);
    const [dialogOpen, setDialogOpen] = useState(false);
    const [aboutContentVisible, setAboutContentVisible] = useState(false);
    const [breed, setBreed] = useState('');
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [additionalText, setAdditionalText] = useState(null);


    const handleBreedChange = (event) => {
        setBreed(event.target.value);
    };
    const fetchData = async () => {
        try {
            console.log('data1 --->', data)
            console.log('call --->', breed)
            const response = await axios.get(
                `https://api.api-ninjas.com/v1/dogs?name=${breed}`,
                {
                    headers: {
                        'Content-Type': 'application/json',
                        'X-API-KEY': "+ZcuMd52KTrJQHqjfwxwWw==26o1z7IDtXepNgxh",
                    },
                },
            )
            console.log('fetching data:', response.data[0]['good_with_strangers'])
            setData(response.data[0]['good_with_strangers']);
        } catch (error) {
            console.log('Error fetching data:', error);
        }
    };




    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);

    };

    const handleDialogOpen = (event) => {
        setAnchorElNav(event.currentTarget);
        setDialogOpen(true);
        setAdditionalText(null);
    };
    

    const handleClose = () => {
        setDialogOpen(false);
        setAdditionalText(null)
        setBreed(null)
        setData(null);
    };

    const handleConfirm = async () => {
        setData(null);
        setAdditionalText('');
        await fetchData()
    }
    const handleAboutToggle = () => {
        setAboutContentVisible(!aboutContentVisible); // Toggle the visibility of the about content
      };
    
    useEffect(() => {
        if (parseInt(data) >= 4) {
            setAdditionalText('Welcome, we can accept your dogs.😊');
        } else {
            setAdditionalText('Sorry, we currently can not board your dogs.');
        }
    }, [data]);


    const handleOpen = () => {
        setDialogOpen(true);
    };

    return (
      
            <nav classNmae='navbar'>
                <div className="navbar__menu">
                 
                  <button id="service" onClick={handleOpenNavMenu}>Service</button>
                  <button id="Reservation" onClick={handleDialogOpen}>Reservation</button>
                  <button id="about"  onClick={handleAboutToggle}>About Us</button>
                  </div>
                  {aboutContentVisible && (
                       <div className="about-content-container">
                       <div className="about-content">
        
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
Ample Space for Play:

Although we don't have a yard, our conveniently located facility boasts a vast grassland area right in front of our house. Dogs are welcome to roam off-leash and have a blast playing and exploring their surroundings under the watchful eye of our experienced team.
</p>
<p>
Health and Nutrition:

We take your dog's dietary requirements seriously. We adhere strictly to the feeding instructions provided by the owner, ensuring their meals are served at the appropriate times and in the right quantities. If your dog has any allergies or illnesses, please inform us in advance, and we will take all necessary precautions to ensure their well-being.
</p>
Delightful Treats:
To make your dog's stay even more enjoyable, we provide complimentary goat milk and treats. Our aim is to pamper and indulge your furry companion, giving them a taste of luxury and making their time with us truly memorable.

Choose [Your Service Name] for Unmatched Care:
When you choose our dog boarding service, you can rest assured that your beloved pet will receive the utmost care, attention, and love. Our dedicated staff is committed to providing a safe and comfortable environment, ensuring that your dog feels right at home throughout their stay.

Book your dog's boarding experience with us today and give them the vacation they deserve. Contact [Your Service Name] at [Contact Information] to schedule a reservation or to inquire about our services. We look forward to welcoming your furry friend into our family!
         
                       </div>
                       </div>
                       )}
                        <Dialog open={dialogOpen} onClose={handleClose}>
                            <DialogTitle>Reserve</DialogTitle>
                            <DialogContent>
                                <DialogContentText>
                                    To make a reservation , please enter your breed of you dog
                                </DialogContentText>
                                <TextField
                                    autoFocus
                                    margin="dense"
                                    id="breed"
                                    label="breed"
                                    value={breed}
                                    onChange={handleBreedChange}
                                    fullWidth
                                    variant="standard"
                                />
                            </DialogContent>
                            <DialogActions>
                                <Button onClick={handleConfirm} disabled={isLoading}>
                                    {isLoading ? 'Loading...' : 'Confirm'}
                                </Button>
                                <Button onClick={handleClose}>Cancel</Button>
                            </DialogActions>
                            <DialogContentText>
                            <Typography variant="h6" color={additionalText === 'Welcome, we can accept your dogs.😊' ? 'primary' : 'error'}>
                                    {additionalText}
                                </Typography>
                            </DialogContentText>
                        </Dialog>
   
     
      
    
            </nav>
              

                 
     
    );
}
export default Header;