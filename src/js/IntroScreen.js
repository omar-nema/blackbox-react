import React, { Component } from 'react';
import '../styles/introPage.min.css';

class IntroScreen extends Component {
  render(){
    return (
      <div>
        <div className="dialog-container">
          <div className="dialog-text">
            <strong>Blackbox</strong> is a way to talk.<br/><br/>Send a voice recording, and receive one back. Each recording is unique, and will only be played once.
          </div>
        </div>
        <div className="dialog-actions" onClick={this.props.onClick}>
          <div className="button action-begin-exchange">
            Begin your exchange
          </div>
        </div>
      </div>
    )
  }
}

export default IntroScreen;
