import { parseThemeColor } from '../../../../MantineProvider/color-functions/parse-theme-color/parse-theme-color.js';

function colorResolver(color, theme) {
  const parsedColor = parseThemeColor({ color, theme });
  if (parsedColor.color === "dimmed") {
    return "var(--mantine-color-dimmed)";
  }
  return parsedColor.variable ? `var(${parsedColor.variable})` : parsedColor.color;
}

export { colorResolver };
//# sourceMappingURL=color-resolver.js.map
