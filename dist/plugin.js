var capacitorPlugin = (function (exports, core) {
    'use strict';

    class SmsCodeReaderWeb extends core.WebPlugin {
        constructor() {
            super({
                name: 'SmsCodeReader',
                platforms: ['web'],
            });
        }
        present() {
            throw new Error('Method not implemented on web.');
        }
    }
    const SmsCodeReader = new SmsCodeReaderWeb();
    core.registerWebPlugin(SmsCodeReader);

    exports.SmsCodeReader = SmsCodeReader;
    exports.SmsCodeReaderWeb = SmsCodeReaderWeb;

    Object.defineProperty(exports, '__esModule', { value: true });

    return exports;

}({}, capacitorExports));
//# sourceMappingURL=plugin.js.map
