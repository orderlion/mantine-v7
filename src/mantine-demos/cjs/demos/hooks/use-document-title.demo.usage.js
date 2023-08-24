'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var hooks = require('@mantine/hooks');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { useState } from 'react';
import { useDocumentTitle, randomId } from '@mantine/hooks';
import { Button } from '@mantine/core';

function Demo() {
  const [title, setTitle] = useState('');
  useDocumentTitle(title);

  return (
    <Button onClick={() => setTitle(randomId())}>
      Set document title to random id
    </Button>
  );
}`;
function Demo() {
  const [title, setTitle] = React.useState("");
  hooks.useDocumentTitle(title);
  return /* @__PURE__ */ React__default.createElement(core.Button, { onClick: () => setTitle(hooks.randomId()) }, "Set document title to random id");
}
const useDocumentTitleDemo = {
  type: "code",
  code,
  component: Demo,
  centered: true
};

exports.useDocumentTitleDemo = useDocumentTitleDemo;
//# sourceMappingURL=use-document-title.demo.usage.js.map
