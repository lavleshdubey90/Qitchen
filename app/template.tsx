"use client";

import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const Template = ({ children }: { children: React.ReactNode }) => {

    const divRef = useRef<HTMLDivElement>(null);

    useGSAP(()=>{
        gsap.from(divRef.current, {
            opacity: 0,
            duration: 1
        })
    }, []);

    return (
        <div ref={divRef}>
            {children}
        </div>
    )
}

export default Template;