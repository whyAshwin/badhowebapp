import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Plus, CheckCircle2, Circle } from "lucide-react";

interface VehicleSlotsProps {
  freeSlots: number;
  usedFreeSlots: number;
  paidSlots: number;
  onAddVehicle: () => void;
}

export default function VehicleSlotsDashboard({ 
  freeSlots = 5, 
  usedFreeSlots = 2, 
  paidSlots = 0, 
  onAddVehicle 
}: VehicleSlotsProps) {
  const remainingFreeSlots = freeSlots - usedFreeSlots;

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span data-testid="text-dashboard-title">Vehicle Tracking Dashboard</span>
          <Badge variant="secondary" data-testid="badge-total-slots">
            {usedFreeSlots + paidSlots} / {freeSlots + paidSlots} Active
          </Badge>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Free Slots Section */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-semibold text-chart-3" data-testid="text-free-slots-title">
              FREE Slots ({usedFreeSlots}/{freeSlots})
            </h3>
            <Badge variant="outline" className="text-chart-3 border-chart-3" data-testid="badge-complimentary">
              Complimentary
            </Badge>
          </div>
          
          <div className="grid grid-cols-5 gap-3 mb-4">
            {Array.from({ length: freeSlots }, (_, i) => (
              <div
                key={`free-${i}`}
                className={`aspect-square rounded-lg border-2 border-dashed flex items-center justify-center ${
                  i < usedFreeSlots 
                    ? 'bg-chart-3/10 border-chart-3 text-chart-3' 
                    : 'border-muted-foreground/30 text-muted-foreground'
                }`}
                data-testid={`slot-free-${i}`}
              >
                {i < usedFreeSlots ? (
                  <CheckCircle2 className="w-6 h-6" data-testid={`icon-used-${i}`} />
                ) : (
                  <Circle className="w-6 h-6" data-testid={`icon-available-${i}`} />
                )}
              </div>
            ))}
          </div>

          {remainingFreeSlots > 0 && (
            <p className="text-sm text-muted-foreground" data-testid="text-remaining-free">
              {remainingFreeSlots} free slots remaining
            </p>
          )}
        </div>

        {/* Paid Slots Section */}
        {paidSlots > 0 && (
          <div>
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-semibold text-chart-4" data-testid="text-paid-slots-title">
                Additional Slots ({paidSlots})
              </h3>
              <Badge variant="outline" className="text-chart-4 border-chart-4" data-testid="badge-paid">
                ₹400/month each
              </Badge>
            </div>
            
            <div className="grid grid-cols-5 gap-3">
              {Array.from({ length: paidSlots }, (_, i) => (
                <div
                  key={`paid-${i}`}
                  className="aspect-square rounded-lg border-2 bg-chart-4/10 border-chart-4 text-chart-4 flex items-center justify-center"
                  data-testid={`slot-paid-${i}`}
                >
                  <CheckCircle2 className="w-6 h-6" data-testid={`icon-paid-${i}`} />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Add Vehicle Button */}
        <Button 
          onClick={onAddVehicle}
          className="w-full"
          size="lg"
          data-testid="button-add-vehicle"
        >
          <Plus className="w-4 h-4 mr-2" data-testid="icon-plus" />
          Add Vehicle
        </Button>
      </CardContent>
    </Card>
  );
}