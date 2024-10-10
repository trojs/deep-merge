/**
 * Deeply merges multiple objects into one.
 * @template {object} [T=object]
 * @param {...any} objects - Objects to merge
 * @returns {T} New object with merged key/values
 */
export const deepMerge = (...objects) => {
    const isObject = (obj) => obj?.constructor === Object;

    return objects.reduce((accumulator, currentValue) => {
        Object.keys(currentValue).forEach((key) => {
            const pVal = accumulator[key];
            const oVal = currentValue[key];

            if (Array.isArray(pVal) && Array.isArray(oVal)) {
                accumulator[key] = pVal.concat(...oVal);
            } else if (isObject(pVal) && isObject(oVal)) {
                accumulator[key] = deepMerge(pVal, oVal);
            } else {
                accumulator[key] = oVal;
            }
        });

        return accumulator;
    }, {});
};
