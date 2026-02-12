'use client';
import { useRouter } from 'next/navigation';
import { Button, ButtonProps } from '@/components/ui/Button';

export default function RegisterButton({ children, ...props }: ButtonProps) {
    const router = useRouter();

    const handleClick = () => {
        router.push('/checkout');
    };

    return (
        <Button onClick={handleClick} {...props}>
            {children}
        </Button>
    );
}
