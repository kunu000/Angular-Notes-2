import { Component } from '@angular/core';
import { FirstService } from '../../services/first.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home2',
  standalone: true,
  imports: [],
  templateUrl: './home2.component.html',
  styleUrl: './home2.component.css',
})
export class Home2Component {
  constructor(private firstService: FirstService) {}
  subscribe!: Subscription;

  ngOnInit(): void {
    this.subscribe = this.firstService.currentData.subscribe((result: any) => {
      console.log('run 2', result);
    });
  }

  changeData() {
    this.firstService.changeData('New Data');
  }
}
