import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import Hero from './sections/Hero.jsx';
import About from './sections/About.jsx';
import Skills from './sections/Skills.jsx';
import Experience from './sections/Experience.jsx';
import Projects from './sections/Projects.jsx';
import Education from './sections/Education.jsx';
import Certifications from './sections/Certifications.jsx';
import Achievements from './sections/Achievements.jsx';
import Contact from './sections/Contact.jsx';

export default function App() {
  return (
    <>
      <Navbar />
      <Hero /><About /><Skills /><Experience /><Projects />
      <Education /><Certifications /><Achievements /><Contact />
      <Footer />
    </>
  );
}
