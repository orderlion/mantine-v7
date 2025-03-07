'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

function createOptionalContext(initialValue = null) {
  const Context = React.createContext(initialValue);
  const useOptionalContext = () => React.useContext(Context);
  const Provider = ({ children, value }) => /* @__PURE__ */ React__default.createElement(Context.Provider, { value }, children);
  return [Provider, useOptionalContext];
}

exports.createOptionalContext = createOptionalContext;
//# sourceMappingURL=create-optional-context.js.map
