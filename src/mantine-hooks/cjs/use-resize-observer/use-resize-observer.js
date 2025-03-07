'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');

const defaultState = {
  x: 0,
  y: 0,
  width: 0,
  height: 0,
  top: 0,
  left: 0,
  bottom: 0,
  right: 0
};
function useResizeObserver() {
  const frameID = React.useRef(0);
  const ref = React.useRef(null);
  const [rect, setRect] = React.useState(defaultState);
  const observer = React.useMemo(
    () => typeof window !== "undefined" ? new ResizeObserver((entries) => {
      const entry = entries[0];
      if (entry) {
        cancelAnimationFrame(frameID.current);
        frameID.current = requestAnimationFrame(() => {
          if (ref.current) {
            setRect(entry.contentRect);
          }
        });
      }
    }) : null,
    []
  );
  React.useEffect(() => {
    if (ref.current) {
      observer == null ? void 0 : observer.observe(ref.current);
    }
    return () => {
      observer == null ? void 0 : observer.disconnect();
      if (frameID.current) {
        cancelAnimationFrame(frameID.current);
      }
    };
  }, [ref.current]);
  return [ref, rect];
}
function useElementSize() {
  const [ref, { width, height }] = useResizeObserver();
  return { ref, width, height };
}

exports.useElementSize = useElementSize;
exports.useResizeObserver = useResizeObserver;
//# sourceMappingURL=use-resize-observer.js.map
