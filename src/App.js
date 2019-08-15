import React from 'react';
import './App.css';
import Display from './Display';
import Drumpad from './Drumpad';

class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      display: "SJB-30"
    }

    this.playSound = this.playSound.bind(this);
    this.updateDisplay = this.updateDisplay.bind(this);
  }

  updateDisplay(displayText){
    this.setState({
      display: displayText
    })
  }

    
  playSound(soundID){
    if(Number.isInteger(soundID)){
      soundID = String.fromCharCode(soundID);
    }
    var audio;
    switch(soundID){
      case 'Q':
        this.updateDisplay("Kick");
        audio = document.querySelector('#Q');
        audio.currentTime = 0;
        audio.play();
        break;
      case 'W':
        this.updateDisplay("Clap");
        audio = document.querySelector('#W');
        audio.currentTime = 0;
        audio.play();
        break;
      case 'E':
        this.updateDisplay("Boom");
        audio = document.querySelector('#E');
        audio.currentTime = 0;
        audio.play();
        break;
      case 'A':
        this.updateDisplay("Hi-hat");
        audio = document.querySelector('#A');
        audio.currentTime = 0;
        audio.play();
        break;
      case 'S':
        this.updateDisplay("Open-hat")
        audio = document.querySelector('#S');
        audio.currentTime = 0;
        audio.play();
        break;
      case 'D':
        this.updateDisplay("Ride")
        audio = document.querySelector('#D');
        audio.currentTime = 0;
        audio.play();
        break;
      case 'Z':
        this.updateDisplay("Snare");
        audio = document.querySelector('#Z');
        audio.currentTime = 0;
        audio.play();
        break;
      case 'X':
        this.updateDisplay("Tink");
        audio = document.querySelector('#X');
        audio.currentTime = 0;
        audio.play();
        break;
      case 'C':
        this.updateDisplay("Tom");
        audio = document.querySelector('#C');
        audio.currentTime = 0;
        audio.play();
        break;

      default: 
        return;
    }

  }

  componentDidMount(){
    document.addEventListener("keydown",(event) =>{
           this.playSound(event.keyCode);
  });
}




  render(){
  return (
    <div className = "drum-machine">
      <Display displayName = {this.state.display} />
      <div id ="gridContainer-drumpads" className= "center">
      <Drumpad playSound = {this.playSound} soundName = "kick" sound = "./sounds/kick.wav" keyLetter = "Q"/>
      <Drumpad playSound = {this.playSound} soundName = "clap" sound ="./sounds/clap.wav" keyLetter = "W"/>
      <Drumpad playSound = {this.playSound} soundName = "boom" sound ="./sounds/boom.wav" keyLetter = "E"/>
      <Drumpad playSound = {this.playSound} soundName = "hihat" sound ="./sounds/hihat.wav" keyLetter = "A"/>
      <Drumpad playSound = {this.playSound} soundName = "openhat" sound ="./sounds/openhat.wav" keyLetter = "S"/>
      <Drumpad playSound = {this.playSound} soundName = "ride" sound ="./sounds/ride.wav" keyLetter = "D"/>
      <Drumpad playSound = {this.playSound} soundName = "snare" sound ="./sounds/snare.wav" keyLetter = "Z"/>
      <Drumpad playSound = {this.playSound} soundName = "tink" sound ="./sounds/tink.wav" keyLetter = "X"/>
      <Drumpad playSound = {this.playSound} soundName = "tom" sound ="./sounds/tom.wav" keyLetter = "C"/>
      </div>
    </div>
      
  );
  }
}

export default App;
