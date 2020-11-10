declare module '@capacitor/core' {
    interface PluginRegistry {
        SmsCodeReader: SmsCodeReaderPlugin;
    }
}
export interface SmsCodeReaderPlugin {
    present(): Promise<{
        code: string;
    }>;
}
