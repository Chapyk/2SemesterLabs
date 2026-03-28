function memoize(fn, maxSize = Infinity) {
    const cache = new Map();

    return function (...args) {
        const key = JSON.stringify(args);

        if (cache.has(key)) {
            const value = cache.get(key);

            cache.delete(key);
            cache.set(key, value);

            return value;
        }

        const result = fn(...args);

        if (cache.size >= maxSize) {
            const firstKey = cache.keys().next().value;
            cache.delete(firstKey);
        }

        cache.set(key, result);

        return result;
    };
}

export default memoize;