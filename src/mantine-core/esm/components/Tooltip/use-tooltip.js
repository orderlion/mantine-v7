import { useState, useCallback } from 'react';
import { useDelayGroupContext, useFloating, offset, shift, flip, arrow, inline, useInteractions, useHover, useFocus, useRole, useDismiss, useDelayGroup } from '@floating-ui/react';
import { useId, useDidUpdate } from '@mantine/hooks';
import { useTooltipGroupContext } from './TooltipGroup/TooltipGroup.context.js';
import { useFloatingAutoUpdate } from '../Floating/use-floating-auto-update.js';

function useTooltip(settings) {
  var _a, _b, _c;
  const [uncontrolledOpened, setUncontrolledOpened] = useState(false);
  const controlled = typeof settings.opened === "boolean";
  const opened = controlled ? settings.opened : uncontrolledOpened;
  const withinGroup = useTooltipGroupContext();
  const uid = useId();
  const { delay: groupDelay, currentId, setCurrentId } = useDelayGroupContext();
  const onChange = useCallback(
    (_opened) => {
      setUncontrolledOpened(_opened);
      if (_opened) {
        setCurrentId(uid);
      }
    },
    [setCurrentId, uid]
  );
  const {
    x,
    y,
    context,
    refs,
    update,
    placement,
    middlewareData: { arrow: { x: arrowX, y: arrowY } = {} }
  } = useFloating({
    placement: settings.position,
    open: opened,
    onOpenChange: onChange,
    middleware: [
      offset(settings.offset),
      shift({ padding: 8 }),
      flip(),
      arrow({ element: settings.arrowRef, padding: settings.arrowOffset }),
      ...settings.inline ? [inline()] : []
    ]
  });
  const { getReferenceProps, getFloatingProps } = useInteractions([
    useHover(context, {
      enabled: (_a = settings.events) == null ? void 0 : _a.hover,
      delay: withinGroup ? groupDelay : { open: settings.openDelay, close: settings.closeDelay },
      mouseOnly: !((_b = settings.events) == null ? void 0 : _b.touch)
    }),
    useFocus(context, { enabled: (_c = settings.events) == null ? void 0 : _c.focus, keyboardOnly: true }),
    useRole(context, { role: "tooltip" }),
    // cannot be used with controlled tooltip, page jumps
    useDismiss(context, { enabled: typeof settings.opened === void 0 }),
    useDelayGroup(context, { id: uid })
  ]);
  useFloatingAutoUpdate({
    opened,
    position: settings.position,
    positionDependencies: settings.positionDependencies,
    floating: { refs, update }
  });
  useDidUpdate(() => {
    var _a2;
    (_a2 = settings.onPositionChange) == null ? void 0 : _a2.call(settings, placement);
  }, [placement]);
  const isGroupPhase = opened && currentId && currentId !== uid;
  return {
    x,
    y,
    arrowX,
    arrowY,
    reference: refs.setReference,
    floating: refs.setFloating,
    getFloatingProps,
    getReferenceProps,
    isGroupPhase,
    opened,
    placement
  };
}

export { useTooltip };
//# sourceMappingURL=use-tooltip.js.map
