import React from 'react';
import './Header.css';


const Header = () => {


return (
  <React.Fragment>
<div className="text">
  <div>
  <h1 style={{color:'#38aeab'}}>HODLINFO<span style={{fontSize:'20px',color:'white'}}>.com</span></h1>
  <br />
  <p style={{color:'gray'}}>Powered by <span style={{color:'#38aeab'}}>Finstreet</span></p>
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
      <p className="number-p">58</p>
      <p className="text-p">Connect Telegram</p>

      <div style={{marginRight:'10px',marginTop:'10px'}} className='custom-control custom-switch'>
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
  <div className="view-bar">
    <h5>#</h5>
    <h5>Name</h5>
    <h5>Last</h5>
    <h5>Buy/sell price</h5>
    <h5>volume</h5>
    <h5>base_unit</h5>
  </div>
  </React.Fragment>
  );
  };

  export default Header;