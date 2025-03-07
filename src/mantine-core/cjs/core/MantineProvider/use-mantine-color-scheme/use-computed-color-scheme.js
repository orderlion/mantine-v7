'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var hooks = require('@mantine/hooks');
var useMantineColorScheme = require('./use-mantine-color-scheme.js');

function useComputedColorScheme(defaultValue, options = { getInitialValueInEffect: true }) {
  const osColorScheme = hooks.useColorScheme(defaultValue, options);
  const { colorScheme } = useMantineColorScheme.useMantineColorScheme();
  return colorScheme === "auto" ? osColorScheme : colorScheme;
}

exports.useComputedColorScheme = useComputedColorScheme;
//# sourceMappingURL=use-computed-color-scheme.js.map
