import { createContext, useContext } from 'react';

const TruckContext = createContext([]);

export const useTruckContext = () => useContext(TruckContext);

export default TruckContext;
