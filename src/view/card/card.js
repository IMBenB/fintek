import React from 'react';
import cardData from '../../data/staff.json'
import './card.css'

class Card extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            avatar: Math.floor(Math.random() * 100)
           
        }
    }
    render() {
        let picture = `${cardData[this.state.avatar].avatar}?img=${Math.floor((Math.random() * 70) + 1)}`



        return (
            <div className="card">

                <div>
                    <img src={picture} ></img>
                </div>

                <div className="name">{cardData[this.state.avatar].firstname} {cardData[this.state.avatar].lastname}</div>
                <div className="job">{cardData[this.state.avatar].job}</div>
            </div>
        )
    }
}

export default Card;