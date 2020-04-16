import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRedo } from '@fortawesome/free-solid-svg-icons'

class GameOver extends React.Component {
    refresh() {
        window.location.reload();
    }
    render() {
        const restart = <FontAwesomeIcon icon={faRedo}/>
        return (
            <div className="main">
                <div className="mainContent">
                    <div className='card'>
                        <img id="cardImage" src={this.props.image} alt={this.props.text}/>
                        <a id="restartButton" onClick={this.refresh}>{restart}</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default GameOver