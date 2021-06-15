import React, { FunctionComponent } from 'react';
import insertionSort from './algorithms/sort/insertionSortAnimation';
import bubbleSort from './algorithms/sort/bubbleSortAnimation';
import SortVisualizer from './components/sortVisualizer';
import generateRandomArray from './util/arrayGenerator';
import SortItem from './algorithms/sort/sortItem';
import ItemState from './algorithms/sort/itemState';

const App: FunctionComponent = () => {
  const MAX_HEIGHT = 100;
  const TOTAL_ITEMS = 15;
  const DELAY = 1000;

  // const randomValues = generateRandomArray(0, MAX_HEIGHT, TOTAL_ITEMS);
  const randomValues = [9, 8, 7, 6, 5, 4, 3, 2, 1];
  const sortItems: SortItem[] = randomValues.map((value) => ({
    value,
    state: ItemState.Inactive,
  }));

  return (
    <SortVisualizer
      items={sortItems}
      maxHeight={MAX_HEIGHT}
      delay={DELAY}
      sortMethod={insertionSort}
    />
  );
};

export default App;
