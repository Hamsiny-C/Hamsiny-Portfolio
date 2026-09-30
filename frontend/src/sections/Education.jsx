import Tags from '../components/Tags.jsx';

export default function Education() {
  return (
    <section id="education"><h2>Education</h2>
      <div className="card"><div className="edu">
        <div className="cg">9.00<div className="mono" style={{ fontSize: 13, fontWeight: 400, color: 'var(--mut)' }}>CGPA / 10</div></div>
        <div>
          <div className="meta mono">Aug 2024 – May 2028</div>
          <h4>St. Joseph's Institute of Technology</h4>
          <div className="role2">B.E. Computer Science Engineering</div>
          <Tags items={['Java', 'Full Stack Development', 'Data Structures & Algorithms', 'Cloud Computing']} />
        </div>
      </div></div>
    </section>
  );
}
