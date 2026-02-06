import { useRef } from "react";

interface useSwipeParameters {
    onSwipeLeft?: () => void;
    onSwipeRight?: () => void;
}

export function useSwipe({ onSwipeLeft, onSwipeRight }: useSwipeParameters) {
    const touchStartX = useRef<number | null>(null);
    
    function handleTouchStart(e: React.TouchEvent) {
        touchStartX.current = e.touches[0].clientX;
    }

    function handleTouchEnd(e: React.TouchEvent) {
        if (touchStartX.current === null) return;
        const deltaX = e.changedTouches[0].clientX - touchStartX.current;
        touchStartX.current = null;
        
        if (deltaX > 50) {
            onSwipeRight?.();
        } else if (deltaX < -50) {
            onSwipeLeft?.();
        }
    }

    return { handleTouchStart, handleTouchEnd };
}