import SortInterface from './sortInterface';

const insertionSort: SortInterface = (values, onSort) => {
  const sortedValues: number[] = [...values];

  for (let i = 1; i < sortedValues.length; i++) {
    let j = i;

    while (j > 0 && sortedValues[j] < sortedValues[j - 1]) {
      const tmp = sortedValues[j];
      sortedValues[j] = sortedValues[j - 1];
      sortedValues[j - 1] = tmp;
      j -= 1;

      onSort(j - 1, sortedValues[j - 1], j, sortedValues[j]);
    }
  }

  return sortedValues;
};

export default insertionSort;
