'use client';

import { useEffect, useRef, type ReactNode } from 'react';

type Delay = 0 | 1 | 2 | 3 | 4;

interface RevealWrapperProps {
  children: ReactNode;
  className?: string;
  delay?: Delay;
  as?: keyof React.JSX.IntrinsicElements;
}

const delayClass: Record<Delay, string> = {
  0: '',
  1: 'd1',
  2: 'd2',
  3: 'd3',
  4: 'd4',
};

export default function RevealWrapper({
  children,
  className = '',
  delay = 0,
  as: Tag = 'div',
}: RevealWrapperProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('visible');
          observer.unobserve(el);
        }
      },
      { threshold: 0.07, rootMargin: '0px 0px -28px 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const classes = ['reveal', delayClass[delay], className]
    .filter(Boolean)
    .join(' ');

  return (
    // @ts-expect-error – dynamic tag
    <Tag ref={ref} className={classes}>
      {children}
    </Tag>
  );
}
