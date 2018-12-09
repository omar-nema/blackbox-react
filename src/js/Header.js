import React, { Component } from 'react';
import '../styles/header.min.css';

class Header extends Component {

  getRecordClass = () => {
    if (this.props.pageState != 'listen'){
      return 'active';
    } else {
      return '';
    }
  }
  getArrowClass = () => {
    if (this.props.pageState == 'shareConfirmation'){
      return 'active';
    }
  }
  getListenClass = () => {
    if (this.props.pageState == 'listen'){
      return 'active';
    } else {
      return '';
    }
  }
  renderBackButton = () => {
    if (this.props.pageState == 'record' || this.props.pageState == 'shareConfirmation'){
      let backText = '< back';
      return <div className='header-content' onClick={this.props.navPageBack}>{backText}</div>;
    }
  }

  render(){
    let navChar = ' > ';

    return (
      <div className='header'>
        <div className='header-inner-container'>
          <div className='header-content '>
            <div className={this.getRecordClass()}>record</div>
            <div className={this.getArrowClass()}>{navChar}</div>
            <div className={this.getListenClass()}>listen</div>
          </div>
          {this.renderBackButton()}
        </div>
      </div>
    )
  }
}

export default Header;
