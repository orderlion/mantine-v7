import React, { useState } from 'react';
import { useForm } from '@mantine/form';
import { IconAt, IconLock } from '@tabler/icons-react';
import { Paper, LoadingOverlay, Group, TextInput, PasswordInput, Checkbox, Text, Anchor, Button } from '@mantine/core';

var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
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
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
function AuthenticationForm({
  noShadow,
  noPadding,
  noSubmit,
  style
}) {
  const [formType, setFormType] = useState("register");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const toggleFormType = () => {
    setFormType((current) => current === "register" ? "login" : "register");
    setError(null);
  };
  const form = useForm({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
      termsOfService: true
    }
  });
  const handleSubmit = () => {
    setLoading(true);
    setError(null);
    setTimeout(() => {
      setLoading(false);
      setError(
        formType === "register" ? "User with this email already exists" : "User with this email does not exist"
      );
    }, 3e3);
  };
  return /* @__PURE__ */ React.createElement(
    Paper,
    {
      p: noPadding ? 0 : "lg",
      shadow: noShadow ? "none" : "sm",
      style: __spreadProps(__spreadValues({}, style), {
        position: "relative",
        backgroundColor: "var(--mantine-color-body)"
      })
    },
    /* @__PURE__ */ React.createElement("form", { onSubmit: form.onSubmit(handleSubmit) }, /* @__PURE__ */ React.createElement(LoadingOverlay, { visible: loading }), formType === "register" && /* @__PURE__ */ React.createElement(Group, { grow: true }, /* @__PURE__ */ React.createElement(
      TextInput,
      __spreadValues({
        "data-autofocus": true,
        required: true,
        placeholder: "Your first name",
        label: "First name"
      }, form.getInputProps("firstName"))
    ), /* @__PURE__ */ React.createElement(
      TextInput,
      __spreadValues({
        required: true,
        placeholder: "Your last name",
        label: "Last name"
      }, form.getInputProps("lastName"))
    )), /* @__PURE__ */ React.createElement(
      TextInput,
      __spreadValues({
        mt: "md",
        required: true,
        placeholder: "Your email",
        label: "Email",
        leftSection: /* @__PURE__ */ React.createElement(IconAt, { size: 16, stroke: 1.5 })
      }, form.getInputProps("email"))
    ), /* @__PURE__ */ React.createElement(
      PasswordInput,
      __spreadValues({
        mt: "md",
        required: true,
        placeholder: "Password",
        label: "Password",
        leftSection: /* @__PURE__ */ React.createElement(IconLock, { size: 16, stroke: 1.5 })
      }, form.getInputProps("password"))
    ), formType === "register" && /* @__PURE__ */ React.createElement(
      PasswordInput,
      __spreadValues({
        mt: "md",
        required: true,
        label: "Confirm Password",
        placeholder: "Confirm password",
        leftSection: /* @__PURE__ */ React.createElement(IconLock, { size: 16, stroke: 1.5 })
      }, form.getInputProps("confirmPassword"))
    ), formType === "register" && /* @__PURE__ */ React.createElement(
      Checkbox,
      __spreadValues({
        mt: "xl",
        label: "I agree to sell my soul and privacy to this corporation"
      }, form.getInputProps("termsOfService", { type: "checkbox" }))
    ), error && /* @__PURE__ */ React.createElement(Text, { c: "red", size: "sm", mt: "sm" }, error), !noSubmit && /* @__PURE__ */ React.createElement(Group, { justify: "space-between", mt: "xl" }, /* @__PURE__ */ React.createElement(Anchor, { component: "button", type: "button", c: "dimmed", onClick: toggleFormType, size: "sm" }, formType === "register" ? "Have an account? Login" : "Don't have an account? Register"), /* @__PURE__ */ React.createElement(Button, { color: "blue", type: "submit" }, formType === "register" ? "Register" : "Login")))
  );
}

export { AuthenticationForm };
//# sourceMappingURL=AuthenticationForm.js.map
