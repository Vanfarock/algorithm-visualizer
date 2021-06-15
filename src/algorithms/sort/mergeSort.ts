import SortFunction from './sortFunction';
import Animation from './animation';
import { getAnimation, getFinalAnimation } from './util';

const animations: Animation[] = [];

const getMiddle = (l: number, r: number): number => Math.floor((l + r) / 2);

const merge = (values: number[], l: number, r: number): number[] => {
  const result = [...values];

  const m = getMiddle(l, r);

  const firstHalf = result.slice(l, m);
  const secondHalf = result.slice(m, r);

  let i = 0;
  let j = 0;
  let k = l;

  while (i < firstHalf.length && j < secondHalf.length) {
    if (firstHalf[i] <= secondHalf[j]) {
      result[k] = firstHalf[i];
      i += 1;
    } else {
      result[k] = secondHalf[j];
      j += 1;
    }
    k += 1;
  }

  for (i; i < firstHalf.length; i++, k++) {
    result[k] = firstHalf[i];
  }

  for (j; j < secondHalf.length; j++, k++) {
    result[k] = secondHalf[j];
  }

  return result;
};

const mergeSort = (values: number[], l: number, r: number): number[] => {
  let copy = [...values];

  if (r - l <= 2) return merge(copy, l, r);

  const m = getMiddle(l, r);

  copy = mergeSort(copy, l, m);
  copy = mergeSort(copy, m, r);
  copy = merge(copy, l, r);

  return copy;
};

// const getMergeSortAnimations: SortFunction = (values) => {
//   mergeSort(values, 0, values.length);

//   return animations;
// };

// export default getMergeSortAnimations;

export default mergeSort;
