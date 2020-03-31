import React, {Component} from 'react'

export default class Cell extends React.Component {

    constructor(props) {
        super()
        this.state = {
            color: props.value
        }
    }

    setColor = () => 

    this.setState({
        color: '#333'
    })

    render () {
        console.log(this.props)
        return <div className="cell" onClick={this.setColor} style={{backgroundColor: this.state.color}}>

        </div>
    }


}