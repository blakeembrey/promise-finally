import test = require('blue-tape')
import Promise = require('native-or-bluebird')
import promiseFinally from './promise-finally'

test('promise-finally', t => {
  t.test('run on resolve', t => {
    t.plan(2)

    function cb () {
      t.equal(arguments.length, 0, 'should not have any arguments')
    }

    return promiseFinally(Promise.resolve('hello'), cb)
      .then(value => t.equal(value, 'hello'))
  })

  t.test('run on reject', t => {
    t.plan(2)

    function cb () {
      t.equal(arguments.length, 0, 'should not have any arguments')
    }

    return promiseFinally(Promise.reject('hello'), cb)
      .then(null, reason => t.equal(reason, 'hello'))
  })
})
