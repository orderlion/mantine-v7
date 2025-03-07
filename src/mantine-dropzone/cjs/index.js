'use client';
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var DropzoneFullScreen = require('./DropzoneFullScreen.js');
var Dropzone$1 = require('./Dropzone.js');
var DropzoneStatus = require('./DropzoneStatus.js');
var mimeTypes = require('./mime-types.js');

Dropzone$1.Dropzone.FullScreen = DropzoneFullScreen.DropzoneFullScreen;
const Dropzone = Dropzone$1.Dropzone;

exports.DropzoneFullScreen = DropzoneFullScreen.DropzoneFullScreen;
exports.DropzoneAccept = DropzoneStatus.DropzoneAccept;
exports.DropzoneIdle = DropzoneStatus.DropzoneIdle;
exports.DropzoneReject = DropzoneStatus.DropzoneReject;
exports.EXE_MIME_TYPE = mimeTypes.EXE_MIME_TYPE;
exports.IMAGE_MIME_TYPE = mimeTypes.IMAGE_MIME_TYPE;
exports.MIME_TYPES = mimeTypes.MIME_TYPES;
exports.MS_EXCEL_MIME_TYPE = mimeTypes.MS_EXCEL_MIME_TYPE;
exports.MS_POWERPOINT_MIME_TYPE = mimeTypes.MS_POWERPOINT_MIME_TYPE;
exports.MS_WORD_MIME_TYPE = mimeTypes.MS_WORD_MIME_TYPE;
exports.PDF_MIME_TYPE = mimeTypes.PDF_MIME_TYPE;
exports.Dropzone = Dropzone;
//# sourceMappingURL=index.js.map
