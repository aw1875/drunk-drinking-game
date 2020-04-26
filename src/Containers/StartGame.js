import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons'

class StartGame extends React.Component {
    refresh() {
        window.location.reload();
    }
    render() {
        const start = <FontAwesomeIcon icon={faPlayCircle} />
        return (
            <div className="main">
                <div className="mainContent">
                    <div className='card'>
                        <img id="cardImage" src={this.props.image} alt={this.props.text}/>
                        {this.props.og === true ? <a id="startButton" onClick={this.props.data.start}>{start}</a> : null}
                    </div>
                </div>
            </div>
        )
    }
}
export default StartGame