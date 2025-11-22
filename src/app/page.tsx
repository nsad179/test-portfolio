import HeroSection from "./components/home/hero-section"
import ContactBar from "./components/home/hero-section/contact-bar"
import dynamic from "next/dynamic"
import fs from "fs"
import path from "path"
import LazyContact from "./components/home/contact/lazy"
import LazyBookingSection from "./components/home/booking-section/lazy"

const AboutMe = dynamic(() => import("./components/home/about-me"))
const EducationSkills = dynamic(() => import("./components/home/education-skills"))
const ExperienceSec = dynamic(() => import("./components/home/experience-sec"))
const LatestWork = dynamic(() => import("./components/home/latest-work"))

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
        <LazyBookingSection />
        <LatestWork workData={workData} />
        <LazyContact />
      </main>
    </>
  )
}

export default page