/* eslint-disable @next/next/no-img-element */
import { InfiniteMovingCards } from "./ui/infinite-moving-cards"
import items from '@/data/testimonials'
import corporates from '@/data/corporates'

const Testimonials = () => (
  <div className='py-20' id='testimonials'>
    <h1 className='heading'>
      What do our <span className="text-indigo-400">Clients say</span>
    </h1>
    <div className="flex flex-col items-center max-lg:mt-10">
      <InfiniteMovingCards items={items} direction="left" speed="slow" />
      <div className="flex flex-wrap items-center justify-center gap-4 md:gap-16 max-lg:mt-10">
        {corporates.map((c, i) => (
          <div className="flex md:max-w-60 max-w-32 gap-2" key={i}>
            <img src={c.logo} alt={c.name} className="md:w-10 w-5" />
            <img src={c.nameImg} alt={c.name} className="md:w-24 w-20" />
          </div>
        ))}
      </div>
    </div>
  </div>
)

export default Testimonials