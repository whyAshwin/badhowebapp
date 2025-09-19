import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { IndianRupee, Calculator, TrendingUp } from "lucide-react";

interface CostCalculatorProps {
  totalVehicles: number;
  freeVehicles: number;
}

export default function CostCalculator({ totalVehicles = 5, freeVehicles = 5 }: CostCalculatorProps) {
  const paidVehicles = Math.max(0, totalVehicles - freeVehicles);
  const monthlyPaidCost = paidVehicles * 400;
  const upfrontPaidCost = paidVehicles * 2000;
  
  // What they would pay without Badho (all vehicles)
  const totalMonthlyWithoutBadho = totalVehicles * 400;
  const totalUpfrontWithoutBadho = totalVehicles * 2000;
  
  const monthlySavings = totalMonthlyWithoutBadho - monthlyPaidCost;
  const upfrontSavings = totalUpfrontWithoutBadho - upfrontPaidCost;

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <Calculator className="w-5 h-5" data-testid="icon-calculator" />
          <span data-testid="text-calculator-title">Cost Calculator</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Current Cost */}
        <div>
          <h3 className="font-semibold mb-3 flex items-center">
            <IndianRupee className="w-4 h-4 mr-1" data-testid="icon-current-cost" />
            <span data-testid="text-current-title">Your Current Cost</span>
          </h3>
          
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span data-testid="text-free-vehicles-count">{freeVehicles} FREE vehicles</span>
              <span className="font-semibold text-chart-3" data-testid="text-free-cost">₹0</span>
            </div>
            {paidVehicles > 0 && (
              <>
                <div className="flex justify-between">
                  <span data-testid="text-paid-vehicles-count">{paidVehicles} paid vehicles (₹2,000 each)</span>
                  <span data-testid="text-upfront-cost">₹{upfrontPaidCost.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span data-testid="text-monthly-vehicles-count">{paidVehicles} paid vehicles (₹400/month each)</span>
                  <span data-testid="text-monthly-cost">₹{monthlyPaidCost.toLocaleString()}/month</span>
                </div>
              </>
            )}
          </div>

          <Separator className="my-3" />
          
          <div className="flex justify-between font-semibold">
            <span data-testid="text-total-title">Total Cost:</span>
            <span data-testid="text-total-cost">₹{upfrontPaidCost.toLocaleString()} + ₹{monthlyPaidCost.toLocaleString()}/month</span>
          </div>
        </div>

        {/* Savings Section */}
        <div className="bg-chart-3/5 p-4 rounded-lg">
          <h3 className="font-semibold mb-3 flex items-center text-chart-3">
            <TrendingUp className="w-4 h-4 mr-1" data-testid="icon-savings" />
            <span data-testid="text-savings-title">Your Badho Savings</span>
          </h3>
          
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span data-testid="text-upfront-savings-label">Upfront savings:</span>
              <span className="font-semibold text-chart-3" data-testid="text-upfront-savings">₹{upfrontSavings.toLocaleString()}</span>
            </div>
            <div className="flex justify-between">
              <span data-testid="text-monthly-savings-label">Monthly savings:</span>
              <span className="font-semibold text-chart-3" data-testid="text-monthly-savings">₹{monthlySavings.toLocaleString()}</span>
            </div>
          </div>

          <Separator className="my-3" />
          
          <div className="text-center">
            <Badge className="bg-chart-3 text-white" data-testid="badge-total-savings">
              Total Savings: ₹{upfrontSavings.toLocaleString()} + ₹{monthlySavings.toLocaleString()}/month
            </Badge>
          </div>
        </div>

        {/* Comparison */}
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div className="text-center p-3 bg-muted rounded-lg">
            <p className="text-muted-foreground mb-1" data-testid="text-without-badho">Without Badho</p>
            <p className="font-semibold" data-testid="text-cost-without-badho">
              ₹{totalUpfrontWithoutBadho.toLocaleString()} + ₹{totalMonthlyWithoutBadho.toLocaleString()}/mo
            </p>
          </div>
          <div className="text-center p-3 bg-chart-3/10 rounded-lg">
            <p className="text-chart-3 mb-1" data-testid="text-with-badho">With Badho</p>
            <p className="font-semibold text-chart-3" data-testid="text-cost-with-badho">
              ₹{upfrontPaidCost.toLocaleString()} + ₹{monthlyPaidCost.toLocaleString()}/mo
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}