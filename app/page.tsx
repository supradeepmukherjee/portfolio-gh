import Approach from "@/components/Approach";
import Footer from "@/components/Footer";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { ReactElement } from "react";

const navItems: {
  name: string;
  link: string;
  icon?: ReactElement;
}[] = [
    {
      name: 'About',
      link: '#about',
    },
    {
      name: 'Projects',
      link: '#projects',
    },
    {
      name: 'Testimonials',
      link: '#testimonials',
    },
    {
      name: 'Contact',
      link: '#contact',
    },
  ]

export default function Home() {
  return (
    <>
      <header>
        <FloatingNav navItems={navItems} />
      </header>
      <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
        <div className="max-w-7xl w-full">
          <Hero />
          <Grid />
          <Projects />
          {/* <Testimonials /> */}
          {/* <Experience /> */}
          <Approach />
        </div>
      </main>
      <Footer />
    </>
  )
}
