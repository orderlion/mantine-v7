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
import { RichTextEditor } from '@mantine/tiptap';
import { IconBold, IconItalic } from '@tabler/icons-react';

const BoldIcon = () => <IconBold size="1rem" stroke={3.5} />;
const ItalicIcon = () => <IconItalic size="1rem" stroke={3.5} />;

function Demo() {
  const editor = useEditor({
    extensions: [StarterKit],
    content: '<p>Customize icons with icon prop</p>',
  });

  return (
    <RichTextEditor editor={editor}>
      <RichTextEditor.Toolbar>
        <RichTextEditor.ControlsGroup>
          <RichTextEditor.Bold icon={BoldIcon} />
          <RichTextEditor.Italic icon={ItalicIcon} />
        </RichTextEditor.ControlsGroup>
      </RichTextEditor.Toolbar>

      <RichTextEditor.Content />
    </RichTextEditor>
  );
}
`;
const BoldIcon = () => /* @__PURE__ */ React__default.createElement(iconsReact.IconBold, { size: "1rem", stroke: 3.5 });
const ItalicIcon = () => /* @__PURE__ */ React__default.createElement(iconsReact.IconItalic, { size: "1rem", stroke: 3.5 });
function Demo() {
  const editor = react.useEditor({
    extensions: [StarterKit__default],
    content: "<p>Customize icons with icon prop</p>"
  });
  return /* @__PURE__ */ React__default.createElement(tiptap.RichTextEditor, { editor }, /* @__PURE__ */ React__default.createElement(tiptap.RichTextEditor.Toolbar, null, /* @__PURE__ */ React__default.createElement(tiptap.RichTextEditor.ControlsGroup, null, /* @__PURE__ */ React__default.createElement(tiptap.RichTextEditor.Bold, { icon: BoldIcon }), /* @__PURE__ */ React__default.createElement(tiptap.RichTextEditor.Italic, { icon: ItalicIcon }))), /* @__PURE__ */ React__default.createElement(tiptap.RichTextEditor.Content, null));
}
const icons = {
  type: "code",
  component: Demo,
  code
};

exports.icons = icons;
//# sourceMappingURL=TipTap.demo.icons.js.map
