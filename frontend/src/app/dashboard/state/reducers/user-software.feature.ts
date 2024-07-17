import { createFeature, createReducer } from '@ngrx/store';

export type SoftwareItem = {
  id: string;
  name: string;
};

export type UserSoftwareState = {
  list: SoftwareItem[];
};

const initialState: UserSoftwareState = {
  list: [
    { id: '1', name: 'Visual Studio Code' },
    { id: '2', name: 'Jetbrains Rider' },
  ],
};

export const UserSoftwareFeature = createFeature({
  name: 'User Software',
  reducer: createReducer(initialState),
});
