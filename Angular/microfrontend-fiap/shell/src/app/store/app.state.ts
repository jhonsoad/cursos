// shell/src/app/store/app.state.ts
import { ActionReducerMap } from '@ngrx/store';
import { MyFeatureReducer, MyFeatureState } from '../store/my-feature/my-feature.reducer';

export interface AppState {
  myFeature: MyFeatureState;
}

export const reducers: ActionReducerMap<AppState> = {
  myFeature: MyFeatureReducer,
};