'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { NativeSelect } from '@mantine/core';

function Demo() {
  return (
    <NativeSelect
      data={[
        {
          group: 'Frontend libraries',
          items: [
            { label: 'React', value: 'react' },
            { label: 'Angular', value: 'angular' },
            { label: 'Vue', value: 'vue', disabled: true },
          ],
        },
        {
          group: 'Backend libraries',
          items: [
            { label: 'Express', value: 'express' },
            { label: 'Koa', value: 'koa' },
            { label: 'Django', value: 'django' },
          ],
        },
      ]}
    />
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement(
    core.NativeSelect,
    {
      data: [
        {
          group: "Frontend libraries",
          items: [
            { label: "React", value: "react" },
            { label: "Angular", value: "angular" },
            { label: "Vue", value: "vue", disabled: true }
          ]
        },
        {
          group: "Backend libraries",
          items: [
            { label: "Express", value: "express" },
            { label: "Koa", value: "koa" },
            { label: "Django", value: "django" }
          ]
        }
      ]
    }
  );
}
const data = {
  type: "code",
  component: Demo,
  maxWidth: 340,
  centered: true,
  code
};

exports.data = data;
//# sourceMappingURL=NativeSelect.demo.data.js.map
