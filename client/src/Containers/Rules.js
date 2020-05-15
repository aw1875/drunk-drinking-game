import React from 'react'

import Player from './Player'
import Card from './Card'

class Rules extends React.Component {

    render() {
        return (
            <div className="rulesDiv">
                <h1>Rule</h1>
                <div className="rules">
                    <p id="rule">{this.props.currentRule}</p>
                </div> 
            </div>
        )
    }
}

export default Rules