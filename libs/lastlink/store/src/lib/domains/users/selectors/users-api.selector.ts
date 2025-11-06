import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IUser } from '@lastlink/core'; // Adjust path
import { IResourceState } from '../../../interfaces';

// 1. Create a "feature selector" that gets the 'users' slice of the state.
// The string 'users' MUST match the name you used in StoreModule.forFeature('users', ...).
export const selectUsersFeatureState =
  createFeatureSelector<IResourceState<IUser>>('users');

// 2. Create a selector for the loading status
export const selectUsersStatus = createSelector(
  selectUsersFeatureState,
  (state: IResourceState<IUser>) => state.status
);

// 3. Create a selector for the error message
export const selectUsersError = createSelector(
  selectUsersFeatureState,
  (state: IResourceState<IUser>) => state.error
);

// 4. Create a selector for the entities map
export const selectUserEntities = createSelector(
  selectUsersFeatureState,
  (state: IResourceState<IUser>) => state.entities
);

// 5. Create a selector that returns the final array of users.
// This is the one your component will probably use most.
// It cleverly combines the 'ids' and 'entities' to build the array.
export const selectAllUsers = createSelector(
  selectUsersFeatureState,
  (state: IResourceState<IUser>): IUser[] => {
    // Map over the ids array and use each id to look up
    // the full user object from the entities map.
    return state.ids.map(id => state.entities[id]).filter(Boolean);
  }
);

// 6. Create a selector for the currently selected user (for the details page)
export const selectSelectedUser = createSelector(
  selectUserEntities, // Re-uses our entities selector
  selectUsersFeatureState,
  (entities, state) => state.selectedId ? entities[state.selectedId] : null
);