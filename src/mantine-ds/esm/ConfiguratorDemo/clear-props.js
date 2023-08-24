function clearProps(controls, state) {
  const normalizedControls = controls.reduce((acc, control) => {
    acc[control.prop] = control.libraryValue;
    return acc;
  }, {});
  return Object.keys(state).reduce((acc, key) => {
    if (state[key] !== normalizedControls[key]) {
      acc[key] = state[key];
    }
    return acc;
  }, {});
}

export { clearProps };
//# sourceMappingURL=clear-props.js.map
