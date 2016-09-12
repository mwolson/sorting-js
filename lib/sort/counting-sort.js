function isNumericArray(inArray) {
  for (let i = 0; i < inArray.length; i++) {
    if (typeof inArray[i] !== 'number') return false;
  }
  return true;
}

function minOf(inArray) {
  let min = inArray[0];
  for (let i = 1; i < inArray.length; i++) {
    const el = inArray[i];
    if (el < min) {
      min = el;
    }
  }
  return min;
}

function summarize(offset, inArray) {
  const dict = [];
  inArray.forEach(el => {
    const key = el - offset;
    if (dict[key] === undefined) {
      dict[key] = 1;
    } else {
      dict[key]++;
    }
  });
  return dict;
}

function assemble(offset, summarized) {
  const sorted = [];
  for (let idx = 0; idx < summarized.length; idx++) {
    let times = summarized[idx] === undefined ? 0 : summarized[idx];
    for (; times > 0; times--) {
      sorted.push(idx + offset);
    }
  }
  return sorted;
}

export default function sort(inArray) {
  if (!isNumericArray(inArray)) throw new Error('input is not numeric');
  const offset = minOf(inArray);
  const summarized = summarize(offset, inArray);
  return assemble(offset, summarized);
}
