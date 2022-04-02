import React from 'react'
import controller from '../assets/xboxController.png'
import Button from '../components/Button'
import { motion } from 'framer-motion'
import {ConrtollerAnimate,CardListAnimate} from "../utils/Animation"
import '../style/layout/about.scss'

const About = () => {
  return (
    <div className='about-container'> 
        <div className="about-box">
            <div className="about-relative">
                <motion.div className="about-controller"
                variants={ConrtollerAnimate}   initial="hidden"    whileInView="visible" viewport={{once:true}}>
                    <img src={controller} alt="about online shop" />
                </motion.div>
                <motion.div className="about-desc"
                variants={CardListAnimate}   initial="hidden"    whileInView="visible" viewport={{once:true}}>
                    <h2>درباره آنلاین شاپ</h2>
                    <p>لورم ایپسوم یا طرح‌نما به متنی آزمایشی و بی‌معنی در صنعت چاپ صفحه‌آراییو طراحی گرافیک گفته می‌شود. طراح گرافیک از این متن به عنوان عنصریازترکیب بندی برای پر کردن صفحه و ارایه اولیه شکل ظاهری و کلی طرح سفارش گرفته شده استفاده می نماید .تا از نظر گرافیکی نشانگر چگونگی نوع و اندازه فونت و ظاهر متن باشد لورم ایپسوم یا طرح‌نما به متنی آزمایشی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود.  </p>
                    <Button title="ادامه مطلب" color={true}/>
                </motion.div> 
            </div>      
        </div>
    </div>
  )
}

export default About