import React, {Component} from 'react'

class App extends Component {
    message = 'default message'
    // equivalent to the following
    /*constructor(props) {
        super(props)
        this.message = 'default message'
    }*/

    onClick = (e) => {
        alert(this.message)
    }

    render() {
        return (
            <button onClick={this.onClick}>This is a test</button>
        )
    }
}

export default App
