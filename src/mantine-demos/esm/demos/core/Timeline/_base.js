import React from 'react';
import { IconGitBranch, IconGitCommit, IconGitPullRequest, IconMessageDots } from '@tabler/icons-react';
import { Timeline, Text } from '@mantine/core';

var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
function TimelineBase(_a) {
  var _b = _a, { noIcon } = _b, props = __objRest(_b, ["noIcon"]);
  const displayIcon = !noIcon;
  return /* @__PURE__ */ React.createElement(Timeline, __spreadValues({ active: 1, bulletSize: 24, lineWidth: 2 }, props), /* @__PURE__ */ React.createElement(
    Timeline.Item,
    {
      bullet: displayIcon ? /* @__PURE__ */ React.createElement(IconGitBranch, { size: "0.8rem" }) : null,
      title: "New branch"
    },
    /* @__PURE__ */ React.createElement(Text, { c: "dimmed", size: "sm" }, "You've created new branch", " ", /* @__PURE__ */ React.createElement(Text, { variant: "link", component: "span", inherit: true }, "fix-notifications"), " ", "from master"),
    /* @__PURE__ */ React.createElement(Text, { size: "xs", mt: 4 }, "2 hours ago")
  ), /* @__PURE__ */ React.createElement(Timeline.Item, { bullet: displayIcon ? /* @__PURE__ */ React.createElement(IconGitCommit, { size: "0.8rem" }) : null, title: "Commits" }, /* @__PURE__ */ React.createElement(Text, { c: "dimmed", size: "sm" }, "You've pushed 23 commits to", " ", /* @__PURE__ */ React.createElement(Text, { variant: "link", component: "span", inherit: true }, "fix-notifications"), " ", "branch"), /* @__PURE__ */ React.createElement(Text, { size: "xs", mt: 4 }, "52 minutes ago")), /* @__PURE__ */ React.createElement(
    Timeline.Item,
    {
      title: "Pull request",
      bullet: displayIcon ? /* @__PURE__ */ React.createElement(IconGitPullRequest, { size: "0.8rem" }) : null,
      lineVariant: "dashed"
    },
    /* @__PURE__ */ React.createElement(Text, { c: "dimmed", size: "sm" }, "You've submitted a pull request", " ", /* @__PURE__ */ React.createElement(Text, { variant: "link", component: "span", inherit: true }, "Fix incorrect notification message (#187)"), " "),
    /* @__PURE__ */ React.createElement(Text, { size: "xs", mt: 4 }, "34 minutes ago")
  ), /* @__PURE__ */ React.createElement(
    Timeline.Item,
    {
      title: "Code review",
      bullet: displayIcon ? /* @__PURE__ */ React.createElement(IconMessageDots, { size: "0.8rem" }) : null
    },
    /* @__PURE__ */ React.createElement(Text, { c: "dimmed", size: "sm" }, /* @__PURE__ */ React.createElement(Text, { variant: "link", component: "span", inherit: true }, "Robert Gluesticker"), " ", "left a code review on your pull request"),
    /* @__PURE__ */ React.createElement(Text, { size: "xs", mt: 4 }, "12 minutes ago")
  ));
}

export { TimelineBase };
//# sourceMappingURL=_base.js.map
