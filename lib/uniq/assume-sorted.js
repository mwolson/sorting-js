export default function uniq(inArray) {
  if (!inArray.length) return [];
  let prev = inArray[0];
  const result = [prev];

  for (let i = 1; i < inArray.length; i++) {
    const next = inArray[i];
    if (prev !== next) result.push(next);
    prev = next;
  }

  return result;
}
