'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var hooks = require('@mantine/hooks');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { useTextSelection } from '@mantine/hooks';

function Demo() {
  const selection = useTextSelection();
  return (
    <>
      <div>Select some text here or anywhere on the page and it will be displayed below</div>
      <div>Selected text: {selection?.toString()}</div>
    </>
  );
}
`;
function Demo() {
  const selection = hooks.useTextSelection();
  return /* @__PURE__ */ React__default.createElement(React__default.Fragment, null, /* @__PURE__ */ React__default.createElement("div", null, "Select some text here or anywhere on the page and it will be displayed below"), /* @__PURE__ */ React__default.createElement("div", null, "Selected text: ", /* @__PURE__ */ React__default.createElement("b", null, selection == null ? void 0 : selection.toString())));
}
const useTextSelectionUsage = {
  type: "code",
  component: Demo,
  code
};

exports.useTextSelectionUsage = useTextSelectionUsage;
//# sourceMappingURL=use-text-selection.demo.usage.js.map
