import React from 'react'
import { useNavigate } from 'react-router-dom'
import CardP from '../components/CardP'
import category1 from '../assets/Category/category1.png'
import category1Hover from '../assets/Category/category1-Hover.png'
import category2 from '../assets/Category/category2.png'
import category2Hover from '../assets/Category/category2-Hover.png'
import category3 from '../assets/Category/category3.png'
import category3Hover from '../assets/Category/category3-Hover.png'
import category4 from '../assets/Category/category4.png'
import category4Hover from '../assets/Category/category4-Hover.png'
import category5 from '../assets/Category/category5.png'
import category5Hover from '../assets/Category/category5-Hover.png'
import category6 from '../assets/Category/category6.png'
import category6Hover from '../assets/Category/category6-Hover.png'
import category7 from '../assets/Category/category7.png'
import category7Hover from '../assets/Category/category7-Hover.png'
import category8 from '../assets/Category/category8.png'
import category8Hover from '../assets/Category/category8-Hover.png'
import category9 from '../assets/Category/category9.png'
import category9Hover from '../assets/Category/category9-Hover.png'
import "../style/layout/category.scss"


const Category = () => {
    const navigate = useNavigate()
    const Path = () =>{
        navigate('/Category/:name')
    }
  return (
    <>
        <div className='category-container'>
            <div className="category-li" onClick={Path}>
                <CardP Card={category1} CardHover={category1Hover} size={true} />
            </div>
            <div className="category-li" onClick={Path}>
                <CardP Card={category2} CardHover={category2Hover} size={true} />
            </div>
            <div className="category-li" onClick={Path}>
                <CardP Card={category3} CardHover={category3Hover} size={true}/>
            </div>
            <div className="category-li" onClick={Path}>
                <CardP Card={category4} CardHover={category4Hover} size={true} />
            </div>
            <div className="category-li" onClick={Path}>
                <CardP Card={category5} CardHover={category5Hover} size={true}/>
            </div>
            <div className="category-li" onClick={Path}>
                <CardP Card={category6} CardHover={category6Hover} size={true} />
            </div>
            <div className="category-li" onClick={Path}>
                <CardP Card={category7} CardHover={category7Hover} size={true}/>
            </div>
            <div className="category-li" onClick={Path}>
                <CardP Card={category8} CardHover={category8Hover} size={true}/>
            </div>
            <div className="category-li" onClick={Path}>
                <CardP Card={category9} CardHover={category9Hover} size={true}/>
            </div>
        </div>
    </>
  )
}

export default Category