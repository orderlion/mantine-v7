import React from 'react';
import { useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { RichTextEditor, useRichTextEditorContext } from '@mantine/tiptap';
import { IconStar } from '@tabler/icons-react';

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
  const { editor } = useRichTextEditorContext();
  return /* @__PURE__ */ React.createElement(
    RichTextEditor.Control,
    {
      onClick: () => editor == null ? void 0 : editor.commands.insertContent("\u2B50"),
      "aria-label": "Insert star emoji",
      title: "Insert star emoji"
    },
    /* @__PURE__ */ React.createElement(IconStar, { stroke: 1.5, size: "1rem" })
  );
}
function Demo() {
  const editor = useEditor({
    extensions: [StarterKit],
    content: "<p>Click control to insert star emoji</p>"
  });
  return /* @__PURE__ */ React.createElement(RichTextEditor, { editor }, /* @__PURE__ */ React.createElement(RichTextEditor.Toolbar, null, /* @__PURE__ */ React.createElement(InsertStarControl, null)), /* @__PURE__ */ React.createElement(RichTextEditor.Content, null));
}
const customControl = {
  type: "code",
  component: Demo,
  code
};

export { customControl };
//# sourceMappingURL=TipTap.demo.customControl.js.map
