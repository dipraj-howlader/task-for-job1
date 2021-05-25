import React from 'react';
import './Header.css';


const Header = () => {


return (
<div className="text">
  <div>
  <h1 style={{color:'#38aeab'}}>HODLINFO<span style={{fontSize:'20px',color:'white'}}>.com</span></h1>
  </div>
  <div>
    <div class="dropdown">
      <button class="dropbtn">INR🠗</button>
      <div class="dropdown-content">
        <a href="#">Link 1</a>
        <a href="#">Link 2</a>
        <a href="#">Link 3</a>
      </div>
      </div>
      <div class="dropdown">
        <button class="dropbtn">BTC🠗</button>
        <div class="dropdown-content">
          <a href="#">Link 1</a>
          <a href="#">Link 2</a>
          <a href="#">Link 3</a>
        </div>
      </div>
    </div>
    
    <div style={{display:'flex'}}>
      <p>58</p>
      <p>Connect Telegram</p>
      <div className='custom-control custom-switch'>
        <input
          type='checkbox'
          className='custom-control-input'
          id='customSwitches'
          readOnly
        />
        <label className='custom-control-label' htmlFor='customSwitches'>
          
        </label>
      </div>
    </div>


  </div>
  );
  };

  export default Header;