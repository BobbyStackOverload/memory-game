import React, { Component } from "react";
import './MemoryCard.css';

class MemoryCard extends Component {
  state = {
    isFlipped: false
  };
  
  clickHandler = () => {
    this.setState({ 
      isFlipped: !this.state.isFlipped 
    });
  };

 
  render() {
    const { isFlipped } = this.state;
    
    const MemoryCardInnerClass = 
      'MemoryCardInner ' + (isFlipped === true && 'flipped');
  
    return (
      <div className="MemoryCard" onClick={this.clickHandler}>
        <div className={MemoryCardInnerClass}>
          <div className="MemoryCardBack">
          <img src="https://www.digitalcrafts.com/img/digitalcrafts-logo-white-y.png" alt=""></img>
          </div>
          <div className="MemoryCardFront"><p>∆</p>
          </div>
        </div>
        </div>
    );
  }
}

export default MemoryCard;