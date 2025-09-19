@@ .. @@
import LanguageSwitcher from "@/components/LanguageSwitcher";
import CleanLeadForm from "@/components/CleanLeadForm";
import FAQSection from "@/components/FAQSection";
-import { CheckCircle2, Truck, MapPin, Shield, IndianRupee, ArrowRight } from "lucide-react";
+import { CheckCircle2, Truck, MapPin, Shield, IndianRupee, ArrowRight, FileText, Phone, Settings } from "lucide-react";

export default function CleanMarketingPage() {
@@ .. @@
       exclusiveTitle: "Exclusive Badho Seller Benefit",
       exclusiveText: "This premium GPS service is free only for Badho sellers, because we value you! Start tracking your vehicles today and save thousands every year.",
       highlightedText: "Completely FREE for Badho Sellers. No hidden charges. No subscription fees.",
-      footer: "This exclusive service is available only to Badho sellers through our partnership with Wheels AI"
+      footer: "This exclusive service is available only to Badho sellers through our partnership with Wheels AI",
+      howItWorksTitle: "How It Works",
+      steps: [
+        {
+          title: "Fill the Form",
+          description: "Complete the registration form with your vehicle details and contact information"
+        },
+        {
+          title: "Executive Contact",
+          description: "Wheelseye executive will contact you within 24 hours to schedule a convenient visit"
+        },
+        {
+          title: "Installation & Setup",
+          description: "Professional hardware installation and software setup completed at your location"
+        }
+      ]
     },
     hi: {
       pageTitle: "बाढो × व्हील्स AI साझेदारी - आपके वाहनों के लिए फ्री GPS ट्रैकिंग",
@@ .. @@
       exclusiveTitle: "विशेष बाढो सेलर लाभ",
       exclusiveText: "यह प्रीमियम GPS सेवा केवल बाढो सेलर्स के लिए मुफ्त है, क्योंकि हम आपको महत्व देते हैं! आज ही अपने वाहनों को ट्रैक करना शुरू करें और हर साल हजारों बचाएं।",
       highlightedText: "बाढो सेलर्स के लिए पूरी तरह मुफ्त। कोई छुपे हुए शुल्क नहीं। कोई सब्सक्रिप्शन फीस नहीं।",
-      footer: "यह विशेष सेवा केवल बाढो सेलर्स के लिए व्हील्स AI के साथ हमारी साझेदारी के माध्यम से उपलब्ध है"
+      footer: "यह विशेष सेवा केवल बाढो सेलर्स के लिए व्हील्स AI के साथ हमारी साझेदारी के माध्यम से उपलब्ध है",
+      howItWorksTitle: "यह कैसे काम करता है",
+      steps: [
+        {
+          title: "फॉर्म भरें",
+          description: "अपने वाहन की जानकारी और संपर्क विवरण के साथ रजिस्ट्रेशन फॉर्म पूरा करें"
+        },
+        {
+          title: "एक्जीक्यूटिव संपर्क",
+          description: "व्हील्साई एक्जीक्यूटिव 24 घंटे के भीतर आपसे संपर्क करके सुविधाजनक विजिट शेड्यूल करेंगे"
+        },
+        {
+          title: "इंस्टॉलेशन और सेटअप",
+          description: "आपके स्थान पर प्रोफेशनल हार्डवेयर इंस्टॉलेशन और सॉफ्टवेयर सेटअप पूरा किया जाएगा"
+        }
+      ]
     }
   };

@@ .. @@
         </section>

+        {/* How It Works Section */}
+        <section>
+          <div className="text-center space-y-8">
+            <h2 className="text-2xl font-semibold text-foreground" data-testid="text-how-it-works-title">
+              {t.howItWorksTitle}
+            </h2>
+            
+            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
+              {t.steps.map((step, index) => {
+                const icons = [FileText, Phone, Settings];
+                const Icon = icons[index];
+                return (
+                  <div key={index} className="relative" data-testid={`step-${index}`}>
+                    <div className="text-center space-y-4">
+                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
+                        <Icon className="w-8 h-8 text-primary" />
+                      </div>
+                      <div className="space-y-2">
+                        <h3 className="font-semibold text-lg" data-testid={`step-title-${index}`}>
+                          {step.title}
+                        </h3>
+                        <p className="text-muted-foreground leading-relaxed" data-testid={`step-description-${index}`}>
+                          {step.description}
+                        </p>
+                      </div>
+                    </div>
+                    
+                    {/* Arrow connector for desktop */}
+                    {index < t.steps.length - 1 && (
+                      <div className="hidden md:block absolute top-8 left-full w-8 -translate-x-4">
+                        <ArrowRight className="w-6 h-6 text-primary/60" />
+                      </div>
+                    )}
+                  </div>
+                );
+              })}
+            </div>
+          </div>
+        </section>
+
         {/* Lead Form */}
         <section id="lead-form" className="scroll-mt-20">