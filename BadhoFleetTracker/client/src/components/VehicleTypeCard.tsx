import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Truck, Weight } from "lucide-react";

interface VehicleType {
  id: string;
  name: string;
  capacity: string;
  image?: string;
  description: string;
}

interface VehicleTypeCardProps {
  vehicle: VehicleType;
  isSelected?: boolean;
  onSelect: (vehicleId: string) => void;
  disabled?: boolean;
}

export default function VehicleTypeCard({ 
  vehicle, 
  isSelected = false, 
  onSelect, 
  disabled = false 
}: VehicleTypeCardProps) {
  return (
    <Card 
      className={`hover-elevate cursor-pointer transition-all duration-200 ${
        isSelected 
          ? 'ring-2 ring-primary bg-primary/5' 
          : disabled 
            ? 'opacity-50 cursor-not-allowed' 
            : ''
      }`}
      onClick={() => !disabled && onSelect(vehicle.id)}
      data-testid={`card-vehicle-${vehicle.id}`}
    >
      <CardContent className="p-4">
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-center space-x-2">
            <div className="bg-primary/10 p-2 rounded-full">
              <Truck className="w-5 h-5 text-primary" data-testid={`icon-vehicle-${vehicle.id}`} />
            </div>
            <div>
              <h3 className="font-semibold text-sm" data-testid={`text-vehicle-name-${vehicle.id}`}>
                {vehicle.name}
              </h3>
              <p className="text-xs text-muted-foreground" data-testid={`text-vehicle-description-${vehicle.id}`}>
                {vehicle.description}
              </p>
            </div>
          </div>
          {isSelected && (
            <Badge variant="default" className="text-xs" data-testid={`badge-selected-${vehicle.id}`}>
              Selected
            </Badge>
          )}
        </div>

        <div className="flex items-center space-x-2 mb-3">
          <Weight className="w-4 h-4 text-muted-foreground" data-testid={`icon-weight-${vehicle.id}`} />
          <span className="text-sm text-muted-foreground" data-testid={`text-capacity-${vehicle.id}`}>
            {vehicle.capacity}
          </span>
          <Badge variant="outline" className="text-xs text-chart-3 border-chart-3" data-testid={`badge-eligible-${vehicle.id}`}>
            Eligible for FREE tracking
          </Badge>
        </div>

        <Button 
          variant={isSelected ? "default" : "outline"}
          size="sm"
          className="w-full"
          onClick={(e) => {
            e.stopPropagation();
            if (!disabled) onSelect(vehicle.id);
          }}
          disabled={disabled}
          data-testid={`button-select-${vehicle.id}`}
        >
          {isSelected ? 'Selected' : 'Select Vehicle'}
        </Button>
      </CardContent>
    </Card>
  );
}