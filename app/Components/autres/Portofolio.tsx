"use client"

import React, { useRef } from 'react'
import Unique from './Unique'
import Calendrier from '@/public/lottie/calendrier.json.json'
import Colier from '@/public/lottie/colier.json.json'
import Logo from '@/public/lottie/logo.json.json'
import Multi from '@/public/lottie/multi.json.json'
import Photo from '@/public/lottie/photo.json.json'

import Web from '@/public/lottie/web.json.json'
import { div } from 'three/examples/jsm/nodes/Nodes.js'

const job = [
  {
    id:"front",
    title: "frontEndForge", 
    description:"Step into my Frontend Studio, where I craft intuitive interfaces that resonate with your audience. With attention to detail and a focus on user experience, let's build digital solutions that leave a lasting impression.",
    items:[
      {image:"/velotrum.png", link:"https://framerspring.vercel.app/"},
      {image:"/framerspring.png", link:"https://velotrum-vercel.vercel.app/"}
    ]
  },
  {
    id:"lottie",
    title: "Lottie Craft", 
    description:"Welcome to my Lottie Workshop, where I bring static designs to life with captivating animations tailored just for you. From subtle movements to eye-catching sequences, let's add that extra spark to your project",
    items:[
      {animationData:Calendrier, link:"great"},
      {animationData:Colier, link:"great"},
      {animationData:Logo, link:"great"},
      {animationData:Multi, link:"great"},
      {animationData:Photo, link:"great"},
      
      {animationData:Web, link:"great"},
      
    ]
  },
  {
    id:"wonders",
    title: "3d-WonderWorks", 
    description:"Explore the 3D Realm with me, where I transform concepts into immersive visual experiences. Whether it's product showcases or architectural walkthroughs, let's create stunning animations that elevate your project to new dimensions.",
    items:[
      {image:"/blender/card.jpg", link:"https://www.tiktok.com/@rehovision/video/7340738028303928608?is_from_webapp=1&sender_device=pc&web_id=7338162237128885792"},
      {image:"/blender/gloire.png", link:"https://www.tiktok.com/@rehovision/video/7307963574121499936?is_from_webapp=1&sender_device=pc&web_id=7338162237128885792"},
      {image:"/blender/house.png", link:"https://www.tiktok.com/@rehovision/video/7297739193906728225?is_from_webapp=1&sender_device=pc&web_id=73381622371288857923"},
      {image:"/blender/ikea.png", link:"https://www.tiktok.com/@rehovision/video/7298351514207178017?is_from_webapp=1&sender_device=pc&web_id=7338162237128885792"},
      {image:"/blender/mensch.jpg", link:"https://www.tiktok.com/@rehovision/video/7294006047163911456?is_from_webapp=1&sender_device=pc&web_id=7338162237128885792"},
      {image:"/blender/ubahn.png", link:"https://www.tiktok.com/@rehovision/video/7296612455390645537?is_from_webapp=1&sender_device=pc&web_id=7338162237128885792"},
    ]
  },
]

function Portofolio() {
 
  return (
    <section id="realisation" className=' snap-x scroll-mt-9 lg:scroll-mt-32 py-9  lg:container flex flex-col  items-center lg:items-start w-full'>
        <h1 className='text-2xl lg:text-6xl mb-14  text-white font-extrabold'>
           Wors
        </h1>
        {job.map((item,idx)=>(
          <div className='flex flex-col' key={idx}>
            <Unique items={item.items} id={item.id} key={idx} title={item.title} description={item.description}/>
          </div>

        ))}
    </section>
  )
}

export default Portofolio