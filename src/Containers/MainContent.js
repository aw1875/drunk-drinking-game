import React from 'react'

// Font Awesome Imports
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons'

// Shuffle Imports
import shuffle from 'shuffle-array'

// ReactDice Imports
import ReactDice from 'react-dice-complete'
import 'react-dice-complete/dist/react-dice-complete.css'

// Component Imports
import StartGame from './StartGame'
import Locations from './Locations'
import Players from './Players'
import Card from './Card'
import cardsData from '../data/cardsData'
import GameOver from './GameOver'

const cardsComponents = shuffle(cardsData.map(card => <Card text={card.text} rule={card.rule} image={card.image} />))

class MainContent extends React.Component {
    constructor(props) {
        super(props)

        // Set default states
        this.state = {
            count: 0,
            players: [],
            currentRole: 0,
            currentPlayer: ""
        }

        // Bind functions
        this.handleStart = this.handleStart.bind(this)
        this.getPlayers = this.getPlayers.bind(this)
        this.rollDoneCallback = this.rollDoneCallback.bind(this)
        this.toggleTurn = this.toggleTurn.bind(this)
    }

    // Set players state to list of values from Players component
    getPlayers(name, location, turn) {
        this.setState({
            players: [...this.state.players, {name, location, turn}]
        })
    }

    // Start the game
    handleStart() {
        if (this.state.players.length >= 2) {
            this.toggleTurn()
        } else {
            alert("You need to add at least 2 players to start!")
        }
    }

    // Decide whos turn it is supposed to be
    toggleTurn() {
        
        // Set currentRole state to be appropriate player
        this.setState({
            currentRole: this.state.players[this.state.count].location
        })

        // Check to make sure the counter stays less than the bounds of our list
        if (this.state.count === this.state.players.length - 1) {
            this.setState({ count: 0 })
        } else {
            this.setState(prevState => {
                return {
                    count: prevState.count + 1
                }
            })
        }

        // Check to make sure the proper user is being updated for their turn, and all others are set to false
        if (this.state.players.length > 1 && this.state.count === 0) {
            this.state.players[this.state.count].turn = true
            this.state.players[this.state.players.length - 1].turn = false
        } else if (this.state.count !== 0) {
            this.state.players[this.state.count].turn = true
            this.state.players[this.state.count - 1].turn = false
        }
        
        // Set the currentPlayer state so that we can use their name later
        this.setState({ 
            currentPlayer: this.state.players[this.state.count].name
        })
    }

    // Roll the dice and update accordingly
    rollDoneCallback(num) { 

        // Check that the correct user's board location is being used
        if (this.state.players.length > 1 && this.state.count === 0) {
            this.state.players[this.state.players.length - 1].location = this.state.players[this.state.players.length - 1].location + num
            
            // Set currentRole to the user's current board location so we can display the correct card
            this.setState({
                currentRole: this.state.players[this.state.players.length - 1].location
            })
        } else if (this.state.count !== 0) {
            this.state.players[this.state.count - 1].location = this.state.players[this.state.count - 1].location + num
            
            // Set currentRole to the user's current board location so we can display the correct card
            this.setState({
                currentRole: this.state.players[this.state.count - 1].location
            })
        }
    }
    

    render() {
        const next = <FontAwesomeIcon icon={faArrowCircleRight} />
        
        return (
            <div>
                {/* Create Player Components based on players state list */}
                <Players data={{getPlayers: this.getPlayers.bind(this), players: this.state.players}} />
                
                {/* Create a label for who's turn it is if there is a value set (once the game is started) */}
                {this.state.currentPlayer !== "" && this.state.currentRole < cardsComponents.length ? <div className="currentName"><h1>It's {this.state.currentPlayer}'s turn</h1></div> : null}
                
                {/* Start Card/Creating the Card Components and display the appropriate one based on what the user should be seeing */}
                {this.state.currentRole === 0 ? this.state.currentPlayer === ""  ? <StartGame image="./img/start.png" text="Start" og={true} data={{start:this.handleStart.bind(this)}} /> : <StartGame image="./img/start.png" text="Start" og={false} data={{start:this.handleStart.bind(this)}} />
                : cardsComponents[this.state.currentRole]}
                
                <div className="dieContainer">
                    {/* Instantiate a die from ReactDie if game has started */}
                    {this.state.currentRole < cardsComponents.length && this.state.currentPlayer !== "" ? <div id="die"><ReactDice numDice={1} outline={true} outlineColor={"#000"} faceColor={"#fff"} dotColor={"#000"} dieSize={100} rollTime={1} rollDone={this.rollDoneCallback} ref={dice => this.reactDice = dice} /></div> : null}                 
                </div>

                <Locations players={this.state.players} length={cardsComponents.length} />
                
                {/* Next Button. Show only once the game starts and remove once one user makes it to the of the game. At that point create a GameOver Component and display it. */}
                {this.state.currentRole < cardsComponents.length ? this.state.currentPlayer !== "" ? <a id="nextButton" onClick={this.toggleTurn}>{next}</a> : null : <GameOver image="./img/game-over.png" text="Game Over" currentPlayer={this.state.currentPlayer}/>}    
            </div>
        )
    }
    
}

export default MainContent