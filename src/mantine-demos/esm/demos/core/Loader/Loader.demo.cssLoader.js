import React from 'react';
import { MantineThemeProvider, Loader } from '@mantine/core';
import { cssLoaderTsxCode, cssLoaderModuleCssCode, CssLoader } from './_CssLoader.js';

var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
const code = `
import { MantineProvider, Loader } from '@mantine/core';
import { CssLoader } from './CssLoader';

function Demo() {
  return (
    <MantineProvider
      theme={{
        components: {
          Loader: Loader.extend({
            defaultProps: {
              loaders: { ...Loader.defaultLoaders, custom: CssLoader },
              type: 'custom',
            },
          }),
        },
      }}
    >
      <Loader />
    </MantineProvider>
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(
    MantineThemeProvider,
    {
      theme: {
        components: {
          Loader: Loader.extend({
            defaultProps: {
              loaders: __spreadProps(__spreadValues({}, Loader.defaultLoaders), { custom: CssLoader }),
              type: "custom"
            }
          })
        }
      }
    },
    /* @__PURE__ */ React.createElement(Loader, null)
  );
}
const cssLoader = {
  type: "code",
  component: Demo,
  centered: true,
  code: [
    { fileName: "Demo.tsx", language: "tsx", code },
    { fileName: "CssLoader.tsx", language: "tsx", code: cssLoaderTsxCode },
    { fileName: "CssLoader.module.css", language: "css", code: cssLoaderModuleCssCode }
  ]
};

export { cssLoader };
//# sourceMappingURL=Loader.demo.cssLoader.js.map
