import React from 'react';
import { Slider, rem, RangeSlider } from '@mantine/core';
import { IconHeart, IconHeartBroken } from '@tabler/icons-react';

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
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(
    Slider,
    {
      thumbChildren: /* @__PURE__ */ React.createElement(IconHeart, { size: "1rem", stroke: 1.5 }),
      color: "red",
      label: null,
      defaultValue: 40,
      thumbSize: 26,
      styles: { thumb: { borderWidth: rem(2), padding: rem(3) } }
    }
  ), /* @__PURE__ */ React.createElement(
    RangeSlider,
    {
      mt: "xl",
      styles: { thumb: { borderWidth: rem(2), padding: rem(3) } },
      color: "red",
      label: null,
      defaultValue: [20, 60],
      thumbSize: 26,
      thumbChildren: [
        /* @__PURE__ */ React.createElement(IconHeart, { size: "1rem", stroke: 1.5, key: "1" }),
        /* @__PURE__ */ React.createElement(IconHeartBroken, { size: "1rem", stroke: 1.5, key: "2" })
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

export { thumbChildren };
//# sourceMappingURL=Slider.demo.thumbChildren.js.map
