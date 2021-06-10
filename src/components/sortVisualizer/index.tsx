import React, { useState } from 'react';

type SortProps = {
  items: Array<number>,
  maxHeight: number
};

const SortVisualizer: React.FC<SortProps> = ({ items, maxHeight }) => {
  // eslint-disable-next-line no-unused-vars
  const [sortedItems, setSortedItems] = useState(items);

  return (
    <div className="flex flex-col flex-1">
      <h1 className="bg-indigo-900">Teste</h1>
      {sortedItems.map((height) => (
        <div
          key={`teste_${height / maxHeight}`}
          className=" bg-indigo-900 w-full h-full"
        />
      ))}
    </div>
  );
};

export default SortVisualizer;
