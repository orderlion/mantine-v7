'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');
var modals = require('@mantine/modals');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { Button } from '@mantine/core';
import { modals } from '@mantine/modals';

function Demo() {
  return (
    <Button
      onClick={() =>
        modals.openContextModal({
          modal: 'demonstration',
          title: 'Test modal from context',
          innerProps: {
            modalBody:
              'This modal was defined in ModalsProvider, you can open it anywhere in you app with useModals hook',
          },
        })
      }
    >
      Open demonstration context modal
    </Button>
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement(
    core.Button,
    {
      onClick: () => modals.modals.openContextModal({
        modal: "demonstration",
        title: "Test modal from context",
        innerProps: {
          modalBody: "This modal was defined in ModalsProvider, you can open it anywhere in you app with useModals hook"
        }
      })
    },
    "Open demonstration context modal"
  );
}
const context = {
  type: "code",
  centered: true,
  component: Demo,
  code
};

exports.context = context;
//# sourceMappingURL=Modals.demo.context.js.map
