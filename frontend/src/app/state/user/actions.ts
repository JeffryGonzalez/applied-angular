import { createAction, createActionGroup, emptyProps, props } from '@ngrx/store';
import { Prefrences, User } from '../models';

export const UserActions = createActionGroup({
  source: 'User Actions',
  events: {
    'Get The User': emptyProps(),
    'User Loaded': props<{ payload: User }>(),
    'Update Prefs': props<{ payload: Prefrences }>(),
  },
});
