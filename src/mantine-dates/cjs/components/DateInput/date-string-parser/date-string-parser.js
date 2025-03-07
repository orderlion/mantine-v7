'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function dateStringParser(dateString) {
  if (dateString === null) {
    return null;
  }
  const date = new Date(dateString);
  if (Number.isNaN(date.getTime()) || !dateString) {
    return null;
  }
  return date;
}

exports.dateStringParser = dateStringParser;
//# sourceMappingURL=date-string-parser.js.map
