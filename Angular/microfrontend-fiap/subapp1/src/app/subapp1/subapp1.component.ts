import { Component } from '@angular/core';
// import { EventBusService } from '../../../../shell/src/app/shared/event-bus.service';
import { AppState } from '../../../../shell/src/app/store/app.state';
import { myAction } from '../../../../shell/src/app/store/my-feature/my-feature.actions';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-subapp1',
  templateUrl: './subapp1.component.html',
  styleUrls: ['./subapp1.component.css']
})
export class Subapp1Component {
  constructor(
    // private eventbus: EventBusService,
    private store: Store<AppState>
  ) {}

  // ngOnInit() {
  //   this.eventbus.on().subscribe(event => {
  //     if (event.type === 'CUSTOM_EVENT') {
  //       console.log('Received event in Subapp1: ', event.payload);
  //     }
  //   });
  // }

  dispatchAction() {
    this.store.dispatch(myAction({ payload: 'Data from Subapp1' }));
  }

}
