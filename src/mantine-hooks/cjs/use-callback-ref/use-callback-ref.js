'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');

function useCallbackRef(callback) {
  const callbackRef = React.useRef(callback);
  React.useEffect(() => {
    callbackRef.current = callback;
  });
  return React.useMemo(() => (...args) => {
    var _a;
    return (_a = callbackRef.current) == null ? void 0 : _a.call(callbackRef, ...args);
  }, []);
}

exports.useCallbackRef = useCallbackRef;
//# sourceMappingURL=use-callback-ref.js.map
