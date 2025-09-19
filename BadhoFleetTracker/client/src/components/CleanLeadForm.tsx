import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Plus, Minus } from "lucide-react";

interface CleanLeadFormProps {
  language: 'en' | 'hi';
}

interface VehicleEntry {
  id: number;
  number: string;
}

export default function CleanLeadForm({ language }: CleanLeadFormProps) {
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
      submitButton: "Continue",
      maxVehicles: "You can add up to 5 vehicles for free tracking"
    },
    hi: {
      title: "आज ही अपना फ्री GPS ट्रैकिंग क्लेम करें!",
      fullName: "पूरा नाम",
      phoneNumber: "फोन नंबर",
      city: "शहर",
      vehicleNumber: "वाहन नंबर",
      addVehicle: "एक और वाहन जोड़ें",
      submitButton: "जारी रखें",
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
    <div className="max-w-md mx-auto" data-testid="card-lead-form">
      <Card className="border-gray-100 shadow-lg">
        <CardHeader className="text-center pb-6">
          <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
            <div className="w-6 h-6 border-2 border-primary rounded transform rotate-45"></div>
          </div>
          <CardTitle className="text-xl font-semibold text-foreground" data-testid="text-form-title">
            {t.title}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6 px-6 pb-6">
          {/* Personal Information */}
          <div className="space-y-4">
            <div>
              <Label htmlFor="fullName" className="text-sm font-medium text-foreground" data-testid="label-full-name">
                {t.fullName}
              </Label>
              <Input
                id="fullName"
                value={formData.fullName}
                onChange={(e) => handleInputChange('fullName', e.target.value)}
                className="mt-1 border-gray-200 focus:border-primary focus:ring-primary/20"
                data-testid="input-full-name"
              />
            </div>
            
            <div>
              <Label htmlFor="phoneNumber" className="text-sm font-medium text-foreground" data-testid="label-phone">
                {t.phoneNumber}
              </Label>
              <div className="mt-1 flex">
                <div className="flex items-center px-3 border border-r-0 border-gray-200 bg-gray-50 rounded-l-md">
                  <span className="text-sm text-gray-600">+91</span>
                </div>
                <Input
                  id="phoneNumber"
                  placeholder="Enter 10 digit mobile number"
                  value={formData.phoneNumber}
                  onChange={(e) => handleInputChange('phoneNumber', e.target.value.replace(/\D/g, '').slice(0, 10))}
                  className="rounded-l-none border-gray-200 focus:border-primary focus:ring-primary/20"
                  data-testid="input-phone"
                />
              </div>
            </div>

            <div>
              <Label htmlFor="city" className="text-sm font-medium text-foreground" data-testid="label-city">
                {t.city}
              </Label>
              <Input
                id="city"
                value={formData.city}
                onChange={(e) => handleInputChange('city', e.target.value)}
                className="mt-1 border-gray-200 focus:border-primary focus:ring-primary/20"
                data-testid="input-city"
              />
            </div>
          </div>

          {/* Vehicle Information */}
          <div>
            <Label className="text-sm font-medium text-foreground mb-2 block" data-testid="label-vehicles">
              {t.vehicleNumber}s
            </Label>
            <p className="text-xs text-muted-foreground mb-3" data-testid="text-max-vehicles">
              {t.maxVehicles}
            </p>
            
            <div className="space-y-3">
              {vehicles.map((vehicle, index) => (
                <div key={vehicle.id} className="flex items-center space-x-2">
                  <Input
                    placeholder={`${t.vehicleNumber} ${index + 1}`}
                    value={vehicle.number}
                    onChange={(e) => handleVehicleChange(vehicle.id, e.target.value.toUpperCase())}
                    className="flex-1 border-gray-200 focus:border-primary focus:ring-primary/20"
                    data-testid={`input-vehicle-${index}`}
                  />
                  {vehicles.length > 1 && (
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => removeVehicle(vehicle.id)}
                      className="shrink-0 border-gray-200"
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
                className="mt-3 w-full border-gray-200 text-primary hover:bg-primary/5"
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
            className="w-full bg-primary hover:bg-primary/90 text-white font-medium py-3 h-auto"
            data-testid="button-submit-form"
          >
            {t.submitButton}
          </Button>

          {/* Language Selector */}
          <div className="flex items-center justify-center space-x-2 pt-4">
            <span className="text-sm">🌐</span>
            <span className="text-sm text-muted-foreground">
              {language === 'en' ? 'हिंदी' : 'English'}
            </span>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}