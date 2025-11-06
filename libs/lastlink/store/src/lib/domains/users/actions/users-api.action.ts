import { IUser } from '@lastlink/core';
import { createActionGroup, emptyProps, props } from '@ngrx/store';

export const UsersApiActions = createActionGroup({
  source: 'User Api',
  events: {
    // --- READ (Read All) ---
    // We use our string as the key
    'Read Start': emptyProps(),

    // The 'done' action carries the array of users
    'Read Done': props<{ users: IUser[] }>(),

    // The 'error' action carries the error object
    'Read Error': props<{ error: any }>(),

    // --- READ ID (Read One) ---
    // We use our string as the key
    'Read Id Start': props<{ id: number | string }>(),

    // The 'done' action carries the array of users
    'Read Id Done': props<{ user: IUser }>(),

    // The 'error' action carries the error object
    'Read Id Error': props<{ error: any }>(),

    // --- CREATE ---
    // The 'start' action carries the new user (without an ID)
    'Create Start': props<{ user: Omit<IUser, 'id'> }>(),

    // The 'done' action carries the user returned from the server (with an ID)
    'Create Done': props<{ user: IUser }>(),

    // The 'error' action
    'Create Error': props<{ error: any }>(),

    // --- UPDATE ---
    // The 'start' action carries the user
    'Update Start': props<{ user: IUser }>(),

    // The 'done' action carries the user returned from the server
    'Update Done': props<{ user: IUser }>(),

    // The 'error' action
    'Update Error': props<{ error: any }>(),

    // --- UPDATE PATCH ---
    // The 'start' action carries the Partial<user>
    'Update Patch Start': props<{ user: Partial<IUser> }>(),

    // The 'done' action carries the user returned from the server
    'Update Patch Done': props<{ user: IUser }>(),

    // The 'error' action
    'Update Patch Error': props<{ error: any }>(),

    // --- UPDATE PATCH ---
    // The 'start' action carries the Partial<user>
    'Delete Start': props<{ id: Pick<IUser, 'id'> }>(),

    // The 'done' action carries the user returned from the server
    'Delete Done': emptyProps(),

    // The 'error' action
    'Delete Error': props<{ error: any }>(),
  },
});
