import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Truck, MapPin, Shield, IndianRupee } from "lucide-react";

export default function ValuePropositionHero() {
  return (
    <div className="bg-gradient-to-r from-primary to-chart-2 p-6 text-white rounded-lg">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-6">
          <Badge className="mb-3 bg-white/20 text-white hover:bg-white/30" data-testid="badge-partner">
            Badho × Wheels AI Partnership
          </Badge>
          <h1 className="text-2xl font-bold mb-2" data-testid="text-main-headline">
            FREE GPS Tracking for Your Vehicles
          </h1>
          <p className="text-lg opacity-90" data-testid="text-subtitle">
            Complimentary service exclusively for Badho sellers
          </p>
        </div>

        <Card className="bg-white/10 border-white/20 text-white">
          <CardContent className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              {/* Free Vehicles */}
              <div className="space-y-3">
                <div className="flex justify-center">
                  <div className="bg-chart-3/20 p-3 rounded-full">
                    <Truck className="w-6 h-6 text-chart-3" data-testid="icon-truck" />
                  </div>
                </div>
                <h3 className="font-semibold" data-testid="text-free-vehicles">5 FREE Vehicles</h3>
                <p className="text-sm opacity-80">Tata Ace, 407, Piaggio Ape & more</p>
              </div>

              {/* GPS Tracking */}
              <div className="space-y-3">
                <div className="flex justify-center">
                  <div className="bg-chart-4/20 p-3 rounded-full">
                    <MapPin className="w-6 h-6 text-chart-4" data-testid="icon-location" />
                  </div>
                </div>
                <h3 className="font-semibold" data-testid="text-gps-tracking">Live GPS Tracking</h3>
                <p className="text-sm opacity-80">Real-time location & route monitoring</p>
              </div>

              {/* Savings */}
              <div className="space-y-3">
                <div className="flex justify-center">
                  <div className="bg-chart-3/20 p-3 rounded-full">
                    <IndianRupee className="w-6 h-6 text-chart-3" data-testid="icon-rupee" />
                  </div>
                </div>
                <h3 className="font-semibold" data-testid="text-total-savings">₹12,000+ Saved</h3>
                <p className="text-sm opacity-80">₹2,000 setup + ₹2,000/month</p>
              </div>
            </div>

            <div className="mt-6 p-4 bg-white/5 rounded-lg text-center">
              <p className="font-semibold text-chart-3" data-testid="text-value-message">
                Worth ₹10,000 upfront + ₹2,000/month - Absolutely FREE for Badho sellers!
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}