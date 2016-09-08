export default function uniq(inArray) {
  const seen = {};

  function contains(el) {
    const key = `_s_${el}`;
    const present = seen[key] !== undefined;
    if (!present) seen[key] = true;
    return present;
  }

  const result = [];
  inArray.forEach(el => !contains(el) && result.push(el));

  return result;
}
