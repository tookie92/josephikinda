import Link from 'next/link'
import React from 'react'
import { FaInstagram, FaPhoneAlt, FaTiktok } from 'react-icons/fa'
import { MdAlternateEmail } from 'react-icons/md'

function Footer() {
  return (
    <div id='contact' className=' flex bg-[#E79607] p-9 lg:p-32 items-center h-[20vh] relative mt-32 scroll-mt-9 lg:scroll-mt-32'>
       <div className='w-full lg:w-4/5 bg-monfond h-[15vh] lg:h-[15vh] lg:absolute lg:-top-10 p-4 lg:left-28'> 
            <div className=' bg-[#E79607] flex-col lg:flex-row p-5 w-full h-full flex items-center gap-3 lg:gap-x-9'>
                <h1 className='lg:text-2xl font-medium text-white'>You can find me here:</h1>
                <div className='flex w-1/2  gap-x-3 justify-center items-start'>
                    <Link href="tel:+4915228522646">
                        <div className='bg-monvert  h-8 f-8 p-2 lg:h-10  lg:w-10 justify-center text-white items-center flex rounded-full'>
                        <FaPhoneAlt/>
                        </div>
                    </Link>
                    <Link href="https://www.tiktok.com/@rehovision?lang=en">
                        <div className='bg-monvert  h-8 f-8 p-2 lg:h-10  lg:w-10 justify-center text-white items-center flex rounded-full'>
                            <FaTiktok/>
                        </div>
                    </Link>
                    <Link href="https://www.instagram.com/cjoli.digital/">
                        <div className='bg-monvert h-8 f-8 p-2 lg:h-10  lg:w-10 justify-center text-white items-center flex rounded-full'>
                            <FaInstagram/>
                        </div>
                    </Link>
                    <Link href="mailto:josephikinda@gmail.com">
                        <div className='bg-monvert h-8 f-8 p-2 lg:h-10  lg:w-10 justify-center text-white items-center flex rounded-full'>
                            <MdAlternateEmail/>
                        </div>
                    </Link>
                </div>
            </div>
       </div>
    </div>
  )
}

export default Footer