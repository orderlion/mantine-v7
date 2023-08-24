'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var core = require('@mantine/core');

const code = `
import { Loader } from '@mantine/core';

function Demo() {
  return <Loader{{props}} />;
}
`;
const configurator = {
  type: "configurator",
  component: core.Loader,
  code,
  centered: true,
  controls: [
    { type: "color", prop: "color", initialValue: "blue", libraryValue: null },
    { type: "size", prop: "size", initialValue: "md", libraryValue: "md" },
    {
      type: "segmented",
      prop: "type",
      data: ["oval", "bars", "dots"],
      initialValue: "oval",
      libraryValue: "oval"
    }
  ]
};

exports.configurator = configurator;
//# sourceMappingURL=Loader.demo.configurator.js.map
