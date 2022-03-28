import React from 'react'
import CardP from '../components/CardP'
import Card1 from '../assets/Card-list/card1.png'
import Card1Hover from'../assets/Card-list/card1Hover.png'
import Card2 from '../assets/Card-list/card2.png'
import Card2Hover from'../assets/Card-list/card2Hover.png'
import Card3 from '../assets/Card-list/card3.png'
import Card3Hover from '../assets/Card-list/card3Hover.png'
import '../style/layout/cardList.scss'

const CardList = () => {
  return (
    <div className='cardlist-container'>
        <div className="cardlist-li">
            <CardP Card={Card1} CardHover={Card1Hover}/>
        </div>
        <div className="cardlist-li">
            <CardP Card={Card2} CardHover={Card2Hover}/>
        </div>
        <div className="cardlist-li">
            <CardP Card={Card3} CardHover={Card3Hover}/>
        </div>
    </div>
  )
}

export default CardList