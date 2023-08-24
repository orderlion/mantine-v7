'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var hooks = require('@mantine/hooks');
var notifications = require('@mantine/notifications');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { useState } from 'react';
import { getHotkeyHandler } from '@mantine/hooks';
import { notifications } from '@mantine/notifications';
import { TextInput } from '@mantine/core';

function Demo() {
  const [value, setValue] = useState("I've just used a hotkey to send a message");
  const handleSubmit = () => notifications.show({ title: 'Your message', message: value });
  const handleSave = () => notifications.show({ title: 'You saved', color: 'teal', message: value });

  return (
    <TextInput
      placeholder="Your message"
      label="Press \u2318+Enter or Ctrl+Enter when input has focus to send message"
      value={value}
      onChange={(event) => setValue(event.target.value)}
      onKeyDown={getHotkeyHandler([
        ['mod+Enter', handleSubmit],
        ['mod+S', handleSave],
      ])}
    />
  );
}
`;
function Demo() {
  hooks.useHotkeys([
    [
      "alt+mod+shift+X",
      () => {
        window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
      }
    ]
  ]);
  const [value, setValue] = React.useState("I've just used a hotkey to send a message");
  const handleSubmit = () => notifications.notifications.show({ title: "Your message", message: value });
  const handleSave = () => notifications.notifications.show({ title: "You saved", color: "teal", message: value });
  return /* @__PURE__ */ React__default.createElement(
    core.TextInput,
    {
      placeholder: "Your message",
      label: "Press \u2318+Enter or Ctrl+Enter when input has focus to send message",
      value,
      onChange: (event) => setValue(event.target.value),
      onKeyDown: hooks.getHotkeyHandler([
        ["mod+Enter", handleSubmit],
        ["mod+S", handleSave]
      ])
    }
  );
}
const useHotkeysDemo = {
  type: "code",
  code,
  component: Demo
};

exports.useHotkeysDemo = useHotkeysDemo;
//# sourceMappingURL=use-hotkeys.demo.usage.js.map
