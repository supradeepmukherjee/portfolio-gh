/* eslint-disable @next/next/no-img-element */
import { Button } from "./ui/button"
import { RiSendPlaneFill } from "react-icons/ri";

const profiles = [
  {
    url:'https://github.com/supradeepmukherjee',
    img: "./git.svg",
  },
  {
    url:'https://x.com/supradeep2004',
    img: "./twit.svg",
  },
  {
    url:'https://www.linkedin.com/in/supradeep-mukherjee',
    img: "./link.svg",
  },
];

const Footer = () => (
  <footer className="w-full pt-20 pb-10" id="contact">
    <div className="w-full absolute left-0 -bottom-72 min-h-96">
      <img src="./footer-grid.svg" alt="grid" className="w-full h-full opacity-50" />
    </div>
    <div className="flex flex-col items-center">
      <h1 className="heading lg:max-w-[45vw]">
        Ready to take <span className="text-indigo-400">Your Business&apos;s Digital Presence</span> to the <span className="text-indigo-400"> Next Level</span>
      </h1>
      <p className="text-white-200 md:mt-10 my-5 text-center">
        Contact me and we&apos;ll work together to grow your business exponentially
      </p>
      <a href="mailto:supradeep2004@gmail.com" className='md:contents'>
        <Button text="Let's talk" icon={<RiSendPlaneFill />} position="right" />
      </a>
    </div>
    <div className="flex mt-16 md:flex-row flex-col justify-around items-center gap-8">
      <p className="md:text-base text-sm md:font-normal font-light">
        Copyright &copy; {new Date().getFullYear()} Supradeep Mukherjee
      </p>
      <div className="flex items-center gap-6 md:gap-3">
        {profiles.map(p=>(
          <div key={p.url} className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-150 bg-opacity-75 bg-black-200 rounded-3xl border border-black-300">
            <a href={p.url} target="_blank">
              <img src={p.img} alt={p.url} width={20} height={20} />
            </a>
          </div>
        ))}
      </div>
    </div>
  </footer>
)

export default Footer