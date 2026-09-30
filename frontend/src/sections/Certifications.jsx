import { CERTS } from '../data/content.js';

export default function Certifications() {
  return (
    <section id="certifications"><h2>Certifications</h2>
      <div className="cert">
        {CERTS.map(([t, org, yr, url]) => (
          <div className="card" key={t}><h3>{t}</h3><div className="meta mono">{[org, yr].filter(Boolean).join(' · ')}</div>
            {url && <a className="lnk" href={url} target="_blank" rel="noopener noreferrer">View Certificate</a>}
          </div>
        ))}
      </div>
    </section>
  );
}
