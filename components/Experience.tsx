/* eslint-disable @next/next/no-img-element */
import xperience from '@/data/xperience'
import { Button } from './ui/moving-border'

const Experience = () => (
  <div className='py-20' id='testimonials'>
    <h1 className='heading'>
      My <span className="text-indigo-400">Work Experience</span>
    </h1>
    <div className="w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10">
      {xperience.map((x,i)=>(
        <Button key={i} className='flex-1 text-white border-slate-800'>
          <div className="flex flex-col lg:flex-row lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2">
            <img src={x.img} alt={x.title} className='lg:w-32 md:w-20 w-16' />
            <div className="lg:ms-5">
              <h1 className='text-start text-xl md:text-2xl font-bold '>
                {x.title}
              </h1>
              <p className='text-start text-white-100 mt-3 font-semibold'>
                {x.desc}
              </p>
            </div>
          </div>
        </Button>
      ))}
    </div>
  </div>
)

export default Experience