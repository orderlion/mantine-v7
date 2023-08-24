'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { useState } from 'react';
import { Skeleton, Button } from '@mantine/core';

function Demo() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      <Skeleton visible={loading}>
        Lorem ipsum dolor sit amet...
        {/* other content */}
      </Skeleton>

      <Button onClick={() => setLoading((l) => !l)}>
        Toggle Skeleton
      </Button>
    </>
  );
}
`;
function Demo() {
  const [loading, setLoading] = React.useState(true);
  return /* @__PURE__ */ React__default.createElement(React__default.Fragment, null, /* @__PURE__ */ React__default.createElement(core.Skeleton, { visible: loading }, /* @__PURE__ */ React__default.createElement(core.Text, null, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi dolor nihil amet tempore magnam optio, numquam nostrum inventore tempora assumenda saepe, aut repellat. Temporibus aspernatur aperiam magnam debitis facere odio?"), /* @__PURE__ */ React__default.createElement(core.Text, null, "Laborum fuga quam voluptas aut pariatur delectus repudiandae commodi tempora debitis dolores vero cumque magni cum, deserunt, ad tempore consectetur libero molestias similique nemo eum! Dolore maxime voluptate inventore atque.")), /* @__PURE__ */ React__default.createElement(core.Group, { justify: "center", mt: "xs" }, /* @__PURE__ */ React__default.createElement(core.Button, { onClick: () => setLoading((l) => !l) }, "Toggle Skeleton")));
}
const content = {
  type: "code",
  component: Demo,
  code
};

exports.content = content;
//# sourceMappingURL=Skeleton.demo.content.js.map
