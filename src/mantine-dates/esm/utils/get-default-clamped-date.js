import dayjs from 'dayjs';

function getDefaultClampedDate({ minDate, maxDate }) {
  const today = /* @__PURE__ */ new Date();
  if (!minDate && !maxDate) {
    return today;
  }
  if (minDate && dayjs(today).isBefore(minDate)) {
    return minDate;
  }
  if (maxDate && dayjs(today).isAfter(maxDate)) {
    return maxDate;
  }
  return today;
}

export { getDefaultClampedDate };
//# sourceMappingURL=get-default-clamped-date.js.map
