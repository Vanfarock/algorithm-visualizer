import SortFunction from './sortFunction';
import Animation from './animation';
import { getAnimation, getFinalAnimation } from './util';

const merge = (firstHalf: number[], secondHalf: number[]): number[] => {
  let result: number[] = [];

  while (firstHalf.length > 0 && secondHalf.length > 0) {
    if (firstHalf[0] > secondHalf[0]) {
      result.push(secondHalf[0]);
      secondHalf.shift();
    } else {
      result.push(firstHalf[0]);
      firstHalf.shift();
    }
  }

  result = [...result, ...firstHalf, ...secondHalf];

  return result;
};

const mergeSort = (values: number[]): number[] => {
  let copy: number[] = [...values];

  if (values.length === 1) return values;

  const middle = Math.floor(values.length / 2);

  let firstHalf = copy.slice(0, middle);
  let secondHalf = copy.slice(middle + 1);

  console.log(firstHalf, secondHalf);

  firstHalf = mergeSort(firstHalf);
  secondHalf = mergeSort(secondHalf);

  copy = merge(firstHalf, secondHalf);

  return copy;
};

// const getMergeSortAnimations: SortFunction = (values) => {
//   const copy: number[] = [...(values.map((v) => v.value))];
//   const animations: Animation[] = [];

//   for (let i = 1; i < copy.length; i++) {
//     let j = i;

//     animations.push(getAnimation(copy, [j, j - 1]));

//     while (j > 0 && copy[j] < copy[j - 1]) {
//       const tmp = copy[j];
//       copy[j] = copy[j - 1];
//       copy[j - 1] = tmp;
//       j -= 1;

//       animations.push(getAnimation(copy, [j, j - 1]));
//     }
//   }
//   animations.push(getFinalAnimation(copy));

//   return animations;
// };

// export default getMergeSortAnimations;

export default mergeSort;
