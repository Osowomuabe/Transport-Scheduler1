import React from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@wasp/queries';
import { useAction } from '@wasp/actions';
import getVehicles from '@wasp/queries/getVehicles';

export function Vehicle() {
  const { vehicleId } = useParams();
  const { data: vehicle, isLoading, error } = useQuery(getVehicles, { vehicleId });
  const updateVehicleFn = useAction(updateVehicle);

  if (isLoading) return 'Loading...';
  if (error) return 'Error: ' + error;

  const handleUpdateVehicle = (updatedVehicle) => {
    updateVehicleFn({ vehicleId, updatedVehicle });
  };

  return (
    <div className=''>
      <h2 className='text-xl font-bold mb-2'>Vehicle Details</h2>
      <div className=''>
        <p>Name: {vehicle.name}</p>
        <p>Status: {vehicle.status}</p>
        <p>Location: {vehicle.location}</p>
        <button
          onClick={() => handleUpdateVehicle({ status: 'In Use' })}
          className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
        >
          Set In Use
        </button>
        <button
          onClick={() => handleUpdateVehicle({ status: 'Available' })}
          className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded'
        >
          Set Available
        </button>
      </div>
    </div>
  );
}