import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons'
import { faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons'
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons'


import ReactDice from 'react-dice-complete'
import 'react-dice-complete/dist/react-dice-complete.css'


import Card from './Card'
import cardsData from '../data/cardsData'
import GameOver from './GameOver'
import Player from './Player'
import Players from './Players'


class MainContent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0,
            players: [],
            currentRole: 0,
            currentPlayer: ""
        }
        this.rollDoneCallback = this.rollDoneCallback.bind(this)
        this.getPlayers = this.getPlayers.bind(this)
        this.toggleTurn = this.toggleTurn.bind(this)
        this.handleStart = this.handleStart.bind(this)
    }

    getPlayers(name, location, turn) {
        this.setState({
            players: [...this.state.players, {name, location, turn}]
        })
    }

    toggleTurn() {
        this.setState({
            currentRole: this.state.players[this.state.count].location
        })
        if (this.state.count === this.state.players.length - 1) {
            this.setState({ count: 0 })
        } else {
            this.setState(prevState => {
                return {
                    count: prevState.count + 1
                }
            })
        }
        if (this.state.players.length > 1 && this.state.count === 0) {
            this.state.players[this.state.count].turn = true
            this.state.players[this.state.players.length - 1].turn = false
        } else if (this.state.count !== 0) {
            this.state.players[this.state.count].turn = true
            this.state.players[this.state.count - 1].turn = false
        }
        
        this.setState({ 
            currentPlayer: this.state.players[this.state.count].name
        })
    }

    rollDoneCallback(num) { 
        if (this.state.players.length > 1 && this.state.count === 0) {
            this.state.players[this.state.players.length - 1].location = this.state.players[this.state.players.length - 1].location + num
            this.setState({
                currentRole: this.state.players[this.state.players.length - 1].location
            })
        } else if (this.state.count !== 0) {
            this.state.players[this.state.count - 1].location = this.state.players[this.state.count - 1].location + num
            this.setState({
                currentRole: this.state.players[this.state.count - 1].location
            })
        }
    }

    handleStart() {
        if (this.state.players.length >= 2) {
            this.toggleTurn()
            document.getElementById("startButton").hidden = true
        } else {
            alert("You need to add at least 2 players to start!")
        }
    }
    
    render() {
        const cardsComponents = cardsData.map(card => <Card text={card.text} rule={card.rule} image={card.image}/>)
        const id = this.state.count
        const next = <FontAwesomeIcon icon={faArrowCircleRight} />
        const back = <FontAwesomeIcon icon={faArrowCircleLeft} />
        const start = <FontAwesomeIcon icon={faPlayCircle} />
        return (
            <div>
                <Players data={{getPlayers: this.getPlayers.bind(this), players: this.state.players}} />
                
                {this.state.currentPlayer !== "" ? <div className="currentName"><h1>It's {this.state.currentPlayer}'s turn</h1></div> : null}
                <a id="startButton" onClick={this.handleStart}>{start}</a>
                {cardsComponents[this.state.currentRole]}
                {this.state.currentRole < cardsComponents.length ? this.state.currentPlayer !== "" ? <a id="nextButton" onClick={this.toggleTurn}>{next}</a> : null : <GameOver image="./img/game-over.png" text="Game Over"/>}    
                <div id="die">
                    <ReactDice
                    numDice={1}
                    outline={true}
                    outlineColor={"#000"}
                    faceColor={"#fff"}
                    dotColor={"#000"}
                    dieSize={100}
                    rollTime={1}
                    rollDone={this.rollDoneCallback}
                    ref={dice => this.reactDice = dice}
                    />
                </div> 
            </div>
        )
    }
    
}

export default MainContent