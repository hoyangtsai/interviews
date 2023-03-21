function compose(...funcs) {
  return (...args) => funcs.reduceRight((args, fn) => [fn.apply(this, args)], args)[0]
}
