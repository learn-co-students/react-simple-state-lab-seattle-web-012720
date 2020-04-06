import React, {Component} from 'react';

export default class Cell extends Component {
     constructor (props) {
         super()
         this.state = {color: props.value}
         console.log(this.state)
     }

     updateHex = () => {
         this.setState(
            {color: '#333'}
         )
     }

    render () {
        return (
            <div
            className="cell" 
            style={{backgroundColor: this.state.color}}
            onClick={this.updateHex}></div>
        )
    }
}