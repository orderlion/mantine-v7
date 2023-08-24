import React from 'react';
import { Text, Tooltip, Mark } from '@mantine/core';

const code = `
import { Tooltip, Mark, Text } from '@mantine/core';

function Demo() {
  return (
    <Text>
      Stantler\u2019s magnificent antlers were traded at high prices as works of art. As a result, this
      Pok\xE9mon was hunted close to extinction by those who were after the priceless antlers.{' '}
      <Tooltip inline label="Inline tooltip">
        <Mark>When visiting a junkyard</Mark>
      </Tooltip>
      , you may catch sight of it having an intense fight with Murkrow over shiny objects.Ho-Oh\u2019s
      feathers glow in seven colors depending on the angle at which they are struck by light. These
      feathers are said to bring happiness to the bearers. This Pok\xE9mon is said to live at the foot
      of a rainbow.
    </Text>
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(Text, null, "Stantler\u2019s magnificent antlers were traded at high prices as works of art. As a result, this Pok\xE9mon was hunted close to extinction by those who were after the priceless antlers.", " ", /* @__PURE__ */ React.createElement(Tooltip, { inline: true, label: "Inline tooltip" }, /* @__PURE__ */ React.createElement(Mark, null, "When visiting a junkyard")), ", you may catch sight of it having an intense fight with Murkrow over shiny objects.Ho-Oh\u2019s feathers glow in seven colors depending on the angle at which they are struck by light. These feathers are said to bring happiness to the bearers. This Pok\xE9mon is said to live at the foot of a rainbow.");
}
const inline = {
  type: "code",
  component: Demo,
  code
};

export { inline };
//# sourceMappingURL=Tooltip.demo.inline.js.map
