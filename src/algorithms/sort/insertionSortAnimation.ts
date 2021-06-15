import SortFunction from './sortFunction';
import Animation from './animation';
import { getAnimation, getFinalAnimation } from './util';

const getInsertionSortAnimations: SortFunction = (values) => {
  const copy: number[] = [...(values.map((v) => v.value))];
  const animations: Animation[] = [];

  for (let i = 1; i < copy.length; i++) {
    let j = i;

    animations.push(getAnimation(copy, [j, j - 1]));

    while (j > 0 && copy[j] < copy[j - 1]) {
      const tmp = copy[j];
      copy[j] = copy[j - 1];
      copy[j - 1] = tmp;
      j -= 1;

      animations.push(getAnimation(copy, [j, j - 1]));
    }
  }
  animations.push(getFinalAnimation(copy));

  return animations;
};

export default getInsertionSortAnimations;
