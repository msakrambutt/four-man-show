"use client";
import React from 'react';
import logo from '/public/next.svg'
import Image from 'next/image';
import Link from 'next/link';
import { useSelector} from 'react-redux'
import { RootState } from '../../../store/store';
import {ShoppingCart} from 'lucide-react'

const Header = () => {
  const cartValue=useSelector(
    (state:RootState)=>state.cart.totalQuantity);

  return (
    <div className='flex justify-between items-center'>
        <Image src={logo} alt="" className='w-20 h-20'/>
        <ul className='flex gap-x-10'>
            <li className='text-lg'>
                <Link href="/" >Female</Link></li>
            <li className='text-lg'><Link href="/" >Male</Link></li>
            <li className='text-lg'><Link href="/" >Kids</Link></li>
            <li className='text-lg'><Link href="/" >All Products</Link></li>
        </ul>
        <div className='flex h-10 w-10 rounded-full bg-gray-200 justify-center items-center relative'>
          <span className='absolute right-1 top-0 rounded-full bg-red-500 w-4 h-4 text-white text-sx tex-center'>
            {cartValue}
          </span>
          <ShoppingCart className=''/>
        </div>
        
    </div>
  )
}

export default Header