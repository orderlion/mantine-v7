import { useState } from 'react';
import { useId, useWindowEvent, useFocusReturn } from '@mantine/hooks';
import { useLockScroll } from './use-lock-scroll.js';

function useModal({
  id,
  transitionProps,
  opened,
  trapFocus,
  closeOnEscape,
  onClose,
  returnFocus
}) {
  const _id = useId(id);
  const [titleMounted, setTitleMounted] = useState(false);
  const [bodyMounted, setBodyMounted] = useState(false);
  const transitionDuration = typeof (transitionProps == null ? void 0 : transitionProps.duration) === "number" ? transitionProps == null ? void 0 : transitionProps.duration : 200;
  const shouldLockScroll = useLockScroll({ opened, transitionDuration });
  useWindowEvent("keydown", (event) => {
    if (!trapFocus && event.key === "Escape" && closeOnEscape) {
      onClose();
    }
  });
  useFocusReturn({ opened, shouldReturnFocus: trapFocus && returnFocus });
  return {
    _id,
    titleMounted,
    bodyMounted,
    shouldLockScroll,
    setTitleMounted,
    setBodyMounted
  };
}

export { useModal };
//# sourceMappingURL=use-modal.js.map
