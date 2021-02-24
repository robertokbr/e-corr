import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from 'react';
import api from '../services/api';

interface IDataContext {
  points: Point[];
  mapTheme: string;
  setMapTheme: Dispatch<SetStateAction<string>>;
  setPoints: Dispatch<SetStateAction<Point[]>>;
}

const DataContext = createContext({} as IDataContext);

const DataProvider: React.FC = ({ children }) => {
  const [mapTheme, setMapTheme] = useState('dark-v10');

  const [points, setPoints] = useState<Point[]>([]);

  useEffect(() => {
    api.get<Point[]>('/points').then(response => {
      setPoints(response.data);
    });
  }, []);

  return (
    <DataContext.Provider
      value={{
        mapTheme,
        setMapTheme,
        points,
        setPoints,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

function useData(): IDataContext {
  const context = useContext(DataContext);

  if (!context) {
    throw new Error('useData must be used within DataProvider');
  }

  return context;
}

export { DataProvider, useData };
