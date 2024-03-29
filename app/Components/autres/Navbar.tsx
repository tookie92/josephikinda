import React from 'react'
import { TiThMenu as MenuIcon, TiSocialInstagram} from 'react-icons/ti'
import { BsTiktok } from 'react-icons/bs'
import Link from 'next/link'
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
  return (
    <nav className='flex  top-0 z-50  sticky bg-[#F49F0A] items-center px-[20px] py-[16px] justify-between lg lg:mx-auto lg:container'>
      <div className='flex gap-x-4'>
        <p className=' font-black text-2xl text-white'>Joseph Ikinda</p>
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