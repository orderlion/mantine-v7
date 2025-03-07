'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var getClassName = require('./get-class-name/get-class-name.js');
var getStyle = require('./get-style/get-style.js');
var MantineThemeProvider = require('../../MantineProvider/MantineThemeProvider/MantineThemeProvider.js');
var Mantine_context = require('../../MantineProvider/Mantine.context.js');

function useStyles({
  name,
  classes,
  props,
  stylesCtx,
  className,
  style,
  rootSelector = "root",
  unstyled,
  classNames,
  styles,
  vars,
  varsResolver
}) {
  const theme = MantineThemeProvider.useMantineTheme();
  const classNamesPrefix = Mantine_context.useMantineClassNamesPrefix();
  const themeName = (Array.isArray(name) ? name : [name]).filter((n) => n);
  return (selector, options) => ({
    className: getClassName.getClassName({
      theme,
      options,
      themeName,
      selector,
      classNamesPrefix,
      classNames,
      classes,
      unstyled,
      className,
      rootSelector,
      props,
      stylesCtx
    }),
    style: getStyle.getStyle({
      theme,
      themeName,
      selector,
      options,
      props,
      stylesCtx,
      rootSelector,
      styles,
      style,
      vars,
      varsResolver
    })
  });
}

exports.useStyles = useStyles;
//# sourceMappingURL=use-styles.js.map
