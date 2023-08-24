'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');
var iconsReact = require('@tabler/icons-react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { Slider, RangeSlider, rem } from '@mantine/core';
import { IconHeart, IconHeartBroken } from '@tabler/icons-react';

function Demo() {
  return (
    <>
      <Slider
        thumbChildren={<IconHeart size="1rem" />}
        color="red"
        label={null}
        defaultValue={40}
        thumbSize={26}
        styles={{ thumb: { borderWidth: rem(2), padding: rem(3) } }}
      />

      <RangeSlider
        mt="xl"
        styles={{ thumb: { borderWidth: rem(2), padding: rem(3) } }}
        color="red"
        label={null}
        defaultValue={[20, 60]}
        thumbSize={26}
        thumbChildren={[<IconHeart size="1rem" key="1" />, <IconHeartBroken size="1rem" key="2" />]}
      />
    </>
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement(React__default.Fragment, null, /* @__PURE__ */ React__default.createElement(
    core.Slider,
    {
      thumbChildren: /* @__PURE__ */ React__default.createElement(iconsReact.IconHeart, { size: "1rem", stroke: 1.5 }),
      color: "red",
      label: null,
      defaultValue: 40,
      thumbSize: 26,
      styles: { thumb: { borderWidth: core.rem(2), padding: core.rem(3) } }
    }
  ), /* @__PURE__ */ React__default.createElement(
    core.RangeSlider,
    {
      mt: "xl",
      styles: { thumb: { borderWidth: core.rem(2), padding: core.rem(3) } },
      color: "red",
      label: null,
      defaultValue: [20, 60],
      thumbSize: 26,
      thumbChildren: [
        /* @__PURE__ */ React__default.createElement(iconsReact.IconHeart, { size: "1rem", stroke: 1.5, key: "1" }),
        /* @__PURE__ */ React__default.createElement(iconsReact.IconHeartBroken, { size: "1rem", stroke: 1.5, key: "2" })
      ]
    }
  ));
}
const thumbChildren = {
  type: "code",
  component: Demo,
  code,
  maxWidth: 400,
  centered: true
};

exports.thumbChildren = thumbChildren;
//# sourceMappingURL=Slider.demo.thumbChildren.js.map
