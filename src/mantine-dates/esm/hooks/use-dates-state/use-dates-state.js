import dayjs from 'dayjs';
import { useState } from 'react';
import { useUncontrolledDates } from '../use-uncontrolled-dates/use-uncontrolled-dates.js';
import { isInRange } from './is-in-range/is-in-range.js';

function useDatesState({
  type,
  level,
  value,
  defaultValue,
  onChange,
  allowSingleDateInRange,
  allowDeselect,
  onMouseLeave
}) {
  const [_value, setValue] = useUncontrolledDates({ type, value, defaultValue, onChange });
  const [pickedDate, setPickedDate] = useState(
    type === "range" ? _value[0] && !_value[1] ? _value[0] : null : null
  );
  const [hoveredDate, setHoveredDate] = useState(null);
  const onDateChange = (date) => {
    if (type === "range") {
      if (pickedDate instanceof Date && !_value[1]) {
        if (dayjs(date).isSame(pickedDate, level) && !allowSingleDateInRange) {
          setPickedDate(null);
          setHoveredDate(null);
          setValue([null, null]);
          return;
        }
        const result = [date, pickedDate];
        result.sort((a, b) => a.getTime() - b.getTime());
        setValue(result);
        setHoveredDate(null);
        setPickedDate(null);
        return;
      }
      if (_value[0] && !_value[1] && dayjs(date).isSame(_value[0], level) && !allowSingleDateInRange) {
        setPickedDate(null);
        setHoveredDate(null);
        setValue([null, null]);
        return;
      }
      setValue([date, null]);
      setHoveredDate(null);
      setPickedDate(date);
      return;
    }
    if (type === "multiple") {
      if (_value.some((selected) => dayjs(selected).isSame(date, level))) {
        setValue(_value.filter((selected) => !dayjs(selected).isSame(date, level)));
      } else {
        setValue([..._value, date]);
      }
      return;
    }
    if (_value && allowDeselect && dayjs(date).isSame(_value, level)) {
      setValue(null);
    } else {
      setValue(date);
    }
  };
  const isDateInRange = (date) => {
    if (pickedDate instanceof Date && hoveredDate instanceof Date) {
      return isInRange(date, [hoveredDate, pickedDate]);
    }
    if (_value[0] instanceof Date && _value[1] instanceof Date) {
      return isInRange(date, _value);
    }
    return false;
  };
  const onRootMouseLeave = type === "range" ? (event) => {
    onMouseLeave == null ? void 0 : onMouseLeave(event);
    setHoveredDate(null);
  } : onMouseLeave;
  const isFirstInRange = (date) => {
    if (!(_value[0] instanceof Date)) {
      return false;
    }
    if (dayjs(date).isSame(_value[0], level)) {
      return !(hoveredDate && dayjs(hoveredDate).isBefore(_value[0]));
    }
    return false;
  };
  const isLastInRange = (date) => {
    if (_value[1] instanceof Date) {
      return dayjs(date).isSame(_value[1], level);
    }
    if (!(_value[0] instanceof Date) || !hoveredDate) {
      return false;
    }
    return dayjs(hoveredDate).isBefore(_value[0]) && dayjs(date).isSame(_value[0], level);
  };
  const getControlProps = (date) => {
    if (type === "range") {
      return {
        selected: _value.some(
          (selection) => selection && dayjs(selection).isSame(date, level)
        ),
        inRange: isDateInRange(date),
        firstInRange: isFirstInRange(date),
        lastInRange: isLastInRange(date),
        "data-autofocus": !!_value[0] && dayjs(_value[0]).isSame(date, level) || void 0
      };
    }
    if (type === "multiple") {
      return {
        selected: _value.some(
          (selection) => selection && dayjs(selection).isSame(date, level)
        ),
        "data-autofocus": !!_value[0] && dayjs(_value[0]).isSame(date, level) || void 0
      };
    }
    const selected = dayjs(_value).isSame(date, level);
    return { selected, "data-autofocus": selected || void 0 };
  };
  const onHoveredDateChange = type === "range" && pickedDate ? setHoveredDate : () => {
  };
  return {
    onDateChange,
    onRootMouseLeave,
    onHoveredDateChange,
    getControlProps,
    _value,
    setValue
  };
}

export { useDatesState };
//# sourceMappingURL=use-dates-state.js.map
