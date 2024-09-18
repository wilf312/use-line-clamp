import type React from "react";
type Return = {
    containerRef: React.MutableRefObject<HTMLDivElement | null>;
    isClamped: boolean;
    style: {
        overflow: string;
        display: string;
        WebkitLineClamp: string;
        WebkitBoxOrient: string;
    };
};
export declare const useLineClamp: (lineCount: number) => Return;
export {};
