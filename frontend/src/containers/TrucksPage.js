import React, { useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { useTruckContext } from '../context';

const TrucksPage = () => {
  const { trucks, getTrucks, apiTruckErr } = useTruckContext();

  useEffect(() => {
    document.title = 'Foodtrucks | Trucks';
    getTrucks();
  }, []);

  return (
    <div className="w-11/12 mx-auto">
      <h2>Food Trucks</h2>

      {!trucks ? (
        <h3 className="text-2xl text-center">Nothing yet...</h3>
      ) : (
        trucks.map((data) => {
          let profileImage = data.images.filter(
            (image) => image.is_profile_image === true
          );
          profileImage =
            'https://i.etsystatic.com/13221305/r/il/f228d5/1940501636/il_794xN.1940501636_37rq.jpg';

          return (
            <div key={uuidv4()} className="my-6">
              <div className="w-11/12 mx-auto">
                <img
                  src={profileImage}
                  alt={`${data.name} profile`}
                  className="w-full"
                />
              </div>

              <div className="mt-4">
                <h3 className="text-2xl text-center">{data.name}</h3>
              </div>

              <div className="mt-4 text-center">
                <a
                  href={`/trucks/${data.slug}`}
                  className="border border-solid border-blue-900 text-xl w-full py-2 px-4 rounded-lg shadow-lg text-center hover:border-0 hover:bg-blue-900 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-transparent"
                >
                  View
                </a>
              </div>
            </div>
          );
        })
      )}

      {!apiTruckErr ? null : apiTruckErr}
    </div>
  );
};

export default TrucksPage;
