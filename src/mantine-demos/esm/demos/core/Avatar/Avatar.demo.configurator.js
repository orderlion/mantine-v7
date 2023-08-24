import { Avatar } from '@mantine/core';
import { staticVariantsControl } from '../../../shared/variants-data.js';

const code = `
import { Avatar } from '@mantine/core';

function Demo() {
  return <Avatar{{props}} />;
}
`;
const configurator = {
  type: "configurator",
  component: Avatar,
  centered: true,
  striped: true,
  code,
  controls: [
    staticVariantsControl,
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

export { configurator };
//# sourceMappingURL=Avatar.demo.configurator.js.map
