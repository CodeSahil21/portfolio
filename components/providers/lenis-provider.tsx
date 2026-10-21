"use client";

import { useEffect, useRef } from "react";
import Lenis from "lenis";

export function LenisProvider({ children }: { children: React.ReactNode }) {
    const lenisRef = useRef<Lenis | null>(null);

    useEffect(() => {
        if (window.matchMedia('(pointer: coarse)').matches) {
            return;
        }

        if (!lenisRef.current) {
            lenisRef.current = new Lenis({
                autoRaf: true,
            });
        }

        return () => {
            lenisRef.current?.destroy();
            lenisRef.current = null;
        };
    }, []);

    return <>{children}</>;
}
