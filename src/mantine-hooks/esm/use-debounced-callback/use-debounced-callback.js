import { useRef, useEffect, useCallback } from 'react';
import { useCallbackRef } from '../use-callback-ref/use-callback-ref.js';

function useDebounceCallback(callback, delay) {
  const handleCallback = useCallbackRef(callback);
  const debounceTimerRef = useRef(0);
  useEffect(() => () => window.clearTimeout(debounceTimerRef.current), []);
  return useCallback(() => {
    window.clearTimeout(debounceTimerRef.current);
    debounceTimerRef.current = window.setTimeout(handleCallback, delay);
  }, [handleCallback, delay]);
}

export { useDebounceCallback };
//# sourceMappingURL=use-debounced-callback.js.map
