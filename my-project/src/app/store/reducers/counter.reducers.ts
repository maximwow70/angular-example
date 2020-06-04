import { createReducer, on } from '@ngrx/store';
import { increment, decrement, reset } from '../actions/counter.actions';
import { initialCounterState, CounterState } from '../state/counter.state';

// tslint:disable-next-line: variable-name
const _counterReducer = createReducer(
    initialCounterState,
    on(increment, (state: CounterState) => {
        return {
            value: state.value + 1
        };
    }),
    on(decrement, (state: CounterState) => {
        return {
            value: state.value - 1
        };
    }),
    on(reset, (state: CounterState) => {
        return {
            value: 0
        };
    }),
);

export function counterReducer(state, action) {
    return _counterReducer(state, action);
}
