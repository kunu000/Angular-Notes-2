import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SecService {
  constructor() {}
  notification: any = signal(null);
  setNotification(message: string) {
    this.notification.set(message);
  }
}
