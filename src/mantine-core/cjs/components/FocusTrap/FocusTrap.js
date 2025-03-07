'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var hooks = require('@mantine/hooks');
var isElement = require('../../core/utils/is-element/is-element.js');

function FocusTrap({
  children,
  active = true,
  refProp = "ref"
}) {
  const focusTrapRef = hooks.useFocusTrap(active);
  const ref = hooks.useMergedRef(focusTrapRef, children == null ? void 0 : children.ref);
  if (!isElement.isElement(children)) {
    return children;
  }
  return React.cloneElement(children, { [refProp]: ref });
}
FocusTrap.displayName = "@mantine/core/FocusTrap";

exports.FocusTrap = FocusTrap;
//# sourceMappingURL=FocusTrap.js.map
