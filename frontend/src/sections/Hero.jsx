import HeroPhoto from '../components/HeroPhoto.jsx';
import Particles from '../components/Particles.jsx';
import { GitHubIcon, LinkedInIcon, LeetCodeIcon } from '../components/Icons.jsx';
import { LINKS, RESUME_URL } from '../data/content.js';

export default function Hero() {
  return (
    <section id="hero">
      <Particles /><div className="grid" /><div className="glow" />
      <div className="hero-in">
      <div className="hc">
        <div className="prompt mono fade">hamsiny@chennai:~$ whoami</div>
        <h1><span><i>HAMSINY</i></span><span><i>C</i></span></h1>
        <div className="role fade">Java Full Stack Developer</div>
        <div className="tag fade">Turning ideas into reliable applications, one layer at a time.</div>
        <div className="cta fade">
          <a className="btn p" href="#projects">View Projects</a>
          <a className="btn" href={RESUME_URL} download="Hamsiny-C-Resume.pdf">Download Resume</a>
          <a className="btn" href="#contact">Contact Me</a>
        </div>
        <div className="soc fade">
          <a href={LINKS.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub"><GitHubIcon /></a>
          <a href={LINKS.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><LinkedInIcon /></a>
          <a href={LINKS.leetcode} target="_blank" rel="noopener noreferrer" aria-label="LeetCode"><LeetCodeIcon /></a>
        </div>
      </div>
      <HeroPhoto />
      </div>
    </section>
  );
}
