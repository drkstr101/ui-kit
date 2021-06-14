import React, { useContext } from 'react';
import { DataProvider } from './data-context-provider';
import { DataContext } from './data-context';

export function MockComponent() {
  const theme = useContext(DataContext);

  return <div style={{ color: theme.color }}>this should be {theme.color}</div>;
}

export const BasicThemeUsage = () => {
  return (
    <DataProvider color="blue">
      <MockComponent />
    </DataProvider>
  );
};
