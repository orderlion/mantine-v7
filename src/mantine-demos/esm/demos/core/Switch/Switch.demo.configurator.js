import { Switch } from '@mantine/core';

const code = `
import { Switch } from '@mantine/core';


function Demo() {
  return (
    <Switch
      {{props}}
    />
  );
}
`;
const configurator = {
  type: "configurator",
  component: Switch,
  code,
  centered: true,
  controls: [
    { prop: "color", type: "color", initialValue: "blue", libraryValue: "blue" },
    {
      prop: "labelPosition",
      type: "segmented",
      data: [
        { value: "right", label: "Right" },
        { value: "left", label: "Left" }
      ],
      initialValue: "right",
      libraryValue: "right"
    },
    { prop: "label", type: "string", initialValue: "I agree to sell my privacy", libraryValue: "" },
    { prop: "description", type: "string", initialValue: "", libraryValue: "" },
    { prop: "error", type: "string", initialValue: "", libraryValue: "" },
    { prop: "size", type: "size", initialValue: "sm", libraryValue: "sm" },
    { prop: "radius", type: "size", initialValue: "xl", libraryValue: "xl" },
    { prop: "disabled", type: "boolean", initialValue: false, libraryValue: false }
  ]
};

export { configurator };
//# sourceMappingURL=Switch.demo.configurator.js.map
