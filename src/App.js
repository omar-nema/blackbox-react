import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'; // ES6
import './styles/appStyles.min.css';
import IntroScreen from './js/IntroScreen';
import AudioButtons from './js/AudioButtons';
import ShareConfirmationScreen from './js/ShareConfirmationScreen';
import AudioWidget from './js/AudioWidget';
import Logo from './js/Logo';

// const e = React.createElement;

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      pageState: 'intro', //into, shareConfirmation, record, listen
      audioState: null, //init, pause, play, etc
    }
  }
  //NAVIGATION FUNCTIONS
  navPageRecord = () => {
    this.setState({pageState: 'record', audioState: 'init'});
  }
  navPageConfirmation = () =>  {
    this.setState({pageState: 'shareConfirmation'})
  }
  navPageListen = () => {
    this.setState({pageState: 'listen', audioState: 'init'})
  }
  navPageHome = () => {
    this.setState({pageState: 'intro'})
  }

  //AUDIO FUNCTIONS
  audioPlayToggle = () =>  {
    if (this.state.audioState == 'init'){
      this.setState({audioState: 'playing'})
    } else if (this.state.audioState == 'paused'){
      this.setState({audioState: 'playing'})
    } else if (this.state.audioState == 'playing'){
      this.setState({audioState: 'paused'})
    }
  }
  audioRestart = () => {
    this.setState({audioState: 'init'});
  }
  //needs to be revised
  audioReplay = () => {
    this.setState({audioState: 'init'})
  }

  //HELPER FUNCTIONS
  transitionFade = (input) => {
    return <ReactCSSTransitionGroup
      transitionName="fade"
      transitionAppear={true}
      transitionAppearTimeout={700}
      transitionEnter={false}
      transitionLeave={true}
      transitionLeaveTimeout={300}
      >{input}</ReactCSSTransitionGroup>
  }

  //PAGE AND COMPONENT RENDER FUNCTIONS
  renderPageIntro = () => {
    if (this.state.pageState == 'intro'){
      let introScreen = <IntroScreen onClick={this.navPageRecord}></IntroScreen>;
      return this.transitionFade(introScreen);
    }
  };
  renderLogo = () => {
    if (this.state.pageState == 'intro'){
      let logo = <Logo></Logo>;
      return this.transitionFade(logo);
    }
  }

  renderCompAudioButtons = () =>  {
    if (this.state.pageState == 'record' || this.state.pageState == 'listen' ){
      let audioButtons = <AudioButtons audioState={this.audioState} pageState={this.pageState} audioPlayToggle={this.audioPlayToggle} restartRecording={this.restartRecording} shareConfirmation={this.shareConfirmation} pageState={this.state.pageState} audioState={this.state.audioState} audioRestart={this.audioRestart}
      navPageHome={this.navPageHome} navPageConfirmation={this.navPageConfirmation} audioReplay={this.audioReplay}/>;
      return this.transitionFade(audioButtons);
    }
  }
  renderCompAudioWidget = () => {
    if (this.state.pageState == 'record' || this.state.pageState == 'listen'){
      let audioWidget = <AudioWidget pageState={this.state.pageState} audioState={this.state.audioState}/>;
      return this.transitionFade(audioWidget);
    }
  }
  renderPageShareConfirmation = () => {
    if (this.state.pageState == 'shareConfirmation'){
      let shareConfirmationScreen = <ShareConfirmationScreen shareConfirmationClick={this.navPageListen} navPageHome={this.navPageHome}/>;
      return this.transitionFade(shareConfirmationScreen);
    }
  }

  render() {
    return (
      <div className="app-container">
        <div className="app-header">
        </div>
        <div className="app-component-holder">
          {this.renderPageIntro()}
          {this.renderCompAudioButtons()}
          {this.renderPageShareConfirmation()}
        </div>
        <div className="app-footer">
          {this.renderCompAudioWidget()}
          {this.renderLogo()}
        </div>
      </div>
    );
  }
}

export default App;

//
// const domContainer = document.querySelector('#blackbox-react-app');
// ReactDOM.render(e(App), domContainer);

      // {this.pageShareConfirmationRender()}
