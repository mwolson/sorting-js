function minIdxOf(inArray, start = 0) {
  let min = inArray[start];
  let minIdx = start;
  for (let i = start + 1; i < inArray.length; i++) {
    const el = inArray[i];
    if (el < min) {
      min = el;
      minIdx = i;
    }
  }
  return minIdx;
}

export default function sort(inArray) {
  const working = [...inArray];
  for (let i = 0; i + 1 < working.length; i++) {
    const minIdx = minIdxOf(working, i);
    if (i !== minIdx) {
      const min = working[minIdx];
      working[minIdx] = working[i];
      working[i] = min;
    }
  }
  return working;
}
