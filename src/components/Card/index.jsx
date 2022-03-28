import React from 'react'
import Paper from '@material-ui/core/Paper';
import playstation4 from '../../assets/playstation4.png';
import '../../style/components/card.scss'

export default () => {
  return (
    <Paper className='card-container'>
        <div className="card-header">
            <img src={playstation4} alt="" />
        </div>
        <div className="card-body">
            <div className="body-title">
                <h3>Xbox series X</h3>
                <p>کنسول بازی مایکروسافت</p>
            </div>
            <div className="body-price">
                <p>1290000</p>
                <p className='price-range'>تومان</p>
            </div>
        </div>
    </Paper>
  )
}

 