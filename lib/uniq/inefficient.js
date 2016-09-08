function contains(arr, el) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === el) return true;
  }
  return false;
}

export default function uniq(inArray) {
  const result = [];
  inArray.forEach(el => !contains(result, el) && result.push(el));
  return result;
}
