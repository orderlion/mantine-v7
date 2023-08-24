'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var codeHighlight = require('@mantine/code-highlight');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const exampleCode = `
// VisuallyHidden component source code
import React from 'react';
import {
  Box,
  BoxProps,
  StylesApiProps,
  factory,
  ElementProps,
  useProps,
  useStyles,
  Factory,
} from '../../core';
import classes from './VisuallyHidden.module.css';

export type VisuallyHiddenStylesNames = 'root';

export interface VisuallyHiddenProps
  extends BoxProps,
    StylesApiProps<VisuallyHiddenFactory>,
    ElementProps<'div'> {}

export type VisuallyHiddenFactory = Factory<{
  props: VisuallyHiddenProps;
  ref: HTMLDivElement;
  stylesNames: VisuallyHiddenStylesNames;
}>;

const defaultProps: Partial<VisuallyHiddenProps> = {};

export const VisuallyHidden = factory<VisuallyHiddenFactory>((_props, ref) => {
  const props = useProps('VisuallyHidden', defaultProps, _props);
  const { classNames, className, style, styles, unstyled, vars, ...others } = props;

  const getStyles = useStyles<VisuallyHiddenFactory>({
    name: 'VisuallyHidden',
    classes,
    props,
    className,
    style,
    classNames,
    styles,
    unstyled,
  });

  return <Box component="span" ref={ref} {...getStyles('root')} {...others} />;
});

VisuallyHidden.classes = classes;
VisuallyHidden.displayName = '@mantine/core/VisuallyHidden';
`;
const code = `
import { CodeHighlight } from '@mantine/code-highlight';

const exampleCode = \`${exampleCode}\`;

function Demo() {
  return <CodeHighlight code={exampleCode} language="tsx" />;
}
`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement(codeHighlight.CodeHighlight, { code: exampleCode, language: "tsx" });
}
const usage = {
  type: "code",
  component: Demo,
  code
};

exports.usage = usage;
//# sourceMappingURL=CodeHighlight.demo.usage.js.map
