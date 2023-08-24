import React from 'react';
import { RichTextEditor } from '@mantine/tiptap';
import { useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Placeholder from '@tiptap/extension-placeholder';

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
  const editor = useEditor({
    extensions: [StarterKit, Placeholder.configure({ placeholder: "This is placeholder" })],
    content: ""
  });
  return /* @__PURE__ */ React.createElement(RichTextEditor, { editor }, /* @__PURE__ */ React.createElement(RichTextEditor.Content, null));
}
const placeholder = {
  type: "code",
  component: Demo,
  code
};

export { placeholder };
//# sourceMappingURL=TipTap.demo.placeholder.js.map
