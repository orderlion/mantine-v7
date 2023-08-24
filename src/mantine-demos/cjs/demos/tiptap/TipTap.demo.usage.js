'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var react = require('@tiptap/react');
var Highlight = require('@tiptap/extension-highlight');
var StarterKit = require('@tiptap/starter-kit');
var Underline = require('@tiptap/extension-underline');
var TextAlign = require('@tiptap/extension-text-align');
var Superscript = require('@tiptap/extension-superscript');
var SubScript = require('@tiptap/extension-subscript');
var tiptap = require('@mantine/tiptap');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var Highlight__default = /*#__PURE__*/_interopDefaultLegacy(Highlight);
var StarterKit__default = /*#__PURE__*/_interopDefaultLegacy(StarterKit);
var Underline__default = /*#__PURE__*/_interopDefaultLegacy(Underline);
var TextAlign__default = /*#__PURE__*/_interopDefaultLegacy(TextAlign);
var Superscript__default = /*#__PURE__*/_interopDefaultLegacy(Superscript);
var SubScript__default = /*#__PURE__*/_interopDefaultLegacy(SubScript);

const content = '<h2 style="text-align: center;">Welcome to Mantine rich text editor</h2><p><code>RichTextEditor</code> component focuses on usability and is designed to be as simple as possible to bring a familiar editing experience to regular users. <code>RichTextEditor</code> is based on <a href="https://tiptap.dev/" rel="noopener noreferrer" target="_blank">Tiptap.dev</a> and supports all of its features:</p><ul><li>General text formatting: <strong>bold</strong>, <em>italic</em>, <u>underline</u>, <s>strike-through</s> </li><li>Headings (h1-h6)</li><li>Sub and super scripts (<sup>&lt;sup /&gt;</sup> and <sub>&lt;sub /&gt;</sub> tags)</li><li>Ordered and bullet lists</li><li>Text align&nbsp;</li><li>And all <a href="https://tiptap.dev/extensions" target="_blank" rel="noopener noreferrer">other extensions</a></li></ul>';
const code = `
import { RichTextEditor, Link } from '@mantine/tiptap';
import { useEditor } from '@tiptap/react';
import Highlight from '@tiptap/extension-highlight';
import StarterKit from '@tiptap/starter-kit';
import Underline from '@tiptap/extension-underline';
import TextAlign from '@tiptap/extension-text-align';
import Superscript from '@tiptap/extension-superscript';
import SubScript from '@tiptap/extension-subscript';

const content =
  '<h2 style="text-align: center;">Welcome to Mantine rich text editor</h2><p><code>RichTextEditor</code> component focuses on usability and is designed to be as simple as possible to bring a familiar editing experience to regular users. <code>RichTextEditor</code> is based on <a href="https://tiptap.dev/" rel="noopener noreferrer" target="_blank">Tiptap.dev</a> and supports all of its features:</p><ul><li>General text formatting: <strong>bold</strong>, <em>italic</em>, <u>underline</u>, <s>strike-through</s> </li><li>Headings (h1-h6)</li><li>Sub and super scripts (<sup>&lt;sup /&gt;</sup> and <sub>&lt;sub /&gt;</sub> tags)</li><li>Ordered and bullet lists</li><li>Text align&nbsp;</li><li>And all <a href="https://tiptap.dev/extensions" target="_blank" rel="noopener noreferrer">other extensions</a></li></ul>';

function Demo() {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline,
      Link,
      Superscript,
      SubScript,
      Highlight,
      TextAlign.configure({ types: ['heading', 'paragraph'] }),
    ],
    content,
  });

  return (
    <RichTextEditor editor={editor}>
      <RichTextEditor.Toolbar sticky stickyOffset={60}>
        <RichTextEditor.ControlsGroup>
          <RichTextEditor.Bold />
          <RichTextEditor.Italic />
          <RichTextEditor.Underline />
          <RichTextEditor.Strikethrough />
          <RichTextEditor.ClearFormatting />
          <RichTextEditor.Highlight />
          <RichTextEditor.Code />
        </RichTextEditor.ControlsGroup>

        <RichTextEditor.ControlsGroup>
          <RichTextEditor.H1 />
          <RichTextEditor.H2 />
          <RichTextEditor.H3 />
          <RichTextEditor.H4 />
        </RichTextEditor.ControlsGroup>

        <RichTextEditor.ControlsGroup>
          <RichTextEditor.Blockquote />
          <RichTextEditor.Hr />
          <RichTextEditor.BulletList />
          <RichTextEditor.OrderedList />
          <RichTextEditor.Subscript />
          <RichTextEditor.Superscript />
        </RichTextEditor.ControlsGroup>

        <RichTextEditor.ControlsGroup>
          <RichTextEditor.Link />
          <RichTextEditor.Unlink />
        </RichTextEditor.ControlsGroup>

        <RichTextEditor.ControlsGroup>
          <RichTextEditor.AlignLeft />
          <RichTextEditor.AlignCenter />
          <RichTextEditor.AlignJustify />
          <RichTextEditor.AlignRight />
        </RichTextEditor.ControlsGroup>
      </RichTextEditor.Toolbar>

      <RichTextEditor.Content />
    </RichTextEditor>
  );
}
`;
function Demo() {
  const editor = react.useEditor({
    extensions: [
      StarterKit__default,
      Underline__default,
      tiptap.Link,
      Superscript__default,
      SubScript__default,
      Highlight__default,
      TextAlign__default.configure({ types: ["heading", "paragraph"] })
    ],
    content
  });
  return /* @__PURE__ */ React__default.createElement(tiptap.RichTextEditor, { editor }, /* @__PURE__ */ React__default.createElement(tiptap.RichTextEditor.Toolbar, { sticky: true, stickyOffset: 60 }, /* @__PURE__ */ React__default.createElement(tiptap.RichTextEditor.ControlsGroup, null, /* @__PURE__ */ React__default.createElement(tiptap.RichTextEditor.Bold, null), /* @__PURE__ */ React__default.createElement(tiptap.RichTextEditor.Italic, null), /* @__PURE__ */ React__default.createElement(tiptap.RichTextEditor.Underline, null), /* @__PURE__ */ React__default.createElement(tiptap.RichTextEditor.Strikethrough, null), /* @__PURE__ */ React__default.createElement(tiptap.RichTextEditor.ClearFormatting, null), /* @__PURE__ */ React__default.createElement(tiptap.RichTextEditor.Highlight, null), /* @__PURE__ */ React__default.createElement(tiptap.RichTextEditor.Code, null)), /* @__PURE__ */ React__default.createElement(tiptap.RichTextEditor.ControlsGroup, null, /* @__PURE__ */ React__default.createElement(tiptap.RichTextEditor.H1, null), /* @__PURE__ */ React__default.createElement(tiptap.RichTextEditor.H2, null), /* @__PURE__ */ React__default.createElement(tiptap.RichTextEditor.H3, null), /* @__PURE__ */ React__default.createElement(tiptap.RichTextEditor.H4, null)), /* @__PURE__ */ React__default.createElement(tiptap.RichTextEditor.ControlsGroup, null, /* @__PURE__ */ React__default.createElement(tiptap.RichTextEditor.Blockquote, null), /* @__PURE__ */ React__default.createElement(tiptap.RichTextEditor.Hr, null), /* @__PURE__ */ React__default.createElement(tiptap.RichTextEditor.BulletList, null), /* @__PURE__ */ React__default.createElement(tiptap.RichTextEditor.OrderedList, null), /* @__PURE__ */ React__default.createElement(tiptap.RichTextEditor.Subscript, null), /* @__PURE__ */ React__default.createElement(tiptap.RichTextEditor.Superscript, null)), /* @__PURE__ */ React__default.createElement(tiptap.RichTextEditor.ControlsGroup, null, /* @__PURE__ */ React__default.createElement(tiptap.RichTextEditor.Link, null), /* @__PURE__ */ React__default.createElement(tiptap.RichTextEditor.Unlink, null)), /* @__PURE__ */ React__default.createElement(tiptap.RichTextEditor.ControlsGroup, null, /* @__PURE__ */ React__default.createElement(tiptap.RichTextEditor.AlignLeft, null), /* @__PURE__ */ React__default.createElement(tiptap.RichTextEditor.AlignCenter, null), /* @__PURE__ */ React__default.createElement(tiptap.RichTextEditor.AlignJustify, null), /* @__PURE__ */ React__default.createElement(tiptap.RichTextEditor.AlignRight, null))), /* @__PURE__ */ React__default.createElement(tiptap.RichTextEditor.Content, null));
}
const usage = {
  type: "code",
  component: Demo,
  code
};

exports.usage = usage;
//# sourceMappingURL=TipTap.demo.usage.js.map
