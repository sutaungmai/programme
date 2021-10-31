import React, { Component } from 'react'

class Counter extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             count: 0
        }
    }

    Increment() {
        // this.setState ({
        //     count: this.state.count +1
        // }, () => {console.log('Callback Value', this.state.count)})

        this.setState((prevState, props) => ({
            count: prevState.count +1
        }))
        console.log(this.state.count)
    }

    incrementFive() {
        this.Increment()
        this.Increment()
        this.Increment()
        this.Increment()
        this.Increment()
    }
    

    render() {
        return (
            <div>
                <div>count - {this.state.count} </div>
                <button onClick = {() => this.incrementFive()}>Increment</button>
            </div>
        )
    }
}

export default Counter