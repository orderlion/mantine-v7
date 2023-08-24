'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { Image } from '@mantine/core';

function Demo() {
  return (
    <Image
      radius="md"
      src={null}
      h={200}
      fallbackSrc="https://placehold.co/600x400?text=Placeholder"
    />
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement(
    core.Image,
    {
      radius: "md",
      src: null,
      h: 200,
      fallbackSrc: "https://placehold.co/600x400?text=Placeholder"
    }
  );
}
const fallback = {
  type: "code",
  component: Demo,
  code
};

exports.fallback = fallback;
//# sourceMappingURL=Image.demo.fallback.js.map
