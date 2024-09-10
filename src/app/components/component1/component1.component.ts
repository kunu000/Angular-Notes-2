import { Component, computed, effect, signal } from '@angular/core';
import { SecService } from '../../services/sec.service';

@Component({
  selector: 'app-component1',
  standalone: true,
  imports: [],
  templateUrl: './component1.component.html',
  styleUrl: './component1.component.css',
})
export class Component1Component {
  count = signal(0);
  height = signal(10);
  width = signal(21);
  show = signal(false);
  area = computed(() => {
    console.log('area runs');
    if (this.width() > 20) {
      return this.width();
    } else {
      return this.height();
    }
  });

  constructor(private secService: SecService) {
    effect(() => {
      console.log('1 height:', this.height(), 'width:', this.width());
    });
    effect(() => {
      console.log('2 height:', this.height());
    });
    effect(() => {
      console.log('3 width:', this.width());
    });
  }

  handleArea() {
    this.width.set(50);
  }

  increment() {
    // this.count.set(this.count() + 1);
    this.count.update((val) => ++val);
    console.log(this.area()); //calculate here
    this.width.set(20);
    console.log(this.area()); // calculate here
    console.log(this.area()); // return the catch value here
  }
}
