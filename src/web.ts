import { WebPlugin } from '@capacitor/core';
import { SmsCodeReaderPlugin } from './definitions';

export class SmsCodeReaderWeb extends WebPlugin implements SmsCodeReaderPlugin {
  constructor() {
    super({
      name: 'SmsCodeReader',
      platforms: ['web'],
    });
  }
  present(): Promise<{ code: string; }> {
    throw new Error('Method not implemented on web.');
  }

  
}

const SmsCodeReader = new SmsCodeReaderWeb();

export { SmsCodeReader };

import { registerWebPlugin } from '@capacitor/core';
registerWebPlugin(SmsCodeReader);
