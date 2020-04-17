import React from 'react'

import Player from './Player'

class Locations extends React.Component {
    render() {
        return (
            <div className="locations">
                <h1>Board Locations</h1>
                {this.props.players.map(player => (
                    <div className="player">
                        <p id="playerLocation">{player.name} - {player.location}/{this.props.length}</p>
                    </div>
                ))}   
            </div>
        )
    }
}

export default Locations