"use client"
import { HoverEffect } from '@/components/aceternity/Carte'
import React from 'react'
import { FaICursor } from 'react-icons/fa';
import Jeune from "../../../public/devant.json.json"
import LeLottie from "../../../public/lf30_ryktrxec.json.json"
import TroisD from "../../../public/lf30_tl2zbhxo.json.json"
import { MdWeb } from 'react-icons/md';
import { PiCubeTransparent } from 'react-icons/pi';
import { SiMaterialdesignicons } from 'react-icons/si';

export const projects = [
    {
        haupt: "Webdesign",
        icon: MdWeb,
      title: "FrontEndForge",
      animation:Jeune,
      description:
        "Frontend Finesse at your service! Let's sculpt your digital masterpiece with user-friendly interfaces and eye-catching designs. Together, we'll make browsing a breeze!",
      link: "#front",
    },
    {
        haupt: "Lottie",
        icon: SiMaterialdesignicons,
        animation:LeLottie,
      title: "LottieCraft",
      description:
        "Welcome to LottieLand!  Where I craft magical animations just for you. From funky icons to wiggly logos, let's sprinkle some animation magic on your project!",
      link: "#lottie",
    },
    {
     haupt: "3d Animation",
     icon: PiCubeTransparent,
     animation:TroisD,
      title: "3D-wonderWorks",
      description:
        " Step into the 3D Wonderland! Where I turn your ideas into jaw-dropping animations. From product pops to architectural wonders, let's bring your visions to life in stunning 3D!",
      link: "#wonders",
    },
   
  ];
function MesCartes() {
  return (
    <section id='second' className=' scroll-mt-9 lg:scroll-mt-32 snap-start py-9  lg:container flex flex-col  items-center lg:items-start w-full '>

        <h1 className=' text-2xl lg:text-6xl  text-white font-extrabold '>Mes projets</h1>
      <HoverEffect items={projects} />

    </section>
  )
}

export default MesCartes