import { useState, useRef, useCallback } from 'react';
import isEqual from 'fast-deep-equal';
import { filterErrors } from './filter-errors/filter-errors.js';
import { clearListState } from './lists/clear-list-state.js';
import { shouldValidateOnChange } from './validate/should-validate-on-change.js';
import { setPath } from './paths/set-path.js';
import { validateFieldValue } from './validate/validate-field-value.js';
import { reorderPath } from './paths/reorder-path.js';
import { reorderErrors } from './lists/reorder-errors.js';
import { removePath } from './paths/remove-path.js';
import { changeErrorIndices } from './lists/change-error-indices.js';
import { insertPath } from './paths/insert-path.js';
import { validateValues } from './validate/validate-values.js';
import { getStatus } from './get-status/get-status.js';
import { getPath } from './paths/get-path.js';
import { getInputOnChange } from './get-input-on-change/get-input-on-change.js';

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
  const [touched, setTouched] = useState(initialTouched);
  const [dirty, setDirty] = useState(initialDirty);
  const [values, _setValues] = useState(initialValues);
  const [errors, _setErrors] = useState(filterErrors(initialErrors));
  const valuesSnapshot = useRef(initialValues);
  const setValuesSnapshot = (_values) => {
    valuesSnapshot.current = _values;
  };
  const resetTouched = useCallback(() => setTouched({}), []);
  const resetDirty = (_values) => {
    const newSnapshot = _values ? __spreadValues(__spreadValues({}, values), _values) : values;
    setValuesSnapshot(newSnapshot);
    setDirty({});
  };
  const setErrors = useCallback(
    (errs) => _setErrors((current) => filterErrors(typeof errs === "function" ? errs(current) : errs)),
    []
  );
  const clearErrors = useCallback(() => _setErrors({}), []);
  const reset = useCallback(() => {
    _setValues(initialValues);
    clearErrors();
    setValuesSnapshot(initialValues);
    setDirty({});
    resetTouched();
  }, []);
  const setFieldError = useCallback(
    (path, error) => setErrors((current) => __spreadProps(__spreadValues({}, current), { [path]: error })),
    []
  );
  const clearFieldError = useCallback(
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
  const clearFieldDirty = useCallback(
    (path) => setDirty((current) => {
      if (typeof path !== "string") {
        return current;
      }
      const result = clearListState(path, current);
      delete result[path];
      return result;
    }),
    []
  );
  const setFieldValue = useCallback((path, value) => {
    const shouldValidate = shouldValidateOnChange(path, validateInputOnChange);
    clearFieldDirty(path);
    setTouched((currentTouched) => __spreadProps(__spreadValues({}, currentTouched), { [path]: true }));
    _setValues((current) => {
      const result = setPath(path, value, current);
      if (shouldValidate) {
        const validationResults = validateFieldValue(path, rules, result);
        validationResults.hasError ? setFieldError(path, validationResults.error) : clearFieldError(path);
      }
      return result;
    });
    !shouldValidate && clearInputErrorOnChange && setFieldError(path, null);
  }, []);
  const setValues = useCallback((payload) => {
    _setValues((currentValues) => {
      const valuesPartial = typeof payload === "function" ? payload(currentValues) : payload;
      return __spreadValues(__spreadValues({}, currentValues), valuesPartial);
    });
    clearInputErrorOnChange && clearErrors();
  }, []);
  const reorderListItem = useCallback((path, payload) => {
    clearFieldDirty(path);
    _setValues((current) => reorderPath(path, payload, current));
    _setErrors((errs) => reorderErrors(path, payload, errs));
  }, []);
  const removeListItem = useCallback((path, index) => {
    clearFieldDirty(path);
    _setValues((current) => removePath(path, index, current));
    _setErrors((errs) => changeErrorIndices(path, index, errs, -1));
  }, []);
  const insertListItem = useCallback((path, item, index) => {
    clearFieldDirty(path);
    _setValues((current) => insertPath(path, item, index, current));
    _setErrors((errs) => changeErrorIndices(path, index, errs, 1));
  }, []);
  const validate = useCallback(() => {
    const results = validateValues(rules, values);
    _setErrors(results.errors);
    return results;
  }, [values, rules]);
  const validateField = useCallback(
    (path) => {
      const results = validateFieldValue(path, rules, values);
      results.hasError ? setFieldError(path, results.error) : clearFieldError(path);
      return results;
    },
    [values, rules]
  );
  const getInputProps = (path, { type = "input", withError = true, withFocus = true } = {}) => {
    const onChange = getInputOnChange((value) => setFieldValue(path, value));
    const payload = { onChange };
    if (withError) {
      payload.error = errors[path];
    }
    if (type === "checkbox") {
      payload.checked = getPath(path, values);
    } else {
      payload.value = getPath(path, values);
    }
    if (withFocus) {
      payload.onFocus = () => setTouched((current) => __spreadProps(__spreadValues({}, current), { [path]: true }));
      payload.onBlur = () => {
        if (shouldValidateOnChange(path, validateInputOnBlur)) {
          const validationResults = validateFieldValue(path, rules, values);
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
  const onReset = useCallback((event) => {
    event.preventDefault();
    reset();
  }, []);
  const isDirty = (path) => {
    if (path) {
      const overriddenValue = getPath(path, dirty);
      if (typeof overriddenValue === "boolean") {
        return overriddenValue;
      }
      const sliceOfValues = getPath(path, values);
      const sliceOfInitialValues = getPath(path, valuesSnapshot.current);
      return !isEqual(sliceOfValues, sliceOfInitialValues);
    }
    const isOverridden = Object.keys(dirty).length > 0;
    if (isOverridden) {
      return getStatus(dirty);
    }
    return !isEqual(values, valuesSnapshot.current);
  };
  const isTouched = useCallback(
    (path) => getStatus(touched, path),
    [touched]
  );
  const isValid = useCallback(
    (path) => path ? !validateFieldValue(path, rules, values).hasError : !validateValues(rules, values).hasErrors,
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

export { useForm };
//# sourceMappingURL=use-form.js.map
