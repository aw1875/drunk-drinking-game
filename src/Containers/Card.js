import React from 'react'

class Card extends React.Component{

    constructor() {
        super()
        this.state = {
            visible: 'hidden'
        }
    }

    rule() {
        if (this.state.display === 'hidden') {
            this.setState({
                visible: 'visible'
            })
        }
    }

    getRule(card) {
        return (this.card.rule)
    }

    render() {
        return (
            <div className="main">
                <div className="rule" style={{visibility: this.state.visible}}><h1>{this.props.rule}</h1></div>
                <div className="mainContent">
                    <div className='card' onClick={this.rule()}>
                        <img id="cardImage" src={this.props.image} alt={this.props.text}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Card