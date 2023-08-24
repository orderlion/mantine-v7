'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var tiptap = require('@mantine/tiptap');
var react = require('@tiptap/react');
var StarterKit = require('@tiptap/starter-kit');
var Placeholder = require('@tiptap/extension-placeholder');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var StarterKit__default = /*#__PURE__*/_interopDefaultLegacy(StarterKit);
var Placeholder__default = /*#__PURE__*/_interopDefaultLegacy(Placeholder);

const code = `
import { RichTextEditor } from '@mantine/tiptap';
import { useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Placeholder from '@tiptap/extension-placeholder';

function Demo() {
  const editor = useEditor({
    extensions: [StarterKit, Placeholder.configure({ placeholder: 'This is placeholder' })],
    content: '',
  });

  return (
    <RichTextEditor editor={editor}>
      <RichTextEditor.Content />
    </RichTextEditor>
  );
}
`;
function Demo() {
  const editor = react.useEditor({
    extensions: [StarterKit__default, Placeholder__default.configure({ placeholder: "This is placeholder" })],
    content: ""
  });
  return /* @__PURE__ */ React__default.createElement(tiptap.RichTextEditor, { editor }, /* @__PURE__ */ React__default.createElement(tiptap.RichTextEditor.Content, null));
}
const placeholder = {
  type: "code",
  component: Demo,
  code
};

exports.placeholder = placeholder;
//# sourceMappingURL=TipTap.demo.placeholder.js.map
