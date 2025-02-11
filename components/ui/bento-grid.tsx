'use client'
/* eslint-disable @next/next/no-img-element */
import dynamic from "next/dynamic";
import { cn } from "@/lib/utils";
import { BackgroundGradientAnimation } from "./background-gradient-animation";
import { GlobeDemo } from "../Globe";
const Lottie = dynamic(() => import("react-lottie"), { ssr: false });
import { LuClipboardCopy } from "react-icons/lu";
import { useState } from "react";
import animationData from '@/data/confetti.json'
import { Button } from "./button";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto ",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  img,
  imgClass,
  titleClass,
  extraImg,
  idx
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  img?: string
  imgClass?: string
  titleClass?: string
  extraImg?: string
  idx: number
}) => {
  const [copied, setCopied] = useState(false)
  const handleCopy = () => {
    navigator.clipboard.writeText('supradeep2004@gmail.com')
    setCopied(true)
    setTimeout(() => {
      setCopied(false)
    }, 3000);
  }
  return (
    <div
      className={cn(
        "row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4 relative overflow-hidden border border-white/[0.1]",
        className
      )}
      style={{
        background: 'rgb(4,8,30)',
        backgroundColor: 'linear-gradient(90deg, rgb(4,8,30) 0%, rgb(12,15,35) 100%)'
      }}
    >
      <div className={`${idx === 6 && 'flex flex-row-reverse justify-center'} h-full`}>
        <div className="w-full h-full absolute">
          {img && <img src={img} alt={img} className={cn(imgClass, 'object-cover object-center')} />}
        </div>
        <div className={`absolute right-0 -bottom-5 ${idx === 5 && `w-full opacity-80`}`}>
          {extraImg && <img src={extraImg} alt={extraImg} className={'object-cover object-center w-full h-full'} />}
        </div>
        {idx === 6 && <BackgroundGradientAnimation/>}
        <div className={cn(titleClass, 'group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10')}>
          <div className="font-sans font-extralight text-[#c1c2d3] text-sm md:text-xs lg:text-base z-10 md:max-w-32">
            {description}
          </div>
          <div className="font-sans font-bold text-lg lg:text-3xl max-w-96 z-10">
            {title}
          </div>
          {idx === 2 && <GlobeDemo />}
          {idx === 3 &&
            <div className="flex gap-1 lg:gap-5 w-fit absolute -right-3 lg:-right-2">
              <div className="gap-3 flex flex-col">
                {['ReactJS', 'NextJS', 'TypeScript'].map(i => (
                  <span key={i} className="py-2 px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#11122d]">
                    {i}
                  </span>
                ))}
                <span className="py-4 px-3 rounded-lg text-center bg-[#11122d]" />
              </div>
              <div className="gap-3 flex flex-col">
                <span className="py-4 px-3 rounded-lg text-center bg-[#11122d]" />
                {['MongoDB', 'Redis', 'NodeJS'].map(i => (
                  <span key={i} className="py-2 px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#11122d]">
                    {i}
                  </span>
                ))}
              </div>
            </div>
          }
          {idx === 6 &&
            <div className="mt-5 relative">
              <div className="absolute -bottom-5 right-0">
                {copied && <Lottie options={{
                  animationData,
                  rendererSettings: { preserveAspectRatio: 'xMidYMid Slice' },
                  autoplay: true,
                }} />}
              </div>
              <Button text={copied ? 'Email Copied' : 'Copy Email'} icon={<LuClipboardCopy />} position="left" classes="!bg-[#160a30]" handleClick={handleCopy} />
            </div>
          }
        </div>
      </div>
    </div>
  )
}