import { IUser, TLoadingStatus } from '@lastlink/core';
import { createReducer, on } from '@ngrx/store';
import { IResourceState } from '../../../interfaces';
import { UsersApiActions } from '../actions';

export const initialState: IResourceState<IUser> = {
  name: 'Users State',
  entities: {},
  ids: [],
  selectedId: null,
  status: 'idle' as TLoadingStatus,
  error: null,
};

export const usersApiReducer = createReducer(
  initialState,

  on(UsersApiActions.readStart, (state) => ({
    ...state,
    status: 'pending',
    error: null,
  })),

  on(UsersApiActions.readDone, (state, action) => {
    const entities = action.users.reduce((acc, user) => {
      return {
        ...acc,
        [user.id]: user,
      };
    }, {});
    const ids: number[] = Object.values<IUser>(entities).map(
      (entity) => entity.id
    );

    return {
      ...state,
      status: 'success',
      entities: entities,
      ids: ids,
      error: null,
    };
  }),

  on(UsersApiActions.readError, (state, action) => ({
    ...state,
    status: 'error',
    error: action,
  })),

  on(UsersApiActions.readIdStart, (state, action) => ({
    ...state,
    status: 'pending',
    selectedId: action.id,
    error: null,
  })),

  on(UsersApiActions.readIdDone, (state, action) => {
    return {
      ...state,
      status: 'success',
      entities: {
        ...state.entities,
        [action.user.id]: action.user,
      },
      ids: state.ids.includes(action.user.id)
        ? state.ids
        : [...state.ids, action.user.id],
      error: null,
    };
  }),

  on(UsersApiActions.readIdError, (state, action) => ({
    ...state,
    status: 'error',
    error: action.error,
  }))
);
