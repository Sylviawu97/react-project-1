import  React from 'react';
import { Link } from 'react-router-dom';
import {useState,useEffect} from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button'
import {Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField} from "@mui/material";
import axios from "axios";

const Acception = () => {

   
    const [dialogOpen, setDialogOpen] = useState(false);
    const [anchorElNav, setAnchorElNav] = useState(null);
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

    useEffect(() => {
        if (parseInt(data) >= 4) {
            setAdditionalText('Welcome, we can accept your dogs.😊');
        } else {
            setAdditionalText('Sorry, we currently can not board your dogs.');
        }
    }, [data]);


  return (
    <div>
       <Link to="/acception" className="navbar__link" onClick={handleDialogOpen}>
        Acception
      </Link>
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
    </div>
  )
}

export default Acception
