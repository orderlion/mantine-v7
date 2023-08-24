import React from 'react';
import { useEditor, FloatingMenu } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { Link, RichTextEditor } from '@mantine/tiptap';

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
  const editor = useEditor({
    extensions: [StarterKit, Link],
    content: "<p>Enter a new line to see floating menu</p>"
  });
  return /* @__PURE__ */ React.createElement(RichTextEditor, { editor }, editor && /* @__PURE__ */ React.createElement(FloatingMenu, { editor }, /* @__PURE__ */ React.createElement(RichTextEditor.ControlsGroup, null, /* @__PURE__ */ React.createElement(RichTextEditor.H1, null), /* @__PURE__ */ React.createElement(RichTextEditor.H2, null), /* @__PURE__ */ React.createElement(RichTextEditor.BulletList, null))), /* @__PURE__ */ React.createElement(RichTextEditor.Content, null));
}
const floatingMenu = {
  type: "code",
  component: Demo,
  code
};

export { floatingMenu };
//# sourceMappingURL=TipTap.demo.floatingMenu.js.map
