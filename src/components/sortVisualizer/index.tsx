import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { ItemsContainer, Bar } from './styles';
import SortFunction from '../../algorithms/sort/sortFunction';
import Animation from '../../algorithms/sort/animation';
import SortItem from '../../algorithms/sort/sortItem';

type SortProps = {
  items: Array<SortItem>,
  maxHeight: number,
  delay: number,
  sortMethod: SortFunction
};

const SortVisualizer: React.FC<SortProps> = (props: SortProps) => {
  const {
    items, maxHeight, delay, sortMethod,
  } = props;

  const [sortedItems, setSortedItems] = useState(items);

  const animateArray = (animations: Animation[]): void => {
    for (let i = 0; i < animations.length; i++) {
      setTimeout(() => {
        const { currentState } = animations[i];
        setSortedItems(currentState);
      }, delay * i);
    }
  };

  useEffect(() => {
    const animations = sortMethod(items);
    animateArray(animations);
  }, []);

  return (
    <ItemsContainer>
      {sortedItems.map(({ value, state }) => (
        <Bar
          key={uuidv4()}
          state={state}
          height={`${(value / maxHeight) * 100}%`}
        />
      ))}
    </ItemsContainer>
  );
};

export default SortVisualizer;
