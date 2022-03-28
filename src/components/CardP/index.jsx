import React from 'react'
import Paper from '@material-ui/core/Paper';
import '../../style/components/cardp.scss'

export default ({Card,CardHover}) => {
  return (
    <Paper className='cardList-container'>
        <img className='card-img'
            src={Card}
            onMouseOver={e => (e.currentTarget.src = CardHover)}
            onMouseOut={e => (e.currentTarget.src = Card)}
        />
    </Paper>
  )
}

