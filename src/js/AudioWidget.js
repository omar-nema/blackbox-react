import React, { Component } from 'react';
import '../styles/audioWidgetStyles.min.css';

class AudioWidget extends Component {

  getAudioStateText = () => {
    console.log(this.props.audioState, this.props.pageState)
    if (this.props.audioState == 'playing' && this.props.pageState == 'record'){
      return 'Recording';
    } else if (this.props.audioState == 'playing' && this.props.pageState == 'listen'){
      return 'Listening';
    } else if (this.props.audioState == 'paused'){
      return 'Paused';
    } else {
      return 'Not playing'
    }
  }
  getAudioTime = () => {
    return '0 seconds';
  }


  render() {
    return (
      <div className='widget-container'>
        <div className='widget-centered'>
          <div className={'audio-state ' + this.props.audioState}>
            {this.getAudioStateText()}
          </div>
          <div className='audio-timer'>
            {this.getAudioTime()}
          </div>
        </div>
      </div>
    )
  }
}

export default AudioWidget;
