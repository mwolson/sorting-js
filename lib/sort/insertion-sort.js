function idxOfMin(inArray) {
  let min = inArray[0];
  let minIdx = 0;

  for (let i = 1; i < inArray.length; i++) {
    const el = inArray[i];
    if (el !== undefined && el < min) {
      min = el;
      minIdx = i;
    }
  }

  return minIdx;
}

export default function sort(inArray) {
  if (!inArray.length) return [];
  const result = [];
  const working = [...inArray];

  for (let i = 0; i < working.length; i++) {
    const idx = idxOfMin(working);
    result.push(working[idx]);
    working[idx] = undefined;
  }

  return result;
}
