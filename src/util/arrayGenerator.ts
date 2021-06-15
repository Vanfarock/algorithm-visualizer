import generate from './random';

const generateRandomArray = (
  min: number,
  max: number,
  totalItems: number,
): number[] => {
  const items: number[] = [];
  for (let i = 0; i < totalItems; i += 1) {
    items.push(generate(min, max));
  }
  return items;
};

export default generateRandomArray;
