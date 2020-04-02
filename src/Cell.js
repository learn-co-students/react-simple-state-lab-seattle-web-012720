import React, { Component } from 'react';
//import Cell from './Cell';
export default class Matrix extends Component 
{
    constructor(props) {
        super(props)
        this.state = {color: this.props.value} // ...define initial state with a key of 'color' set to the 'value' prop
      }

      handleclick = () => { this.setState({  color: '#333'});

      }
      render() {
          return <div onClick={this.handleclick} className = "cell" style={{backgroundColor: this.state.color}}></div>


      }


}