import React,{useState} from 'react'
import '../../style/components/navside.scss'

export default () => {
    const [showBorder, setShowBorder] = useState(false)
    const handleBorderButtom = () => {
        setShowBorder(!showBorder)
    }
  return (
        <nav className='navside'>
            <ul className='navside-box'>
                <li>
                    <p>صفحه اصلی</p>
                    <div className='color'></div>
                </li>
                <li>
                    <p>دسته بندی محصولات</p>
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
        </nav>
  )
}

 