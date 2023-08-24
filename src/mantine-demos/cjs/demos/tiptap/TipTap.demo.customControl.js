'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var react = require('@tiptap/react');
var StarterKit = require('@tiptap/starter-kit');
var tiptap = require('@mantine/tiptap');
var iconsReact = require('@tabler/icons-react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var StarterKit__default = /*#__PURE__*/_interopDefaultLegacy(StarterKit);

const code = `
import { useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { RichTextEditor, useRichTextEditorContext } from '@mantine/tiptap';
import { IconStar } from '@tabler/icons-react';

function InsertStarControl() {
  const { editor } = useRichTextEditorContext();
  return (
    <RichTextEditor.Control
      onClick={() => editor?.commands.insertContent('\u2B50')}
      aria-label="Insert star emoji"
      title="Insert star emoji"
    >
      <IconStar stroke={1.5} size="1rem" />
    </RichTextEditor.Control>
  );
}

function Demo() {
  const editor = useEditor({
    extensions: [StarterKit],
    content: '<p>Click control to insert star emoji</p>',
  });

  return (
    <RichTextEditor editor={editor}>
      <RichTextEditor.Toolbar>
        <InsertStarControl />
      </RichTextEditor.Toolbar>

      <RichTextEditor.Content />
    </RichTextEditor>
  );
}
`;
function InsertStarControl() {
  const { editor } = tiptap.useRichTextEditorContext();
  return /* @__PURE__ */ React__default.createElement(
    tiptap.RichTextEditor.Control,
    {
      onClick: () => editor == null ? void 0 : editor.commands.insertContent("\u2B50"),
      "aria-label": "Insert star emoji",
      title: "Insert star emoji"
    },
    /* @__PURE__ */ React__default.createElement(iconsReact.IconStar, { stroke: 1.5, size: "1rem" })
  );
}
function Demo() {
  const editor = react.useEditor({
    extensions: [StarterKit__default],
    content: "<p>Click control to insert star emoji</p>"
  });
  return /* @__PURE__ */ React__default.createElement(tiptap.RichTextEditor, { editor }, /* @__PURE__ */ React__default.createElement(tiptap.RichTextEditor.Toolbar, null, /* @__PURE__ */ React__default.createElement(InsertStarControl, null)), /* @__PURE__ */ React__default.createElement(tiptap.RichTextEditor.Content, null));
}
const customControl = {
  type: "code",
  component: Demo,
  code
};

exports.customControl = customControl;
//# sourceMappingURL=TipTap.demo.customControl.js.map
