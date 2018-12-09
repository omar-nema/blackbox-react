import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight, TouchableOpacity, TouchableNativeFeedback, TouchableWithoutFeedback } from 'react-native';
import HomeScreen from './HomeScreen'
import AudioScreen from './AudioScreen'
import ShareConfirmation from './ShareConfirmation'

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      pageState: 'intro',
      audioState: null, //init, pause, play, etc
    }
  }
  //initialize
  startExperience = () =>  {
    this.setState({pageState: 'record', audioState: 'init'})
  }
  playToggle = () =>  {
    if (this.state.audioState == 'init'){
      this.setState({audioState: 'playing'})
    } else if (this.state.audioState == 'paused'){
      this.setState({audioState: 'playing'})
    } else if (this.state.audioState == 'playing'){
      this.setState({audioState: 'paused'})
    }
  }
  shareConfirmation = () =>  {
    this.setState({pageState: 'shareConfirmation'})
  }
  restartRecording = () => {
    this.setState({audioState: 'init'});
  }

  introPageRender = () => {
    if (this.state.pageState == 'intro'){
      return (
        <HomeScreen introNavFunction={this.startExperience}></HomeScreen>
      )
    }
  }
  audioPageRender = () =>  {
    if (this.state.pageState == 'record' || this.state.pageState == 'listen' ){
      return (
        <AudioScreen playToggle={this.playToggle} restartRecording={this.restartRecording} shareConfirmation={this.shareConfirmation} pageState={this.state.pageState} audioState={this.state.audioState}/>
      )
    }
  }
  shareConfirmationRender = () =>  {
    if (this.state.pageState == 'shareConfirmation'){
      return (
        <ShareConfirmation/>
      )
    }
  }

  render() {
    return (
      <View style={styles.container}>
        {this.introPageRender()}
        {this.audioPageRender()}
        {this.shareConfirmationRender()}
      </View>
    );
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
