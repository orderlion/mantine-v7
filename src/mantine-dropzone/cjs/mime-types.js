'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const MIME_TYPES = {
  // Images
  png: "image/png",
  gif: "image/gif",
  jpeg: "image/jpeg",
  svg: "image/svg+xml",
  webp: "image/webp",
  avif: "image/avif",
  // Documents
  mp4: "video/mp4",
  zip: "application/zip",
  csv: "text/csv",
  pdf: "application/pdf",
  doc: "application/msword",
  docx: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  xls: "application/vnd.ms-excel",
  xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  ppt: "application/vnd.ms-powerpoint",
  pptx: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
  exe: "application/vnd.microsoft.portable-executable"
};
const IMAGE_MIME_TYPE = [
  MIME_TYPES.png,
  MIME_TYPES.gif,
  MIME_TYPES.jpeg,
  MIME_TYPES.svg,
  MIME_TYPES.webp,
  MIME_TYPES.avif
];
const PDF_MIME_TYPE = [MIME_TYPES.pdf];
const MS_WORD_MIME_TYPE = [MIME_TYPES.doc, MIME_TYPES.docx];
const MS_EXCEL_MIME_TYPE = [MIME_TYPES.xls, MIME_TYPES.xlsx];
const MS_POWERPOINT_MIME_TYPE = [MIME_TYPES.ppt, MIME_TYPES.pptx];
const EXE_MIME_TYPE = [MIME_TYPES.exe];

exports.EXE_MIME_TYPE = EXE_MIME_TYPE;
exports.IMAGE_MIME_TYPE = IMAGE_MIME_TYPE;
exports.MIME_TYPES = MIME_TYPES;
exports.MS_EXCEL_MIME_TYPE = MS_EXCEL_MIME_TYPE;
exports.MS_POWERPOINT_MIME_TYPE = MS_POWERPOINT_MIME_TYPE;
exports.MS_WORD_MIME_TYPE = MS_WORD_MIME_TYPE;
exports.PDF_MIME_TYPE = PDF_MIME_TYPE;
//# sourceMappingURL=mime-types.js.map
