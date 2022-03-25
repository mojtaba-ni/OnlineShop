import React from 'react'
import shop from '../../assets/navbar/shop.png'
import searchIcon from '../../assets/navbar/searchicon.png'
import shopIcon from '../../assets/navbar/iconshop.png'
import '../../style/components/navbar.scss'
import Navside from '../navside'

export default () => {
  return (
    <div className='navbar'>
      <div div className="navbar-container">
        <div className="user-container">
          <div className='userShop-border'>
            <div className="img-box">
              <img src={shop} alt="خرید" />
            </div>
            <div className="button-box">
              <button>حساب کاربری</button>
            </div>
          </div>
        </div>
        <div className="search-box">
          <input type="text" placeholder='جستجو' />
          <img src={searchIcon} alt="search" />
        </div>
        <div className="site-icon">
          <h3>آنلاین شاپ</h3>
          <img src={shopIcon} alt="آنلاین شاپ" />
        </div>
      </div>
      <Navside/>
    </div>
  )
}

