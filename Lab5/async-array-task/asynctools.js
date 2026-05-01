function mapWithCallback(arr, handler, done) {
    const output = [];
    let finished = 0;
    let hasError = false;

    if (arr.length === 0) {
        return done(null, output);
    }

    arr.forEach((element, position) => {
        handler(element, (error, result) => {
            if (hasError) return;

            if (error) {
                hasError = true;
                return done(error);
            }

            output[position] = result;
            finished++;

            if (finished === arr.length) {
                done(null, output);
            }
        });
    });
}

function mapWithPromise(arr, handler, options = {}) {
    const signal = options.signal;

    return new Promise((resolve, reject) => {
        const output = [];
        let finished = 0;

        if (signal && signal.aborted) {
            return reject(new Error("Aborted"));
        }

        if (arr.length === 0) {
            return resolve(output);
        }

        arr.forEach((element, position) => {
            Promise.resolve(handler(element))
                .then(result => {
                    if (signal && signal.aborted) {
                        return reject(new Error("Aborted"));
                    }

                    output[position] = result;
                    finished++;

                    if (finished === arr.length) {
                        resolve(output);
                    }
                })
                .catch(error => reject(error));
        });

        if (signal) {
            signal.addEventListener("abort", () => {
                reject(new Error("Aborted"));
            });
        }
    });
}

module.exports = {
    mapWithCallback,
    mapWithPromise
};