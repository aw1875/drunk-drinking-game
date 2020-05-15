import React, { Component } from 'react'
import {CopyToClipboard} from 'react-copy-to-clipboard'
import { Link } from 'react-router-dom'

import "../Style/Game.css"

class Create extends Component {
    constructor() {
        super()
        this.state = {
            link: "",
            linkURL: "",
            copied: false,
            disabled: true
        }
        this.generateLink = this.generateLink.bind(this)
        this.copy = this.copy.bind(this)
    }

    generateLink(e) {
        e.preventDefault()
        const link = Math.random().toString(36).substr(2) + Math.random().toString(36).substr(2)

        this.setState ({
            link: link,
            linkURL: "https://drunk.cashcollege.me/game?id=" + link,
            disabled: false
        })
    }

    copy(e) {
        this.setState({copied: true})
        setTimeout(function() {
            this.setState({copied: false})
        }.bind(this), 5000)
    }

    render () {    
        return (
            <div className="create">
                {this.state.copied === true && <div className="copied">
                    <p>Link copied! This popup will disappear in 5 seconds...</p>
                </div>}
                <div className="game-link" >
                    <input className="link-text" type="text" placeholder="Game Link" value={this.state.linkURL} readOnly="readonly"/>
                    <input type="submit" value="Generate Link" onClick={e => this.generateLink(e)} />
                    {this.state.disabled === true ? 
                        <Link to={`/game?id=${this.state.link}`}>
                            <input id="game-disabled" type="submit" value="Go to Game" disabled="disabled"></input>
                        </Link>
                        :
                        <Link to={`/game?id=${this.state.link}`}>
                            <input id="to-game" type="submit" value="Go to Game"></input>
                        </Link>
                    }
                    {this.state.disabled === true ? 
                        <CopyToClipboard onCopy={e => this.copy()} text={this.state.linkURL}>
                            <input id="copy-disabled" type="submit" value="Copy Link" disabled="disabled"/>
                        </CopyToClipboard>
                        :
                        <CopyToClipboard onCopy={e => this.copy()} text={this.state.linkURL}>
                            <input id="copy-btn" type="submit" value="Copy Link"/>
                        </CopyToClipboard>
                    }
                </div>
            </div>
        )
    }
}

export default Create