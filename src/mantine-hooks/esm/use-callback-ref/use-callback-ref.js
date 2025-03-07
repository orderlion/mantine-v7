import { useRef, useEffect, useMemo } from 'react';

function useCallbackRef(callback) {
  const callbackRef = useRef(callback);
  useEffect(() => {
    callbackRef.current = callback;
  });
  return useMemo(() => (...args) => {
    var _a;
    return (_a = callbackRef.current) == null ? void 0 : _a.call(callbackRef, ...args);
  }, []);
}

export { useCallbackRef };
//# sourceMappingURL=use-callback-ref.js.map
