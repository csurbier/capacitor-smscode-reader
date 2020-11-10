import { WebPlugin } from '@capacitor/core';
import { SmsCodeReaderPlugin } from './definitions';
export declare class SmsCodeReaderWeb extends WebPlugin implements SmsCodeReaderPlugin {
    constructor();
    present(): Promise<{
        code: string;
    }>;
}
declare const SmsCodeReader: SmsCodeReaderWeb;
export { SmsCodeReader };
