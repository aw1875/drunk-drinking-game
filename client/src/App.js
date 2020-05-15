import React from 'react'

import {BrowserRouter as Router, Route} from 'react-router-dom'

import './App.css'
import './App-Mobile.css'
import MainContent from './Containers/MainContent.js'
import Create from './Containers/Create.js'

function App() {
    return (
        <Router>
            <Route path="/" exact component={Create}/>
            <Route path="/game" component={MainContent}/>
        </Router>
        // <div>
        //     <MainContent />
        // </div>
    )
}

export default App