import Tags from '../components/Tags.jsx';
import VoiceButton from '../components/VoiceButton.jsx';
import { EXPERIENCE, VOICE } from '../data/content.js';

export default function Experience() {
  return (
    <section id="experience"><h2>Experience</h2>
      <div className="tl">
        {EXPERIENCE.map((e) => (
          <div key={e.company}><div className="card">
            <div className="meta mono">{e.date}</div>
            <h4>{e.company}</h4><div className="role2">{e.role}</div>
            <p><b>{e.project}</b> — {e.desc}</p>
            <Tags items={e.tech} />
            <ul>{e.contributions.map((c) => <li key={c}>{c}</li>)}</ul>
            <div className="row">
              {e.github && <a className="lnk" href={e.github} target="_blank" rel="noopener noreferrer">GitHub</a>}
              {e.live && <a className="lnk" href={e.live} target="_blank" rel="noopener noreferrer">Live</a>}
              <VoiceButton text={VOICE[e.voice]} />
            </div>
          </div></div>
        ))}
      </div>
    </section>
  );
}
