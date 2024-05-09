'use client';

import { Dialog, DialogContent, DialogDescription, DialogTitle } from '@radix-ui/react-dialog';
import { useRouter } from 'next/navigation';

export const Modal = ({
    children,
    title = 'Lorem ipsum dolor sit amet',
}: {
    children: React.ReactNode;
    title?: string;
}) => {
    const router = useRouter();

    return (
        <Dialog open onOpenChange={() => router.back()}>
            <DialogContent>
                <DialogTitle>{title}</DialogTitle>
                <DialogDescription>{children}</DialogDescription>
            </DialogContent>
        </Dialog>
    );
}