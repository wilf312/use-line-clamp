import { useEffect, useRef, useState } from "react";
export const useLineClamp = (lineCount) => {
    const containerRef = useRef(null);
    const [isClamped, setIsClamped] = useState(false);
    // TODO: react19になったら refコールバックを使う https://zenn.dev/uhyo/books/react-19-new/viewer/ref-cleanup#react-19%E3%81%AB%E3%81%8A%E3%81%91%E3%82%8Bref%E3%82%B3%E3%83%BC%E3%83%AB%E3%83%90%E3%83%83%E3%82%AF%E3%81%AE%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%A2%E3%83%83%E3%83%97%E9%96%A2%E6%95%B0
    useEffect(() => {
        const container = containerRef.current;
        // ResizeObserverのインスタンスを作成
        const resizeObserver = new ResizeObserver(() => {
            if (!container) {
                return;
            }
            // テキストのクランプ状態をチェック
            if (container.scrollHeight > container.clientHeight) {
                setIsClamped(true);
            }
            else {
                setIsClamped(false);
            }
        });
        // ResizeObserverをcontainerに適用
        if (container) {
            resizeObserver.observe(container);
        }
        // クリーンアップ: ResizeObserverの監視を解除
        return () => {
            if (container) {
                resizeObserver.unobserve(container);
            }
        };
    }, []);
    const style = {
        overflow: "hidden",
        display: "-webkit-box",
        WebkitLineClamp: `${lineCount}`,
        WebkitBoxOrient: "vertical",
    };
    return { containerRef, isClamped, style };
};
