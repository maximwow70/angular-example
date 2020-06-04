import { CounterState } from '../state/counter.state';
import { createSelector, createFeatureSelector } from '@ngrx/store';

export const selectCounter = createFeatureSelector<{ counter: CounterState }, CounterState>('counter');

export const selectCounterValue = createSelector(
    selectCounter,
    (state: CounterState) => state.value
);
