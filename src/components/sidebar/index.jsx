import React from 'react'
import '../../style/components/sidebar.scss'

export default () => {
  return (
    <div className='sidebar'>
        <div className="sidebar-user">
            <div className="button-box">
              <button>حساب کاربری</button>
            </div>
            <div className="border"><p className='border-line'></p></div>
        </div>
        <nav className='nav-container'>
            <div className="nav-li">
              <a href="">صفحه اصلی</a>
            </div>
            <div className="nav-li">
              <a href="">دسته بندی محصولات</a>
            </div>
            <div className="nav-li">
              <a href="">علاقه مندی ها</a>
            </div>
            <div className="nav-li">
              <a href="">ارتباط با ما</a>
            </div>
            <div className="nav-li">
              <a href="">درباره ما</a>
            </div>
            <div className="border"><p className='border-line'></p></div>
        </nav>
    </div>
  )
}

 