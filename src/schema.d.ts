/**
 * @template {object} [T=object]
 * @param {...any} objects - Objects to merge
 * @returns {T} New object with merged key/values
 */
export function deepMerge<T extends object = object>(
    ...objects: any[]
): T;
