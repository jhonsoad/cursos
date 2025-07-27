import { Component } from '@angular/core';
import { EventBusService } from './shared/event-bus.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'shell';

  constructor(private eventBusService: EventBusService) {}

  triggerEvent() {
    this.eventBusService.emit({ type: 'CUSTOM_EVENT', payload: 'Hello from Shell!' });
  }

// shell/src/app/shell.component.ts
// import { Component, ViewChild, ElementRef } from '@angular/core';

// @Component({ mensagens entre iframes
//   selector: 'app-shell',
//   template: '<iframe #subapp1 src="http://localhost:4201"></iframe>',
//   styleUrls: ['./shell.component.css']
// })

// export class ShellComponent {
//   @ViewChild('subapp1') subapp1: ElementRef;

//   sendMessage() {
//     this.subapp1.nativeElement.contentWindow.postMessage('Hello from Shell', '*');
//   }
// }
}
