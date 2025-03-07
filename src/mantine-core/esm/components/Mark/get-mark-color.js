import { parseThemeColor } from '../../core/MantineProvider/color-functions/parse-theme-color/parse-theme-color.js';

function getMarkColor({ color, theme, defaultShade }) {
  const parsed = parseThemeColor({ color, theme });
  if (!parsed.isThemeColor) {
    return color;
  }
  if (parsed.shade === void 0) {
    return `var(--mantine-color-${parsed.color}-${defaultShade})`;
  }
  return `var(${parsed.variable})`;
}

export { getMarkColor };
//# sourceMappingURL=get-mark-color.js.map
