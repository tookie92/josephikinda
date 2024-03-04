import { cn } from "../../lib/utils";
import { AnimatePresence, motion, useAnimate, useAnimation } from "framer-motion";
import Link from "next/link";
import Lottie, { LottieComponentProps } from "lottie-react";

import Pajo from "../../public/papajo.jpg"
import Jeune from "../../public/devant.json.json"

import { useEffect, useState } from "react";
import { IconType } from "react-icons";


export const HoverEffect = ({

  items,
  className,
}: {
    items: {
      haupt?:string,
      icon?:IconType,
      animation: any;
    title: string;
    description: string;
    link: string;
  }[];
  className?: string;
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);


 const variants ={
    open:{opacity:1 , y:"0%"},
    close:{opacity:0,y:"50%"}
 }
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3  py-10",
        className
      )}
    >
      {items.map((item, idx) => (
        <Link
          href={item?.link}
          key={item?.link}
          className="relative group  block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-monvert dark:bg-slate-800/[0.8] block  rounded-md"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                 
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <Card className=" p-6">
            <div className="flex justify-between items-center">
                <h3 className=" tracking-wider font-semibold uppercase text-monvert">{item.haupt ?? "titre"}</h3>
                <div className=" h-10 w-10  border-monfond border-4 rounded-lg flex items-center justify-center">
                <AnimatePresence>

                    <motion.div
                        variants={variants}
                        animate={hoveredIndex === idx? "open": "close"}
                    >
                    {item.icon && <span>

                        <item.icon className="text-white"/>
                    </span>
                    }
                    </motion.div> 
                </AnimatePresence>
                </div>
            </div>
            <div className="p-2 rounded-lg bg-white">
                  
                {item.animation && 
                <Lottie animationData={item.animation} /> }
            </div>
            <CardTitle>
                {item.title}
            </CardTitle>
            <CardDescription className="text-white">{item.description}</CardDescription>
          </Card>
        </Link>
      ))}
    </div>
  );
};

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        " rounded-lg h-full w-full p-4 overflow-hidden  bg-[#E79607]   dark:border-white/[0.2] group-hover:border-slate-700 relative z-20",
        className
      )}
    >
      <div className="relative z-50">
        <div className="p-4 space-y-9">{children}</div>
      </div>
    </div>
  );
};
export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h4 className={cn("text-zinc-100 font-bold text-2xl tracking-wide mt-4", className)}>
      {children}
    </h4>
  );
};
export const CardDescription = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <p
      className={cn(
        "mt-8 text-zinc-400 tracking-wide leading-relaxed font-normal",
        className
      )}
    >
      {children}
    </p>
  );
};
