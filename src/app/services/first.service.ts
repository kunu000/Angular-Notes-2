import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FirstService {
  constructor(public http: HttpClient) {}
  data: BehaviorSubject<any> = new BehaviorSubject(null);
  currentData: Observable<any> = this.data.asObservable();

  changeData(data: any) {
    this.data.next(data);
  }

  // run() {
  //   // this.sub.complete();

  //   this.sub.subscribe({
  //     next: (v) => console.log(`Observer A: ${v}`),
  //   });

  //   this.sub.subscribe({
  //     next: (v) => console.log(`Observer B: ${v}`),
  //   });

  //   this.sub.next(1);
  //   this.sub.next(2);
  // }

  sub: Subject<any> = new Subject<any>();
}
