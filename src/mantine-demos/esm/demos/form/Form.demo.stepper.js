import React, { useState } from 'react';
import { Stepper, TextInput, PasswordInput, Code, Group, Button } from '@mantine/core';
import { useForm } from '@mantine/form';

var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
const code = `
import { useState } from 'react';
import { Stepper, Button, Group, TextInput, PasswordInput, Code } from '@mantine/core';
import { useForm } from '@mantine/form';

function Demo() {
  const [active, setActive] = useState(0);

  const form = useForm({
    initialValues: {
      username: '',
      password: '',
      name: '',
      email: '',
      website: '',
      github: '',
    },

    validate: (values) => {
      if (active === 0) {
        return {
          username:
            values.username.trim().length < 6
              ? 'Username must include at least 6 characters'
              : null,
          password:
            values.password.length < 6 ? 'Password must include at least 6 characters' : null,
        };
      }

      if (active === 1) {
        return {
          name: values.name.trim().length < 2 ? 'Name must include at least 2 characters' : null,
          email: /^\\S+@\\S+$/.test(values.email) ? null : 'Invalid email',
        };
      }

      return {};
    },
  });

  const nextStep = () =>
    setActive((current) => {
      if (form.validate().hasErrors) {
        return current;
      }
      return current < 3 ? current + 1 : current;
    });

  const prevStep = () => setActive((current) => (current > 0 ? current - 1 : current));

  return (
    <>
      <Stepper active={active}>
        <Stepper.Step label="First step" description="Profile settings">
          <TextInput label="Username" placeholder="Username" {...form.getInputProps('username')} />
          <PasswordInput
            mt="md"
            label="Password"
            placeholder="Password"
            {...form.getInputProps('password')}
          />
        </Stepper.Step>

        <Stepper.Step label="Second step" description="Personal information">
          <TextInput label="Name" placeholder="Name" {...form.getInputProps('name')} />
          <TextInput mt="md" label="Email" placeholder="Email" {...form.getInputProps('email')} />
        </Stepper.Step>

        <Stepper.Step label="Final step" description="Social media">
          <TextInput label="Website" placeholder="Website" {...form.getInputProps('website')} />
          <TextInput
            mt="md"
            label="GitHub"
            placeholder="GitHub"
            {...form.getInputProps('github')}
          />
        </Stepper.Step>
        <Stepper.Completed>
          Completed! Form values:
          <Code block mt="xl">
            {JSON.stringify(form.values, null, 2)}
          </Code>
        </Stepper.Completed>
      </Stepper>

      <Group justify="flex-end" mt="xl">
        {active !== 0 && (
          <Button variant="default" onClick={prevStep}>
            Back
          </Button>
        )}
        {active !== 3 && <Button onClick={nextStep}>Next step</Button>}
      </Group>
    </>
  );
}
`;
function Demo() {
  const [active, setActive] = useState(0);
  const form = useForm({
    initialValues: {
      username: "",
      password: "",
      name: "",
      email: "",
      website: "",
      github: ""
    },
    validate: (values) => {
      if (active === 0) {
        return {
          username: values.username.trim().length < 6 ? "Username must include at least 6 characters" : null,
          password: values.password.length < 6 ? "Password must include at least 6 characters" : null
        };
      }
      if (active === 1) {
        return {
          name: values.name.trim().length < 2 ? "Name must include at least 2 characters" : null,
          email: /^\S+@\S+$/.test(values.email) ? null : "Invalid email"
        };
      }
      return {};
    }
  });
  const nextStep = () => setActive((current) => {
    if (form.validate().hasErrors) {
      return current;
    }
    return current < 3 ? current + 1 : current;
  });
  const prevStep = () => setActive((current) => current > 0 ? current - 1 : current);
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Stepper, { active }, /* @__PURE__ */ React.createElement(Stepper.Step, { label: "First step", description: "Profile settings" }, /* @__PURE__ */ React.createElement(TextInput, __spreadValues({ label: "Username", placeholder: "Username" }, form.getInputProps("username"))), /* @__PURE__ */ React.createElement(
    PasswordInput,
    __spreadValues({
      mt: "md",
      label: "Password",
      placeholder: "Password"
    }, form.getInputProps("password"))
  )), /* @__PURE__ */ React.createElement(Stepper.Step, { label: "Second step", description: "Personal information" }, /* @__PURE__ */ React.createElement(TextInput, __spreadValues({ label: "Name", placeholder: "Name" }, form.getInputProps("name"))), /* @__PURE__ */ React.createElement(TextInput, __spreadValues({ mt: "md", label: "Email", placeholder: "Email" }, form.getInputProps("email")))), /* @__PURE__ */ React.createElement(Stepper.Step, { label: "Final step", description: "Social media" }, /* @__PURE__ */ React.createElement(TextInput, __spreadValues({ label: "Website", placeholder: "Website" }, form.getInputProps("website"))), /* @__PURE__ */ React.createElement(
    TextInput,
    __spreadValues({
      mt: "md",
      label: "GitHub",
      placeholder: "GitHub"
    }, form.getInputProps("github"))
  )), /* @__PURE__ */ React.createElement(Stepper.Completed, null, "Completed! Form values:", /* @__PURE__ */ React.createElement(Code, { block: true, mt: "xl" }, JSON.stringify(form.values, null, 2)))), /* @__PURE__ */ React.createElement(Group, { justify: "flex-end", mt: "xl" }, active !== 0 && /* @__PURE__ */ React.createElement(Button, { variant: "default", onClick: prevStep }, "Back"), active !== 3 && /* @__PURE__ */ React.createElement(Button, { onClick: nextStep }, "Next step")));
}
const stepper = {
  type: "code",
  component: Demo,
  code
};

export { stepper };
//# sourceMappingURL=Form.demo.stepper.js.map
