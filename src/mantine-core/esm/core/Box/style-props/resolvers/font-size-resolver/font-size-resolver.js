import { rem } from '../../../../utils/units-converters/rem.js';

function fontSizeResolver(value, theme) {
  if (typeof value === "string" && value in theme.fontSizes) {
    return `var(--mantine-font-size-${value})`;
  }
  if (typeof value === "number") {
    return rem(value);
  }
  if (typeof value === "string") {
    return rem(value);
  }
  return value;
}

export { fontSizeResolver };
//# sourceMappingURL=font-size-resolver.js.map
