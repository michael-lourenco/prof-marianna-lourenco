import About from "@/components/about"
import Contact from "@/components/contact"
import Hero from "@/components/hero"
import Lectures from "@/components/lectures"
import Projects from "@/components/projects"
import Footer from "@/components/footer"
import { seguiemj, tondu, tulpenone } from "@/app/fonts"
import Header from "@/components/header"
import Target from "@/components/target"

export default function Home() {
  return (
    <>
    <Header />
    <main className={`flex flex-col bg-[#F3D7A7] ${seguiemj.className} items-center overflow-x-hidden`}>
    <div className="w-full max-w-[1080px] mx-auto px-4 sm:px-6 lg:px-8">
      <section id="hero" className="pt-[70px]">
        <Hero />
      </section>
      <section id="lectures" className="pt-[70px]">
        <Lectures />
      </section>
      <section id="projects" className="pt-[70px]">
        <Target />
      </section>
      <section id="contact" className="pt-[70px]">
        <Contact />
      </section>
      <Footer />
    </div>
  </main>

    </>
  )
}

