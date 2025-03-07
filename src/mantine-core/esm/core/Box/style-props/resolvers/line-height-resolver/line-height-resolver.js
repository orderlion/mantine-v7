function lineHeightResolver(value, theme) {
  if (typeof value === "string" && value in theme.fontSizes) {
    return `var(--mantine-line-height-${value})`;
  }
  return value;
}

export { lineHeightResolver };
//# sourceMappingURL=line-height-resolver.js.map
