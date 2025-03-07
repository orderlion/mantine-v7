function getVariantClassName({
  options,
  classes,
  selector,
  unstyled
}) {
  return (options == null ? void 0 : options.variant) && !unstyled ? classes[`${selector}--${options.variant}`] : void 0;
}

export { getVariantClassName };
//# sourceMappingURL=get-variant-class-name.js.map
