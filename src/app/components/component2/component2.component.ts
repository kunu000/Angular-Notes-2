import { Component } from '@angular/core';
import { SecService } from '../../services/sec.service';
import { FirstService } from '../../services/first.service';
import { interval } from 'rxjs';

@Component({
  selector: 'app-component2',
  standalone: true,
  imports: [],
  templateUrl: './component2.component.html',
  styleUrl: './component2.component.css',
})
export class Component2Component {
  // count = toSignal(interval(1000), { initialValue: 0 });

  constructor(
    private firstService: FirstService,
    private secService: SecService
  ) {}

  ngOnInit(): void {
    console.log(this.secService.notification());
  }
}
