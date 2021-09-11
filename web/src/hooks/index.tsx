import React from 'react';
import { DataProvider } from './DataContext';

const HooksProvider: React.FC = ({ children }) => (
  <DataProvider>{children}</DataProvider>
);

export default HooksProvider;
