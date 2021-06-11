import React, { FunctionComponent } from 'react';
import insertionSort from './algorithms/sort/insertionSort';
import SortVisualizer from './components/sortVisualizer';

const App: FunctionComponent = () => {
  const maxHeight = 100;

  // const items: number[] = [];
  // for (let i = 0; i < 10; i += 1) {
  //   items.push(Math.random() * maxHeight);
  // }

  const items: number[] = [7, 1, 3, 2, 9, 5, 1];

  return (
    <SortVisualizer
      items={items}
      maxHeight={maxHeight}
      sortMethod={insertionSort}
    />
  );
};

export default App;
