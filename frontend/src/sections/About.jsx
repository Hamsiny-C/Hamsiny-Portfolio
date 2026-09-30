import { STACK } from '../data/content.js';

export default function About() {
  return (
    <section id="about"><h2>About</h2>
      <div className="about">
        <div>
          <p>I am a Computer Science Engineering student focused on Java Full Stack Development.</p>
          <p>I build practical web applications using Java, Spring Boot, React and MySQL, with an interest in backend development, REST APIs, authentication, databases, cloud deployment and scalable application architecture.</p>
          <p>I enjoy turning ideas into working software and continuously improving my problem-solving and development skills.</p>
        </div>
        <div className="stack mono">{STACK.map((s) => <div key={s}>{s}</div>)}</div>
      </div>
    </section>
  );
}
