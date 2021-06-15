import SortFunction from './sortFunction';
import Animation from './animation';
import { getFinalAnimation, getAnimation } from './util';

const getBubbleSortAnimation: SortFunction = (values): Animation[] => {
  const copy: number[] = [...(values.map((v) => v.value))];
  const animations: Animation[] = [];

  for (let i = copy.length - 1; i > 0; i--) {
    let swapped = false;
    for (let j = 0; j < i; j++) {
      animations.push(getAnimation(copy, [j, j + 1]));

      if (copy[j] > copy[j + 1]) {
        const tmp = copy[j + 1];
        copy[j + 1] = copy[j];
        copy[j] = tmp;

        animations.push(getAnimation(copy, [j, j + 1]));

        swapped = true;
      }
    }
    if (!swapped) {
      break;
    }
  }

  animations.push(getFinalAnimation(copy));

  return animations;
};

export default getBubbleSortAnimation;
