"use client"
import React from 'react'
import { TiThMenu as MenuIcon, TiSocialInstagram} from 'react-icons/ti'
import { BsTiktok } from 'react-icons/bs'
import Link from 'next/link'
import {Alignment, Fit, Layout, useRive} from "@rive-app/react-canvas";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger, DropdownMenuSeparator } from '@/components/ui/dropdown-menu'




const navItems = [
  {name: "Services", link:"#second"},
  {name: "Works", link:"#realisation"},
  {name: "Contact", link:"#contact"},
]
const iconItems = [
  {name: TiSocialInstagram, link:""},
  {name: BsTiktok, link:""},
  
]


function Navbar() {
  // Rive part
  
  const {rive , RiveComponent}= useRive({
    src:"./logo.riv",
    stateMachines: "State Machine 1",
    artboard: "Artboard",
    autoplay: true,
    layout: new Layout({
      fit: Fit.Cover,
      alignment: Alignment.Center,
    }),
  })
  return (
    <nav className='flex  top-0 z-50  sticky bg-[#F49F0A] items-center px-[20px]  justify-between lg lg:mx-auto lg:container'>
      <div className=' flex gap-x-4'>
        <div className='w-20 h-20 '>
          <RiveComponent className='w-full h-full'/>
        </div>
        <div className='hidden lg:flex pl-[74px] gap-x-[56px] items-center'>
          {navItems.map((item, index)=>(
            <Link key={index} href={item.link}>
              <p className='font-medium text-white' key={index}>{item.name}</p>
            </Link>
          ))}
        </div>
      </div>
      {/* Menu handy */}
      <div className='flex gap-x-3  justify-between'>
         <div className='lg:hidden'>
         <DropdownMenu>
                <DropdownMenuTrigger>
                    <MenuIcon className=' h-5 w-5 text-white'/>
                </DropdownMenuTrigger>
                <DropdownMenuContent>

                  {navItems.map((item, index)=>(
                    <Link key={index} href={item.link}>
                      <DropdownMenuItem  className='font-medium text-monoir' key={index}>{item.name}</DropdownMenuItem>
                      <DropdownMenuSeparator/>

                    </Link>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
         </div>
             
      </div>
    </nav>
  )
}

export default Navbar