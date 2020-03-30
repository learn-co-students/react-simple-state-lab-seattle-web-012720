import React from 'react';

export default class Cell extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            color: props.value
        }
    }

    handleClick = () => {
     this.setState({
        color: '#333'
        })
    }

    render(){
        return (
            <div onClick={this.handleClick} className="cell" 
            style={{backgroundColor: this.state.color}}>
            </div>
        )
    }
    
}

