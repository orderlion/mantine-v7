'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var useCallbackRef = require('../use-callback-ref/use-callback-ref.js');

function useDebounceCallback(callback, delay) {
  const handleCallback = useCallbackRef.useCallbackRef(callback);
  const debounceTimerRef = React.useRef(0);
  React.useEffect(() => () => window.clearTimeout(debounceTimerRef.current), []);
  return React.useCallback(() => {
    window.clearTimeout(debounceTimerRef.current);
    debounceTimerRef.current = window.setTimeout(handleCallback, delay);
  }, [handleCallback, delay]);
}

exports.useDebounceCallback = useDebounceCallback;
//# sourceMappingURL=use-debounced-callback.js.map
