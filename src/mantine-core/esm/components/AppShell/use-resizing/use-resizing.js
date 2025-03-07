import { useState, useRef } from 'react';
import { useWindowEvent, useIsomorphicEffect } from '@mantine/hooks';

function useResizing({ transitionDuration, disabled }) {
  const [resizing, setResizing] = useState(false);
  const resizingTimeout = useRef();
  const disabledTimeout = useRef();
  useWindowEvent("resize", () => {
    setResizing(true);
    clearTimeout(resizingTimeout.current);
    resizingTimeout.current = window.setTimeout(() => setResizing(false), 200);
  });
  useIsomorphicEffect(() => {
    setResizing(true);
    clearTimeout(disabledTimeout.current);
    disabledTimeout.current = window.setTimeout(() => setResizing(false), transitionDuration || 0);
  }, [disabled, transitionDuration]);
  return resizing;
}

export { useResizing };
//# sourceMappingURL=use-resizing.js.map
