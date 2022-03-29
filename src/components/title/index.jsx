import React from 'react'
import shopIcon from '../../assets/navbar/iconshop.png'
import '../../style/components/title.scss'

export default () => {
  return (
    <div className='title-container'>
        <div className="title-box">
            <img src={shopIcon} alt="onlineshop" />
            <h2>آنلاین شاپ</h2>
        </div>
        <div className="title-address">
            <p>www.onlineshop.com</p>
        </div>
    </div>
  )
}

 