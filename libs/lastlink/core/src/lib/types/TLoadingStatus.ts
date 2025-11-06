// @lastlink/store/types/TLoadingStatus.ts
/**
 * Defines the possible states for an asynchronous operation (e.g., an API call).
 * This provides more granular control than a simple boolean.
 *
 * - 'idle': The operation has not started.
 * - 'pending': The operation is currently in progress.
 * - 'success': The operation completed successfully.
 * - 'error': The operation failed.
 */


export type TLoadingStatus = 'idle' | 'pending' | 'success' | 'error';
