// shell/src/app/store/my-feature/my-feature.actions.ts
import { createAction, props } from '@ngrx/store';

export const myAction = createAction(
  '[My Feature] My Action',
  props<{ payload: string }>()
);