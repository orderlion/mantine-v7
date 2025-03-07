'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var stylesToString = require('./styles-to-string/styles-to-string.js');
var Mantine_context = require('../MantineProvider/Mantine.context.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

function InlineStyles({ selector, styles, media }) {
  const nonce = Mantine_context.useMantineStyleNonce();
  return /* @__PURE__ */ React__default.createElement(
    "style",
    {
      "data-mantine-styles": "inline",
      nonce: nonce == null ? void 0 : nonce(),
      dangerouslySetInnerHTML: { __html: stylesToString.stylesToString({ selector, styles, media }) }
    }
  );
}

exports.InlineStyles = InlineStyles;
//# sourceMappingURL=InlineStyles.js.map
