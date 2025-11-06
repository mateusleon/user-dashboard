export function isFalsey(input: unknown) {
  return (
    input === 0 || input === false || input === null || input === undefined
  );
}
