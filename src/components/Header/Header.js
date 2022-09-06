import React from 'react';
import './Header.css';
import TextField from '@mui/material/TextField';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Header = () => {
  return (
    <div className='headerMain'>
      <div className='main-header'>
        <div className='sub-header'><h3>Mart</h3></div>
        <div className='sub-header'>
          <TextField label="Search Products" variant="standard" />
        </div>
        <div className='sub-header icon'><AccountCircleIcon /></div>
      </div>
    </div>
  )
}

export default Header