import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { CounterState } from '../../store/state/counter.state';
import { increment, decrement, reset } from '../../store/actions/counter.actions';

@Component({
  selector: 'app-ngrx-presentation',
  templateUrl: './ngrx-presentation.component.html',
  styleUrls: ['./ngrx-presentation.component.scss']
})
export class NgrxPresentationComponent implements OnInit {

  public count: number;

  constructor(
    private store: Store<CounterState>
  ) {
  }

  ngOnInit() {

  }

  increment(): void {
    this.store.dispatch(increment());
  }

  decrement(): void {
    this.store.dispatch(decrement());
  }

  reset(): void {
    this.store.dispatch(reset());
  }


}
