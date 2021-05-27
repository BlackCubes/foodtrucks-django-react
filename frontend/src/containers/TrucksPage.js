import React, { useEffect } from 'react';

import { useTruckContext } from '../context';

const TrucksPage = () => {
  const { trucks, getTrucks, apiTruckErr } = useTruckContext();

  useEffect(() => {
    document.title = 'Foodtrucks | Trucks';
    getTrucks();
  }, []);

  return (
    <div>
      {!trucks ? (
        <h2>Nothing yet...</h2>
      ) : (
        <pre>{JSON.stringify(trucks, null, 2)}</pre>
      )}

      {!apiTruckErr ? null : apiTruckErr}
    </div>
  );
};

export default TrucksPage;
