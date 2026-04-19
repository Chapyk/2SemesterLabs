const { asyncMapCallback, asyncMapPromise } = require("./asyncMap");

// fake async
function asyncSquareCallback(num, cb) {
  setTimeout(() => cb(null, num * num), 300);
}

function asyncSquarePromise(num) {
  return new Promise(resolve => {
    setTimeout(() => resolve(num * num), 300);
  });
}

// 🔹 Callback
asyncMapCallback([1, 2, 3], asyncSquareCallback, (err, res) => {
  if (err) return console.error(err);
  console.log("Callback:", res);
});

// 🔹 Promise
asyncMapPromise([1, 2, 3], asyncSquarePromise)
  .then(res => console.log("Promise:", res))
  .catch(console.error);

// 🔹 async/await
(async () => {
  try {
    const res = await asyncMapPromise([1, 2, 3], asyncSquarePromise);
    console.log("Async/Await:", res);
  } catch (e) {
    console.error(e);
  }
})();

// 🔹 Abort
const controller = new AbortController();

asyncMapPromise([1, 2, 3, 4], asyncSquarePromise, {
  signal: controller.signal
})
  .then(res => console.log("Should not finish:", res))
  .catch(err => console.log("Aborted:", err.message));

setTimeout(() => controller.abort(), 500);