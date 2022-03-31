import React from 'react'
import Paper from '@material-ui/core/Paper';
import '../../style/components/cardp.scss'

export default ({Card,CardHover,size}) => {
  return (
    <Paper className={`${size===true ? 'CardList-size' : 'cardList-container'}`}>
        <img className='card-img'
            src={Card}
            onMouseOver={e => (e.currentTarget.src = CardHover)}
            onMouseOut={e => (e.currentTarget.src = Card)}
        />
    </Paper>
  )
}

