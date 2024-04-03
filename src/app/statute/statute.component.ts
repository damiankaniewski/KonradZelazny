import { Component } from '@angular/core';

@Component({
  selector: 'app-statute',
  templateUrl: './statute.component.html',
  styleUrls: ['./statute.component.css'],
})
export class StatuteComponent {
  ngAfterViewInit() {
    window.scrollTo(0, 0);
  }
}
