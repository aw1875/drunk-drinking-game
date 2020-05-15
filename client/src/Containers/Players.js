import React from 'react'
import Player from './Player'

class Players extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            players: [],
            name: "",
            location: 0,
            turn: false
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    addPlayer = (name, location, turn) => {
        this.props.data.getPlayers(name, location, turn)
    }


    handleSubmit = event => {
        event.preventDefault()
        this.addPlayer(this.state.name, 0, false)
        this.setState({
            name: ""
        })
    }    

    render() {
        return (
            <div className="players">
                <h1>Players</h1>
                <form onSubmit={this.handleSubmit}>
                    <input name="name" value={this.state.name} onChange={this.handleChange} placeholder="Players Name" autocomplete="off" required/>
                    <button type="submit">Add Player</button>
                </form>
                {this.props.data.players.map(player => (
                    <Player name={player.name} location={player.location} turn={player.turn} length={this.props.data.length}/>
                ))}   
            </div>
        )
    }
}

export default Players