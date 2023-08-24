'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');
var _item = require('./_item.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { SimpleGrid } from '@mantine/core';

function Demo() {
  return (
    <SimpleGrid
      cols={{ base: 1, sm: 2, lg: 5 }}
      spacing={{ base: 10, sm: 'xl' }}
      verticalSpacing={{ base: 'md', sm: 'xl' }}
    >
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
      <div>5</div>
    </SimpleGrid>
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement(
    core.SimpleGrid,
    {
      cols: { base: 1, sm: 2, lg: 5 },
      spacing: { base: 10, sm: "xl" },
      verticalSpacing: { base: "md", sm: "xl" }
    },
    _item.defaultItems
  );
}
const responsive = {
  type: "code",
  component: Demo,
  code
};

exports.responsive = responsive;
//# sourceMappingURL=SimpleGrid.demo.responsive.js.map
