import { useEffect, useState } from 'react';

let stopCurrent = null; // only one explanation plays at a time

function pickVoice() {
  const vs = window.speechSynthesis.getVoices();
  return vs.find((v) => /en-IN/i.test(v.lang) && /female|heera|neerja|veena/i.test(v.name))
    || vs.find((v) => /en-IN/i.test(v.lang))
    || vs.find((v) => /^en/i.test(v.lang) && /female|natural|samantha|aria|google uk/i.test(v.name))
    || null;
}

/** Play/stop browser speech. Never autoplays. */
export default function VoiceButton({ text }) {
  const [playing, setPlaying] = useState(false);
  const supported = typeof window !== 'undefined' && 'speechSynthesis' in window;

  useEffect(() => () => { if (playing && supported) window.speechSynthesis.cancel(); }, [playing, supported]);

  const toggle = () => {
    if (!supported) return alert('Speech is not supported in this browser.');
    const ss = window.speechSynthesis;
    if (playing) { ss.cancel(); setPlaying(false); stopCurrent = null; return; }
    if (stopCurrent) stopCurrent();
    ss.cancel();
    const u = new SpeechSynthesisUtterance(text);
    u.voice = pickVoice();
    u.rate = 0.96;
    u.onend = u.onerror = () => { setPlaying(false); stopCurrent = null; };
    stopCurrent = () => setPlaying(false);
    setPlaying(true);
    ss.speak(u);
  };

  return (
    <button type="button" className={`listen${playing ? ' on' : ''}`} onClick={toggle}>
      {playing ? '■ Stop' : '▶ Listen to my explanation'}
    </button>
  );
}
