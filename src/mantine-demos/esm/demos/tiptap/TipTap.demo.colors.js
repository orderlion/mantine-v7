import React from 'react';
import { useEditor } from '@tiptap/react';
import { IconColorPicker } from '@tabler/icons-react';
import { Color } from '@tiptap/extension-color';
import TextStyle from '@tiptap/extension-text-style';
import StarterKit from '@tiptap/starter-kit';
import { RichTextEditor } from '@mantine/tiptap';

const code = `
import { useEditor } from '@tiptap/react';
import { IconColorPicker } from '@tabler/icons-react';
import { Color } from '@tiptap/extension-color';
import TextStyle from '@tiptap/extension-text-style';
import StarterKit from '@tiptap/starter-kit';
import { RichTextEditor } from '@mantine/tiptap';

function Demo() {
  const editor = useEditor({
    extensions: [StarterKit, TextStyle, Color],
    content: '<p>Apply some colors to this text</p>',
  });

  return (
    <RichTextEditor editor={editor}>
      <RichTextEditor.Toolbar sticky stickyOffset={60}>
        <RichTextEditor.ColorPicker
          colors={[
            '#25262b',
            '#868e96',
            '#fa5252',
            '#e64980',
            '#be4bdb',
            '#7950f2',
            '#4c6ef5',
            '#228be6',
            '#15aabf',
            '#12b886',
            '#40c057',
            '#82c91e',
            '#fab005',
            '#fd7e14',
          ]}
        />

        <RichTextEditor.ControlsGroup>
          <RichTextEditor.Control interactive={false}>
            <IconColorPicker size="1rem" stroke={1.5} />
          </RichTextEditor.Control>
          <RichTextEditor.Color color="#F03E3E" />
          <RichTextEditor.Color color="#7048E8" />
          <RichTextEditor.Color color="#1098AD" />
          <RichTextEditor.Color color="#37B24D" />
          <RichTextEditor.Color color="#F59F00" />
        </RichTextEditor.ControlsGroup>

        <RichTextEditor.UnsetColor />
      </RichTextEditor.Toolbar>

      <RichTextEditor.Content />
    </RichTextEditor>
  );
}
`;
function Demo() {
  const editor = useEditor({
    extensions: [StarterKit, TextStyle, Color],
    content: "<p>Apply some colors to this text</p>"
  });
  return /* @__PURE__ */ React.createElement(RichTextEditor, { editor }, /* @__PURE__ */ React.createElement(RichTextEditor.Toolbar, { sticky: true, stickyOffset: 60 }, /* @__PURE__ */ React.createElement(
    RichTextEditor.ColorPicker,
    {
      colors: [
        "#25262b",
        "#868e96",
        "#fa5252",
        "#e64980",
        "#be4bdb",
        "#7950f2",
        "#4c6ef5",
        "#228be6",
        "#15aabf",
        "#12b886",
        "#40c057",
        "#82c91e",
        "#fab005",
        "#fd7e14"
      ]
    }
  ), /* @__PURE__ */ React.createElement(RichTextEditor.ControlsGroup, null, /* @__PURE__ */ React.createElement(RichTextEditor.Control, { interactive: false }, /* @__PURE__ */ React.createElement(IconColorPicker, { size: "1rem", stroke: 1.5 })), /* @__PURE__ */ React.createElement(RichTextEditor.Color, { color: "#F03E3E" }), /* @__PURE__ */ React.createElement(RichTextEditor.Color, { color: "#7048E8" }), /* @__PURE__ */ React.createElement(RichTextEditor.Color, { color: "#1098AD" }), /* @__PURE__ */ React.createElement(RichTextEditor.Color, { color: "#37B24D" }), /* @__PURE__ */ React.createElement(RichTextEditor.Color, { color: "#F59F00" })), /* @__PURE__ */ React.createElement(RichTextEditor.UnsetColor, null)), /* @__PURE__ */ React.createElement(RichTextEditor.Content, null));
}
const colors = {
  type: "code",
  component: Demo,
  code
};

export { colors };
//# sourceMappingURL=TipTap.demo.colors.js.map
