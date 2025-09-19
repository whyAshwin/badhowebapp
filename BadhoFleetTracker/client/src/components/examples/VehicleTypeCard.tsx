import { useState } from 'react';
import VehicleTypeCard from '../VehicleTypeCard';

const sampleVehicles = [
  {
    id: 'tata-ace',
    name: 'Tata Ace',
    capacity: 'Up to 1.5 tonnes',
    description: 'Compact pickup truck'
  },
  {
    id: 'tata-407',
    name: 'Tata 407',
    capacity: 'Up to 3 tonnes', 
    description: 'Light commercial vehicle'
  },
  {
    id: 'piaggio-ape',
    name: 'Piaggio Ape',
    capacity: 'Up to 600 kg',
    description: 'Three-wheeler commercial'
  }
];

export default function VehicleTypeCardExample() {
  const [selectedVehicle, setSelectedVehicle] = useState<string>('');

  const handleSelect = (vehicleId: string) => {
    setSelectedVehicle(vehicleId);
    console.log('Selected vehicle:', vehicleId);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {sampleVehicles.map(vehicle => (
        <VehicleTypeCard
          key={vehicle.id}
          vehicle={vehicle}
          isSelected={selectedVehicle === vehicle.id}
          onSelect={handleSelect}
        />
      ))}
    </div>
  );
}