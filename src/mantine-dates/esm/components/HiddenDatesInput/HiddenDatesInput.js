import React from 'react';

function formatValue(value, type) {
  if (type === "range" && Array.isArray(value)) {
    const [startDate, endDate] = value;
    if (!startDate) {
      return "";
    }
    if (!endDate) {
      return `${startDate.toISOString()} \u2013`;
    }
    return `${startDate.toISOString()} \u2013 ${endDate.toISOString()}`;
  }
  if (type === "multiple" && Array.isArray(value)) {
    return value.map((date) => date == null ? void 0 : date.toISOString()).filter(Boolean).join(", ");
  }
  if (!Array.isArray(value) && value) {
    return value.toISOString();
  }
  return "";
}
function HiddenDatesInput({ value, type, name, form }) {
  return /* @__PURE__ */ React.createElement("input", { type: "hidden", value: formatValue(value, type), name, form });
}
HiddenDatesInput.displayName = "@mantine/dates/HiddenDatesInput";

export { HiddenDatesInput };
//# sourceMappingURL=HiddenDatesInput.js.map
