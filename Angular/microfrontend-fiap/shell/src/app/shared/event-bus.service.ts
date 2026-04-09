import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventBusService {
  private eventSubject = new Subject<any>();

  emit(event: any) {
    this.eventSubject.next(event)
  }

  on() {
    return this.eventSubject.asObservable();
  }

}
