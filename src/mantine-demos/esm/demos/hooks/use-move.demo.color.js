import React, { useState } from 'react';
import { rem } from '@mantine/core';
import { useMove } from '@mantine/hooks';

const code = `
import { useState } from 'react';
import { rem } from '@mantine/core';
import { useMove } from '@mantine/hooks';

function Demo() {
  const [value, setValue] = useState({ x: 0.2, y: 0.6 });
  const { ref } = useMove(setValue);

  return (
    <div>
      <div
        ref={ref}
        style={{
          width: rem(300),
          height: rem(150),
          backgroundColor: 'red',
          position: 'relative',
        }}
      >
        {/* Gradient overlays */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: 'linear-gradient(90deg, #fff, transparent)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: 'linear-gradient(0deg, #000, transparent)',
          }}
        />

        {/* Thumb */}
        <div
          style={{
            position: 'absolute',
            left: \`calc(\${value.x * 100}% - \${rem(8)})\`,
            top: \`calc(\${value.y * 100}% - \${rem(8)})\`,
            width: rem(16),
            height: rem(16),
            border: \`\${rem(2)} solid #fff\`,
            borderRadius: rem(16),
          }}
        />
      </div>
    </div>
  );
}`;
function Demo() {
  const [value, setValue] = useState({ x: 0.2, y: 0.6 });
  const { ref } = useMove(setValue);
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(
    "div",
    {
      ref,
      style: {
        width: rem(300),
        height: rem(150),
        backgroundColor: "red",
        position: "relative"
      }
    },
    /* @__PURE__ */ React.createElement(
      "div",
      {
        style: {
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: "linear-gradient(90deg, #fff, transparent)"
        }
      }
    ),
    /* @__PURE__ */ React.createElement(
      "div",
      {
        style: {
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: "linear-gradient(0deg, #000, transparent)"
        }
      }
    ),
    /* @__PURE__ */ React.createElement(
      "div",
      {
        style: {
          position: "absolute",
          left: `calc(${value.x * 100}% - ${rem(8)})`,
          top: `calc(${value.y * 100}% - ${rem(8)})`,
          width: rem(16),
          height: rem(16),
          border: `${rem(2)} solid #fff`,
          borderRadius: rem(16)
        }
      }
    )
  ));
}
const useMoveColor = {
  type: "code",
  code,
  component: Demo,
  centered: true
};

export { useMoveColor };
//# sourceMappingURL=use-move.demo.color.js.map
