import React from 'react'
import Paper from '@material-ui/core/Paper';
import ps4 from '../../assets/cardPr/monitor1.png'
import '../../style/components/card.scss'

export default ({width,img,product,height}) => {
  return (
    <Paper className='card-container' style={{width: `${width}`}}>
        <div className="card-header">
            {img && <img src={img} alt=""  style={{ height:`${height}`}} />}
            {product && !product.change && <img src={product.img} alt="" />  }
        </div>
        <div className="card-body">
            <div className="body-title">
                <h3>{product && product.title}</h3>
                <p>{product && product.titleP}</p>
            </div>
            <div className="body-price">
                <p>{product && product.price}</p>
                <p className='price-range'>تومان</p>
            </div>
        </div>
    </Paper>
  )
}

 