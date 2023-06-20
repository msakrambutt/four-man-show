import React from 'react'
import { Badge } from "@/components/ui/badge"
import Image from 'next/image'
import heroImage from '/public/hero.webp'


const Hero = () => {
  return (
    <section className='flex flex-col gap-y-10 lg:flex-row py-6'>
        {/* left */}
        <div  className='flex-1'>
        <Badge className='hover:bg-blue-200 py-3 px-6 rounded-lg bg-blue-200 text-blue-700'>Badge</Badge> <h1 className=" mt-6 scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        Shadcn UI
        </h1>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
        The king, seeing how much happier his subjects were, realized the error of
        his ways and repealed the joke tax.
        </p>
        <button className='bg-black h-12 px-10 mt-3  text-white'>
        Start Shopping
        </button>       
        </div>
        {/* right */}
        <div className='flex-1'> 
            <Image src={heroImage} alt="" />
        </div>
    </section>
  )
}

export default Hero