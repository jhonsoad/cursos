// shell/src/app/store/my-feature/my-feature.reducer.ts
import { createReducer, on } from '@ngrx/store';
import { myAction } from './my-feature.actions';

export interface MyFeatureState {
  data: string;
}

export const initialState: MyFeatureState = {
  data: '',
};

export const MyFeatureReducer = createReducer(
  initialState,
  on(myAction, (state, { payload }) => ({ ...state, data: payload }))
);