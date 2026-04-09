'use client';

import { useEffect } from 'react';

const HOVER_SEL = 'a, button, .rc, .pc, .sea, .exp-card, .jstat';

export default function CustomCursor() {
  useEffect(() => {
    // Only skip on genuine touch-primary devices (phones/tablets).
    // Do NOT check maxTouchPoints alone — Windows laptops often report > 0
    // even when used with a mouse, which would silently disable the cursor.
    const isTouch = window.matchMedia('(hover: none) and (pointer: coarse)').matches;
    if (isTouch) return;

    const cur = document.getElementById('cur');
    const ring = document.getElementById('cur-ring');
    if (!cur || !ring) return;

    let mx = 0, my = 0, rx = 0, ry = 0;
    let rafId: number;

    // ── Dot: moves instantly on mousemove (exact reference behaviour) ──
    const onMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      cur.style.left = mx + 'px';
      cur.style.top = my + 'px';
    };

    // ── Ring: lerps toward cursor at factor 0.12 (exact reference) ──
    const loop = () => {
      rx += (mx - rx) * 0.12;
      ry += (my - ry) * 0.12;
      ring.style.left = rx + 'px';
      ring.style.top = ry + 'px';
      rafId = requestAnimationFrame(loop);
    };

    // ── Hover state: mouseenter / mouseleave per element ──
    // Exactly matches reference: document.querySelectorAll('a,button,.rc,…').forEach(…)
    const addLh = () => document.body.classList.add('lh');
    const removeLh = () => document.body.classList.remove('lh');

    function bindHover(el: Element) {
      el.addEventListener('mouseenter', addLh);
      el.addEventListener('mouseleave', removeLh);
    }

    function unbindHover(el: Element) {
      el.removeEventListener('mouseenter', addLh);
      el.removeEventListener('mouseleave', removeLh);
    }

    // Bind elements already in the DOM
    document.querySelectorAll(HOVER_SEL).forEach(bindHover);

    // Bind elements React mounts after this effect runs
    const mo = new MutationObserver((mutations) => {
      for (const m of mutations) {
        for (const node of m.addedNodes) {
          if (!(node instanceof Element)) continue;
          if (node.matches(HOVER_SEL)) bindHover(node);
          node.querySelectorAll(HOVER_SEL).forEach(bindHover);
        }
        // Clean up removed nodes
        for (const node of m.removedNodes) {
          if (!(node instanceof Element)) continue;
          if (node.matches(HOVER_SEL)) unbindHover(node);
          node.querySelectorAll(HOVER_SEL).forEach(unbindHover);
        }
      }
    });
    mo.observe(document.body, { childList: true, subtree: true });

    document.addEventListener('mousemove', onMove);
    rafId = requestAnimationFrame(loop);

    return () => {
      document.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(rafId);
      mo.disconnect();
      document.querySelectorAll(HOVER_SEL).forEach(unbindHover);
      document.body.classList.remove('lh');
    };
  }, []);

  return (
    <>
      <div id="cur" />
      <div id="cur-ring" />
    </>
  );
}
