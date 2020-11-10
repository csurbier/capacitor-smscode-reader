import { Component } from '@angular/core';
import { Plugins } from "@capacitor/core";

const { SmsCodeReader } = Plugins;
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}

  async openCodeReader(){
    let code = await SmsCodeReader.present({"numberOfCharacters":4})
    console.log("On lit code ")
    console.log(code)
    
  }
}
