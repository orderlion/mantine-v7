import React from 'react';
import { DateInput } from '@mantine/dates';

const code = `
import { DateInput, DateInputProps } from '@mantine/dates';

const dateParser: DateInputProps['dateParser'] = (input) => {
  if (input === 'WW2') {
    return new Date(1939, 8, 1);
  }
  return new Date(input);
};

function Demo() {
  return (
    <DateInput
      dateParser={dateParser}
      valueFormat="DD/MM/YYYY"
      label="Type WW2"
      placeholder="Type WW2"
    />
  );
}
`;
const dateParser = (input) => {
  if (input === "WW2") {
    return new Date(1939, 8, 1);
  }
  return new Date(input);
};
function Demo() {
  return /* @__PURE__ */ React.createElement(
    DateInput,
    {
      dateParser,
      valueFormat: "DD/MM/YYYY",
      label: "Type WW2",
      placeholder: "Type WW2"
    }
  );
}
const parser = {
  type: "code",
  centered: true,
  maxWidth: 400,
  component: Demo,
  code
};

export { parser };
//# sourceMappingURL=DateInput.demo.parser.js.map
