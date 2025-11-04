import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
 @Input() childMessage!: string;

 @Output() childButtonEvent = new EventEmitter<string>();

 sendNotification() {
    this.childButtonEvent.emit('Hello from About Component!');
  }
}
