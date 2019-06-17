import { Injectable } from '@angular/core';
import {
  NotificationEngine,
  NotificationType
} from '@fivethree/ngxs-notification-plugin';
import { ToastController } from '@ionic/angular';
import { Store } from '@ngxs/store';

export interface NotifyOptions {
  animated: boolean;
  message: string;
  cssClass: string | string[];
  color: string;
  duration: number;
  closeButtonText: string;
  showCloseButton: boolean;
  keyboardClose: boolean;
  enterAnimation: any;
  leaveAnimation: any;
  mode: 'ios' | 'md';
  position: 'bottom' | 'middle' | 'top';
  translucent: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class NotificationService implements NotificationEngine {
  private static LONG_DURATION = 6000;
  private static SHORT_DURATION = 3000;

  constructor(private toastCtrl: ToastController, private store: Store) {}

  successNotification(
    message: any,
    options: Partial<NotifyOptions>,
    actions?: any
  ) {
    this.showToast(message, 'success', options, actions);
  }

  hintNotification(message: any, options?: any, actions?: any) {
    this.showToast(message, 'hint', options, actions);
  }

  warningNotification(
    message: any,
    warning?: any,
    options?: any,
    actions?: any
  ) {
    this.showToast(message, 'warning', options, actions);
  }

  errorNotification(message: any, error?: any, options?: any, actions?: any) {
    this.showToast(message, 'error', options, actions);
  }

  unknownErrorNotification(error?: any, options?: any, actions?: any) {
    this.showToast(
      'Ein Fehler ist aufgetreten. Bitte versuche es erneut.',
      'error',
      options,
      actions
    );
  }

  private async showToast(
    message: string,
    type: NotificationType,
    options?: Partial<NotifyOptions>,
    actionOnCancel?: any
  ) {
    const toastOptions: Partial<NotifyOptions> = {
      message: message,
      cssClass: `toast-${type}`,
      duration:
        options && options.showCloseButton
          ? 0
          : message.length < 80
          ? NotificationService.SHORT_DURATION
          : NotificationService.LONG_DURATION,
      ...options
    };

    const toast = await this.toastCtrl.create(toastOptions);
    toast.present();

    const { role } = await toast.onDidDismiss();

    if (role === 'cancel' && actionOnCancel) {
      this.onCancelAction(actionOnCancel);
    }
  }

  onCancelAction(actions: any | any[]) {
    this.store.dispatch(actions);
  }
}
