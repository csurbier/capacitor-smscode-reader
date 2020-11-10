# Capacitor SmsCode reader

iOS (only) Capacitor plugin to read incoming SMS code
  
### Installation

```sh
$ npm install capacitor-smscode-reader
```

### Use

```sh
import { Plugins } from "@capacitor/core";
const { SmsCodeReader } = Plugins;

  async openSmsCode(){
       let codeReceived = await SmsCodeReader.present({"numberOfCharacters":4})   
       console.log("Code received ",codeReceived)
   }
 }
```
### Parameters
numberOfCharacters : The lenght of the desired Pin code

### Credits:
See [KAPinField](https://github.com/kirualex/KAPinField) for managing UITextField with SMS code
See [SnapKit](https://github.com/SnapKit/SnapKit) for managing the UIViewController autolayout

