import React, { useState } from 'react'
import { addAddress } from '../Service/Service';
import { Box, Button, TextField, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function AddressForm() {
    const [formData, setFormData] =useState({
        fullname :"",
         pincode :"",
         state :"",
         city :"",
         address:""
      })
       const nevigate=useNavigate();
      const [errors, setErrors] = useState({});
      const handleInputChange = (event) => {

        setFormData({
          ...formData,
          [event.target.name]: event.target.value,
        });
      };
      const validateForm = () => {
        let errors = {};
        let isValid = true;
    
        if (!formData.fullname) {
          errors.firstName = 'Fullname name is required';
          isValid = false;
        }
        if (!formData.pincode) {
            errors.lastName = 'pincode is required';
            isValid = false;
          }
        if (!formData.state) {
          errors.lastName = 'state is required';
          isValid = false;
        }
        if (!formData.city) {
            errors.lastName = 'city is required';
            isValid = false;
          }
          if (!formData.address) {
            errors.lastName = 'address is required';
            isValid = false;
          }
    
    
        setErrors(errors);
    
        return isValid;
      };
      const handleSubmit = (event) => {
        event.preventDefault();
        if (validateForm()) {
         addAddress(formData).then((res) => {
            console.log(res.data);
            console.log('addressa add');
          }) .catch((error)=>{
             console.log(error.data);
          })
        }
      };
      const handleReset = (e) => {
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phonenum: '',
          password: '',
          country:'',
          role:''
        });
        setErrors({});
      };
  return (
    <div>
        <form  onSubmit={handleSubmit}>
        <Box
          display="flex"
          flexDirection={"column"}
          maxWidth={400}
          alignItems="center"
          justifyContent={"center"}
          margin="auto"
          padding ={4}
          borderRadius={5}
          boxShadow={'5px 5px 10px #ccc'}
          sx={{
            ":hover": {
              boxShadow: '10px,10px,20px,#ccc'
            }
          }} >
          <Typography variant="h5" padding={1} textalign="center">Add Delivery Address</Typography>
          <TextField type={"text"}
            name="fullname"
            value={formData.fullname}
            onChange={handleInputChange}
            variant='outlined'
            placeholder='Enter Fullname'
          />
          {errors.firstName && <span>{errors.firstName}</span>}
          <TextField type={"number"}
            name="pincode"
            value={formData.pincode}
            onChange={handleInputChange}
            variant='outlined'
            placeholder='Enter Pincode'
            margin="normal" />
          {errors.lastName && <span>{errors.lastName}</span>}
          <TextField type={"text"}
            name="state"
            value={formData.state}
            onChange={handleInputChange}
            variant='outlined'
            placeholder='Enter State '
            margin="normal" />
          {errors.email && <span>{errors.email}</span>}

          <TextField type={"text"}
            name="city"
            value={formData.city}
            onChange={handleInputChange}
            variant='outlined'
            placeholder='Enter city'
            margin="normal" />
          {errors.phonenum && <span>{errors.phonenum}</span>}
          <TextField type={"textarea"}
            name="address"
            value={formData.address}
            onChange={handleInputChange}
            variant='outlined'
            placeholder='Enter Address'
            margin="normal" />
          <div className='flex' style={{display:"flex",gap:"10px"}}>
            <Button type={"reset"}
              onClick={(e)=>handleReset(e)}
              variant='contained'
              sx={{ marginTop: 3, borderRadius: 3 }}>
              Reset
            </Button>
            <Button type="submit"
              variant='contained'
              sx={{ marginTop: 3, borderRadius: 3 }}
              onClick={()=>{nevigate("/order")}}>Add address</Button>
          </div>
        </Box>
      </form> 
    </div>
  )
}

