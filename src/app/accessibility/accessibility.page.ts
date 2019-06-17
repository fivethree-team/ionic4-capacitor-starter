import { Component, OnInit } from '@angular/core';
import { Plugins } from '@capacitor/core';

const { Accessibility, Modals } = Plugins;

@Component({
  selector: 'app-accessibility',
  templateUrl: './accessibility.page.html',
  styleUrls: ['./accessibility.page.scss']
})
export class AccessibilityPage implements OnInit {
  constructor() {}

  ngOnInit() {}

  async speak() {
    try {
      const value = await Modals.prompt({
        title: 'Hello World',
        message: 'Enter the value to speak'
      });

      await Accessibility.speak({ value: value.value, language: 'de' });
    } catch (err) {
      console.log('Error in Accessibility', err);
    }
  }
}
