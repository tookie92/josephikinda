import Image from 'next/image'
import React from 'react'
import Pajo from "../../../public/papajo.jpg"
import { Button } from '@/components/ui/button'
import MonCanvas from '../troisd/MonCanvas'

function Hero() {
  return (
    <section className='h-[85vh] lg:container flex flex-col lg:flex-row items-center  w-full '>
        <div className=' py-16 lg:py-0 w-full lg:w-1/2 px-[20px] gap-y-5 h-auto flex flex-col items-center lg:items-start'>
            <p className=' tracking-[.30em] items-center text-sm uppercase text-monvert font-medium'>
                Illustrator & 3D designer
            </p>
            <h1 className=' uppercase text-white text-3xl lg:text-8xl font-black flex flex-col  '>
                    <span>Joseph</span> 
                    <span>Ikinda</span> 
            </h1>
            <div className=' lg:w-2/3  leading-relaxed font-medium  text-center lg:text-start  text-white'>
                <p>
                     Ich heiße joseph Ikinda.Ich bin 32 Jahre alt. Ich komme aus dem Sengal. Ich habe einen Bachelor in Ekommunikation, bin Webdesigner und 3D designer
                </p>
            </div>
            <Button className='w-36'>Learn More</Button>
        </div>
        <div className='w-full lg:w-1/2 h-[500px] '>
           <MonCanvas/>
        </div>
        
    </section>
  )
}

export default Hero