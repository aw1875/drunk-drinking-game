import React from 'react'

class Player extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: this.props.name,
            location: this.props.location,
            length: this.props.length,
            turn: this.props.turn
        }
    }

    render() {
        return (
            <div className="player">
                <p id="playerName">{this.props.name} - {this.props.location}/{this.props.length}</p>
                {/* {this.state.turn === true ? <p>OK</p> : <p id="playerName">{this.props.name}</p>} */}
            </div>
        )
    }
}

export default Player