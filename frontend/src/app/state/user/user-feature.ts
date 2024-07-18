import { createFeature, createReducer, createSelector, on } from '@ngrx/store';
import { Prefrences, User } from '../models';
import { UserActions } from './actions';

const initialState: User = {
  sub: '',
  prefs: {
    countVariable: 1,
  } as Prefrences
};

export const UserFeature = createFeature({
  name: 'User Feature',
  reducer: createReducer(
    initialState,
    on(UserActions.userLoaded, (_, action) => action.payload),
    on(UserActions.updatePrefs, (state, action) => ({ ...state, Prefs: action.payload })),
  ),
  extraSelectors: ({ selectSub }) => ({
    selectUserLoaded: createSelector(selectSub, (sub) => sub !== ''),
  }),

});


