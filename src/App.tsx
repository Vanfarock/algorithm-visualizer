import React, { FunctionComponent } from 'react';
import SortVisualizer from './components/sortVisualizer';

const App: FunctionComponent = () => (
  <SortVisualizer items={[1000, 20, 30, 50]} maxHeight={1000} />
);

export default App;
