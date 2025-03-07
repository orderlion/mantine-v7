'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var Combobox_context = require('../Combobox.context.js');
var Popover = require('../../Popover/Popover.js');
var factory = require('../../../core/factory/factory.js');
var useProps = require('../../../core/MantineProvider/use-props/use-props.js');
var isElement = require('../../../core/utils/is-element/is-element.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const defaultProps = {
  refProp: "ref"
};
const ComboboxDropdownTarget = factory.factory((props, ref) => {
  const { children, refProp } = useProps.useProps("ComboboxDropdownTarget", defaultProps, props);
  Combobox_context.useComboboxContext();
  if (!isElement.isElement(children)) {
    throw new Error(
      "Combobox.DropdownTarget component children should be an element or a component that accepts ref. Fragments, strings, numbers and other primitive values are not supported"
    );
  }
  return /* @__PURE__ */ React__default.createElement(Popover.Popover.Target, { ref, refProp }, children);
});
ComboboxDropdownTarget.displayName = "@mantine/core/ComboboxDropdownTarget";

exports.ComboboxDropdownTarget = ComboboxDropdownTarget;
//# sourceMappingURL=ComboboxDropdownTarget.js.map
