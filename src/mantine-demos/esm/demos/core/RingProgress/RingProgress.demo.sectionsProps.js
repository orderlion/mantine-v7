import React, { useState } from 'react';
import { RingProgress, Text } from '@mantine/core';

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
  const [hovered, setHovered] = useState(-1);
  const reset = () => setHovered(-1);
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(
    RingProgress,
    {
      onMouseLeave: () => setHovered(-1),
      size: 140,
      sections: [
        { value: 40, color: "cyan", onMouseEnter: () => setHovered(0), onMouseLeave: reset },
        { value: 20, color: "blue", onMouseEnter: () => setHovered(1), onMouseLeave: reset },
        { value: 15, color: "indigo", onMouseEnter: () => setHovered(2), onMouseLeave: reset }
      ]
    }
  ), /* @__PURE__ */ React.createElement(Text, null, "Hovered section: ", hovered === -1 ? "none" : hovered));
}
const sectionsProps = {
  type: "code",
  component: Demo,
  code
};

export { sectionsProps };
//# sourceMappingURL=RingProgress.demo.sectionsProps.js.map
