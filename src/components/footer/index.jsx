import React from 'react'
import telegram from '../../assets/telegram.png' 
import webSite from '../../assets/webSite.png' 
import instagram from '../../assets/instagram.png' 
import Contact from '../contact'
import '../../style/components/footer.scss'

export default () => {
  return (
    <div className='footer-container'>
        <div className="footer-box">
            <div className="footer-li">
                <h3>درباره ما</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet ut suscipit sint recusandae nobis est expedita voluptatibus dolor, similique blanditiis reiciendis nesciunt quas incidunt minus eius, nostrum minima, repellendus deserunt!</p>
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
        </div>
        <div className="contact-box">
            <div className="contact-li">
                <Contact src={telegram}/>
            </div>
            <div className="contact-li">
                <Contact src={webSite}/>
            </div>
            <div className="contact-li">
                <Contact src={instagram}/>
            </div>
        </div>
        <div className='footer-end'>
            <h4>کلیه حقوق متعلق به فروشگاه آنلاین شاپ است</h4>
        </div>
    </div>
  )
}

