import Tags from '../components/Tags.jsx';
import { SKILLS } from '../data/content.js';

export default function Skills() {
  return (
    <section id="skills"><h2>Skills</h2>
      <div className="sk">
        {Object.entries(SKILLS).map(([k, v]) => <div className="card" key={k}><h3>{k}</h3><Tags items={v} /></div>)}
      </div>
    </section>
  );
}
