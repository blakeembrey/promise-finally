export default function promiseFinally<T>(
  value: T | Promise<T>,
  cb: () => void | Promise<void>
): Promise<T> {
  return Promise.resolve(value).then(
    value => Promise.resolve(cb()).then(() => value),
    reason => Promise.resolve(cb()).then(() => Promise.reject(reason))
  );
}
