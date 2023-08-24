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

export { dateStringParser };
//# sourceMappingURL=date-string-parser.js.map
