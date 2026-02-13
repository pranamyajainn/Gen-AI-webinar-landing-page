import type { Variants } from 'framer-motion';
export { useReducedMotion } from 'framer-motion';

/**
 * Returns motion props that disable animations when the user prefers reduced motion.
 * Usage: <motion.div {...getMotionProps(shouldReduce, variants)} />
 */
export function getMotionProps(
    shouldReduce: boolean | null,
    variants: Variants,
    animate: string = 'visible',
) {
    if (shouldReduce) {
        return { initial: undefined, animate: undefined, variants: undefined };
    }
    return { initial: 'hidden', animate, variants };
}

/* ── Shared Easing ── */
export const EASE_OUT: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];

/* ── Shared Variants ── */
export const fadeUp: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: EASE_OUT },
    },
};

export const scaleIn: Variants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: { duration: 0.6, ease: EASE_OUT },
    },
};

export function staggerContainer(stagger = 0.1, delay = 0.15): Variants {
    return {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: stagger, delayChildren: delay },
        },
    };
}
