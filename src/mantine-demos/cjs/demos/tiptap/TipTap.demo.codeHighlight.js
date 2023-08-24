'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var tiptap = require('@mantine/tiptap');
var react = require('@tiptap/react');
var StarterKit = require('@tiptap/starter-kit');
var CodeBlockLowlight = require('@tiptap/extension-code-block-lowlight');
var lowlight = require('lowlight');
var tsLanguageSyntax = require('highlight.js/lib/languages/typescript');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var StarterKit__default = /*#__PURE__*/_interopDefaultLegacy(StarterKit);
var CodeBlockLowlight__default = /*#__PURE__*/_interopDefaultLegacy(CodeBlockLowlight);
var tsLanguageSyntax__default = /*#__PURE__*/_interopDefaultLegacy(tsLanguageSyntax);

const code = `
import { RichTextEditor } from '@mantine/tiptap';
import { useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import CodeBlockLowlight from '@tiptap/extension-code-block-lowlight';
import { lowlight } from 'lowlight';
import tsLanguageSyntax from 'highlight.js/lib/languages/typescript';

// register languages that your are planning to use
lowlight.registerLanguage('ts', tsLanguageSyntax);

function escapeHtml(unsafe: string) {
  return unsafe
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

const codeExample =
  escapeHtml(\`// Valid braces Kata \u2013 https://www.codewars.com/kata/5277c8a221e209d3f6000b56

const pairs: Record<string, string> = {
  '[': ']',
  '{': '}',
  '(': ')',
};

const openBraces = Object.keys(pairs);

export function validBraces(braces: string) {
  const opened: string[] = [];

  for (let i = 0; i < braces.length; i += 1) {
    const brace = braces[i];

    if (openBraces.includes(brace)) {
      opened.push(brace);
      continue;
    }

    if (pairs[opened[opened.length - 1]] !== brace) {
      return false
    }

    opened.pop();
  }

  return opened.length === 0;
}\`);

function Demo() {
  const editor = useEditor({
    extensions: [
      StarterKit,
      CodeBlockLowlight.configure({
        lowlight,
      }),
    ],
    content: \`<p>Regular paragraph</p><pre><code>\${codeExample}</code></pre>\`,
  });

  return (
    <RichTextEditor editor={editor}>
      <RichTextEditor.Toolbar>
        <RichTextEditor.ControlsGroup>
          <RichTextEditor.CodeBlock />
        </RichTextEditor.ControlsGroup>
      </RichTextEditor.Toolbar>

      <RichTextEditor.Content />
    </RichTextEditor>
  );
}
`;
lowlight.lowlight.registerLanguage("ts", tsLanguageSyntax__default);
function escapeHtml(unsafe) {
  return unsafe.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
}
const codeExample = escapeHtml(`// Valid braces Kata \u2013 https://www.codewars.com/kata/5277c8a221e209d3f6000b56

const pairs: Record<string, string> = {
  '[': ']',
  '{': '}',
  '(': ')',
};

const openBraces = Object.keys(pairs);

export function validBraces(braces: string) {
  const opened: string[] = [];

  for (let i = 0; i < braces.length; i += 1) {
    const brace = braces[i];

    if (openBraces.includes(brace)) {
      opened.push(brace);
      continue;
    }

    if (pairs[opened[opened.length - 1]] !== brace) {
      return false
    }

    opened.pop();
  }

  return opened.length === 0;
}`);
function Demo() {
  const editor = react.useEditor({
    extensions: [
      StarterKit__default,
      CodeBlockLowlight__default.configure({
        lowlight: lowlight.lowlight
      })
    ],
    content: `<p>Regular paragraph</p><pre><code>${codeExample}</code></pre>`
  });
  return /* @__PURE__ */ React__default.createElement(tiptap.RichTextEditor, { editor }, /* @__PURE__ */ React__default.createElement(tiptap.RichTextEditor.Toolbar, null, /* @__PURE__ */ React__default.createElement(tiptap.RichTextEditor.ControlsGroup, null, /* @__PURE__ */ React__default.createElement(tiptap.RichTextEditor.CodeBlock, null))), /* @__PURE__ */ React__default.createElement(tiptap.RichTextEditor.Content, null));
}
const codeHighlight = {
  type: "code",
  component: Demo,
  code
};

exports.codeHighlight = codeHighlight;
//# sourceMappingURL=TipTap.demo.codeHighlight.js.map
