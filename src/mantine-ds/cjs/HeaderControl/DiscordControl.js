'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var HeaderControl = require('./HeaderControl.js');
var meta = require('../meta.js');
var DiscordControl_module = require('./DiscordControl.module.css.js');
var DiscordIcon = require('../Icons/DiscordIcon.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

function DiscordControl() {
  return /* @__PURE__ */ React__default.createElement(
    HeaderControl.HeaderControl,
    {
      tooltip: "Discord",
      component: "a",
      href: meta.meta.discordLink,
      className: DiscordControl_module['default'].discord
    },
    /* @__PURE__ */ React__default.createElement(DiscordIcon.DiscordIcon, { size: 20 })
  );
}

exports.DiscordControl = DiscordControl;
//# sourceMappingURL=DiscordControl.js.map
