import { createFeature, createReducer, createSelector } from '@ngrx/store';

export type SoftwareItem = {
  id: string;
  name: string;
};

export type UserSoftwareState = {
  list: SoftwareItem[];
  titleFilter: string | null;
};

const initialState: UserSoftwareState = {
  list: [
    { id: '1', name: 'Visual Studio Code' },
    { id: '2', name: 'Jetbrains Rider' },
  ],
  titleFilter: null,
};

export const UserSoftwareFeature = createFeature({
  name: 'User Software',
  reducer: createReducer(initialState),
  extraSelectors: ({ selectList, selectTitleFilter }) => ({
    selectFilteredList: createSelector(
      selectList,
      selectTitleFilter,
      (list, filter) => {
        if (filter === null) {
          return list;
        }
        return list.filter((i) => i.name.includes(filter));
      }
    ),
  }),
});
