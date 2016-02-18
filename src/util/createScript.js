/**
 * Creates the script element and provides a callback via onload
 *
 * @param  {[type]}   path [description]
 * @param  {Function} cb   [description]
 * @return {[type]}        [description]
 */
export default function createScript(path, cb) {
  const script = document.createElement('script')
  script.src = path
  script.type = 'text/javascript'
  script.onload = cb
  return script
}
