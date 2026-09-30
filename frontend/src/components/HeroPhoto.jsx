import { useRef } from 'react';
import photo from '../assets/hamsiny.webp';

/** Cinematic photo stage. The photo itself is never edited: all effects are CSS layers around/over it. */
export default function HeroPhoto() {
  const ref = useRef(null);
  const reduce = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion:reduce)').matches;

  const move = (e) => {
    if (reduce) return;
    const el = ref.current, r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width, py = (e.clientY - r.top) / r.height;
    el.style.setProperty('--mx', px * 100 + '%');
    el.style.setProperty('--my', py * 100 + '%');
    el.style.setProperty('--ry', (px - 0.5) * 8 + 'deg');
    el.style.setProperty('--rx', (0.5 - py) * 6 + 'deg');
  };
  const leave = () => ['--mx', '--my', '--rx', '--ry'].forEach((k) => ref.current.style.removeProperty(k));

  return (
    <div className="stage" ref={ref} onPointerMove={move} onPointerLeave={leave}>
      <div className="spot" />
      <div className="tilt">
        <div className="frame">
          <img className="photo" src={photo} alt="Hamsiny C" width="941" height="1672" fetchpriority="high" />
          <div className="vig" />
          <i className="streak s1" /><i className="streak s2" /><i className="streak s3" />
          <div className="rim" />
        </div>
        <div className="glass chip mono">Java · Spring Boot · React · MySQL</div>
        <div className="glass code mono" aria-hidden="true">
          <b>@RestController</b>{'\n'}<u>class</u> CareerController {'{'}{'\n'}  <b>@GetMapping</b>("/api/profile"){'\n'}  ResponseEntity&lt;Profile&gt; me() {'{'}{'\n'}    <u>return</u> ok(service.current());{'\n'}  {'}'}{'\n'}{'}'}
        </div>
      </div>
    </div>
  );
}
