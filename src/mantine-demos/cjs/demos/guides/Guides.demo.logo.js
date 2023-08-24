'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var ds = require('@mantine/ds');

const code = `
import { MantineLogo } from '@mantine/ds';

function Demo() {
  return <MantineLogo{{props}} />;
}
`;
const logo = {
  type: "configurator",
  component: ds.MantineLogo,
  code,
  centered: true,
  controls: [
    { type: "color", prop: "color", initialValue: "blue", libraryValue: null },
    {
      type: "segmented",
      prop: "type",
      data: ["full", "mark"],
      initialValue: "full",
      libraryValue: "full"
    },
    { prop: "size", type: "number", initialValue: 30, libraryValue: 30, max: 50, min: 10, step: 5 }
  ]
};

exports.logo = logo;
//# sourceMappingURL=Guides.demo.logo.js.map
