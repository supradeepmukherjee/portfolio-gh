/* eslint-disable @next/next/no-img-element */
import projects from '@/data/projects'
import { PinContainer } from './ui/3d-pin'
import { IoNavigateCircleSharp } from "react-icons/io5";

const Projects = () => (
  <div className='py-20' id='projects'>
    <h1 className='heading'>
      Recent Projects <span className="text-indigo-400">Completed Successfully</span>
    </h1>
    <div className="flex flex-wrap items-center justify-center p-4 gap-x-24 gap-y-8 mt-10">
      {projects.map((p, i) => (
        <div key={i} className='sm:h-[41rem] h-[32rem] lg:min-h-[32rem] flex items-center justify-center sm:w-[567px] w-[80vw]'>
          <PinContainer title={p.url} href={p.url}>
            <div className="relative flex items-center justify-center sm:w-[567px] w-[80vw] overflow-hidden sm:h-[40vh] h-[30vh] mb-10">
              <div className="relative h-full w-full overflow-hidden lg:rounded-3xl bg-[#13172d]">
                <img src="./bg.png" alt="bg-img" />
              </div>
              <img src={p.img} alt={p.title} className='z-10 absolute bottom-0' />
            </div>
            <h1 className='font-bold lg:text-2xl md:text-xl text-base line-clamp-1'>
              {p.title}
            </h1>
            <p className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2">
              {p.desc}
            </p>
            <div className="flex items-center justify-between mt-7 mb-3">
              <div className="flex items-center">
                {p.icons.map((i, idx) => (
                  <div key={idx} className='border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 flex justify-center items-center' style={{ transform: `translateX(-${10 * idx}px)` }}>
                    <img src={i} alt={i} className='p-2' />
                  </div>
                ))}
              </div>
              <div className="flex justify-center items-center">
                <p className='flex lg:text-xl md:text-xs text-sm text-indigo-400'>
                  Checkout Live Site
                </p>
                <IoNavigateCircleSharp className='ms-3' size={40} color='#cbacf7' />
              </div>
            </div>
          </PinContainer>
        </div>
      ))}
    </div>
  </div>
)

export default Projects