'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, Loader2 } from 'lucide-react';
import { useState, useEffect } from 'react';

// Use a rotating array of messages to keep the user engaged
const MESSAGES = [
    "Confirming your slot...",
    "Almost There...",
    "Securing your bonuses...",
    "Preparing your dashboard...",
];

export default function ProcessingOverlay() {
    const [messageIndex, setMessageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setMessageIndex((prev) => (prev + 1) % MESSAGES.length);
        }, 1500);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-slate-950/90 backdrop-blur-md">
            <div className="flex flex-col items-center gap-6">
                {/* Loader */}
                <div className="relative">
                    <div className="absolute inset-0 rounded-full border-t-2 border-primary blur-sm animate-spin" />
                    <Loader2 className="w-16 h-16 text-primary animate-spin" />
                </div>

                {/* Animated Text */}
                <div className="h-8 relative overflow-hidden w-64 text-center">
                    <AnimatePresence mode="wait">
                        <motion.p
                            key={messageIndex}
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: -20, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="text-xl font-medium text-white absolute inset-0 flex items-center justify-center"
                        >
                            {MESSAGES[messageIndex]}
                        </motion.p>
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
}
