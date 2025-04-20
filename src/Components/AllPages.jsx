import NavBar from "./NavBar";
import HomePage from "./HomePage";
import AboutPage from "./AboutPage";
import SkillsPage from "./SkillsPage.jsx";
import EduPage from "./EducationPage.jsx";
import CertificatesPage from "./CertificatePage.jsx";
import ContactPage from "./ContactPage.jsx";
import ProjectsPage from "./ProjectsPage.jsx";
import FooterPage from "./FooterPage.jsx";

function AllPages() {
  return (
    <>
      <NavBar />
      <HomePage />
      <AboutPage />
      <SkillsPage />
      <EduPage />
      <ProjectsPage />
      <CertificatesPage />
      <ContactPage />
      <FooterPage />
    </>
  );
}

export default AllPages;
