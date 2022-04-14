"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeBufferSource = void 0;
const arraybuffer_js_1 = require("./arraybuffer.js");
class BufferSource extends arraybuffer_js_1.ArrayBufferSource {
    constructor(buffer) {
        super(buffer.buffer.slice(buffer.byteOffset, buffer.byteOffset + buffer.byteLength));
    }
}
function makeBufferSource(buffer) {
    return new BufferSource(buffer);
}
exports.makeBufferSource = makeBufferSource;
//# sourceMappingURL=buffer.js.map