import { Component } from '@angular/core';
import { AboutComponent } from '../about/about.component';

@Component({
  selector: 'app-home',
  imports: [AboutComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  parentMessage = "This is a message from parent"
  childResponse = "";

  handleNotify(message: string) {
    alert('Received from About child: ' + message);
  }

   receivedMessageHandler(message: string) {
    this.childResponse = message;
  }
}
