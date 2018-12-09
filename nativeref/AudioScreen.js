import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight, TouchableOpacity, TouchableNativeFeedback, TouchableWithoutFeedback } from 'react-native';

class AudioScreen extends React.Component {
  render() {
    return (
      <ButtonAudioPlay restartRecording={this.props.restartRecording} shareConfirmation={this.props.shareConfirmation} playToggle={this.props.playToggle} pageState={this.props.pageState} audioState={this.props.audioState}/>
    );
  }
}

class ButtonAudioPlay extends React.Component {
  getButtonTextPause() {
    let buttonText;
    if (this.props.audioState == 'init' && this.props.pageState == 'record'){
      buttonText = 'Record';
    } else if (this.props.audioState == 'init' && this.props.pageState == 'listen'){
      buttonText = 'Listen'
    } else if (this.props.audioState == 'playing'){
      buttonText = 'Pause'
    } else if (this.props.audioState == 'paused'){
      buttonText = 'Resume'
    }
    return buttonText;
  }
  getButtonTextMiddle(){
    let buttonText;
    if (this.props.pageState == 'record'){
      buttonText = 'Share'
    } else if (this.props.pageState == 'listen') {
      buttonText = 'Replay'
    }
    return buttonText;
  }
  getButtonTextExit() {
    let buttonText;
    if (this.props.pageState == 'record'){
      buttonText = 'Restart'
    } else if (this.props.pageState == 'listen') {
      buttonText = 'Exit'
    }
    return buttonText;
  }

  render(){
    return (
      <View>
        <TouchableOpacity onPress={this.props.playToggle}>
          <View styles={[styles.buttonAudioContainer, styles.buttonAudioContainerPause]}>
            <Text style={[styles.buttonAudioText, styles.buttonAudioTextPause]}>{this.getButtonTextPause()}</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={this.props.shareConfirmation} >
          <View styles={[styles.buttonAudioContainer, styles.buttonAudioContainerMiddle]}>
            <Text style={[styles.buttonAudioText, styles.buttonAudioTextMiddle]}>{this.getButtonTextMiddle()}</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={this.props.restartRecording}>
          <View styles={[styles.buttonAudioContainer, styles.buttonAudioContainerExit]}>
            <Text style={[styles.buttonAudioText, styles.buttonAudioTextPause]}>{this.getButtonTextExit()}</Text>
          </View>
        </TouchableOpacity>
      </View>
    )
  }
}

const colorPause = 'yellow';
const colorStart = 'green';
const colorStop = 'pink';
const styles = StyleSheet.create({
  buttonAudioContainer: {
    borderWidth: 1,
    padding: 20,
    width: '80%',
    width: 400,
    height: 200,
  },
  buttonAudioText: {
    fontSize: 24,
  },
  buttonAudioContainerPause: {
    borderColor: colorPause,
  },
  buttonAudioTextPause: {
    color: colorPause,
  },
  buttonAudioContainerMiddle: {
    borderColor: colorPause,
  },
  buttonAudioTextMiddle: {
    color: colorPause,
  },
  buttonAudioContainerExit: {
    borderColor: colorPause,
  },
  buttonAudioTextExit: {
    color: colorPause,
  },
});


// audioButtonPlay() {
//   const recordingState = this.state.recordingState;
//   if (recordingState == 'init'){
//     this.setState({recordingState: 'recording'});
//   } else if (recordingState == 'recording'){
//     this.setState({recordingState: 'paused'});
//   } else if (recordingState == 'paused'){
//     this.setState({recordingState: 'recording'})
//   }
// }
//
//
// class ButtonAudioPlay extends React.Component {
//   render() {
//     let buttonText;
//     let buttonStyle;
//     let buttonTextStyle;
//     let recordingState = this.props.recordingState;
//     if (recordingState == 'init'){
//       buttonText = 'Record';
//       buttonStyle = [styles.audioButtonContainer, styles.audioButtonContainerPlayInit]
//       buttonTextStyle = [styles.audioButtonTextPlayInit]
//     } else if (recordingState == 'recording') {
//       buttonText = 'Pause';
//       buttonStyle = [styles.audioButtonContainer, styles.audioButtonContainerPlayPlaying]
//       buttonTextStyle = [styles.audioButtonTextPlayPlaying]
//     } else if (recordingState == 'paused') {
//       buttonText = 'Resume';
//       buttonStyle = [styles.audioButtonContainer, styles.audioButtonContainerPlayPlaying]
//       buttonTextStyle = [styles.audioButtonTextPlayPlaying]
//     }
//     return (
//       <TouchableOpacity onPress={this.props.onPress}>
//         <View style={buttonStyle}>
//           <Text style={buttonTextStyle}>{buttonText}</Text>
//         </View>
//       </TouchableOpacity>
//     )
//   }
// }
//
//
// class ButtonAudioShare extends React.Component {
//   render() {
//     let buttonStyle = null;
//     let buttonTextStyle = null;
//
//     if (this.props.recordingState == 'init'){
//       buttonStyle = [styles.audioButtonContainer, styles.audioButtonDisabled];
//       buttonTextStyle = [styles.audioButtonText, styles.audioButtonTextDisabled];
//     } else {
//       buttonStyle = [styles.audioButtonContainer, styles.audioButtonDisabled];
//       buttonTextStyle = [styles.audioButtonText, styles.audioButtonTextShare];
//     }
//
//     return (
//       <TouchableOpacity>
//         <View style={[styles.audioButtonContainer, styles.audioButtonContainerShare]}>
//           <Text style={[styles.audioButtonText, styles.audioButtonTextShare]}>
//             Share
//           </Text>
//         </View>
//       </TouchableOpacity>
//     )
//   }
// }
//
//
// const audioButtonFontSize = 24;
// const colorActionStart = '#73DDC8';
// const colorActionPause = 'yellow';
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'black',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   audioButtonContainer: {
//     width: '80%',
//     maxWidth: 400,
//     marginBottom: 20,
//     borderWidth: 1,
//     padding: 20,
//   },
//   audioButtonContainerPlayInit: {
//     borderColor: colorActionStart,
//   },
//   audioButtonContainerPlayPlaying: {
//     borderColor: colorActionPause,
//   },
//   audioButtonContainerPlayPaused: {
//     borderColor: colorActionPause,
//   },
//   audioButtonContainerShare : {
//     borderColor: colorActionStart,
//   },
//   audioButtonTextPlayInit: {
//     fontSize: audioButtonFontSize,
//     color: colorActionStart,
//   },
//   audioButtonTextPlayPlaying: {
//     fontSize: audioButtonFontSize,
//     color: colorActionPause,
//   },
//   audioButtonTextPlayPaused: {
//     fontSize: audioButtonFontSize,
//     color: colorActionPause,
//   },
//   audioButtonTextShare: {
//     color: colorActionStart,
//   },
// });

export default AudioScreen;
