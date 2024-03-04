import Image from 'next/image'

import Pajo from "../../../public/papajo.jpg"
import { Button } from '@/components/ui/button'

import Link from 'next/link'


function Hero() {
  
  return (
    <section className='lg:scroll-mt-32 snap-start scroll-mt-9 h-[90vh] lg:container flex flex-col lg:flex-row items-center  w-full '>
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
                My name is Joseph Ikinda and I am 32 years old. I come from Sengal. I have a bachelor's degree in E-communication, I am a web designer and 3D designer
                </p>
            </div>
            <Link href={"#second"} 
            >
            <Button className='w-36'>Learn More</Button>
            </Link>
            
        </div>
        <div
        
        className='w-full lg:w-1/2 h-[500px] '>
          <div className='bg-white p-5'>
            <Image 
              src={Pajo}
              alt='Pajo'
            />
          </div>
        </div>
        
    </section>
  )
}

export default Hero