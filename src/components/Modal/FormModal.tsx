'use client';
import React from 'react';
import {Modal} from '@/lib/gravity';

type ModalProps = {
    isOpen?: boolean;
    children?: React.ReactNode | React.ReactNode[];
};

export const FormModal = ({isOpen, children}: ModalProps) => {
    return (
        <>
            <Modal open={isOpen}>{children}</Modal>
        </>
    );
};
