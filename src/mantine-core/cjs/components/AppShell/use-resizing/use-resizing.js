'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var hooks = require('@mantine/hooks');

function useResizing({ transitionDuration, disabled }) {
  const [resizing, setResizing] = React.useState(false);
  const resizingTimeout = React.useRef();
  const disabledTimeout = React.useRef();
  hooks.useWindowEvent("resize", () => {
    setResizing(true);
    clearTimeout(resizingTimeout.current);
    resizingTimeout.current = window.setTimeout(() => setResizing(false), 200);
  });
  hooks.useIsomorphicEffect(() => {
    setResizing(true);
    clearTimeout(disabledTimeout.current);
    disabledTimeout.current = window.setTimeout(() => setResizing(false), transitionDuration || 0);
  }, [disabled, transitionDuration]);
  return resizing;
}

exports.useResizing = useResizing;
//# sourceMappingURL=use-resizing.js.map
