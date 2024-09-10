import { Component } from '@angular/core';
import { FirstService } from '../../services/first.service';
import { JsonPipe } from '@angular/common';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [JsonPipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  data: any = null;
  subscribe!: Subscription;
  constructor(private firstService: FirstService) {}
  ngOnInit(): void {
    this.subscribe = this.firstService.data.subscribe((result: any) => {
      console.log('run');
      this.data = result;
    });
  }

  // ngOnDestroy(): void {
  //   this.subscribe.unsubscribe();
  // }
}
