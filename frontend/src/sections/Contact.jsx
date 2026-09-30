import { useState } from 'react';
import { LINKS } from '../data/content.js';
import { sendContact } from '../services/api.js';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export default function Contact() {
  const [f, setF] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({ type: '', text: '' });
  const [busy, setBusy] = useState(false);
  const set = (k) => (e) => setF({ ...f, [k]: e.target.value });

  const submit = async (e) => {
    e.preventDefault();
    const v = {};
    if (f.name.trim().length < 2) v.name = 'Enter your name.';
    if (!EMAIL_RE.test(f.email.trim())) v.email = 'Enter a valid email address.';
    if (f.message.trim().length < 10) v.message = 'Write at least 10 characters.';
    setErrors(v); setStatus({ type: '', text: '' });
    if (Object.keys(v).length) return;
    setBusy(true);
    try {
      const res = await sendContact({ name: f.name.trim(), email: f.email.trim(), message: f.message.trim() });
      setStatus({ type: 'ok', text: res.message });
      setF({ name: '', email: '', message: '' });
    } catch (err) {
      setErrors(err.errors || {});
      setStatus({ type: 'error', text: err.message });
    } finally { setBusy(false); }
  };

  return (
    <section id="contact"><h2>Let's build something useful.</h2>
      <div className="ct">
        <div className="ci">
          <a href={`mailto:${LINKS.email}`}><span>Email</span>{LINKS.email}</a>
          <a href="tel:+918838571642"><span>Phone</span>{LINKS.phone}</a>
          <div><span>Location</span>Chennai, Tamil Nadu, India</div>
          <a href={LINKS.github} target="_blank" rel="noopener noreferrer"><span>GitHub</span>Hamsiny-C</a>
          <a href={LINKS.linkedin} target="_blank" rel="noopener noreferrer"><span>LinkedIn</span>hamsiny-c</a>
          <a href={LINKS.leetcode} target="_blank" rel="noopener noreferrer"><span>LeetCode</span>GEWCJhefXN</a>
        </div>
        <form onSubmit={submit} noValidate>
          <div><label htmlFor="n">Name</label><input id="n" autoComplete="name" value={f.name} onChange={set('name')} /><div className="err">{errors.name}</div></div>
          <div><label htmlFor="m">Email</label><input id="m" type="email" autoComplete="email" value={f.email} onChange={set('email')} /><div className="err">{errors.email}</div></div>
          <div><label htmlFor="t">Message</label><textarea id="t" value={f.message} onChange={set('message')} /><div className="err">{errors.message}</div></div>
          <button className="btn p" type="submit" disabled={busy}>{busy ? 'Sending…' : 'Send Message'}</button>
          <div className={`err${status.type === 'ok' ? ' ok' : ''}`} role="status">{status.text}</div>
        </form>
      </div>
    </section>
  );
}
