import Animation from './animation';
import ItemState from './itemState';
import SortItem from './sortItem';

export const getCurrentState = (
  values: number[],
  comparing: [number, number],
): SortItem[] => {
  const currentState = values.map((value, index) => ({
    value,
    state: comparing.includes(index) ? ItemState.Active : ItemState.Inactive,
  } as SortItem));

  return currentState;
};

export const getFinalState = (values: number[]): SortItem[] => {
  const currentState = values.map((value) => ({
    value,
    state: ItemState.Sorted,
  } as SortItem));

  return currentState;
};

export const getAnimation = (
  values: number[],
  comparing: [number, number],
): Animation => {
  const animation: Animation = {
    currentState: getCurrentState(values, comparing),
  };
  return animation;
};

export const getFinalAnimation = (values: number[]): Animation => {
  const finalAnimation: Animation = {
    currentState: getFinalState(values),
  };
  return finalAnimation;
};
