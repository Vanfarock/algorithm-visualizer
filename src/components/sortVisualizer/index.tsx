import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { ItemsContainer, Bar } from './styles';
import SortInterface from '../../algorithms/sort/sortInterface';
import SortCallback from '../../algorithms/sort/sortCallback';

type SortProps = {
  items: Array<number>,
  maxHeight: number,
  sortMethod: SortInterface
};

const SortVisualizer: React.FC<SortProps> = (props: SortProps) => {
  const { items, maxHeight, sortMethod } = props;

  const [sortedItems, setSortedItems] = useState(items);

  const onSort: SortCallback = (
    firstIndex,
    _firstValue,
    secondIndex,
    _secondValue,
  ): void => {
    const newSortedItems = [...sortedItems];
    const tmp = newSortedItems[firstIndex];
    newSortedItems[firstIndex] = newSortedItems[secondIndex];
    newSortedItems[secondIndex] = tmp;

    setSortedItems(newSortedItems);
    console.log(newSortedItems);
  };

  useEffect(() => {
    sortMethod(items, onSort);
  }, []);

  // useEffect(() => {
  //   console.log(sortedItems);
  // }, [sortedItems]);

  return (
    <ItemsContainer>
      {sortedItems.map((height) => (
        <Bar
          key={uuidv4()}
          height={`${(height / maxHeight) * 100}%`}
        />
      ))}
    </ItemsContainer>
  );
};

export default SortVisualizer;
