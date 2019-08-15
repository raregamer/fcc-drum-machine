import React from 'react'

class Display extends React.Component{
    render(){
        return(<div className="container-display">
            <div id="display">{this.props.displayName}</div>
            <span id="logo">SJB-30</span>
        </div>);
    }
}

export default Display;