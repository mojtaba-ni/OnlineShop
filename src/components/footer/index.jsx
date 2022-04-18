import React from 'react'
import telegram from '../../assets/telegram.png' 
import webSite from '../../assets/webSite.png' 
import instagram from '../../assets/instagram.png' 
import Contact from '../contact'
import { motion } from 'framer-motion'
import { OpacityAnimate,FooterContactAnimate} from '../../utils/Animation'
import '../../style/components/footer.scss'

export default () => {
  return (
    <div className='footer-container'>
        <motion.div className="footer-box"
        variants={OpacityAnimate} initial="hidden" whileInView="visible"
        viewport={{once:true}}>
            <div className="footer-li">
                <h3>درباره ما</h3>
                <p>
                استفاده از فناوری برای خلق تجربه خوشایند خرید برای مشتریان، توانمندسازی کسب‌وکارهای ایرانی و کمک به گذار آن‌ها به اقتصاد دیجیتال برای دستیابی به بازاری به‌وسعت ایران و خاورمیانه. همچنین رشد شایستگی‌های حرفه‌ای کارکنان مجموعه یکی از ماموریت‌های ماست
                </p>
            </div>
            <div className="footer-li">
                <h3>راه های ارتباطی</h3>
                <div className="comunicaate-container">
                    <p>آدرس:تهران-خیابان-</p>
                    <p>ایمیل www.onlineshop.com</p>
                    <p>شماره: 021-3253284</p>
                </div>
            </div>
            <div className="footer-li">
                <h3>خدمات مشتریان</h3>
                <p>پرسش های متداول</p>
                <p>رویه های بازگرداندن کالا</p>
                <p>تماس با ما</p>
                <p>درباره ما</p>
            </div>
        </motion.div>
        <motion.div className="contact-box"
        variants={FooterContactAnimate} initial="hidden" whileInView="visible" viewport={{once:true}}>
            <div className="contact-li">
                <Contact src={telegram}/>
            </div>
            <div className="contact-li">
                <Contact src={webSite}/>
            </div>
            <div className="contact-li">
                <Contact src={instagram}/>
            </div>
        </motion.div>
        <div className='footer-end'>
            <motion.h4 variants={FooterContactAnimate} initial="hidden" whileInView="visible"
            viewport={{once:true}}>
                کلیه حقوق متعلق به فروشگاه آنلاین شاپ است
            </motion.h4>
        </div>
    </div>
  )
}

