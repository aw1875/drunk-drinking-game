import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinusCircle } from '@fortawesome/free-solid-svg-icons'

class Player extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: this.props.name,
            location: this.props.location,
            turn: this.props.turn
        }
        this.toggleTurn = this.toggleTurn.bind(this)
    }

    toggleTurn() {
        alert(this.props.turn)
    }

    render() {
        const deleteUser = <FontAwesomeIcon icon={faMinusCircle} />
        return (

            <div className="player">
                {JSON.stringify(this.props.players)}
                <p id="playerName">{this.props.name}</p>
            </div>
        )
    }
}

export default Player