import { createContext } from 'react';

export type DataContextType = {
  /**
   * primary color of theme.
   */
  color?: string;
};

export const DataContext = createContext<DataContextType>({
  color: 'aqua'
});
