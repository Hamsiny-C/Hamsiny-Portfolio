import { useEffect, useRef } from 'react';
import { ACHIEVEMENTS } from '../data/content.js';

export default function Achievements() {
  const ref = useRef(null);
  useEffect(() => {
    const io = new IntersectionObserver((es) => es.forEach((e, i) => {
      if (e.isIntersecting) { setTimeout(() => e.target.classList.add('in'), i * 90); io.unobserve(e.target); }
    }), { threshold: 0.2 });
    ref.current.querySelectorAll('.card').forEach((c) => io.observe(c));
    return () => io.disconnect();
  }, []);
  return (
    <section id="achievements"><h2>Achievements</h2>
      <div className="ach" ref={ref}>
        {ACHIEVEMENTS.map(([a, b], i) => <div className="card" key={i}><div className="meta">{a}</div><div className="big">{b}</div></div>)}
      </div>
    </section>
  );
}
