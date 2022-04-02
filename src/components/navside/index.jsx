import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { NavbarAnimate } from '../../utils/Animation'
import '../../style/components/navside.scss'

export default () => {
    
  return (
        <motion.nav className='navside' variants={NavbarAnimate} initial="hidden" animate="visible">
            <ul className='navside-box'>
                <li>
                    <Link to={'/'} className='navside-link'><p>صفحه اصلی</p></Link>
                    <div className='color'></div>
                </li>
                <li>
                    <Link to={'/Category'} className='navside-link'><p>دسته بندی محصولات</p></Link>
                    <div className='color'></div>
                </li>
                <li>
                    <p>علاقه مندی ها</p>
                    <div className='color'></div>
                </li>
                <li>
                    <p>ارتباط با ما</p>
                    <div className='color'></div>
                </li>
                <li>
                    <p>درباره ما</p>
                    <div className='color'></div>
                </li>
            </ul>
        </motion.nav>
  )
}

 