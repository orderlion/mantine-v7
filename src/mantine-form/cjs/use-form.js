'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var isEqual = require('fast-deep-equal');
var filterErrors = require('./filter-errors/filter-errors.js');
var clearListState = require('./lists/clear-list-state.js');
var shouldValidateOnChange = require('./validate/should-validate-on-change.js');
var setPath = require('./paths/set-path.js');
var validateFieldValue = require('./validate/validate-field-value.js');
var reorderPath = require('./paths/reorder-path.js');
var reorderErrors = require('./lists/reorder-errors.js');
var removePath = require('./paths/remove-path.js');
var changeErrorIndices = require('./lists/change-error-indices.js');
var insertPath = require('./paths/insert-path.js');
var validateValues = require('./validate/validate-values.js');
var getStatus = require('./get-status/get-status.js');
var getPath = require('./paths/get-path.js');
var getInputOnChange = require('./get-input-on-change/get-input-on-change.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var isEqual__default = /*#__PURE__*/_interopDefaultLegacy(isEqual);

var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
function useForm({
  initialValues = {},
  initialErrors = {},
  initialDirty = {},
  initialTouched = {},
  clearInputErrorOnChange = true,
  validateInputOnChange = false,
  validateInputOnBlur = false,
  transformValues = (values) => values,
  validate: rules
} = {}) {
  const [touched, setTouched] = React.useState(initialTouched);
  const [dirty, setDirty] = React.useState(initialDirty);
  const [values, _setValues] = React.useState(initialValues);
  const [errors, _setErrors] = React.useState(filterErrors.filterErrors(initialErrors));
  const valuesSnapshot = React.useRef(initialValues);
  const setValuesSnapshot = (_values) => {
    valuesSnapshot.current = _values;
  };
  const resetTouched = React.useCallback(() => setTouched({}), []);
  const resetDirty = (_values) => {
    const newSnapshot = _values ? __spreadValues(__spreadValues({}, values), _values) : values;
    setValuesSnapshot(newSnapshot);
    setDirty({});
  };
  const setErrors = React.useCallback(
    (errs) => _setErrors((current) => filterErrors.filterErrors(typeof errs === "function" ? errs(current) : errs)),
    []
  );
  const clearErrors = React.useCallback(() => _setErrors({}), []);
  const reset = React.useCallback(() => {
    _setValues(initialValues);
    clearErrors();
    setValuesSnapshot(initialValues);
    setDirty({});
    resetTouched();
  }, []);
  const setFieldError = React.useCallback(
    (path, error) => setErrors((current) => __spreadProps(__spreadValues({}, current), { [path]: error })),
    []
  );
  const clearFieldError = React.useCallback(
    (path) => setErrors((current) => {
      if (typeof path !== "string") {
        return current;
      }
      const clone = __spreadValues({}, current);
      delete clone[path];
      return clone;
    }),
    []
  );
  const clearFieldDirty = React.useCallback(
    (path) => setDirty((current) => {
      if (typeof path !== "string") {
        return current;
      }
      const result = clearListState.clearListState(path, current);
      delete result[path];
      return result;
    }),
    []
  );
  const setFieldValue = React.useCallback((path, value) => {
    const shouldValidate = shouldValidateOnChange.shouldValidateOnChange(path, validateInputOnChange);
    clearFieldDirty(path);
    setTouched((currentTouched) => __spreadProps(__spreadValues({}, currentTouched), { [path]: true }));
    _setValues((current) => {
      const result = setPath.setPath(path, value, current);
      if (shouldValidate) {
        const validationResults = validateFieldValue.validateFieldValue(path, rules, result);
        validationResults.hasError ? setFieldError(path, validationResults.error) : clearFieldError(path);
      }
      return result;
    });
    !shouldValidate && clearInputErrorOnChange && setFieldError(path, null);
  }, []);
  const setValues = React.useCallback((payload) => {
    _setValues((currentValues) => {
      const valuesPartial = typeof payload === "function" ? payload(currentValues) : payload;
      return __spreadValues(__spreadValues({}, currentValues), valuesPartial);
    });
    clearInputErrorOnChange && clearErrors();
  }, []);
  const reorderListItem = React.useCallback((path, payload) => {
    clearFieldDirty(path);
    _setValues((current) => reorderPath.reorderPath(path, payload, current));
    _setErrors((errs) => reorderErrors.reorderErrors(path, payload, errs));
  }, []);
  const removeListItem = React.useCallback((path, index) => {
    clearFieldDirty(path);
    _setValues((current) => removePath.removePath(path, index, current));
    _setErrors((errs) => changeErrorIndices.changeErrorIndices(path, index, errs, -1));
  }, []);
  const insertListItem = React.useCallback((path, item, index) => {
    clearFieldDirty(path);
    _setValues((current) => insertPath.insertPath(path, item, index, current));
    _setErrors((errs) => changeErrorIndices.changeErrorIndices(path, index, errs, 1));
  }, []);
  const validate = React.useCallback(() => {
    const results = validateValues.validateValues(rules, values);
    _setErrors(results.errors);
    return results;
  }, [values, rules]);
  const validateField = React.useCallback(
    (path) => {
      const results = validateFieldValue.validateFieldValue(path, rules, values);
      results.hasError ? setFieldError(path, results.error) : clearFieldError(path);
      return results;
    },
    [values, rules]
  );
  const getInputProps = (path, { type = "input", withError = true, withFocus = true } = {}) => {
    const onChange = getInputOnChange.getInputOnChange((value) => setFieldValue(path, value));
    const payload = { onChange };
    if (withError) {
      payload.error = errors[path];
    }
    if (type === "checkbox") {
      payload.checked = getPath.getPath(path, values);
    } else {
      payload.value = getPath.getPath(path, values);
    }
    if (withFocus) {
      payload.onFocus = () => setTouched((current) => __spreadProps(__spreadValues({}, current), { [path]: true }));
      payload.onBlur = () => {
        if (shouldValidateOnChange.shouldValidateOnChange(path, validateInputOnBlur)) {
          const validationResults = validateFieldValue.validateFieldValue(path, rules, values);
          validationResults.hasError ? setFieldError(path, validationResults.error) : clearFieldError(path);
        }
      };
    }
    return payload;
  };
  const onSubmit = (handleSubmit, handleValidationFailure) => (event) => {
    event == null ? void 0 : event.preventDefault();
    const results = validate();
    if (results.hasErrors) {
      handleValidationFailure == null ? void 0 : handleValidationFailure(results.errors, values, event);
    } else {
      handleSubmit == null ? void 0 : handleSubmit(transformValues(values), event);
    }
  };
  const getTransformedValues = (input) => transformValues(input || values);
  const onReset = React.useCallback((event) => {
    event.preventDefault();
    reset();
  }, []);
  const isDirty = (path) => {
    if (path) {
      const overriddenValue = getPath.getPath(path, dirty);
      if (typeof overriddenValue === "boolean") {
        return overriddenValue;
      }
      const sliceOfValues = getPath.getPath(path, values);
      const sliceOfInitialValues = getPath.getPath(path, valuesSnapshot.current);
      return !isEqual__default(sliceOfValues, sliceOfInitialValues);
    }
    const isOverridden = Object.keys(dirty).length > 0;
    if (isOverridden) {
      return getStatus.getStatus(dirty);
    }
    return !isEqual__default(values, valuesSnapshot.current);
  };
  const isTouched = React.useCallback(
    (path) => getStatus.getStatus(touched, path),
    [touched]
  );
  const isValid = React.useCallback(
    (path) => path ? !validateFieldValue.validateFieldValue(path, rules, values).hasError : !validateValues.validateValues(rules, values).hasErrors,
    [values, rules]
  );
  return {
    values,
    errors,
    setValues,
    setErrors,
    setFieldValue,
    setFieldError,
    clearFieldError,
    clearErrors,
    reset,
    validate,
    validateField,
    reorderListItem,
    removeListItem,
    insertListItem,
    getInputProps,
    onSubmit,
    onReset,
    isDirty,
    isTouched,
    setTouched,
    setDirty,
    resetTouched,
    resetDirty,
    isValid,
    getTransformedValues
  };
}

exports.useForm = useForm;
//# sourceMappingURL=use-form.js.map
