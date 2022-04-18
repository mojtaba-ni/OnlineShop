import React from 'react'
import Card from '../components/Card'
import Title from '../components/title'
import Accordion from '../components/Accordion'
import Toggle from '../components/toggle'
import { Mobiles } from '../utils/gamePr'
import '../style/layout/product.scss'

const Product = () => {
  return (
    <>
       <div className='product-container'>
      <div className="products-box">
        {Mobiles.map((mobile)=>(
          <div className='box-li' key={mobile.id}>
            <Card width={'240px'} height={'170px'}  img={mobile.img}  product={mobile}/>
          </div>
        ))}
      </div>
      <div className="filter-box">
        <div className="filter-title">
          <h4>فیلتر ها</h4>
        </div>
        <div className="filter-container">
          <div className='accordionBox'>
            <Accordion title="برند" toggle={false} />
          </div>
          <div className='accordionBox'>
            <Accordion title="خدمان آنلاین شاپ"  toggle={false} />
          </div>
          <div className='accordionBox'>
            <Accordion title="مقدار RAM" toggle={true}  />
          </div>
          <div className='accordionBox'>
            <Accordion title="محدوده قیمت" toggle={false} />
          </div>
          <div className='accordionBox'>
            <Accordion title="شبکه های ارتباطی" toggle={false} />
          </div>
          <div className='accordionBox'>
            <Accordion title="دوربین های پشت گوشی" toggle={false} />
          </div>
          <div className='accordionBox'>
            <Accordion title="تعداد سیم کارت" toggle={false} />
          </div>
          <div className='accordionBox'>
            <Accordion title="قابلیت های نرم افزاری" toggle={false} />
          </div>
          <div className='accordionBox'>
            <Accordion title="حافظه داخلی" toggle={false} />
          </div>
          <div className='accordionBox'>
            <Accordion title="مقدار RAM" toggle={false} />
          </div>
        </div>
      </div>
    </div>
    <Title/>
    </>
  )
}

export default Product