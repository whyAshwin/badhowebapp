@@ .. @@
import LeadForm from "@/components/LeadForm";
import FAQSection from "@/components/FAQSection";
-import { CheckCircle2, Truck, MapPin, Shield, IndianRupee } from "lucide-react";
+import { CheckCircle2, Truck, MapPin, Shield, IndianRupee, FileText, Phone, Settings, ArrowRight } from "lucide-react";

export default function BadhoMarketingPage() {
@@ .. @@
       normalCost: "Normally, this GPS service would cost you ₹12,000+ every year, including the ₹10,000 setup and ₹2,000 per month charges. But as a Badho Seller, you get it for FREE! That's a savings of ₹34,000 in the first year alone!",
       highlightedText: "Completely FREE for Badho Sellers. No hidden charges. No subscription fees. No recharging your SIM card. It's all covered by Badho.",
-      footer: "This exclusive service is available only to Badho sellers through our partnership with Wheels AI"
+      footer: "This exclusive service is available only to Badho sellers through our partnership with Wheels AI",
+      howItWorksTitle: "How It Works - Simple 3-Step Process",
+      steps: [
+        {
+          title: "Fill the Registration Form",
+          description: "Complete the form below with your details and vehicle information. It takes just 2 minutes!"
+        },
+        {
+          title: "Wheelseye Executive Contact",
+          description: "Our partner Wheelseye executive will contact you within 24 hours to schedule a convenient visit to your location."
+        },
+        {
+          title: "Professional Installation & Setup",
+          description: "Expert technicians will install the GPS hardware in your vehicles and set up the tracking software. Everything is handled for you!"
+        }
+      ]
     },
     hi: {
       pageTitle: "बाढो × व्हील्स AI साझेदारी - आपके वाहनों के लिए फ्री GPS ट्रैकिंग",
@@ .. @@
       normalCost: "सामान्यतः, इस GPS सेवा की लागत आपको ₹12,000+ प्रति वर्ष होगी, जिसमें ₹10,000 सेटअप और ₹2,000 प्रति माह शुल्क शामिल है। लेकिन बाढो सेलर के रूप में, आप इसे मुफ्त पाते हैं! यह पहले साल में ही ₹34,000 की बचत है!",
       highlightedText: "बाढो सेलर्स के लिए पूरी तरह मुफ्त। कोई छुपे हुए शुल्क नहीं। कोई सब्सक्रिप्शन फीस नहीं। अपने सिम कार्ड को रिचार्ज करने की जरूरत नहीं। यह सब बाढो द्वारा कवर किया गया है।",
-      footer: "यह विशेष सेवा केवल बाढो सेलर्स के लिए व्हील्स AI के साथ हमारी साझेदारी के माध्यम से उपलब्ध है"
+      footer: "यह विशेष सेवा केवल बाढो सेलर्स के लिए व्हील्स AI के साथ हमारी साझेदारी के माध्यम से उपलब्ध है",
+      howItWorksTitle: "यह कैसे काम करता है - सरल 3-चरण प्रक्रिया",
+      steps: [
+        {
+          title: "रजिस्ट्रेशन फॉर्म भरें",
+          description: "नीचे दिए गए फॉर्म को अपनी जानकारी और वाहन की विवरण के साथ पूरा करें। इसमें केवल 2 मिनट लगते हैं!"
+        },
+        {
+          title: "व्हील्साई एक्जीक्यूटिव संपर्क",
+          description: "हमारे पार्टनर व्हील्साई एक्जीक्यूटिव 24 घंटे के भीतर आपसे संपर्क करके आपके स्थान पर सुविधाजनक विजिट शेड्यूल करेंगे।"
+        },
+        {
+          title: "प्रोफेशनल इंस्टॉलेशन और सेटअप",
+          description: "विशेषज्ञ तकनीशियन आपके वाहनों में GPS हार्डवेयर इंस्टॉल करेंगे और ट्रैकिंग सॉफ्टवेयर सेट करेंगे। सब कुछ आपके लिए संभाला जाता है!"
+        }
+      ]
     }
   };

@@ .. @@
         </section>

+        {/* How It Works Section */}
+        <section>
+          <Card>
+            <CardHeader>
+              <CardTitle className="text-2xl font-bold text-center" data-testid="text-how-it-works-title">
+                {t.howItWorksTitle}
+              </CardTitle>
+            </CardHeader>
+            <CardContent>
+              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
+                {t.steps.map((step, index) => {
+                  const icons = [FileText, Phone, Settings];
+                  const Icon = icons[index];
+                  return (
+                    <div key={index} className="relative" data-testid={`step-${index}`}>
+                      <div className="text-center space-y-4">
+                        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
+                          <Icon className="w-8 h-8 text-primary" />
+                        </div>
+                        <div className="space-y-2">
+                          <h3 className="font-semibold text-lg" data-testid={`step-title-${index}`}>
+                            Step {index + 1}: {step.title}
+                          </h3>
+                          <p className="text-muted-foreground leading-relaxed" data-testid={`step-description-${index}`}>
+                            {step.description}
+                          </p>
+                        </div>
+                      </div>
+                      
+                      {/* Arrow connector for desktop */}
+                      {index < t.steps.length - 1 && (
+                        <div className="hidden md:block absolute top-8 left-full w-8 -translate-x-4">
+                          <ArrowRight className="w-6 h-6 text-primary/60" />
+                        </div>
+                      )}
+                    </div>
+                  );
+                })}
+              </div>
+            </CardContent>
+          </Card>
+        </section>
+
         {/* Lead Form */}
         <section id="lead-form">