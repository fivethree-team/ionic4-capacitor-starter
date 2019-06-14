import { Component, OnInit } from '@angular/core';
import { Plugins } from '@capacitor/core';

const { Keyboard } = Plugins;

@Component({
  selector: 'app-keyboard',
  templateUrl: './keyboard.page.html',
  styleUrls: ['./keyboard.page.scss'],
})
export class KeyboardPage implements OnInit {

  constructor() { }

  ngOnInit() {
    window.addEventListener('keyboardWillShow', (e) => {
      console.log('keyboard will show with height', e);
    });

    window.addEventListener('keyboardDidShow', (e) => {
      console.log('keyboard did show with height', e);
    });

    window.addEventListener('keyboardWillHide', () => {
      console.log('keyboard will hide');
    });

    window.addEventListener('keyboardDidHide', () => {
      console.log('keyboard did hide');
    });

  }

  async show() {
    return Keyboard.show();
  }

  async hide() {
    return Keyboard.hide();
  }

  async showAccessoryBar() {
    return Keyboard.setAccessoryBarVisible({ isVisible: true });
  }

  async hideAccessoryBar() {
    return Keyboard.setAccessoryBarVisible({ isVisible: false });
  }

}
