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
        <div className="dialog-actions" onClick={this.props.shareConfirmationClick}>
          <div className="button share-cancel">
            Cancel
          </div>
          <div className="button share-confirm">
            Share Recording
          </div>
        </div>
      </div>
    )
  }
}

export default ShareConfirmationScreen;
