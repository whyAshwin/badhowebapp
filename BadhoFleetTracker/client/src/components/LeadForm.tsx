import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Plus, Minus } from "lucide-react";

interface LeadFormProps {
  language: 'en' | 'hi';
}

interface VehicleEntry {
  id: number;
  number: string;
}

export default function LeadForm({ language }: LeadFormProps) {
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    city: ''
  });
  
  const [vehicles, setVehicles] = useState<VehicleEntry[]>([
    { id: 1, number: '' }
  ]);

  const content = {
    en: {
      title: "Claim Your Free GPS Tracking Today!",
      fullName: "Full Name",
      phoneNumber: "Phone Number",
      city: "City",
      vehicleNumber: "Vehicle Number",
      addVehicle: "Add Another Vehicle",
      removeVehicle: "Remove Vehicle",
      submitButton: "Claim My Free GPS Tracking",
      maxVehicles: "You can add up to 5 vehicles for free tracking"
    },
    hi: {
      title: "आज ही अपना फ्री GPS ट्रैकिंग क्लेम करें!",
      fullName: "पूरा नाम",
      phoneNumber: "फोन नंबर",
      city: "शहर",
      vehicleNumber: "वाहन नंबर",
      addVehicle: "एक और वाहन जोड़ें",
      removeVehicle: "वाहन हटाएं",
      submitButton: "मेरा फ्री GPS ट्रैकिंग क्लेम करें",
      maxVehicles: "आप मुफ्त ट्रैकिंग के लिए 5 वाहन तक जोड़ सकते हैं"
    }
  };

  const t = content[language];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleVehicleChange = (id: number, value: string) => {
    setVehicles(prev => prev.map(v => v.id === id ? { ...v, number: value } : v));
  };

  const addVehicle = () => {
    if (vehicles.length < 5) {
      const newId = Math.max(...vehicles.map(v => v.id)) + 1;
      setVehicles(prev => [...prev, { id: newId, number: '' }]);
    }
  };

  const removeVehicle = (id: number) => {
    if (vehicles.length > 1) {
      setVehicles(prev => prev.filter(v => v.id !== id));
    }
  };

  const handleSubmit = () => {
    console.log('Form submitted:', { formData, vehicles });
    // In a real app, this would submit to your backend
  };

  return (
    <Card className="max-w-2xl mx-auto" data-testid="card-lead-form">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl font-bold text-primary" data-testid="text-form-title">
          {t.title}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Personal Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="fullName" data-testid="label-full-name">{t.fullName}</Label>
            <Input
              id="fullName"
              value={formData.fullName}
              onChange={(e) => handleInputChange('fullName', e.target.value)}
              className="mt-1"
              data-testid="input-full-name"
            />
          </div>
          
          <div>
            <Label htmlFor="phoneNumber" data-testid="label-phone">{t.phoneNumber}</Label>
            <Input
              id="phoneNumber"
              value={formData.phoneNumber}
              onChange={(e) => handleInputChange('phoneNumber', e.target.value.replace(/\D/g, '').slice(0, 10))}
              className="mt-1"
              data-testid="input-phone"
            />
          </div>
        </div>

        <div>
          <Label htmlFor="city" data-testid="label-city">{t.city}</Label>
          <Input
            id="city"
            value={formData.city}
            onChange={(e) => handleInputChange('city', e.target.value)}
            className="mt-1"
            data-testid="input-city"
          />
        </div>

        {/* Vehicle Information */}
        <div>
          <Label className="text-base font-semibold" data-testid="label-vehicles">{t.vehicleNumber}s</Label>
          <p className="text-sm text-muted-foreground mb-3" data-testid="text-max-vehicles">
            {t.maxVehicles}
          </p>
          
          <div className="space-y-3">
            {vehicles.map((vehicle, index) => (
              <div key={vehicle.id} className="flex items-center space-x-2">
                <Input
                  placeholder={`${t.vehicleNumber} ${index + 1}`}
                  value={vehicle.number}
                  onChange={(e) => handleVehicleChange(vehicle.id, e.target.value.toUpperCase())}
                  className="flex-1"
                  data-testid={`input-vehicle-${index}`}
                />
                {vehicles.length > 1 && (
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => removeVehicle(vehicle.id)}
                    className="shrink-0"
                    data-testid={`button-remove-vehicle-${index}`}
                  >
                    <Minus className="w-4 h-4" />
                  </Button>
                )}
              </div>
            ))}
          </div>

          {vehicles.length < 5 && (
            <Button
              variant="outline"
              onClick={addVehicle}
              className="mt-3 w-full"
              data-testid="button-add-vehicle"
            >
              <Plus className="w-4 h-4 mr-2" />
              {t.addVehicle}
            </Button>
          )}
        </div>

        {/* Submit Button */}
        <Button
          onClick={handleSubmit}
          className="w-full text-lg py-6 rounded-xl"
          size="lg"
          data-testid="button-submit-form"
        >
          {t.submitButton}
        </Button>
      </CardContent>
    </Card>
  );
}