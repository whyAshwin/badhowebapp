import VehicleSlotsDashboard from '../VehicleSlotsDashboard';

export default function VehicleSlotsDashboardExample() {
  const handleAddVehicle = () => {
    console.log('Add vehicle triggered');
  };

  return (
    <VehicleSlotsDashboard 
      freeSlots={5}
      usedFreeSlots={2}
      paidSlots={1}
      onAddVehicle={handleAddVehicle}
    />
  );
}