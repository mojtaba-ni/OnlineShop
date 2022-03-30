import React,{useState} from 'react'
import shop from '../../assets/navbar/shop.png'
import searchIcon from '../../assets/navbar/searchicon.png'
import shopIcon from '../../assets/navbar/iconshop.png'
import hamburger from '../../assets/navbar/more.png'
import Paper from '@material-ui/core/Paper';
import Navside from '../navside'
import '../../style/components/navbar.scss'
import MobileSearch from '../MobileSearch'
import Sidebar from '../sidebar'


export default () => {
  const [mobileSearch, setMobileSearch] = useState(false)
  const [showSidebar, setShowSidebar] = useState(false)

  const HandleMobileSearch = () => {
    setMobileSearch(!mobileSearch)
  }
  const HandleShowSidebar = () => {
    setShowSidebar(!showSidebar)
  }
  return (
    <div className='navbar'>
      <div div className="navbar-container">
        <div className="user-container">
          <div className='userShop-border'>
            <div className="imgSearch-box">
              <img src={searchIcon} alt="خرید"  onClick={HandleMobileSearch}/>
            </div>
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
          <div className="menuIcon-box">
            <Paper className="menuIcon-paper" onClick={HandleShowSidebar}>
              <img src={hamburger} alt="خرید" />
            </Paper>
          </div>
        </div>
      </div>
      <Navside/>
      {mobileSearch && <MobileSearch/>}
      {showSidebar && <Sidebar/>}
    </div>
  )
}

