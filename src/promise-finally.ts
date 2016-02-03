import Promise = require('any-promise')

export default function promiseFinally (value: any, cb: Function) {
  return Promise.resolve(value)
    .then(
      value => Promise.resolve(cb()).then(() => value),
      reason => Promise.resolve(cb()).then(() => Promise.reject(reason))
    )
}
