'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var hooks = require('@mantine/hooks');
var useUncontrolledDates = require('../use-uncontrolled-dates/use-uncontrolled-dates.js');
var useDatesContext = require('../../components/DatesProvider/use-dates-context.js');
var getFormattedDate = require('../../utils/get-formatted-date.js');

function useDatesInput({
  type,
  value,
  defaultValue,
  onChange,
  locale,
  format,
  closeOnChange,
  sortDates,
  labelSeparator
}) {
  const ctx = useDatesContext.useDatesContext();
  const [dropdownOpened, dropdownHandlers] = hooks.useDisclosure(false);
  const [_value, _setValue] = useUncontrolledDates.useUncontrolledDates({
    type,
    value,
    defaultValue,
    onChange
  });
  const formattedValue = getFormattedDate.getFormattedDate({
    type,
    date: _value,
    locale: ctx.getLocale(locale),
    format,
    labelSeparator: ctx.getLabelSeparator(labelSeparator)
  });
  const setValue = (val) => {
    if (closeOnChange) {
      if (type === "default") {
        dropdownHandlers.close();
      }
      if (type === "range" && val[0] && val[1]) {
        dropdownHandlers.close();
      }
    }
    if (sortDates && type === "multiple") {
      _setValue([...val].sort((a, b) => a.getTime() - b.getTime()));
    } else {
      _setValue(val);
    }
  };
  const onClear = () => setValue(type === "range" ? [null, null] : type === "multiple" ? [] : null);
  const shouldClear = type === "range" ? !!_value[0] : type === "multiple" ? _value.length > 0 : _value !== null;
  return {
    _value,
    setValue,
    onClear,
    shouldClear,
    formattedValue,
    dropdownOpened,
    dropdownHandlers
  };
}

exports.useDatesInput = useDatesInput;
//# sourceMappingURL=use-dates-input.js.map
