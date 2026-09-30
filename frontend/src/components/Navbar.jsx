import { useEffect, useState } from 'react';
import { NAV, RESUME_URL } from '../data/content.js';

export default function Navbar() {
  const [small, setSmall] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const on = () => setSmall(window.scrollY > 40);
    window.addEventListener('scroll', on, { passive: true });
    return () => window.removeEventListener('scroll', on);
  }, []);
  return (
    <nav className={small ? 's' : ''}>
      <a href="#hero" className="logo">HAMSINY C</a>
      <button className="burger" aria-label="Menu" onClick={() => setOpen(!open)}>☰</button>
      <div className={`links${open ? ' o' : ''}`}>
        {NAV.map(([l, h]) => <a key={h} href={h} onClick={() => setOpen(false)}>{l}</a>)}
        <a className="btn res" href={RESUME_URL} download="Hamsiny-C-Resume.pdf">Resume</a>
      </div>
    </nav>
  );
}
