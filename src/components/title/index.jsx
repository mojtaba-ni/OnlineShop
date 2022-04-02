import React from 'react'
import shopIcon from '../../assets/navbar/iconshop.png'
import { motion } from 'framer-motion'
import {CardListAnimate} from "../../utils/Animation"
import '../../style/components/title.scss'

export default () => {
  return (
    <motion.div className='title-container'
    variants={CardListAnimate}   initial="hidden"  whileInView="visible" viewport={{once:true}}>
        <div className="title-box">
            <img src={shopIcon} alt="onlineshop" />
            <h2>آنلاین شاپ</h2>
        </div>
        <div className="title-address">
            <p>www.onlineshop.com</p>
        </div>
    </motion.div>
  )
}

 