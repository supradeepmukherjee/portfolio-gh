import { Button } from "./ui/button"
import { Spotlight } from "./ui/spotlight"
import { TextGenerateEffect } from "./ui/text-generate-effect"

const Hero = () => (
  <div className="pb-20 pt-36">
    <div>
      <Spotlight className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen" fill="white" />
      <Spotlight className="top-10 left-full h-[80vh] w-[50vw]" fill="purple" />
      <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="blue" />
    </div>
    <div className="h-screen w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.05] bg-grid-black/[0.2] flex items-center justify-center absolute top-0 left-0">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
    </div>
    <div className="flex justify-center relative my-20 z-10">
      <div className="max-w-[90vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center ">
        <h2 className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
          Turn Dreamy Websites into Reality
        </h2>
        <TextGenerateEffect
          className="text-center text-[40px] md:text-5xl lg:text-6xl"
          words="So you want to get a Website ready in the most efficient way? Look no further as you have landed just at the right place." />
        <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
          Hi, I am Supradeep, a Web Developer based in India.
        </p>
        <a href="#about">
          <Button text="Get to Know Me" />
        </a>
      </div>
    </div>
  </div>
)

export default Hero