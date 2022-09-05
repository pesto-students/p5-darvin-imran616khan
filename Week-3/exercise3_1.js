const memoize = (fn) => {
  let cache = {};
  return (...args) => {
    let cacheKey = args
      .map((n) => n.toString() + "+")
      .join("")
      .slice(0, -1);
    if (cacheKey in cache) {
        console.log(`${cacheKey} = ${cache[cacheKey]}`);
      return cache[cacheKey];
    } else {
      let result = args.reduce((acc, curr) => fn(acc, curr), 0);
      console.log(`${cacheKey} = ${result}`);
      cache[cacheKey] = result;
      return result;
    }
  };
};

const add = (a, b) => a + b;

const memoizeAdd = memoize(add);

memoizeAdd(1, 2, 3);
memoizeAdd(4, 5);
memoizeAdd(1, 2, 3);
memoizeAdd(1, 2, 3);
memoizeAdd(4, 5);
memoizeAdd(4, 5);
memoizeAdd(4, 5);
memoizeAdd(4);