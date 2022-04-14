"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeArrayBufferSource = exports.ArrayBufferSource = void 0;
const basesource_js_1 = require("./basesource.js");
const utils_js_1 = require("../utils.js");
class ArrayBufferSource extends basesource_js_1.BaseSource {
    constructor(arrayBuffer) {
        super();
        this.arrayBuffer = arrayBuffer;
    }
    fetchSlice(slice, signal) {
        if (signal && signal.aborted) {
            throw new utils_js_1.AbortError('Request aborted');
        }
        return this.arrayBuffer.slice(slice.offset, slice.offset + slice.length);
    }
}
exports.ArrayBufferSource = ArrayBufferSource;
function makeArrayBufferSource(arrayBuffer) {
    return new ArrayBufferSource(arrayBuffer);
}
exports.makeArrayBufferSource = makeArrayBufferSource;
//# sourceMappingURL=arraybuffer.js.map