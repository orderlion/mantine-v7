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
import { useEditor, BubbleMenu } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { RichTextEditor, Link } from '@mantine/tiptap';

function Demo() {
  const editor = useEditor({
    extensions: [StarterKit, Link],
    content: '<p>Select some text to see bubble menu</p>',
  });

  return (
    <RichTextEditor editor={editor}>
      {editor && (
        <BubbleMenu editor={editor}>
          <RichTextEditor.ControlsGroup>
            <RichTextEditor.Bold />
            <RichTextEditor.Italic />
            <RichTextEditor.Link />
          </RichTextEditor.ControlsGroup>
        </BubbleMenu>
      )}
      <RichTextEditor.Content />
    </RichTextEditor>
  );
}
`;
function Demo() {
  const editor = react.useEditor({
    extensions: [StarterKit__default, tiptap.Link],
    content: "<p>Select some text to see bubble menu</p>"
  });
  return /* @__PURE__ */ React__default.createElement(tiptap.RichTextEditor, { editor }, editor && /* @__PURE__ */ React__default.createElement(react.BubbleMenu, { editor }, /* @__PURE__ */ React__default.createElement(tiptap.RichTextEditor.ControlsGroup, null, /* @__PURE__ */ React__default.createElement(tiptap.RichTextEditor.Bold, null), /* @__PURE__ */ React__default.createElement(tiptap.RichTextEditor.Italic, null), /* @__PURE__ */ React__default.createElement(tiptap.RichTextEditor.Link, null))), /* @__PURE__ */ React__default.createElement(tiptap.RichTextEditor.Content, null));
}
const bubbleMenu = {
  type: "code",
  component: Demo,
  code
};

exports.bubbleMenu = bubbleMenu;
//# sourceMappingURL=TipTap.demo.bubbleMenu.js.map
