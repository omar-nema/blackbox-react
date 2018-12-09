import React, { Component } from 'react';
import '../styles/audioButtonStyles.min.css';

class AudioButtons extends Component {
  getPauseButtonText = () => {
    if (this.props.pageState == 'record' && this.props.audioState == 'init'){
      return 'Record'
    } else if  (this.props.pageState == 'listen' && this.props.audioState == 'init'){
      return 'Listen'
    }
    else if (this.props.audioState == 'playing'){
      return 'Pause'
    } else if (this.props.audioState == 'paused'){
      return 'Resume'
    }
  }
  getShareButtonText = () => {
    if (this.props.pageState == 'record'){
        return 'Share'
    } else if (this.props.pageState == 'listen'){
        return 'Replay'
    }
  }
  getShareButtonFunction = () => {
    if (this.props.pageState == 'record'){
        return this.props.navPageConfirmation;
    } else if (this.props.pageState == 'listen'){
        return this.props.audioReplay;
    }
  }
  getRestartButtonText = () => {
    if (this.props.pageState == 'record'){
        return 'Restart'
    } else if (this.props.pageState == 'listen'){
        return 'Exit'
    }
  }
  getRestartButtonFunction = () => {
    if (this.props.pageState == 'record'){
        return this.props.audioRestart;
    } else if (this.props.pageState == 'listen'){
        return this.props.navPageHome;
    }
  }
  render(){
    return (
      <div>
        <div onClick={this.props.audioPlayToggle} className={'button audio action-pause ' + this.props.audioState}>
          {this.getPauseButtonText()}
        </div>
        <div className={'button audio action-start ' + this.props.audioState} onClick={this.getShareButtonFunction()}>
          {this.getShareButtonText()}
        </div>
        <div onClick={this.getRestartButtonFunction()} className={'button audio action-stop ' + this.props.audioState}>
          {this.getRestartButtonText()}
        </div>
      </div>
    )
  }
}

export default AudioButtons;
