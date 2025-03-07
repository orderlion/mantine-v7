import React from 'react';
import { useEditor } from '@tiptap/react';
import Highlight from '@tiptap/extension-highlight';
import StarterKit from '@tiptap/starter-kit';
import Underline from '@tiptap/extension-underline';
import TextAlign from '@tiptap/extension-text-align';
import Superscript from '@tiptap/extension-superscript';
import SubScript from '@tiptap/extension-subscript';
import { Link, RichTextEditor } from '@mantine/tiptap';

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
  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline,
      Link,
      Superscript,
      SubScript,
      Highlight,
      TextAlign.configure({ types: ["heading", "paragraph"] })
    ],
    content
  });
  return /* @__PURE__ */ React.createElement(RichTextEditor, { editor }, /* @__PURE__ */ React.createElement(RichTextEditor.Toolbar, { sticky: true, stickyOffset: 60 }, /* @__PURE__ */ React.createElement(RichTextEditor.ControlsGroup, null, /* @__PURE__ */ React.createElement(RichTextEditor.Bold, null), /* @__PURE__ */ React.createElement(RichTextEditor.Italic, null), /* @__PURE__ */ React.createElement(RichTextEditor.Underline, null), /* @__PURE__ */ React.createElement(RichTextEditor.Strikethrough, null), /* @__PURE__ */ React.createElement(RichTextEditor.ClearFormatting, null), /* @__PURE__ */ React.createElement(RichTextEditor.Highlight, null), /* @__PURE__ */ React.createElement(RichTextEditor.Code, null)), /* @__PURE__ */ React.createElement(RichTextEditor.ControlsGroup, null, /* @__PURE__ */ React.createElement(RichTextEditor.H1, null), /* @__PURE__ */ React.createElement(RichTextEditor.H2, null), /* @__PURE__ */ React.createElement(RichTextEditor.H3, null), /* @__PURE__ */ React.createElement(RichTextEditor.H4, null)), /* @__PURE__ */ React.createElement(RichTextEditor.ControlsGroup, null, /* @__PURE__ */ React.createElement(RichTextEditor.Blockquote, null), /* @__PURE__ */ React.createElement(RichTextEditor.Hr, null), /* @__PURE__ */ React.createElement(RichTextEditor.BulletList, null), /* @__PURE__ */ React.createElement(RichTextEditor.OrderedList, null), /* @__PURE__ */ React.createElement(RichTextEditor.Subscript, null), /* @__PURE__ */ React.createElement(RichTextEditor.Superscript, null)), /* @__PURE__ */ React.createElement(RichTextEditor.ControlsGroup, null, /* @__PURE__ */ React.createElement(RichTextEditor.Link, null), /* @__PURE__ */ React.createElement(RichTextEditor.Unlink, null)), /* @__PURE__ */ React.createElement(RichTextEditor.ControlsGroup, null, /* @__PURE__ */ React.createElement(RichTextEditor.AlignLeft, null), /* @__PURE__ */ React.createElement(RichTextEditor.AlignCenter, null), /* @__PURE__ */ React.createElement(RichTextEditor.AlignJustify, null), /* @__PURE__ */ React.createElement(RichTextEditor.AlignRight, null))), /* @__PURE__ */ React.createElement(RichTextEditor.Content, null));
}
const usage = {
  type: "code",
  component: Demo,
  code
};

export { usage };
//# sourceMappingURL=TipTap.demo.usage.js.map
