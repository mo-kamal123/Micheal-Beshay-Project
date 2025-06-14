/**
 * Updates or adds a key-value pair in the local storage.
 *
 * @param {string} key - The key to be added or updated in local storage.
 * @param {string} value - The value to be associated with the key.
 */
export const changeStorage = (key, value) => {
  localStorage.setItem(key, value);
};

/**
 * Retrieves a value from the local storage by its key.
 *
 * @param {string} key - The key of the item to retrieve from local storage.
 * @returns {string|null} - The value associated with the key, or null if the key does not exist.
 */
export const getFromStorage = key => {
  return localStorage.getItem(key);
};

/**
 * Removes a specific item from the local storage by its key.
 *
 * @param {string} key - The key of the item to remove from local storage.
 */
export const removeItem = key => {
  localStorage.removeItem(key);
};

/**
 * Removes all items from the local storage.
 * This function clears the entire local storage, removing all key-value pairs.
 */
export const removeStorage = () => {
  localStorage.clear();
};
