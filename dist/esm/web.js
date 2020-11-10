import { WebPlugin } from '@capacitor/core';
export class SmsCodeReaderWeb extends WebPlugin {
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
export { SmsCodeReader };
import { registerWebPlugin } from '@capacitor/core';
registerWebPlugin(SmsCodeReader);
//# sourceMappingURL=web.js.map