import { About } from "../../components/Sections/About/About"
import { Contact } from "../../components/Sections/Contact/Contact"
import { Education } from "../../components/Sections/Education/Education"
import { Hero } from "../../components/Sections/Hero/Hero"
import { Projects } from "../../components/Sections/Projects/Projects"
import { Skills } from "../../components/Sections/Skills/Skills"

export const Home = ()=>{
    return(
        <div className="bg-black text-white">
           <section id="hero" className="container mx-auto px-4 md:px-8 lg:px-12 xl:px-18">
              <Hero/>
           </section>
           <section id="about" className="container mx-auto px-4 md:px-8 lg:px-12 xl:px-18">
              <About/>
           </section>
           <section id="skills" className="container mx-auto px-4 md:px-8 lg:px-12 xl:px-18">
              <Skills/>
           </section>
           <section id="education" className="container mx-auto px-4 md:px-8 lg:px-12 xl:px-18 ">
               <Education/>
           </section>
           <section id="projects" className="container mx-auto px-4 md:px-8 lg:px-12 xl:px-18">
               <Projects/>
           </section>
           <section id="contact" className="container mx-auto px-4 md:px-8 lg:px-12 xl:px-18">
              <Contact/>
           </section>
        </div>
    )
}