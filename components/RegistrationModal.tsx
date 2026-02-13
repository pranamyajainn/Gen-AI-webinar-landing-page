'use client';
import { useState } from 'react';
import { useRegistration } from './RegistrationContext';
import { Button } from './ui/Button';
import { Input } from './ui/Input';
import { X, Loader2, CheckCircle } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

const formSchema = z.object({
    email: z.string().email({ message: "Please enter a valid email address." }),
    name: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

export default function RegistrationModal() {
    const { isOpen, closeModal } = useRegistration();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>({
        resolver: zodResolver(formSchema),
    });

    if (!isOpen) return null;

    const onSubmit = async (data: FormData) => {
        setIsSubmitting(true);
        try {
            const res = await fetch('/api/register', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            });

            if (!res.ok) throw new Error('Registration failed');

            setIsSuccess(true);
            setTimeout(() => {
                closeModal();
                reset();
                setIsSuccess(false);
            }, 3000); // Close after 3s
        } catch (error) {
            console.error(error);
            alert('Something went wrong. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200">
            <div className="bg-slate-900 border border-white/10 rounded-2xl w-full max-w-md p-6 relative shadow-2xl animate-in zoom-in-95 duration-200">

                <button
                    onClick={closeModal}
                    className="absolute right-4 top-4 text-slate-400 hover:text-white transition-colors"
                >
                    <X className="w-5 h-5" />
                </button>

                {isSuccess ? (
                    <div className="flex flex-col items-center justify-center py-8 text-center space-y-4">
                        <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center">
                            <CheckCircle className="w-8 h-8 text-green-500" />
                        </div>
                        <h3 className="text-2xl font-bold text-white">You're In!</h3>
                        <p className="text-slate-400">Check your email for the workshop details.</p>
                    </div>
                ) : (
                    <>
                        <div className="mb-6">
                            <h3 className="text-2xl font-bold text-white mb-2">Secure Your Free Seat</h3>
                            <p className="text-slate-400 text-sm">Join 15,000+ professionals mastering AI.</p>
                        </div>

                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-slate-300">Name (Optional)</label>
                                <Input
                                    type="text"
                                    {...register('name')}
                                    placeholder="Your Name"
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium text-slate-300">Email Address</label>
                                <Input
                                    type="email"
                                    {...register('email')}
                                    placeholder="you@company.com"
                                    error={!!errors.email}
                                />
                                {errors.email && <p className="text-red-400 text-xs">{errors.email.message}</p>}
                            </div>

                            <Button type="submit" variant="glow" className="w-full h-12 text-base" disabled={isSubmitting}>
                                {isSubmitting ? (
                                    <>
                                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                        Completing Registration...
                                    </>
                                ) : (
                                    "COMPLETE REGISTRATION"
                                )}
                            </Button>

                            <p className="text-xs text-center text-slate-500">
                                We respect your inbox. Unsubscribe at any time.
                            </p>
                        </form>
                    </>
                )}
            </div>
        </div>
    );
}
