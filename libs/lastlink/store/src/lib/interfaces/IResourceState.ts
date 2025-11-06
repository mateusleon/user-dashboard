import { IApiResponseBase, TEntityMap, TLoadingStatus } from '@lastlink/core';

/**
 * The core, reusable shape for managing a collection of entities (a "resource").
 * This interface is generic and can be extended for specific resources (e.g., IUsersState).
 *
 * @template MODEL The entity type being managed (e.g., IUser, IProduct),
 * which must extend IApiResponseBase to guarantee it has an 'id'.
 */
export interface IResourceState<MODEL extends IApiResponseBase> {
  name: string;

  /**
   * A dictionary of entities, where the key is the entity's 'id'
   * and the value is the entity itself.
   * This allows for O(1) lookups.
   *
   * @example
   * {
   * 1: { id: 1, name: 'Leanne Graham', ... },
   * 2: { id: 2, name: 'Ervin Howell', ... }
   * }
   */
  entities: TEntityMap<MODEL>;

  /**
   * An array of entity IDs.
   * This maintains the order of the collection and is useful for
   * iterating over the entities in a predictable sequence.
   *
   * @example [1, 2, 3, 5, 8]
   */
  ids: (string | number)[];

  /**
   * The ID of the currently selected or "active" entity.
   * This is particularly useful for detail views (e.g., /users/details/:id).
   *
   * @example 2
   */
  selectedId: string | number | null;

  /**
   * The loading status of the *entire collection* (e.g., for the 'read' operation).
   * We can add more granular statuses (e.g., 'createStatus', 'updateStatus') if needed.
   */
  status: TLoadingStatus;

  /**
   * Stores any error object or message returned from an API call
   * if the 'status' is 'error'.
   *
   * @example { status: 404, message: 'Not Found' }
   */
  error: any | null;
}
