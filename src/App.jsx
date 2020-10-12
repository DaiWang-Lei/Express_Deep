import React, { Component } from 'react'

class App extends Component {
    render() {
        return (
           <ul className='my-list'>
               <li>{false?'Vue':'React'}</li>
               <li>I use React</li>
           </ul>
        )
    }
}

export default App