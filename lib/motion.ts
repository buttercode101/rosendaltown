export const EASE = {
  out: [0.22, 1, 0.36, 1] as const,
  inOut: [0.65, 0, 0.35, 1] as const,
  soft: [0.34, 1.56, 0.64, 1] as const
};

export const DURATION = {
  fast: 0.5,
  base: 0.8,
  slow: 1.1,
  hero: 1.8
};

export const fadeRise = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: DURATION.base, ease: EASE.out } }
};

export const stagger = (stagger = 0.09, delay = 0) => ({
  hidden: {},
  visible: { transition: { staggerChildren: stagger, delayChildren: delay } }
});

export const lineReveal = {
  hidden: { y: '110%' },
  visible: (delay = 0) => ({ y: '0%', transition: { duration: DURATION.base, ease: EASE.out, delay } })
};

export const maskReveal = {
  hidden: { clipPath: 'inset(100% 0 0 0)' },
  visible: { clipPath: 'inset(0% 0 0 0)', transition: { duration: DURATION.slow, ease: EASE.out } }
};
