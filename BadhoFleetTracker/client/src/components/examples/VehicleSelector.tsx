import { useState } from 'react';
import VehicleSelector from '../VehicleSelector';
import { Button } from '@/components/ui/button';

export default function VehicleSelectorExample() {
  const [isOpen, setIsOpen] = useState(false);
  
  const handleAddVehicle = (vehicle: any) => {
    console.log('Vehicle added:', vehicle);
  };

  return (
    <div>
      <Button onClick={() => setIsOpen(true)} data-testid="button-open-selector">
        Open Vehicle Selector
      </Button>
      
      <VehicleSelector
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        onAddVehicle={handleAddVehicle}
        remainingFreeSlots={3}
      />
    </div>
  );
}