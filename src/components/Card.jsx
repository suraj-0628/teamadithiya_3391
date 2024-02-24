import React from 'react'
import { sameImg } from '../assets'

const Card = () => {
  return (
    <div className='pt-10 mr-10'>
        <a href="/" >
        <div className='h-[20rem] w-[20rem] bg-black rounded-xl '>
        <img src={sameImg} height={1000} width={1000} className='py-' alt="" />
        </div>
    </a>
    </div>
  )
}

export default Card