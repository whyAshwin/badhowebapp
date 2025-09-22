import { Card, CardContent } from "@/components/ui/card";
import { FileText, Phone, Settings, ArrowRight } from "lucide-react";

interface HowItWorksSectionProps {
  language?: 'en' | 'hi';
}

export default function HowItWorksSection({ language = 'en' }: HowItWorksSectionProps) {
  const content = {
    en: {
      title: "How It Works",
      subtitle: "Get your free GPS tracking in 3 simple steps",
      steps: [
        {
          number: "1",
          title: "Fill the Form",
          description: "Complete the registration form with your vehicle details and contact information"
        },
        {
          number: "2", 
          title: "Executive Contact",
          description: "Our Wheelseye executive will contact you within 24 hours to schedule a convenient visit"
        },
        {
          number: "3",
          title: "Installation & Setup", 
          description: "Professional hardware installation and software setup at your location - completely free"
        }
      ]
    },
    hi: {
      title: "यह कैसे काम करता है",
      subtitle: "3 आसान चरणों में अपना मुफ्त GPS ट्रैकिंग प्राप्त करें",
      steps: [
        {
          number: "1",
          title: "फॉर्म भरें",
          description: "अपने वाहन की जानकारी और संपर्क विवरण के साथ पंजीकरण फॉर्म पूरा करें"
        },
        {
          number: "2",
          title: "एक्जीक्यूटिव संपर्क",
          description: "हमारे व्हील्सआई एक्जीक्यूटिव 24 घंटे के भीतर आपसे संपर्क करेंगे और सुविधाजनक समय तय करेंगे"
        },
        {
          number: "3", 
          title: "इंस्टॉलेशन और सेटअप",
          description: "आपके स्थान पर पेशेवर हार्डवेयर इंस्टॉलेशन और सॉफ्टवेयर सेटअप - पूरी तरह से मुफ्त"
        }
      ]
    }
  };

  const t = content[language];

  return (
    <div className="max-w-6xl mx-auto" data-testid="section-how-it-works">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4" data-testid="text-how-it-works-title">
          {t.title}
        </h2>
        <p className="text-lg text-muted-foreground" data-testid="text-how-it-works-subtitle">
          {t.subtitle}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
        {t.steps.map((step, index) => (
          <div key={index} className="relative">
            <Card className="h-full hover-elevate" data-testid={`card-step-${index}`}>
              <CardContent className="p-6 text-center">
                {/* Step Number */}
                <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4" data-testid={`step-number-${index}`}>
                  {step.number}
                </div>

                {/* Icon */}
                <div className="mb-4">
                  {index === 0 && <FileText className="w-12 h-12 text-primary mx-auto" data-testid={`icon-step-${index}`} />}
                  {index === 1 && <Phone className="w-12 h-12 text-primary mx-auto" data-testid={`icon-step-${index}`} />}
                  {index === 2 && <Settings className="w-12 h-12 text-primary mx-auto" data-testid={`icon-step-${index}`} />}
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold mb-3" data-testid={`text-step-title-${index}`}>
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground" data-testid={`text-step-description-${index}`}>
                  {step.description}
                </p>
              </CardContent>
            </Card>

            {/* Arrow between steps (desktop only) */}
            {index < t.steps.length - 1 && (
              <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                <ArrowRight className="w-8 h-8 text-primary" data-testid={`arrow-${index}`} />
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Additional Info */}
      <div className="mt-12 p-6 bg-primary/5 border-l-4 border-primary rounded-lg">
        <div className="flex items-start space-x-3">
          <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
            <span className="text-white text-sm font-bold">!</span>
          </div>
          <div>
            <h4 className="font-semibold text-primary mb-2" data-testid="text-important-note">
              {language === 'en' ? 'Important Note' : 'महत्वपूर्ण नोट'}
            </h4>
            <p className="text-sm text-muted-foreground" data-testid="text-note-content">
              {language === 'en' 
                ? 'This service is exclusively available to verified Badho sellers. Our professional installation ensures optimal performance and comes with a 1-year warranty on hardware.'
                : 'यह सेवा केवल सत्यापित बाढो विक्रेताओं के लिए उपलब्ध है। हमारी पेशेवर स्थापना इष्टतम प्रदर्शन सुनिश्चित करती है और हार्डवेयर पर 1 साल की वारंटी के साथ आती है।'
              }
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}