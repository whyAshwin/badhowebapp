import { useState } from 'react';
import CostCalculator from '../CostCalculator';
import { Button } from "@/components/ui/button";

export default function CostCalculatorExample() {
  const [totalVehicles, setTotalVehicles] = useState(7);

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-center space-x-4">
        <Button 
          variant="outline" 
          onClick={() => setTotalVehicles(Math.max(1, totalVehicles - 1))}
          data-testid="button-decrease"
        >
          -
        </Button>
        <span className="font-semibold" data-testid="text-vehicle-count">{totalVehicles} vehicles</span>
        <Button 
          variant="outline" 
          onClick={() => setTotalVehicles(totalVehicles + 1)}
          data-testid="button-increase"
        >
          +
        </Button>
      </div>
      
      <CostCalculator 
        totalVehicles={totalVehicles}
        freeVehicles={5}
      />
    </div>
  );
}