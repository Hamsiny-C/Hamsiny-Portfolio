import Tags from '../components/Tags.jsx';
import VoiceButton from '../components/VoiceButton.jsx';
import { PROJECTS, VOICE } from '../data/content.js';

function ProjectCard({ p }) {
  const move = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty('--x', e.clientX - r.left + 'px');
    e.currentTarget.style.setProperty('--y', e.clientY - r.top + 'px');
  };
  return (
    <div className="card pc" onPointerMove={move}>
      <h3>{p.name}</h3><div className="sub">{p.sub}</div><p>{p.desc}</p>
      {p.flow && <div className="flow mono">{p.flow.map((x) => <span key={x}>{x}</span>)}</div>}
      <div className={p.problem ? 'two' : 'two one'}>
        {p.problem && <div><div className="lab">Problem</div><p style={{ margin: 0 }}>{p.problem}</p></div>}
        <div><div className="lab">Key features</div><Tags items={p.features} /></div>
      </div>
      <div className="lab">Technologies</div><Tags items={p.tech} />
      <div className="row">
        {p.github && <a className="btn" href={p.github} target="_blank" rel="noopener noreferrer">GitHub</a>}
        {p.live && <a className="btn p" href={p.live} target="_blank" rel="noopener noreferrer">Live Demo</a>}
        <VoiceButton text={VOICE[p.voice]} />
      </div>
    </div>
  );
}

export default function Projects() {
  return <section id="projects"><h2>Projects</h2><div className="proj">{PROJECTS.map((p) => <ProjectCard key={p.name} p={p} />)}</div></section>;
}
