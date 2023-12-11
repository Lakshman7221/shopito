import React from 'react'
import { IoCartOutline } from "react-icons/io5";

const EmptyBag = () => {
  return (
    <div>
        <div className='text-center bg-light py-4'>
        <IoCartOutline size={100} className='opacity-25'/>
        <p className='opacity-50 bolder fs-5'>Your cart is empty!!</p>
        </div>
    </div>
  )
}

export default EmptyBag