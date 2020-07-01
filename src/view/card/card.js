import React from 'react';
import cardData from '../../data/staff.json'
import './card.css'

class Card extends React.Component {

    render() {


        return (
            <div>
             
                {cardData.map((data, index)=>{
         
              return <div>{data.firstname}</div>
              }
          )}
            </div>
        )
    }
}

export default Card;