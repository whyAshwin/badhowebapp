import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import CleanLeadForm from "@/components/CleanLeadForm";
import FAQSection from "@/components/FAQSection";
import { CheckCircle2, Truck, MapPin, Shield, IndianRupee, ArrowRight } from "lucide-react";

export default function CleanMarketingPage() {
  const [language, setLanguage] = useState<'en' | 'hi'>('en');

  const content = {
    en: {
      pageTitle: "Badho × Wheels AI Partnership - Free GPS Tracking for Your Vehicles",
      headline: "Exclusive GPS Tracking for Badho Sellers",
      subheadline: "Start Tracking Your Vehicles for FREE!",
      description: "Complimentary GPS Tracking for up to 5 Vehicles. Save ₹34,000+ in the First Year!",
      ctaButton: "Get Started for Free",
      benefitsTitle: "Your Benefits at Zero Cost",
      benefits: [
        "5 Vehicle GPS Tracking Slots – Completely Free for Badho Sellers!",
        "Real-time Location Monitoring – Know where your vehicles are at all times.",
        "Route Optimization Insights – Reduce fuel costs and improve delivery times.",
        "Driver Performance Reports – Keep track of driving behavior for better efficiency.",
        "Fuel Consumption Tracking – Stay on top of fuel usage to prevent wastage.",
        "24/7 Customer Support – Our team is always ready to help you!"
      ],
      eligibleTitle: "Eligible Vehicles for Free Tracking",
      vehicles: [
        { name: "Tata Ace", capacity: "Up to 1.5 tonnes" },
        { name: "Tata 407", capacity: "Up to 3 tonnes" },
        { name: "Piaggio Ape", capacity: "Up to 600 kg" },
        { name: "Mahindra Bolero Pickup", capacity: "Up to 1 tonne" },
        { name: "Ashok Leyland Dost", capacity: "Up to 1.25 tonnes" }
      ],
      savingsTitle: "You Save Big!",
      setupCost: "₹10,000 Setup Cost",
      monthlyCost: "₹2,000 Monthly Charges",
      badhoOffer: "With Badho's Special Offer, it's FREE!",
      totalSavings: "You Save ₹34,000 in the First Year!",
      exclusiveTitle: "Exclusive Badho Seller Benefit",
      exclusiveText: "This premium GPS service is free only for Badho sellers, because we value you! Start tracking your vehicles today and save thousands every year.",
      highlightedText: "Completely FREE for Badho Sellers. No hidden charges. No subscription fees.",
      footer: "This exclusive service is available only to Badho sellers through our partnership with Wheels AI"
    },
    hi: {
      pageTitle: "बाढो × व्हील्स AI साझेदारी - आपके वाहनों के लिए फ्री GPS ट्रैकिंग",
      headline: "बाढो सेलर्स के लिए विशेष GPS ट्रैकिंग",
      subheadline: "अपने वाहनों को मुफ्त में ट्रैक करना शुरू करें!",
      description: "5 वाहनों तक के लिए मुफ्त GPS ट्रैकिंग। पहले साल में ₹34,000+ बचाएं!",
      ctaButton: "मुफ्त में शुरू करें",
      benefitsTitle: "शून्य लागत पर आपके फायदे",
      benefits: [
        "5 वाहन GPS ट्रैकिंग स्लॉट्स – बाढो सेलर्स के लिए पूरी तरह मुफ्त!",
        "रियल-टाइम लोकेशन मॉनिटरिंग – हर समय जानें कि आपके वाहन कहां हैं।",
        "रूट ऑप्टिमाइज़ेशन इनसाइट्स – ईंधन लागत कम करें और डिलीवरी टाइम बेहतर बनाएं।",
        "ड्राइवर प्रदर्शन रिपोर्ट्स – बेहतर दक्षता के लिए ड्राइविंग व्यवहार पर नज़र रखें।",
        "ईंधन उपभोग ट्रैकिंग – बर्बादी रोकने के लिए ईंधन उपयोग पर नज़र रखें।",
        "24/7 कस्टमर सपोर्ट – हमारी टीम आपकी मदद के लिए हमेशा तैयार है!"
      ],
      eligibleTitle: "मुफ्त ट्रैकिंग के लिए योग्य वाहन",
      vehicles: [
        { name: "टाटा एस", capacity: "1.5 टन तक" },
        { name: "टाटा 407", capacity: "3 टन तक" },
        { name: "पियाजियो एप", capacity: "600 किलो तक" },
        { name: "महिंद्रा बोलेरो पिकअप", capacity: "1 टन तक" },
        { name: "अशोक लीलैंड दोस्त", capacity: "1.25 टन तक" }
      ],
      savingsTitle: "आप बहुत बचाते हैं!",
      setupCost: "₹10,000 सेटअप लागत",
      monthlyCost: "₹2,000 मासिक शुल्क",
      badhoOffer: "बाढो के विशेष ऑफर के साथ, यह मुफ्त है!",
      totalSavings: "आप पहले साल में ₹34,000 बचाते हैं!",
      exclusiveTitle: "विशेष बाढो सेलर लाभ",
      exclusiveText: "यह प्रीमियम GPS सेवा केवल बाढो सेलर्स के लिए मुफ्त है, क्योंकि हम आपको महत्व देते हैं! आज ही अपने वाहनों को ट्रैक करना शुरू करें और हर साल हजारों बचाएं।",
      highlightedText: "बाढो सेलर्स के लिए पूरी तरह मुफ्त। कोई छुपे हुए शुल्क नहीं। कोई सब्सक्रिप्शन फीस नहीं।",
      footer: "यह विशेष सेवा केवल बाढो सेलर्स के लिए व्हील्स AI के साथ हमारी साझेदारी के माध्यम से उपलब्ध है"
    }
  };

  const t = content[language];

  const scrollToForm = () => {
    document.getElementById('lead-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Clean Header */}
      <header className="bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-xl font-semibold text-foreground" data-testid="text-badho-logo">
              Badho
            </h1>
            <p className="text-sm text-muted-foreground" data-testid="text-partnership">
              × Wheels AI
            </p>
          </div>
          <LanguageSwitcher currentLanguage={language} onLanguageChange={setLanguage} />
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-12 space-y-16">
        {/* Hero Section - Clean & Minimal */}
        <section className="text-center space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground leading-tight" data-testid="text-main-headline">
              {t.headline}
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-primary" data-testid="text-subheadline">
              {t.subheadline}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-description">
              {t.description}
            </p>
          </div>
          
          <Button 
            onClick={scrollToForm}
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-white font-medium px-12 py-4 text-lg h-auto"
            data-testid="button-cta-hero"
          >
            {t.ctaButton}
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </section>

        {/* Value Proposition Cards */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="text-center border-gray-100 shadow-sm">
            <CardContent className="p-8">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">5 FREE Vehicles</h3>
              <p className="text-muted-foreground text-sm">Complete GPS tracking for up to 5 vehicles at zero cost</p>
            </CardContent>
          </Card>

          <Card className="text-center border-gray-100 shadow-sm">
            <CardContent className="p-8">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Live Tracking</h3>
              <p className="text-muted-foreground text-sm">Real-time location monitoring and route optimization</p>
            </CardContent>
          </Card>

          <Card className="text-center border-gray-100 shadow-sm">
            <CardContent className="p-8">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <IndianRupee className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">₹34,000+ Saved</h3>
              <p className="text-muted-foreground text-sm">Massive savings in the first year alone</p>
            </CardContent>
          </Card>
        </section>

        {/* Benefits Section */}
        <section>
          <Card className="border-gray-100 shadow-sm">
            <CardHeader className="text-center pb-6">
              <CardTitle className="text-2xl font-semibold" data-testid="text-benefits-title">
                {t.benefitsTitle}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {t.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3" data-testid={`benefit-${index}`}>
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <span className="text-foreground leading-relaxed">{benefit}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Eligible Vehicles & Savings */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card className="border-gray-100 shadow-sm">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Truck className="w-5 h-5 text-primary" />
                <span data-testid="text-vehicles-title">{t.eligibleTitle}</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {t.vehicles.map((vehicle, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg" data-testid={`vehicle-${index}`}>
                    <span className="font-medium">{vehicle.name}</span>
                    <span className="text-sm text-muted-foreground">{vehicle.capacity}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="border-primary/20 shadow-sm bg-primary/5">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2 text-primary">
                <IndianRupee className="w-5 h-5" />
                <span data-testid="text-savings-title">{t.savingsTitle}</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">{t.setupCost}</span>
                  <span className="line-through text-muted-foreground">₹10,000</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">{t.monthlyCost}</span>
                  <span className="line-through text-muted-foreground">₹2,000/mo</span>
                </div>
              </div>
              
              <div className="bg-primary/10 p-4 rounded-lg text-center">
                <p className="font-semibold text-primary mb-2" data-testid="text-badho-offer">{t.badhoOffer}</p>
                <p className="text-2xl font-bold text-primary" data-testid="text-total-savings">{t.totalSavings}</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Exclusive Benefit */}
        <section className="bg-primary/5 p-8 rounded-2xl border border-primary/10">
          <div className="text-center space-y-4">
            <h3 className="text-xl font-semibold text-primary" data-testid="text-exclusive-title">
              {t.exclusiveTitle}
            </h3>
            <p className="text-foreground max-w-3xl mx-auto leading-relaxed" data-testid="text-exclusive-desc">
              {t.exclusiveText}
            </p>
            <div className="bg-white p-4 rounded-lg border border-primary/20">
              <p className="font-medium text-primary" data-testid="text-highlighted">
                {t.highlightedText}
              </p>
            </div>
          </div>
        </section>

        {/* Lead Form */}
        <section id="lead-form" className="scroll-mt-20">
          <CleanLeadForm language={language} />
        </section>

        {/* FAQ Section */}
        <section>
          <FAQSection language={language} />
        </section>
      </main>

      {/* Clean Footer */}
      <footer className="border-t border-gray-100 bg-white">
        <div className="max-w-4xl mx-auto px-6 py-8 text-center">
          <div className="space-y-4">
            <div className="flex items-center justify-center space-x-3">
              <span className="font-semibold text-primary">Badho</span>
              <span className="text-muted-foreground">×</span>
              <span className="font-semibold text-primary">Wheels AI</span>
            </div>
            <p className="text-sm text-muted-foreground max-w-2xl mx-auto" data-testid="text-footer-desc">
              {t.footer}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}