function sort2(inArray) {
  if (!inArray.length) return [];
  if (inArray.length === 1) return inArray;
  if (inArray.length === 2) {
    if (inArray[0] < inArray[1]) return inArray;
    return [inArray[1], inArray[0]];
  }
  throw new Error(`invalid input ${JSON.stringify(inArray)}`);
}

function split(inArray) {
  const lower1 = 0;
  const count1 = Math.floor(inArray.length / 2);
  const lower2 = count1;
  return [inArray.slice(lower1, count1), inArray.slice(lower2)];
}

function merge(inArray1, inArray2) {
  const result = [];
  const len1 = inArray1.length;
  const len2 = inArray2.length;
  let idx1 = 0;
  let idx2 = 0;

  while (idx1 < len1 || idx2 < len2) {
    if (idx1 >= len1) {
      result.push(inArray2[idx2++]);
    } else if (idx2 >= len2) {
      result.push(inArray1[idx1++]);
    } else if (inArray1[idx1] < inArray2[idx2]) {
      result.push(inArray1[idx1++]);
    } else {
      result.push(inArray2[idx2++]);
    }
  }

  return result;
}

export default function sort(inArray) {
  if (inArray.length < 3) return sort2(inArray);
  const [arr1, arr2] = split(inArray).map(sort);
  return merge(arr1, arr2);
}
