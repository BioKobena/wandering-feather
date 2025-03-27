export function throttle(fn: (...args: any[]) => any, wait: number) {
    let shouldWait = false;
  
    return function throttledFunction(this: any, ...args: any[]) {
      if (!shouldWait) {
        fn.apply(this, args);
        shouldWait = true;
        setTimeout(() => (shouldWait = false), wait);
      }
    };
  }