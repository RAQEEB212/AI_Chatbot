import { useEffect, useRef } from 'react';

const useScrollToBottom = (elementRef, dependencies) => {
    useEffect(() => {
        if (elementRef.current) {
            elementRef.current.scrollTop = elementRef.current.scrollHeight;
        }
    }, dependencies);
};

export default useScrollToBottom;
