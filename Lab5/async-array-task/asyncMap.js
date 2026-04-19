function asyncMapCallback(array, asyncFn, finalCallback) {
  const result = [];
  let completed = 0;

  if (array.length === 0) return finalCallback(null, result);

  array.forEach((item, index) => {
    asyncFn(item, (err, value) => {
      if (err) return finalCallback(err);

      result[index] = value;
      completed++;

      if (completed === array.length) {
        finalCallback(null, result);
      }
    });
  });
}

function asyncMapPromise(array, asyncFn, { signal } = {}) {
  return new Promise((resolve, reject) => {
    const result = [];
    let completed = 0;

    if (signal?.aborted) {
      return reject(new Error("Aborted"));
    }

    array.forEach((item, index) => {
      Promise.resolve(asyncFn(item))
        .then(value => {
          if (signal?.aborted) return reject (new Error("Aborted"));

          result[index] = value;
          completed++;

          if (completed === array.length) {
            resolve(result);
          }
        })
        .catch(reject);
    });

    signal?.addEventListener("abort", () => {
      reject(new Error("Aborted"));
    });
  });
}

module.exports = {
  asyncMapCallback,
  asyncMapPromise
};