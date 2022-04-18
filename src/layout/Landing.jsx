import React from 'react'
import part1 from '../assets/part1.png'
import part2 from '../assets/part2.png'
import part2Hover from '../assets/part2Hover.png'
import part1Hover from '../assets/part1Hover.png'
import star from '../assets/noun-star.svg'
import comment from '../assets/noun-comment.png'
import send from '../assets/noun-send.svg'
import complete from '../assets/noun-complete.svg'
import Card from '../components/Card'
import Button from '../components/Button'
import CardList from './CardList'
import About from './About'
import Title from '../components/title'
import Tabs from '../components/Tabs'
import { motion } from 'framer-motion'
import { spechials } from '../utils/gamePr'
import {ImgAnimate,ImgAnimateRight,PerformAnimate,SpecialAnimate} from "../utils/Animation"
import '../style/layout/landing.scss'

const Landing = () => {
  return (
    <>
        <div className='landing-container'>
            <motion.img className='landing-img2'
                src={part2}
                onMouseOver={e => (e.currentTarget.src = part2Hover)}
                onMouseOut={e => (e.currentTarget.src = part2)}
                variants={ImgAnimate}   initial="hidden"    whileInView="visible" viewport={{once:true}}
            />
            <motion.img className='landing-img1'
                src={part1}
                onMouseOver={e => (e.currentTarget.src = part1Hover)}
                onMouseOut={e => (e.currentTarget.src = part1)}
                variants={ImgAnimateRight}   initial="hidden"    whileInView="visible" viewport={{once:true}}
            />
        </div>
        <motion.div className="landing-perform"
        variants={PerformAnimate}   initial="hidden"  whileInView="visible" viewport={{once:true}}>
            <div className="perform-li">
                <div className="perform-desc">
                    <h3>تضمین اصالت کالا</h3>
                    <p>محصولات کاملا اورجینال</p>
                </div>
                <div className="perform-img">
                    <img src={star} alt="" />
                </div>
            </div>
          
            <div className="perform-li">
                <div className="perform-desc">
                    <h3>پشتیبانی ۲۴ ساعته</h3>
                    <p>آماده پاسخگویی</p>
                </div>
                <div className="perform-img">
                    <img src={comment} alt="" />
                </div>
            </div>
            <div className="perform-li">
                <div className="perform-desc">
                    <h3>ارسال سریع کالا</h3>
                    <p>به تمام نقاط ایران</p>
                </div>
                <div className="perform-img">
                    <img src={send} alt="" />
                </div>
            </div>
            <div className="perform-li">
                <div className="perform-desc">
                    <h3>پرداخت آنلاین</h3>
                    <p>با درگاه امن</p>
                </div>
                <div className="perform-img">
                    <img src={complete} alt="" />
                </div>
            </div>
        </motion.div>
        <div className="landing-spacial">
            <motion.div className="spacial"
            variants={SpecialAnimate}   initial="hidden" whileInView="visible" >
                <div className="speacial-desc">
                    <div className="spacial-title">
                        <div className="title-header">
                            <h1>پیشنهادات ویژه</h1>
                            <p>کالا هایی که شامل تخفیف می باشند</p>
                            <div className="button-box">
                                <Button title="مشاهده همه"/>
                            </div>
                        </div>
                    </div>
                    <div className="spacial-list">
                        {spechials.map((spechial)=>(
                            <div className="card-li">
                                <Card product={spechial}/>
                            </div>
                        ))
                        }
                    </div>
                </div>
            </motion.div>
        </div>
        <CardList/>
        <div className="tabs-box">
            <Tabs/>
        </div>
        <About/>
        <Title/>
        
    </>
  )
}

export default Landing