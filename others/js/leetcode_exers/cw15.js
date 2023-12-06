/*
Given a function fn, an array of arguments args, and a timeout t in milliseconds, return a cancel function cancelFn.

After a delay of t, fn should be called with args passed as parameters unless cancelFn 
was invoked before the delay of t milliseconds elapses, specifically at cancelT ms. 
In that case, fn should never be called.
*/

function cancellable(fn, args, t) {
  const cancelFn = function () {
    clearTimeout(timer);
  };
  const timer = setTimeout(()=>{
    fn(...args)
  }, t);
  return cancelFn;
}


