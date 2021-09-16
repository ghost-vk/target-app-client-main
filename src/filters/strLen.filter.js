export default function strLenFilter(str, len) {
  if (typeof str !== 'string' || !Number(len)) {
    return false
  }
  let needLength = Number(len)
  const length = str.length
  return length > needLength ? str.splice(needLength, length - 1, str) : str
}