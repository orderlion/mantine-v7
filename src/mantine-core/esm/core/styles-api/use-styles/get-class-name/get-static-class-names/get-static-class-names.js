function getStaticClassNames({
  themeName,
  classNamesPrefix,
  selector
}) {
  return themeName.map((n) => `${classNamesPrefix}-${n}-${selector}`);
}

export { getStaticClassNames };
//# sourceMappingURL=get-static-class-names.js.map
