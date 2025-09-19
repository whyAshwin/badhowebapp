import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Truck, MapPin, Shield, IndianRupee, CheckCircle2, TrendingUp } from "lucide-react";

export default function ValueDemonstration() {
  return (
    <div className="space-y-8">
      {/* Hero Value Proposition */}
      <div className="bg-gradient-to-r from-primary to-chart-2 p-8 text-white rounded-lg text-center">
        <Badge className="mb-4 bg-white/20 text-white hover:bg-white/30" data-testid="badge-partner">
          Badho × Wheels AI Partnership
        </Badge>
        <h1 className="text-3xl font-bold mb-4" data-testid="text-main-headline">
          FREE GPS Tracking for Your Vehicles
        </h1>
        <p className="text-xl opacity-90 mb-6" data-testid="text-subtitle">
          Exclusive complimentary service for Badho sellers only
        </p>
        
        <div className="bg-white/10 p-6 rounded-lg">
          <p className="text-2xl font-bold text-chart-3 mb-2" data-testid="text-total-value">
            Worth ₹12,000+ per year
          </p>
          <p className="text-lg" data-testid="text-value-details">
            ₹10,000 setup cost + ₹2,000 monthly charges - Completely FREE!
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* What You Get */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Shield className="w-5 h-5 text-chart-3" data-testid="icon-benefits" />
              <span data-testid="text-benefits-title">What You Get FREE</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <CheckCircle2 className="w-5 h-5 text-chart-3" data-testid="icon-check-1" />
                <span data-testid="text-benefit-1">5 vehicle GPS tracking slots</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle2 className="w-5 h-5 text-chart-3" data-testid="icon-check-2" />
                <span data-testid="text-benefit-2">Real-time location monitoring</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle2 className="w-5 h-5 text-chart-3" data-testid="icon-check-3" />
                <span data-testid="text-benefit-3">Route optimization insights</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle2 className="w-5 h-5 text-chart-3" data-testid="icon-check-4" />
                <span data-testid="text-benefit-4">Driver performance reports</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle2 className="w-5 h-5 text-chart-3" data-testid="icon-check-5" />
                <span data-testid="text-benefit-5">Fuel consumption tracking</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle2 className="w-5 h-5 text-chart-3" data-testid="icon-check-6" />
                <span data-testid="text-benefit-6">24/7 customer support</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Eligible Vehicles */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Truck className="w-5 h-5 text-primary" data-testid="icon-vehicles" />
              <span data-testid="text-vehicles-title">Eligible Vehicles</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4" data-testid="text-vehicle-limit">
              Any commercial vehicle under 5 tonnes capacity
            </p>
            <div className="grid grid-cols-1 gap-3">
              {[
                { name: 'Tata Ace', capacity: 'Up to 1.5 tonnes' },
                { name: 'Tata 407', capacity: 'Up to 3 tonnes' },
                { name: 'Piaggio Ape', capacity: 'Up to 600 kg' },
                { name: 'Mahindra Bolero Pickup', capacity: 'Up to 1 tonne' },
                { name: 'Ashok Leyland Dost', capacity: 'Up to 1.25 tonnes' }
              ].map((vehicle, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                  <span className="font-medium" data-testid={`text-vehicle-${index}`}>{vehicle.name}</span>
                  <span className="text-sm text-muted-foreground" data-testid={`text-capacity-${index}`}>
                    {vehicle.capacity}
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Cost Comparison */}
      <Card className="border-chart-3">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2 text-chart-3">
            <TrendingUp className="w-5 h-5" data-testid="icon-savings" />
            <span data-testid="text-savings-title">Your Badho Advantage</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            {/* Without Badho */}
            <div className="p-6 bg-muted rounded-lg">
              <h3 className="font-semibold mb-2" data-testid="text-without-title">Without Badho</h3>
              <div className="space-y-1">
                <p className="text-2xl font-bold text-destructive" data-testid="text-without-upfront">₹10,000</p>
                <p className="text-sm text-muted-foreground" data-testid="text-without-upfront-label">Upfront cost</p>
                <p className="text-xl font-bold text-destructive" data-testid="text-without-monthly">₹2,000/mo</p>
                <p className="text-sm text-muted-foreground" data-testid="text-without-monthly-label">Monthly charges</p>
              </div>
            </div>

            {/* With Badho */}
            <div className="p-6 bg-chart-3/10 rounded-lg border-2 border-chart-3">
              <h3 className="font-semibold mb-2 text-chart-3" data-testid="text-with-title">With Badho</h3>
              <div className="space-y-1">
                <p className="text-2xl font-bold text-chart-3" data-testid="text-with-upfront">₹0</p>
                <p className="text-sm text-chart-3" data-testid="text-with-upfront-label">Upfront cost</p>
                <p className="text-xl font-bold text-chart-3" data-testid="text-with-monthly">₹0/mo</p>
                <p className="text-sm text-chart-3" data-testid="text-with-monthly-label">Monthly charges</p>
              </div>
              <Badge className="mt-2 bg-chart-3 text-white" data-testid="badge-free">
                100% FREE
              </Badge>
            </div>

            {/* Total Savings */}
            <div className="p-6 bg-gradient-to-br from-chart-3/20 to-chart-3/5 rounded-lg">
              <h3 className="font-semibold mb-2" data-testid="text-savings-amount-title">You Save</h3>
              <div className="space-y-1">
                <p className="text-2xl font-bold text-chart-3" data-testid="text-yearly-savings">₹34,000</p>
                <p className="text-sm text-muted-foreground" data-testid="text-yearly-label">in the first year</p>
                <p className="text-lg font-semibold text-chart-3" data-testid="text-monthly-savings">₹2,000</p>
                <p className="text-sm text-muted-foreground" data-testid="text-monthly-savings-label">every month</p>
              </div>
            </div>
          </div>

          <div className="mt-6 p-4 bg-primary/5 border-l-4 border-primary rounded">
            <p className="font-semibold text-primary mb-1" data-testid="text-exclusive-offer">
              Exclusive Badho Seller Benefit
            </p>
            <p className="text-sm text-muted-foreground" data-testid="text-offer-details">
              This premium GPS tracking service is available completely free only because you're a valued Badho seller. 
              Start tracking your vehicles today and save thousands every year!
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Additional Benefits */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="text-center">
          <CardContent className="p-6">
            <MapPin className="w-8 h-8 text-chart-2 mx-auto mb-3" data-testid="icon-location-large" />
            <h3 className="font-semibold mb-2" data-testid="text-tracking-title">Live Tracking</h3>
            <p className="text-sm text-muted-foreground" data-testid="text-tracking-desc">
              Monitor your vehicles in real-time from anywhere
            </p>
          </CardContent>
        </Card>

        <Card className="text-center">
          <CardContent className="p-6">
            <Shield className="w-8 h-8 text-chart-3 mx-auto mb-3" data-testid="icon-security-large" />
            <h3 className="font-semibold mb-2" data-testid="text-security-title">Enhanced Security</h3>
            <p className="text-sm text-muted-foreground" data-testid="text-security-desc">
              Get alerts for unauthorized usage and route deviations
            </p>
          </CardContent>
        </Card>

        <Card className="text-center">
          <CardContent className="p-6">
            <IndianRupee className="w-8 h-8 text-chart-4 mx-auto mb-3" data-testid="icon-money-large" />
            <h3 className="font-semibold mb-2" data-testid="text-efficiency-title">Cost Efficiency</h3>
            <p className="text-sm text-muted-foreground" data-testid="text-efficiency-desc">
              Optimize routes and reduce fuel costs significantly
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}