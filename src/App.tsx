import React, { FunctionComponent } from 'react';
import insertionSort from './algorithms/sort/insertionSortAnimation';
import bubbleSort from './algorithms/sort/bubbleSortAnimation';
import mergeSort from './algorithms/sort/mergeSortAnimation';
import SortVisualizer from './components/sortVisualizer';
import generateRandomArray from './util/arrayGenerator';
import SortItem from './algorithms/sort/sortItem';
import ItemState from './algorithms/sort/itemState';

const App: FunctionComponent = () => {
  const MAX_HEIGHT = 1000;
  const TOTAL_ITEMS = 100;
  const DELAY = 1000;

  const randomValues = generateRandomArray(0, MAX_HEIGHT, TOTAL_ITEMS);
  // const randomValues = [];
  // for (let i = TOTAL_ITEMS; i > 0; i--) {
  //   randomValues.push(i);
  // }
  const sortItems: SortItem[] = randomValues.map((value) => ({
    value,
    state: ItemState.Inactive,
  }));

  return (
    <SortVisualizer
      items={sortItems}
      maxHeight={MAX_HEIGHT}
      delay={DELAY}
      sortMethod={mergeSort}
    />
  );
};

export default App;
