import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { User } from '../models';

export const UserActions = createActionGroup({
  source: 'User Actions',
  events: {
    'Get The User': emptyProps(),
    'User Loaded': props<{ payload: User }>(),
  },
});
