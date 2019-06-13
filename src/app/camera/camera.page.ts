import { Component, OnInit } from '@angular/core';
import { Plugins, CameraResultType, CameraSource } from '@capacitor/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

const { Camera } = Plugins;

@Component({
  selector: 'app-camera',
  templateUrl: './camera.page.html',
  styleUrls: ['./camera.page.scss'],
})
export class CameraPage implements OnInit {
  image: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit() {
  }

  async takePicture() {

    try {
      const image = await Camera.getPhoto({
        quality: 70,
        allowEditing: false,
        resultType: CameraResultType.DataUrl,
        source: CameraSource.Camera
      });

      this.image = this.sanitizer.bypassSecurityTrustResourceUrl(image.dataUrl);
    } catch (err) {
      console.log('Error taking picture', err);
    }
  }

  async pickFromGallery() {

    try {
      const image = await Camera.getPhoto({
        quality: 70,
        allowEditing: false,
        resultType: CameraResultType.DataUrl,
        source: CameraSource.Photos
      });

      this.image = this.sanitizer.bypassSecurityTrustResourceUrl(image.dataUrl);
    } catch (err) {
      console.log('Error taking picture', err);
    }
  }

  async prompt() {

    try {
      const image = await Camera.getPhoto({
        quality: 70,
        allowEditing: false,
        resultType: CameraResultType.DataUrl,
        source: CameraSource.Prompt
      });

      this.image = this.sanitizer.bypassSecurityTrustResourceUrl(image.dataUrl);
    } catch (err) {
      console.log('Error taking picture', err);
    }
  }

}
