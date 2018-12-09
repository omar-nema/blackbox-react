import React, { Component } from 'react';
import '../styles/logo.min.css';

class Logo extends Component {
  render(){
    return (
      <div className='footer-container'>
        <div className='rect-holder'>
          <div className='top-rect'></div>
          <div className='bottom-rect'></div>
        </div>
        <div className='footer-text'>blackbox</div>
      </div>
    )
  }
}

export default Logo;
