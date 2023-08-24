import React from 'react';
import { useEditor, BubbleMenu } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { Link, RichTextEditor } from '@mantine/tiptap';

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
  const editor = useEditor({
    extensions: [StarterKit, Link],
    content: "<p>Select some text to see bubble menu</p>"
  });
  return /* @__PURE__ */ React.createElement(RichTextEditor, { editor }, editor && /* @__PURE__ */ React.createElement(BubbleMenu, { editor }, /* @__PURE__ */ React.createElement(RichTextEditor.ControlsGroup, null, /* @__PURE__ */ React.createElement(RichTextEditor.Bold, null), /* @__PURE__ */ React.createElement(RichTextEditor.Italic, null), /* @__PURE__ */ React.createElement(RichTextEditor.Link, null))), /* @__PURE__ */ React.createElement(RichTextEditor.Content, null));
}
const bubbleMenu = {
  type: "code",
  component: Demo,
  code
};

export { bubbleMenu };
//# sourceMappingURL=TipTap.demo.bubbleMenu.js.map
