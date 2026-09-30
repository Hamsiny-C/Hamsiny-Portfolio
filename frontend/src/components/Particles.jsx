import { useEffect, useRef } from 'react';

export default function Particles() {
  const ref = useRef(null);
  useEffect(() => {
    const cv = ref.current, x = cv.getContext('2d');
    const rm = window.matchMedia('(prefers-reduced-motion:reduce)').matches;
    let W, H, P = [], raf;
    const rs = () => {
      W = cv.width = cv.offsetWidth; H = cv.height = cv.offsetHeight;
      P = Array.from({ length: Math.min(70, (W / 18) | 0) }, () => ({ x: Math.random() * W, y: Math.random() * H, r: Math.random() * 1.4 + 0.4, vx: (Math.random() - 0.5) * 0.18, vy: -Math.random() * 0.25 - 0.05 }));
    };
    const draw = () => {
      x.clearRect(0, 0, W, H); x.fillStyle = 'rgba(232,178,90,.5)';
      P.forEach((p) => {
        if (!rm) { p.x += p.vx; p.y += p.vy; if (p.y < 0) p.y = H; if (p.x < 0 || p.x > W) p.vx *= -1; }
        x.beginPath(); x.arc(p.x, p.y, p.r, 0, 7); x.fill();
      });
      raf = requestAnimationFrame(draw);
    };
    rs(); draw(); window.addEventListener('resize', rs);
    return () => { cancelAnimationFrame(raf); window.removeEventListener('resize', rs); };
  }, []);
  return <canvas ref={ref} />;
}
