'use client';
import { useState, useEffect, useRef } from 'react';

// Default: 48 hours from first page load (persisted in sessionStorage)
const COUNTDOWN_HOURS = 48;
const STORAGE_KEY = 'ai_workshop_countdown_target';

function getTargetTime(): number {
    if (typeof window === 'undefined') return Date.now() + COUNTDOWN_HOURS * 3600 * 1000;

    const stored = sessionStorage.getItem(STORAGE_KEY);
    if (stored) {
        const target = parseInt(stored, 10);
        if (target > Date.now()) return target;
    }

    const target = Date.now() + COUNTDOWN_HOURS * 3600 * 1000;
    sessionStorage.setItem(STORAGE_KEY, target.toString());
    return target;
}

function computeTimeLeft(target: number) {
    const diff = Math.max(0, target - Date.now());
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60); // Fixed seconds not having modulo 60 in case hours are large
    // Actually the modulo was removed in original code or not present? Let's check. 
    // The original code had: const seconds = Math.floor((diff / 1000) % 60);
    // So my implementation is correct.
    return { hours, minutes, seconds, total: diff };
}

export function useCountdown() {
    const targetRef = useRef<number | null>(null);
    const [timeLeft, setTimeLeft] = useState({ hours: 0, minutes: 0, seconds: 0, total: 0 });

    // Initialize target on client
    useEffect(() => {
        targetRef.current = getTargetTime();
        setTimeLeft(computeTimeLeft(targetRef.current));

        const tick = () => {
            if (targetRef.current) {
                setTimeLeft(computeTimeLeft(targetRef.current));
            }
        };

        // Initial tick
        tick();

        const id = setInterval(tick, 1000);
        return () => clearInterval(id);
    }, []);

    return timeLeft;
}
