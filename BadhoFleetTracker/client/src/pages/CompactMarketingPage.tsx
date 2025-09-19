import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import FAQSection from "@/components/FAQSection";
import { CheckCircle2, Truck, MapPin, Shield, IndianRupee, ArrowRight, Plus, Minus } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface VehicleEntry {
  id: number;
  number: string;
  isValid: boolean;
}

export default function CompactMarketingPage() {
  const [language, setLanguage] = useState<'en' | 'hi'>('en');
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    city: ''
  });
  const [vehicles, setVehicles] = useState<VehicleEntry[]>([
    { id: 1, number: '', isValid: true }
  ]);

  const validateVehicleNumber = (vehicleNumber: string): boolean => {
    const cleaned = vehicleNumber.trim().toUpperCase();
    const vehicleNumberRegex = /^[A-Z]{2}\d{1,2}[A-Z]{1,2}\d{4}$|^\d{2} BH \d{4} [A-Z]{2}$/;
    return vehicleNumberRegex.test(cleaned);
  };

  const content = {
    en: {
      headline: "FREE GPS Tracking for Badho Sellers",
      subheadline: "5 Vehicles • ₹34,000+ Saved",
      ctaButton: "Get Started",
      benefits: [
        "5 FREE Vehicle GPS Slots",
        "Real-time Location Tracking", 
        "Route Optimization & Fuel Savings",
        "Driver Performance Reports",
        "24/7 Customer Support"
      ],
      vehicles: [
        { name: "Tata Ace", capacity: "1.5T" },
        { name: "Tata 407", capacity: "3T" },
        { name: "Piaggio Ape", capacity: "600kg" },
        { name: "Mahindra Bolero", capacity: "1T" },
        { name: "Ashok Leyland", capacity: "1.25T" }
      ],
      formTitle: "Claim Your FREE GPS Tracking",
      fullName: "Full Name",
      phoneNumber: "Phone Number", 
      city: "City",
      vehicleNumber: "Vehicle Number",
      submitButton: "Continue",
      vehicleError: "Invalid vehicle number format",
      savingsText: "Save ₹10,000 setup + ₹2,000/month = ₹34,000 first year!"
    },
    hi: {
      headline: "बाढो सेलर्स के लिए मुफ्त GPS ट्रैकिंग",
      subheadline: "5 वाहन • ₹34,000+ बचत",
      ctaButton: "शुरू करें",
      benefits: [
        "5 मुफ्त वाहन GPS स्लॉट्स",
        "रियल-टाइम लोकेशन ट्रैकिंग",
        "रूट ऑप्टिमाइज़ेशन और ईंधन बचत",
        "ड्राइवर प्रदर्शन रिपोर्ट्स", 
        "24/7 कस्टमर सपोर्ट"
      ],
      vehicles: [
        { name: "टाटा एस", capacity: "1.5T" },
        { name: "टाटा 407", capacity: "3T" },
        { name: "पियाजियो एप", capacity: "600kg" },
        { name: "महिंद्रा बोलेरो", capacity: "1T" },
        { name: "अशोक लीलैंड", capacity: "1.25T" }
      ],
      formTitle: "अपना मुफ्त GPS ट्रैकिंग क्लेम करें",
      fullName: "पूरा नाम",
      phoneNumber: "फोन नंबर",
      city: "शहर", 
      vehicleNumber: "वाहन नंबर",
      submitButton: "जारी रखें",
      vehicleError: "गलत वाहन नंबर फॉर्मेट",
      savingsText: "₹10,000 सेटअप + ₹2,000/माह = पहले साल ₹34,000 बचाएं!"
    }
  };

  const t = content[language];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleVehicleChange = (id: number, value: string) => {
    const isValid = value === '' || validateVehicleNumber(value);
    setVehicles(prev => prev.map(v => v.id === id ? { ...v, number: value.toUpperCase(), isValid } : v));
  };

  const addVehicle = () => {
    if (vehicles.length < 5) {
      const newId = Math.max(...vehicles.map(v => v.id)) + 1;
      setVehicles(prev => [...prev, { id: newId, number: '', isValid: true }]);
    }
  };

  const removeVehicle = (id: number) => {
    if (vehicles.length > 1) {
      setVehicles(prev => prev.filter(v => v.id !== id));
    }
  };

  const handleSubmit = () => {
    const allVehiclesValid = vehicles.every(v => v.number === '' || v.isValid);
    if (!allVehiclesValid) {
      alert(t.vehicleError);
      return;
    }
    console.log('Form submitted:', { formData, vehicles });
  };

  const scrollToForm = () => {
    document.getElementById('lead-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Compact Header */}
      <header className="bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 py-3 flex items-center justify-between">
          <div>
            <h1 className="text-lg font-semibold text-foreground" data-testid="text-badho-logo">Badho × Wheels AI</h1>
          </div>
          <LanguageSwitcher currentLanguage={language} onLanguageChange={setLanguage} />
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-6 space-y-8">
        {/* Compact Hero */}
        <section className="text-center space-y-4">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground" data-testid="text-main-headline">
            {t.headline}
          </h1>
          <p className="text-lg text-primary font-semibold" data-testid="text-subheadline">
            {t.subheadline}
          </p>
          <Button 
            onClick={scrollToForm}
            className="bg-primary hover:bg-primary/90 text-white px-8 py-2"
            data-testid="button-cta-hero"
          >
            {t.ctaButton} <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </section>

        {/* Compact Benefits + Vehicles in 2 columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Benefits */}
          <Card className="border-gray-100">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg flex items-center">
                <Shield className="w-5 h-5 text-primary mr-2" />
                Benefits
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              {t.benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-2" data-testid={`benefit-${index}`}>
                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                  <span className="text-sm">{benefit}</span>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Eligible Vehicles */}
          <Card className="border-gray-100">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg flex items-center">
                <Truck className="w-5 h-5 text-primary mr-2" />
                Eligible Vehicles
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              {t.vehicles.map((vehicle, index) => (
                <div key={index} className="flex items-center justify-between text-sm" data-testid={`vehicle-${index}`}>
                  <span className="font-medium">{vehicle.name}</span>
                  <span className="text-muted-foreground">{vehicle.capacity}</span>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Compact Savings Banner */}
        <div className="bg-primary/10 p-4 rounded-lg text-center border border-primary/20">
          <p className="text-primary font-semibold" data-testid="text-savings">
            {t.savingsText}
          </p>
        </div>

        {/* Compact Lead Form */}
        <section id="lead-form" className="scroll-mt-16">
          <Card className="max-w-md mx-auto border-gray-100 shadow-lg">
            <CardHeader className="text-center pb-4">
              <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-2">
                <div className="w-5 h-5 border-2 border-primary rounded transform rotate-45"></div>
              </div>
              <CardTitle className="text-lg font-semibold" data-testid="text-form-title">
                {t.formTitle}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 px-6 pb-6">
              {/* Personal Info - Compact Grid */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <Label htmlFor="fullName" className="text-xs font-medium">{t.fullName}</Label>
                  <Input
                    id="fullName"
                    value={formData.fullName}
                    onChange={(e) => handleInputChange('fullName', e.target.value)}
                    className="mt-1 h-9 text-sm"
                    data-testid="input-full-name"
                  />
                </div>
                <div>
                  <Label htmlFor="city" className="text-xs font-medium">{t.city}</Label>
                  <Input
                    id="city"
                    value={formData.city}
                    onChange={(e) => handleInputChange('city', e.target.value)}
                    className="mt-1 h-9 text-sm"
                    data-testid="input-city"
                  />
                </div>
              </div>

              {/* Phone Number */}
              <div>
                <Label htmlFor="phoneNumber" className="text-xs font-medium">{t.phoneNumber}</Label>
                <div className="mt-1 flex">
                  <div className="flex items-center px-2 border border-r-0 border-gray-200 bg-gray-50 rounded-l-md">
                    <span className="text-xs text-gray-600">+91</span>
                  </div>
                  <Input
                    id="phoneNumber"
                    placeholder="Enter 10 digit number"
                    value={formData.phoneNumber}
                    onChange={(e) => handleInputChange('phoneNumber', e.target.value.replace(/\D/g, '').slice(0, 10))}
                    className="rounded-l-none h-9 text-sm"
                    data-testid="input-phone"
                  />
                </div>
              </div>

              {/* Vehicle Numbers - Compact */}
              <div>
                <Label className="text-xs font-medium mb-1 block">{t.vehicleNumber}s</Label>
                <div className="space-y-2">
                  {vehicles.map((vehicle, index) => (
                    <div key={vehicle.id} className="flex items-center space-x-2">
                      <Input
                        placeholder={`e.g., MH01AB1234`}
                        value={vehicle.number}
                        onChange={(e) => handleVehicleChange(vehicle.id, e.target.value)}
                        className={`flex-1 h-9 text-sm ${!vehicle.isValid ? 'border-red-300 focus:border-red-500' : ''}`}
                        data-testid={`input-vehicle-${index}`}
                      />
                      {vehicles.length > 1 && (
                        <Button
                          variant="outline"
                          size="icon"
                          onClick={() => removeVehicle(vehicle.id)}
                          className="shrink-0 h-9 w-9"
                          data-testid={`button-remove-vehicle-${index}`}
                        >
                          <Minus className="w-3 h-3" />
                        </Button>
                      )}
                    </div>
                  ))}
                  {!vehicles[vehicles.length - 1]?.isValid && (
                    <p className="text-xs text-red-500">{t.vehicleError}</p>
                  )}
                </div>

                {vehicles.length < 5 && (
                  <Button
                    variant="outline"
                    onClick={addVehicle}
                    className="mt-2 w-full h-8 text-xs"
                    data-testid="button-add-vehicle"
                  >
                    <Plus className="w-3 h-3 mr-1" />
                    Add Vehicle ({vehicles.length}/5)
                  </Button>
                )}
              </div>

              {/* Submit Button */}
              <Button
                onClick={handleSubmit}
                className="w-full bg-primary hover:bg-primary/90 text-white font-medium h-10"
                data-testid="button-submit-form"
              >
                {t.submitButton}
              </Button>
            </CardContent>
          </Card>
        </section>

        {/* Compact FAQ */}
        <section className="mt-8">
          <FAQSection language={language} />
        </section>
      </main>

      {/* Compact Footer */}
      <footer className="border-t border-gray-100 bg-white mt-8">
        <div className="max-w-4xl mx-auto px-4 py-4 text-center">
          <p className="text-xs text-muted-foreground">
            Exclusive service for Badho sellers through Wheels AI partnership
          </p>
        </div>
      </footer>
    </div>
  );
}