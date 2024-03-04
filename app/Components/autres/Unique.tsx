import { Card } from '@/components/aceternity/Carte'
import { CardContent } from '@/components/ui/card'
import  Autoplay from 'embla-carousel-autoplay'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import React, { useRef } from 'react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import Image from 'next/image'
import Lottie from 'lottie-react'

interface UniqueProps{
    title: string,
    description: string,
    id: string,
    items:{
        image?:string,
        animationData?: any;
        link:string
    }[]
}

function Unique({title, description, id, items}: UniqueProps) {
    const plugin = useRef(
        Autoplay({ delay: 5000, stopOnInteraction: true })
      )
     
  return (
    <div id={id} className=' mt-11 bg-[#E79607] gap-y-6  w-full h-[700px] flex flex-col  lg:flex-row  p-6 lg:p-20 relative'>
            <div className=' px-9 static w-full lg:w-1/2 lg:h-full gap-y-4  lg:pl-9  flex flex-col justify-center items-center lg:items-start '>
              <h2 className=' text-white tracking-wide uppercase font-semibold text-3xl lg:text-3xl mt-10  lg:mt-0'>{title ?? "No title"}</h2>
              <p className='text-white font-medium  '>{description ?? " No descr"}</p>
            </div>
            <div className='  lg:w-1/2 lg:h-full static  flex items-center justify-center '>
            <Carousel className="  px-9 w-[400px] h-auto lg:w-full lg:h-full "
                opts={{
                loop: true
                }}
                plugins={[plugin.current]}
                
                
            >
                <CarouselContent className=''>
                {items && items.map((item, index) => (
                    <CarouselItem className='flex  flex-col gap-y-4 h-full w-full' key={index}>
                    <div className=" bg-monvert  p-3 lg:p-5 h-full">
                        <Card className=' h-full w-full rounded-none p-0 '>
                        <CardContent className=" pl-2 md:pl-4 flex flex-col gap-y-4 relative aspect-square items-center  justify-center p-6 lg:p-0">
                           
                             {(title === "frontEndForge")?
                             <>
                             <Image className='absolute z-0'
                                objectFit='cover'
                                fill
                                src={item.image!}
                                alt={item.link}
                                
                                />
                             <Link  className='absolute z-10' href={item.link}>
                                <Button>Visit the site</Button>
                             </Link>
                              
                                </>: title === "Lottie Craft"?(
                                        <div className='bg-white h-full w-full items-center flex'>
                                       {item.animationData && <Lottie animationData={item.animationData} />}
                                        </div>
                                ):(
                                <>
                                   <Image className='absolute z-0'
                                    objectFit='cover'
                                    width={500}
                                    height={500}
                                    src={item.image!}
                                    alt={item.link}
                                    
                                    />
                                <Link  className='absolute z-10' href={item.link}>
                                    <Button>watch the animation</Button>
                                </Link>
                                </>
                                )
                                
                               
                              }
                             
                             
                        </CardContent>
                        </Card>
                    </div>
                    
                    </CarouselItem>
                ))}
                </CarouselContent>
                <div className='flex items-center'>

                    <CarouselPrevious />
                <CarouselNext />
                </div>

                
            </Carousel>
            </div>
        </div>
    
  )
}

export default Unique