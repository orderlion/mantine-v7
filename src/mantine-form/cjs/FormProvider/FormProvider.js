'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var useForm = require('../use-form.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

function createFormContext() {
  const FormContext = React.createContext(null);
  function FormProvider({ form, children }) {
    return /* @__PURE__ */ React__default.createElement(FormContext.Provider, { value: form }, children);
  }
  function useFormContext() {
    const ctx = React.useContext(FormContext);
    if (!ctx) {
      throw new Error("useFormContext was called outside of FormProvider context");
    }
    return ctx;
  }
  return [FormProvider, useFormContext, useForm.useForm];
}

exports.createFormContext = createFormContext;
//# sourceMappingURL=FormProvider.js.map
