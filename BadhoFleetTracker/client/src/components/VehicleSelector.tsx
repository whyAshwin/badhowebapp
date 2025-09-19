import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { Plus, Truck, AlertCircle } from "lucide-react";
import VehicleTypeCard from "./VehicleTypeCard";

interface Vehicle {
  id: string;
  name: string;
  capacity: string;
  description: string;
}

interface VehicleSelectorProps {
  isOpen: boolean;
  onClose: () => void;
  onAddVehicle: (vehicle: any) => void;
  remainingFreeSlots: number;
}

const AVAILABLE_VEHICLES: Vehicle[] = [
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
  },
  {
    id: 'mahindra-bolero',
    name: 'Mahindra Bolero Pickup',
    capacity: 'Up to 1 tonne',
    description: 'Utility pickup vehicle'
  },
  {
    id: 'ashok-leyland',
    name: 'Ashok Leyland Dost',
    capacity: 'Up to 1.25 tonnes',
    description: 'Light commercial vehicle'
  }
];

export default function VehicleSelector({ isOpen, onClose, onAddVehicle, remainingFreeSlots }: VehicleSelectorProps) {
  const [selectedVehicleType, setSelectedVehicleType] = useState<string>('');
  const [vehicleNumber, setVehicleNumber] = useState<string>('');
  const [driverName, setDriverName] = useState<string>('');
  const [driverPhone, setDriverPhone] = useState<string>('');

  const handleSubmit = () => {
    if (!selectedVehicleType || !vehicleNumber) return;
    
    const selectedVehicle = AVAILABLE_VEHICLES.find(v => v.id === selectedVehicleType);
    if (!selectedVehicle) return;

    const newVehicle = {
      id: Date.now().toString(),
      type: selectedVehicle,
      vehicleNumber,
      driverName,
      driverPhone,
      isFree: remainingFreeSlots > 0
    };

    onAddVehicle(newVehicle);
    
    // Reset form
    setSelectedVehicleType('');
    setVehicleNumber('');
    setDriverName('');
    setDriverPhone('');
    onClose();

    console.log('Added vehicle:', newVehicle);
  };

  const isFormValid = selectedVehicleType && vehicleNumber.trim();
  const willBePaid = remainingFreeSlots <= 0;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto" data-testid="dialog-vehicle-selector">
        <DialogHeader>
          <DialogTitle className="flex items-center space-x-2">
            <Plus className="w-5 h-5" data-testid="icon-add-vehicle" />
            <span data-testid="text-dialog-title">Add New Vehicle</span>
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {/* Pricing Info */}
          <Card className={willBePaid ? "border-chart-4" : "border-chart-3"}>
            <CardContent className="p-4">
              <div className="flex items-center space-x-2">
                {willBePaid ? (
                  <AlertCircle className="w-5 h-5 text-chart-4" data-testid="icon-paid-warning" />
                ) : (
                  <Truck className="w-5 h-5 text-chart-3" data-testid="icon-free" />
                )}
                <div>
                  <p className="font-semibold" data-testid="text-slot-status">
                    {willBePaid ? 'Paid Slot' : 'FREE Slot Available'}
                  </p>
                  <p className="text-sm text-muted-foreground" data-testid="text-slot-details">
                    {willBePaid 
                      ? '₹2,000 upfront + ₹400/month' 
                      : `${remainingFreeSlots} complimentary slots remaining`
                    }
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Vehicle Type Selection */}
          <div>
            <Label className="text-base font-semibold mb-3 block" data-testid="label-vehicle-type">
              Select Vehicle Type
            </Label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {AVAILABLE_VEHICLES.map(vehicle => (
                <VehicleTypeCard
                  key={vehicle.id}
                  vehicle={vehicle}
                  isSelected={selectedVehicleType === vehicle.id}
                  onSelect={setSelectedVehicleType}
                />
              ))}
            </div>
          </div>

          {/* Vehicle Details Form */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="vehicleNumber" data-testid="label-vehicle-number">
                Vehicle Number *
              </Label>
              <Input
                id="vehicleNumber"
                placeholder="e.g., MH01AB1234"
                value={vehicleNumber}
                onChange={(e) => setVehicleNumber(e.target.value.toUpperCase())}
                className="mt-1"
                data-testid="input-vehicle-number"
              />
            </div>
            
            <div>
              <Label htmlFor="driverName" data-testid="label-driver-name">
                Driver Name
              </Label>
              <Input
                id="driverName"
                placeholder="Enter driver name"
                value={driverName}
                onChange={(e) => setDriverName(e.target.value)}
                className="mt-1"
                data-testid="input-driver-name"
              />
            </div>
            
            <div className="md:col-span-2">
              <Label htmlFor="driverPhone" data-testid="label-driver-phone">
                Driver Phone
              </Label>
              <Input
                id="driverPhone"
                placeholder="Enter 10-digit phone number"
                value={driverPhone}
                onChange={(e) => setDriverPhone(e.target.value.replace(/\D/g, '').slice(0, 10))}
                className="mt-1"
                data-testid="input-driver-phone"
              />
            </div>
          </div>

          {/* Actions */}
          <div className="flex space-x-3">
            <Button 
              variant="outline" 
              onClick={onClose}
              className="flex-1"
              data-testid="button-cancel"
            >
              Cancel
            </Button>
            <Button 
              onClick={handleSubmit}
              disabled={!isFormValid}
              className="flex-1"
              data-testid="button-add"
            >
              {willBePaid ? 'Add Paid Vehicle' : 'Add FREE Vehicle'}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}