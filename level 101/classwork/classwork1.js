function manualAbs(value) {
  const num = Number(value);
  if (Number.isNaN(num)) return NaN;
  if (num === 0) return 0;
  return num < 0 ? -num : num;
}

function manualAbsWithBigInt(value) {
  if (typeof value === 'bigint') {
    return value < 0n ? -value : value;
  }
  const num = Number(value);
  if (Number.isNaN(num)) return NaN;
  if (num === 0) return 0;
  return num < 0 ? -num : num;
}

function manualAbs_exactLikeMathAbs(value) {
  if (typeof value === 'bigint') {
    throw new TypeError('Cannot convert a BigInt value to a number');
  }
  const num = Number(value);
  if (Number.isNaN(num)) return NaN;
  if (num === 0) return 0;
  return num < 0 ? -num : num;
}

console.log(manualAbs(-5));
console.log(manualAbs("-3.2"));
console.log(manualAbs(null));
console.log(manualAbs(undefined));
console.log(manualAbs(-0));

console.log(manualAbsWithBigInt(-10n));
console.log(manualAbsWithBigInt(7n));

try {
  console.log(manualAbs_exactLikeMathAbs(1n));
} catch (e) {
  console.error(e.message);
}