"use client";

import { useEffect, useRef, useCallback } from "react";
import { X } from "lucide-react";
import appleComingSoonImg from "@/assets/apple-coming-soon.png";

// Cached HTMLImageElement
let cachedImg: HTMLImageElement | null = null;

function getImage(): Promise<HTMLImageElement> {
    if (cachedImg) return Promise.resolve(cachedImg);
    return new Promise((resolve, reject) => {
        const img = new window.Image();
        img.crossOrigin = "anonymous";
        img.onload = () => { cachedImg = img; resolve(img); };
        img.onerror = reject;
        img.src = appleComingSoonImg.src;
    });
}

interface Props {
    open: boolean;
    onClose: () => void;
}

export function AppleComingSoonModal({ open, onClose }: Props) {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    const draw = useCallback(async () => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        try {
            const img = await getImage();
            const dpr = window.devicePixelRatio || 1;
            const vw = window.innerWidth;
            const vh = window.innerHeight;

            // Fit within 94% of viewport width and 90% of viewport height
            const maxW = Math.min(vw * 0.94, 1344);
            const maxH = vh * 0.9;

            const aspect = img.naturalWidth / img.naturalHeight;
            let w = maxW;
            let h = w / aspect;

            // If height exceeds viewport, scale down to fit
            if (h > maxH) {
                h = maxH;
                w = h * aspect;
            }

            canvas.style.width = `${w}px`;
            canvas.style.height = `${h}px`;
            canvas.width = w * dpr;
            canvas.height = h * dpr;

            const ctx = canvas.getContext("2d");
            if (!ctx) return;
            ctx.scale(dpr, dpr);
            ctx.drawImage(img, 0, 0, w, h);
        } catch {
            // silent
        }
    }, []);

    useEffect(() => {
        if (!open) return;
        draw();
        window.addEventListener("resize", draw);
        return () => window.removeEventListener("resize", draw);
    }, [open, draw]);

    useEffect(() => {
        if (!open) return;
        const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, [open, onClose]);

    if (!open) return null;

    return (
        <div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
            onClick={onClose}
            onContextMenu={(e) => e.preventDefault()}
        >
            <div
                className="relative animate-in zoom-in-95 duration-300"
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    onClick={onClose}
                    className="absolute -top-3 -right-3 z-10 bg-white rounded-full p-1.5 shadow-lg hover:bg-slate-100 transition-colors cursor-pointer"
                >
                    <X className="h-5 w-5 text-slate-600" />
                </button>
                <canvas
                    ref={canvasRef}
                    className="rounded-2xl shadow-2xl select-none"
                    onContextMenu={(e) => e.preventDefault()}
                    onDragStart={(e) => e.preventDefault()}
                />
            </div>
        </div>
    );
}
