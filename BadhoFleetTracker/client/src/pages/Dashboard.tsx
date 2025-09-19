import { useState } from "react";
import ValuePropositionHero from "@/components/ValuePropositionHero";
import VehicleSlotsDashboard from "@/components/VehicleSlotsDashboard";
import CostCalculator from "@/components/CostCalculator";
import VehicleSelector from "@/components/VehicleSelector";
import ThemeToggle from "@/components/ThemeToggle";

// todo: remove mock functionality - replace with real vehicle data
interface AddedVehicle {
  id: string;
  type: {
    id: string;
    name: string;
    capacity: string;
    description: string;
  };
  vehicleNumber: string;
  driverName?: string;
  driverPhone?: string;
  isFree: boolean;
}

export default function Dashboard() {
  const [addedVehicles, setAddedVehicles] = useState<AddedVehicle[]>([
    // todo: remove mock functionality - sample initial vehicles
    {
      id: '1',
      type: {
        id: 'tata-ace',
        name: 'Tata Ace',
        capacity: 'Up to 1.5 tonnes',
        description: 'Compact pickup truck'
      },
      vehicleNumber: 'MH01AB1234',
      driverName: 'Rajesh Kumar',
      driverPhone: '9876543210',
      isFree: true
    },
    {
      id: '2',
      type: {
        id: 'piaggio-ape',
        name: 'Piaggio Ape',
        capacity: 'Up to 600 kg',
        description: 'Three-wheeler commercial'
      },
      vehicleNumber: 'MH02CD5678',
      driverName: 'Suresh Patel',
      driverPhone: '9123456789',
      isFree: true
    }
  ]);

  const [isVehicleSelectorOpen, setIsVehicleSelectorOpen] = useState(false);

  const freeSlots = 5;
  const usedFreeSlots = addedVehicles.filter(v => v.isFree).length;
  const paidSlots = addedVehicles.filter(v => !v.isFree).length;
  const remainingFreeSlots = Math.max(0, freeSlots - usedFreeSlots);

  const handleAddVehicle = (vehicle: AddedVehicle) => {
    setAddedVehicles(prev => [...prev, vehicle]);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card/50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-xl font-bold text-primary" data-testid="text-app-title">
              Badho GPS Tracking
            </h1>
            <p className="text-sm text-muted-foreground" data-testid="text-app-subtitle">
              Free vehicle tracking service for sellers
            </p>
          </div>
          <ThemeToggle />
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-6 space-y-8">
        {/* Hero Section */}
        <ValuePropositionHero />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column - Vehicle Management */}
          <div className="space-y-6">
            <VehicleSlotsDashboard
              freeSlots={freeSlots}
              usedFreeSlots={usedFreeSlots}
              paidSlots={paidSlots}
              onAddVehicle={() => setIsVehicleSelectorOpen(true)}
            />

            {/* Added Vehicles List */}
            {addedVehicles.length > 0 && (
              <div className="space-y-4">
                <h3 className="font-semibold" data-testid="text-added-vehicles-title">
                  Your Vehicles ({addedVehicles.length})
                </h3>
                <div className="space-y-3">
                  {addedVehicles.map((vehicle) => (
                    <div
                      key={vehicle.id}
                      className="p-4 border rounded-lg bg-card hover-elevate"
                      data-testid={`card-added-vehicle-${vehicle.id}`}
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="flex items-center space-x-2 mb-1">
                            <span className="font-semibold" data-testid={`text-vehicle-number-${vehicle.id}`}>
                              {vehicle.vehicleNumber}
                            </span>
                            <span
                              className={`px-2 py-1 text-xs rounded-full ${
                                vehicle.isFree
                                  ? 'bg-chart-3/10 text-chart-3'
                                  : 'bg-chart-4/10 text-chart-4'
                              }`}
                              data-testid={`badge-vehicle-type-${vehicle.id}`}
                            >
                              {vehicle.isFree ? 'FREE' : 'PAID'}
                            </span>
                          </div>
                          <p className="text-sm text-muted-foreground" data-testid={`text-vehicle-details-${vehicle.id}`}>
                            {vehicle.type.name} • {vehicle.type.capacity}
                          </p>
                          {vehicle.driverName && (
                            <p className="text-xs text-muted-foreground" data-testid={`text-driver-${vehicle.id}`}>
                              Driver: {vehicle.driverName}
                              {vehicle.driverPhone && ` • ${vehicle.driverPhone}`}
                            </p>
                          )}
                        </div>
                        <div className="w-3 h-3 bg-chart-3 rounded-full" data-testid={`status-active-${vehicle.id}`}></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right Column - Cost Calculator */}
          <div>
            <CostCalculator
              totalVehicles={addedVehicles.length}
              freeVehicles={freeSlots}
            />
          </div>
        </div>
      </main>

      {/* Vehicle Selector Modal */}
      <VehicleSelector
        isOpen={isVehicleSelectorOpen}
        onClose={() => setIsVehicleSelectorOpen(false)}
        onAddVehicle={handleAddVehicle}
        remainingFreeSlots={remainingFreeSlots}
      />
    </div>
  );
}