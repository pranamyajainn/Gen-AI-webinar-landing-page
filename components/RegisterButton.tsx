'use client';
import { Button, ButtonProps } from '@/components/ui/Button';
import { useRegistration } from './RegistrationContext';

export default function RegisterButton({ children, ...props }: ButtonProps) {
    const { openModal } = useRegistration();
    return (
        <Button onClick={openModal} {...props}>
            {children}
        </Button>
    );
}
