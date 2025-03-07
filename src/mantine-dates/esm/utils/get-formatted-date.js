import dayjs from 'dayjs';

function getFormattedDate({
  type,
  date,
  locale,
  format,
  labelSeparator
}) {
  const formatDate = (value) => dayjs(value).locale(locale).format(format);
  if (type === "default") {
    return date === null ? "" : formatDate(date);
  }
  if (type === "multiple") {
    return date.map(formatDate).join(", ");
  }
  if (type === "range" && Array.isArray(date)) {
    if (date[0] && date[1]) {
      return `${formatDate(date[0])} ${labelSeparator} ${formatDate(date[1])}`;
    }
    if (date[0]) {
      return `${formatDate(date[0])} ${labelSeparator} `;
    }
    return "";
  }
  return "";
}

export { getFormattedDate };
//# sourceMappingURL=get-formatted-date.js.map
