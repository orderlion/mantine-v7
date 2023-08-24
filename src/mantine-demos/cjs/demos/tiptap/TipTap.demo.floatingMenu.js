'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var react = require('@tiptap/react');
var StarterKit = require('@tiptap/starter-kit');
var tiptap = require('@mantine/tiptap');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var StarterKit__default = /*#__PURE__*/_interopDefaultLegacy(StarterKit);

const code = `
import { useEditor, FloatingMenu } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { RichTextEditor, Link } from '@mantine/tiptap';

function Demo() {
  const editor = useEditor({
    extensions: [StarterKit, Link],
    content: '<p>Enter a new line to see floating menu</p>',
  });

  return (
    <RichTextEditor editor={editor}>
      {editor && (
        <FloatingMenu editor={editor}>
          <RichTextEditor.ControlsGroup>
            <RichTextEditor.H1 />
            <RichTextEditor.H2 />
            <RichTextEditor.BulletList />
          </RichTextEditor.ControlsGroup>
        </FloatingMenu>
      )}
      <RichTextEditor.Content />
    </RichTextEditor>
  );
}
`;
function Demo() {
  const editor = react.useEditor({
    extensions: [StarterKit__default, tiptap.Link],
    content: "<p>Enter a new line to see floating menu</p>"
  });
  return /* @__PURE__ */ React__default.createElement(tiptap.RichTextEditor, { editor }, editor && /* @__PURE__ */ React__default.createElement(react.FloatingMenu, { editor }, /* @__PURE__ */ React__default.createElement(tiptap.RichTextEditor.ControlsGroup, null, /* @__PURE__ */ React__default.createElement(tiptap.RichTextEditor.H1, null), /* @__PURE__ */ React__default.createElement(tiptap.RichTextEditor.H2, null), /* @__PURE__ */ React__default.createElement(tiptap.RichTextEditor.BulletList, null))), /* @__PURE__ */ React__default.createElement(tiptap.RichTextEditor.Content, null));
}
const floatingMenu = {
  type: "code",
  component: Demo,
  code
};

exports.floatingMenu = floatingMenu;
//# sourceMappingURL=TipTap.demo.floatingMenu.js.map
