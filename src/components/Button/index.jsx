import React from 'react'
import '../../style/components/Button.scss'

export default ({title,color}) => {
  return (
    <button className={`${color==true ? 'button-blue' : 'button-contaner'}`}>
        <p>{title}</p>
    </button>
  )
}

 