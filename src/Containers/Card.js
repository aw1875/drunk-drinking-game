import React from 'react'

class Card extends React.Component{
    render() {
        return (
            <div className="main">
                <div className="mainContent">
                    <div className='card'>
                        <img id="cardImage" src={this.props.image} alt={this.props.text}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Card