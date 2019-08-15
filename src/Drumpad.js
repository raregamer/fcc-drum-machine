import React from 'react';

class Drumpad extends React.Component{



    

    render(){
        return(
            <div>
            <button onClick = {() => {this.props.playSound(this.props.keyLetter)}} id={this.props.soundName} className = "drum-pad">{this.props.keyLetter} 
            <audio id={this.props.keyLetter} src={this.props.sound} type="audio/wav" className="clip"> </audio>
            </button>
            </div>
        );
    }
}

export default Drumpad;