import React from 'react'

function Portofolio() {
  return (
    <section className=' py-9  lg:container flex flex-col  items-center lg:items-start w-full'>
        <h1 className='text-2xl lg:text-6xl  text-white font-extrabold'>
            Proud to do
        </h1>
        <div className=' mt-11 bg-[#E79607] w-full h-[700px] flex flex-col gap-x-6 lg:flex-row p-9 lg:p-14 relative'>
            <div className=' static w-full lg:w-1/2 lg:h-full gap-y-4   flex flex-col justify-center items-center '>
              <h2 className=' text-white tracking-wide font-semibold text-2xl lg:text-5xl'>FrontEndForge</h2>
              <p >Worauf ich noch stolz bin</p>
            </div>
            <div className=' w-full lg:w-1/2 h-full bg-purple-400 lg:absolute -top-10  -right-8'></div>
        </div>
    </section>
  )
}

export default Portofolio