import { createActionGroup, props } from '@ngrx/store';

export const SoftwareListActions = createActionGroup({
  source: 'Dashboard Software List',
  events: {
    'List Filtered By': props<{ payload: string }>(),
  },
});
