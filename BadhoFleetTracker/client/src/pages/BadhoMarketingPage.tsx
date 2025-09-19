import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import LeadForm from "@/components/LeadForm";
import FAQSection from "@/components/FAQSection";
import { CheckCircle2, Truck, MapPin, Shield, IndianRupee } from "lucide-react";

export default function BadhoMarketingPage() {
  const [language, setLanguage] = useState<'en' | 'hi'>('en');

  const content = {
    en: {
      pageTitle: "Badho × Wheels AI Partnership - Free GPS Tracking for Your Vehicles",
      headline: "Exclusive GPS Tracking for Badho Sellers – Start Tracking Your Vehicles for FREE!",
      subheadline: "Complimentary GPS Tracking for up to 5 Vehicles. Save ₹34,000+ in the First Year!",
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
      costBreakdown: "Cost Breakdown:",
      setupCost: "₹10,000 Setup Cost",
      monthlyCost: "₹2,000 Monthly Charges",
      badhoOffer: "But with Badho's Special Offer, it's FREE!",
      totalSavings: "You Save ₹34,000 in the First Year!",
      exclusiveTitle: "Exclusive Badho Seller Benefit",
      exclusiveText: "This premium GPS service is free only for Badho sellers, because we value you! Start tracking your vehicles today and save thousands every year.",
      normalCost: "Normally, this GPS service would cost you ₹12,000+ every year, including the ₹10,000 setup and ₹2,000 per month charges. But as a Badho Seller, you get it for FREE! That's a savings of ₹34,000 in the first year alone!",
      highlightedText: "Completely FREE for Badho Sellers. No hidden charges. No subscription fees. No recharging your SIM card. It's all covered by Badho.",
      footer: "This exclusive service is available only to Badho sellers through our partnership with Wheels AI"
    },
    hi: {
      pageTitle: "बाढो × व्हील्स AI साझेदारी - आपके वाहनों के लिए फ्री GPS ट्रैकिंग",
      headline: "बाढो सेलर्स के लिए विशेष GPS ट्रैकिंग – अपने वाहनों को मुफ्त में ट्रैक करना शुरू करें!",
      subheadline: "5 वाहनों तक के लिए मुफ्त GPS ट्रैकिंग। पहले साल में ₹34,000+ बचाएं!",
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
      costBreakdown: "लागत विवरण:",
      setupCost: "₹10,000 सेटअप लागत",
      monthlyCost: "₹2,000 मासिक शुल्क",
      badhoOffer: "लेकिन बाढो के विशेष ऑफर के साथ, यह मुफ्त है!",
      totalSavings: "आप पहले साल में ₹34,000 बचाते हैं!",
      exclusiveTitle: "विशेष बाढो सेलर लाभ",
      exclusiveText: "यह प्रीमियम GPS सेवा केवल बाढो सेलर्स के लिए मुफ्त है, क्योंकि हम आपको महत्व देते हैं! आज ही अपने वाहनों को ट्रैक करना शुरू करें और हर साल हजारों बचाएं।",
      normalCost: "सामान्यतः, इस GPS सेवा की लागत आपको ₹12,000+ प्रति वर्ष होगी, जिसमें ₹10,000 सेटअप और ₹2,000 प्रति माह शुल्क शामिल है। लेकिन बाढो सेलर के रूप में, आप इसे मुफ्त पाते हैं! यह पहले साल में ही ₹34,000 की बचत है!",
      highlightedText: "बाढो सेलर्स के लिए पूरी तरह मुफ्त। कोई छुपे हुए शुल्क नहीं। कोई सब्सक्रिप्शन फीस नहीं। अपने सिम कार्ड को रिचार्ज करने की जरूरत नहीं। यह सब बाढो द्वारा कवर किया गया है।",
      footer: "यह विशेष सेवा केवल बाढो सेलर्स के लिए व्हील्स AI के साथ हमारी साझेदारी के माध्यम से उपलब्ध है"
    }
  };

  const t = content[language];

  const scrollToForm = () => {
    document.getElementById('lead-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card/50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-xl font-bold text-primary" data-testid="text-badho-logo">
              Badho
            </h1>
            <p className="text-sm text-muted-foreground" data-testid="text-partnership">
              × Wheels AI Partnership
            </p>
          </div>
          <LanguageSwitcher currentLanguage={language} onLanguageChange={setLanguage} />
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-8 space-y-12">
        {/* Hero Section */}
        <section className="text-center space-y-6">
          <div className="bg-gradient-to-r from-primary to-primary/80 p-8 text-white rounded-xl">
            <h1 className="text-3xl md:text-4xl font-bold mb-4" data-testid="text-main-headline">
              {t.headline}
            </h1>
            <p className="text-xl mb-6" data-testid="text-subheadline">
              {t.subheadline}
            </p>
            <Button 
              onClick={scrollToForm}
              size="lg" 
              className="bg-chart-2 hover:bg-chart-2/90 text-black font-bold px-8 py-3 rounded-xl text-lg"
              data-testid="button-cta-hero"
            >
              {t.ctaButton}
            </Button>
          </div>
        </section>

        {/* Benefits Section */}
        <section>
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-center" data-testid="text-benefits-title">
                {t.benefitsTitle}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {t.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3" data-testid={`benefit-${index}`}>
                    <CheckCircle2 className="w-5 h-5 text-chart-2 mt-0.5 shrink-0" />
                    <span className="text-base">{benefit}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Eligible Vehicles */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Truck className="w-5 h-5 text-primary" />
                <span data-testid="text-vehicles-title">{t.eligibleTitle}</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {t.vehicles.map((vehicle, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg" data-testid={`vehicle-${index}`}>
                    <span className="font-medium">{vehicle.name}</span>
                    <span className="text-sm text-muted-foreground">{vehicle.capacity}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Savings Breakdown */}
          <Card className="border-chart-2">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2 text-chart-2">
                <IndianRupee className="w-5 h-5" />
                <span data-testid="text-savings-title">{t.savingsTitle}</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2" data-testid="text-cost-breakdown">{t.costBreakdown}</h4>
                <div className="space-y-1 text-sm">
                  <div className="flex justify-between">
                    <span data-testid="text-setup-cost">{t.setupCost}</span>
                    <span className="line-through text-muted-foreground">₹10,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span data-testid="text-monthly-cost">{t.monthlyCost}</span>
                    <span className="line-through text-muted-foreground">₹2,000/mo</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-chart-2/10 p-4 rounded-lg text-center">
                <p className="font-bold text-chart-2 mb-2" data-testid="text-badho-offer">{t.badhoOffer}</p>
                <p className="text-2xl font-bold text-chart-2" data-testid="text-total-savings">{t.totalSavings}</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Value Proposition */}
        <section className="bg-primary/5 p-8 rounded-xl border-l-4 border-primary">
          <h3 className="text-xl font-bold text-primary mb-4" data-testid="text-exclusive-title">
            {t.exclusiveTitle}
          </h3>
          <p className="text-base mb-4" data-testid="text-exclusive-desc">
            {t.exclusiveText}
          </p>
          <p className="text-base mb-4" data-testid="text-normal-cost">
            {t.normalCost}
          </p>
          <div className="bg-chart-2/20 p-4 rounded-lg">
            <p className="font-bold text-primary" data-testid="text-highlighted">
              {t.highlightedText}
            </p>
          </div>
        </section>

        {/* Lead Form */}
        <section id="lead-form">
          <LeadForm language={language} />
        </section>

        {/* FAQ Section */}
        <section>
          <FAQSection language={language} />
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t mt-16 bg-card/50">
        <div className="max-w-6xl mx-auto px-4 py-8">
          <div className="text-center space-y-4">
            <div className="flex items-center justify-center space-x-4">
              <h3 className="text-lg font-bold text-primary" data-testid="text-footer-logo">Badho</h3>
              <span className="text-muted-foreground">×</span>
              <h3 className="text-lg font-bold text-primary">Wheels AI</h3>
            </div>
            <p className="text-sm text-muted-foreground max-w-2xl mx-auto" data-testid="text-footer-desc">
              {t.footer}
            </p>
            <div className="flex items-center justify-center space-x-6 text-sm text-muted-foreground">
              <span data-testid="text-contact">Contact: support@badho.com</span>
              <span data-testid="text-phone">Phone: 1800-XXX-XXXX</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}