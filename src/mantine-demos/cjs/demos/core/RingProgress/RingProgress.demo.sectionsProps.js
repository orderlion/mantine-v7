'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { useState } from 'react';
import { RingProgress, Text } from '@mantine/core';

function Demo() {
  const [hovered, setHovered] = useState(-1);
  const reset = () => setHovered(-1);
  return (
    <>
      <RingProgress
        onMouseLeave={() => setHovered(-1)}
        size={140}
        sections={[
          { value: 40, color: 'cyan', onMouseEnter: () => setHovered(0), onMouseLeave: reset },
          { value: 20, color: 'blue', onMouseEnter: () => setHovered(1), onMouseLeave: reset },
          { value: 15, color: 'indigo', onMouseEnter: () => setHovered(2), onMouseLeave: reset },
        ]}
      />
      <Text>Hovered section: {hovered === -1 ? 'none' : hovered}</Text>
    </>
  );
}
`;
function Demo() {
  const [hovered, setHovered] = React.useState(-1);
  const reset = () => setHovered(-1);
  return /* @__PURE__ */ React__default.createElement(React__default.Fragment, null, /* @__PURE__ */ React__default.createElement(
    core.RingProgress,
    {
      onMouseLeave: () => setHovered(-1),
      size: 140,
      sections: [
        { value: 40, color: "cyan", onMouseEnter: () => setHovered(0), onMouseLeave: reset },
        { value: 20, color: "blue", onMouseEnter: () => setHovered(1), onMouseLeave: reset },
        { value: 15, color: "indigo", onMouseEnter: () => setHovered(2), onMouseLeave: reset }
      ]
    }
  ), /* @__PURE__ */ React__default.createElement(core.Text, null, "Hovered section: ", hovered === -1 ? "none" : hovered));
}
const sectionsProps = {
  type: "code",
  component: Demo,
  code
};

exports.sectionsProps = sectionsProps;
//# sourceMappingURL=RingProgress.demo.sectionsProps.js.map
