import React from 'react';
import { useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { RichTextEditor } from '@mantine/tiptap';
import { IconBold, IconItalic } from '@tabler/icons-react';

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
const BoldIcon = () => /* @__PURE__ */ React.createElement(IconBold, { size: "1rem", stroke: 3.5 });
const ItalicIcon = () => /* @__PURE__ */ React.createElement(IconItalic, { size: "1rem", stroke: 3.5 });
function Demo() {
  const editor = useEditor({
    extensions: [StarterKit],
    content: "<p>Customize icons with icon prop</p>"
  });
  return /* @__PURE__ */ React.createElement(RichTextEditor, { editor }, /* @__PURE__ */ React.createElement(RichTextEditor.Toolbar, null, /* @__PURE__ */ React.createElement(RichTextEditor.ControlsGroup, null, /* @__PURE__ */ React.createElement(RichTextEditor.Bold, { icon: BoldIcon }), /* @__PURE__ */ React.createElement(RichTextEditor.Italic, { icon: ItalicIcon }))), /* @__PURE__ */ React.createElement(RichTextEditor.Content, null));
}
const icons = {
  type: "code",
  component: Demo,
  code
};

export { icons };
//# sourceMappingURL=TipTap.demo.icons.js.map
