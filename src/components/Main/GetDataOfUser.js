import React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import'./GetDataOfUser.css';

const GetDataOfUser = () => {
  return (
    <div className='wrapper-userdata'>
        <div className='main-userdata'>
            <div><h5>Get your Product !</h5></div>
            <div className='wrapper-form'>
                  <form>
                      <TextField id="filled-basic" label="Phone No" variant="filled" />
                      <Button variant="outlined">Submit</Button>
                  </form>
            </div>
        </div>
    </div>
  )
}

export default GetDataOfUser