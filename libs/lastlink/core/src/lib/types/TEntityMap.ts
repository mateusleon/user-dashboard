// @lastlink/store/types/TEntityMap.ts
/**
 * Defines the "dictionary" or "map" structure for storing entities.
 * It uses a Record where the key is the entity's ID (string or number)
 * and the value is the entity (MODEL) itself.
 *
 * @template MODEL The entity type being stored.
 */

export type TEntityMap<MODEL> = Record<string | number, MODEL>;
