'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');
var modals = require('@mantine/modals');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { TextInput, Button } from '@mantine/core';
import { modals } from '@mantine/modals';

function Demo() {
  return (
    <Button
      onClick={() => {
        modals.open({
          title: 'Subscribe to newsletter',
          children: (
            <>
              <TextInput label="Your email" placeholder="Your email" data-autofocus />
              <Button fullWidth onClick={() => modals.closeAll()} mt="md">
                Submit
              </Button>
            </>
          ),
        });
      }}
    >
      Open content modal
    </Button>
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement(
    core.Button,
    {
      onClick: () => {
        modals.modals.open({
          title: "Subscribe to newsletter",
          children: /* @__PURE__ */ React__default.createElement(React__default.Fragment, null, /* @__PURE__ */ React__default.createElement(core.TextInput, { label: "Your email", placeholder: "Your email", "data-autofocus": true }), /* @__PURE__ */ React__default.createElement(core.Button, { fullWidth: true, onClick: () => modals.modals.closeAll(), mt: "md" }, "Submit"))
        });
      }
    },
    "Open content modal"
  );
}
const content = {
  type: "code",
  centered: true,
  component: Demo,
  code
};

exports.content = content;
//# sourceMappingURL=Modals.demo.content.js.map
