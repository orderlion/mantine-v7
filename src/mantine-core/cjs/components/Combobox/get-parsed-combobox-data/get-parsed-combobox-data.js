'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function parseItem(item) {
  if (typeof item === "string") {
    return { value: item, label: item };
  }
  if (typeof item === "number") {
    return { value: item.toString(), label: item.toString() };
  }
  if ("group" in item) {
    return {
      group: item.group,
      items: item.items.map((i) => parseItem(i))
    };
  }
  return item;
}
function getParsedComboboxData(data) {
  if (!data) {
    return [];
  }
  return data.map(parseItem);
}

exports.getParsedComboboxData = getParsedComboboxData;
//# sourceMappingURL=get-parsed-combobox-data.js.map
