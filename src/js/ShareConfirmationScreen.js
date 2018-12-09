import React, { Component } from 'react';
import '../styles/shareConfirmationStyles.min.css';

class ShareConfirmationScreen extends Component {
  render(){
    return (
      <div>
        <div className="dialog-container">
          <div className="dialog-text">
            Confirm that you would like to <strong>share</strong> your recording.<br/><br/>In exchange, you will <strong>receive</strong> an anonymous recording.
          </div>
        </div>
        <div className="dialog-actions">
          <div className="button share-cancel" onClick={this.props.navPageHome}>
            Cancel
          </div>
          <div className="button share-confirm" onClick={this.props.shareConfirmationClick}>
            Share Recording
          </div>
        </div>
      </div>
    )
  }
}

export default ShareConfirmationScreen;
