import items from "@/data/grid"
import { BentoGrid, BentoGridItem } from "./ui/bento-grid"

const Grid = () => (
  <section id='about'>
    <BentoGrid>
      {items.map((i, idx) => (
        <BentoGridItem key={idx} idx={idx + 1} title={i.title} description={i.description} className={i.className} extraImg={i.extraImg} img={i.img} imgClass={i.imgClass} titleClass={i.titleClass} />
      ))}
    </BentoGrid>
  </section>
)

export default Grid