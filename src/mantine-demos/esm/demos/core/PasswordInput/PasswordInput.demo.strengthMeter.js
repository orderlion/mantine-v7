import React, { useState } from 'react';
import { IconCheck, IconX } from '@tabler/icons-react';
import { Popover, PasswordInput, Progress, Text, rem, Box } from '@mantine/core';

const code = `
import { useState } from 'react';
import { IconX, IconCheck } from '@tabler/icons-react';
import { PasswordInput, Progress, Text, Popover, Box, rem } from '@mantine/core';

function PasswordRequirement({ meets, label }: { meets: boolean; label: string }) {
  return (
    <Text
      c={meets ? 'teal' : 'red'}
      style={{ display: 'flex', alignItems: 'center' }}
      mt={7}
      size="sm"
    >
      {meets ? (
        <IconCheck style={{ width: rem(14), height: rem(14) }} />
      ) : (
        <IconX style={{ width: rem(14), height: rem(14) }} />
      )}{' '}
      <Box ml={10}>{label}</Box>
    </Text>
  );
}

const requirements = [
  { re: /[0-9]/, label: 'Includes number' },
  { re: /[a-z]/, label: 'Includes lowercase letter' },
  { re: /[A-Z]/, label: 'Includes uppercase letter' },
  { re: /[$&+,:;=?@#|'<>.^*()%!-]/, label: 'Includes special symbol' },
];

function getStrength(password: string) {
  let multiplier = password.length > 5 ? 0 : 1;

  requirements.forEach((requirement) => {
    if (!requirement.re.test(password)) {
      multiplier += 1;
    }
  });

  return Math.max(100 - (100 / (requirements.length + 1)) * multiplier, 10);
}

function Demo() {
  const [popoverOpened, setPopoverOpened] = useState(false);
  const [value, setValue] = useState('');
  const checks = requirements.map((requirement, index) => (
    <PasswordRequirement key={index} label={requirement.label} meets={requirement.re.test(value)} />
  ));

  const strength = getStrength(value);
  const color = strength === 100 ? 'teal' : strength > 50 ? 'yellow' : 'red';

  return (
    <Popover opened={popoverOpened} position="bottom" width="target" transitionProps={{ transition: 'pop' }}>
      <Popover.Target>
        <div
          onFocusCapture={() => setPopoverOpened(true)}
          onBlurCapture={() => setPopoverOpened(false)}
        >
          <PasswordInput
            withAsterisk
            label="Your password"
            placeholder="Your password"
            value={value}
            onChange={(event) => setValue(event.currentTarget.value)}
          />
        </div>
      </Popover.Target>
      <Popover.Dropdown>
        <Progress color={color} value={strength} size={5} mb="xs" />
        <PasswordRequirement label="Includes at least 6 characters" meets={value.length > 5} />
        {checks}
      </Popover.Dropdown>
    </Popover>
  );
}
`;
function PasswordRequirement({ meets, label }) {
  return /* @__PURE__ */ React.createElement(
    Text,
    {
      c: meets ? "teal" : "red",
      style: { display: "flex", alignItems: "center" },
      mt: 7,
      size: "sm"
    },
    meets ? /* @__PURE__ */ React.createElement(IconCheck, { style: { width: rem(14), height: rem(14) } }) : /* @__PURE__ */ React.createElement(IconX, { style: { width: rem(14), height: rem(14) } }),
    " ",
    /* @__PURE__ */ React.createElement(Box, { ml: 10 }, label)
  );
}
const requirements = [
  { re: /[0-9]/, label: "Includes number" },
  { re: /[a-z]/, label: "Includes lowercase letter" },
  { re: /[A-Z]/, label: "Includes uppercase letter" },
  { re: /[$&+,:;=?@#|'<>.^*()%!-]/, label: "Includes special symbol" }
];
function getStrength(password) {
  let multiplier = password.length > 5 ? 0 : 1;
  requirements.forEach((requirement) => {
    if (!requirement.re.test(password)) {
      multiplier += 1;
    }
  });
  return Math.max(100 - 100 / (requirements.length + 1) * multiplier, 10);
}
function Demo() {
  const [popoverOpened, setPopoverOpened] = useState(false);
  const [value, setValue] = useState("");
  const checks = requirements.map((requirement, index) => /* @__PURE__ */ React.createElement(PasswordRequirement, { key: index, label: requirement.label, meets: requirement.re.test(value) }));
  const strength = getStrength(value);
  const color = strength === 100 ? "teal" : strength > 50 ? "yellow" : "red";
  return /* @__PURE__ */ React.createElement(
    Popover,
    {
      opened: popoverOpened,
      position: "bottom",
      width: "target",
      transitionProps: { transition: "pop" }
    },
    /* @__PURE__ */ React.createElement(Popover.Target, null, /* @__PURE__ */ React.createElement(
      "div",
      {
        onFocusCapture: () => setPopoverOpened(true),
        onBlurCapture: () => setPopoverOpened(false)
      },
      /* @__PURE__ */ React.createElement(
        PasswordInput,
        {
          withAsterisk: true,
          label: "Your password",
          placeholder: "Your password",
          value,
          onChange: (event) => setValue(event.currentTarget.value)
        }
      )
    )),
    /* @__PURE__ */ React.createElement(Popover.Dropdown, null, /* @__PURE__ */ React.createElement(Progress, { color, value: strength, size: 5, mb: "xs" }), /* @__PURE__ */ React.createElement(PasswordRequirement, { label: "Includes at least 6 characters", meets: value.length > 5 }), checks)
  );
}
const strengthMeter = {
  type: "code",
  code,
  component: Demo,
  centered: true,
  maxWidth: 340
};

export { strengthMeter };
//# sourceMappingURL=PasswordInput.demo.strengthMeter.js.map
