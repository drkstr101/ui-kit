import React, { ReactNode } from 'react';
import { DataContext } from './data-context';

export type DataProviderProps = {
  /**
   * primary color of theme.
   */
  color?: string,

  /**
   * children to be rendered within this theme.
   */
  children: ReactNode
};

export function DataProvider({ color, children }: DataProviderProps) {
  return <DataContext.Provider value={{ color }}>{children}</DataContext.Provider>
}
