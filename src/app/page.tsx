import HeroSection from "./components/home/hero-section"
import ContactBar from "./components/home/hero-section/contact-bar"
import dynamic from "next/dynamic"
import fs from "fs"
import path from "path"

const AboutMe = dynamic(() => import("./components/home/about-me"))
const Contact = dynamic(() => import("./components/home/contact"), { ssr: false })
const EducationSkills = dynamic(() => import("./components/home/education-skills"))
const ExperienceSec = dynamic(() => import("./components/home/experience-sec"))
const LatestWork = dynamic(() => import("./components/home/latest-work"))
const BookingSection = dynamic(() => import("./components/home/booking-section"), { ssr: false })

async function getData() {
  const workFilePath = path.join(process.cwd(), "public/data/work-data.json");
  const workFileContents = fs.readFileSync(workFilePath, "utf8");
  const workData = JSON.parse(workFileContents);

  const pageFilePath = path.join(process.cwd(), "public/data/page-data.json");
  const pageFileContents = fs.readFileSync(pageFilePath, "utf8");
  const pageData = JSON.parse(pageFileContents);

  return {
    workData: workData.workData,
    educationData: pageData.educationData
  };
}

const page = async () => {
  const { workData, educationData } = await getData();

  return (
    <>
      <main>
        <HeroSection />
        <ContactBar />
        <AboutMe />
        <ExperienceSec />
        <EducationSkills educationData={educationData} />
        <BookingSection />
        <LatestWork workData={workData} />
        <Contact />
      </main>
    </>
  )
}

export default page