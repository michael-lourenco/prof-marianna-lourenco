import About from "@/components/about"
import Contact from "@/components/contact"
import Hero from "@/components/hero"
import Lectures from "@/components/lectures"
import Projects from "@/components/projects"

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Lectures />
      <Projects />
      <Contact />
    </main>
  )
}

