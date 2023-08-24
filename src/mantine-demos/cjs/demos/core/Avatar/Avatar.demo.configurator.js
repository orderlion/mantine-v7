'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var core = require('@mantine/core');
var variantsData = require('../../../shared/variants-data.js');

const code = `
import { Avatar } from '@mantine/core';

function Demo() {
  return <Avatar{{props}} />;
}
`;
const configurator = {
  type: "configurator",
  component: core.Avatar,
  centered: true,
  striped: true,
  code,
  controls: [
    variantsData.staticVariantsControl,
    { prop: "radius", type: "size", initialValue: "sm", libraryValue: "100%" },
    { prop: "size", type: "size", initialValue: "md", libraryValue: "md" },
    { prop: "color", type: "color", initialValue: "gray", libraryValue: "gray" },
    {
      prop: "src",
      type: "string",
      initialValue: "",
      libraryValue: null
    }
  ]
};

exports.configurator = configurator;
//# sourceMappingURL=Avatar.demo.configurator.js.map
