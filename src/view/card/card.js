import React from 'react';
// import cardData from '../../data/staff.json'
import './card.css'

class Card extends React.Component {

    render() {


        return (
            <div className="card">
             
             <div>
              <img src={this.props.elm.avatar} ></img>
            </div>

             <div className="name">{this.props.elm.firstname} {this.props.elm.lastname}</div>
             <div className="job">{this.props.elm.job}</div>
            </div>
        )
    }
}

export default Card;