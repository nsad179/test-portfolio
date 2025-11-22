import HeroSection from "./components/home/hero-section"
import ContactBar from "./components/home/hero-section/contact-bar"
import dynamic from "next/dynamic"

const AboutMe = dynamic(() => import("./components/home/about-me"))
const Contact = dynamic(() => import("./components/home/contact"))
const EducationSkills = dynamic(() => import("./components/home/education-skills"))
const ExperienceSec = dynamic(() => import("./components/home/experience-sec"))
const LatestWork = dynamic(() => import("./components/home/latest-work"))
const BookingSection = dynamic(() => import("./components/home/booking-section"))

const page = () => {
  return (
    <>
      <main>
        <HeroSection />
        <ContactBar />
        <AboutMe />
        <ExperienceSec />
        <EducationSkills />
        <BookingSection />
        <LatestWork />
        <Contact />
      </main>
    </>
  )
}

export default page