@@ .. @@
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import FAQSection from "@/components/FAQSection";
-import { CheckCircle2, Truck, MapPin, Shield, IndianRupee, ArrowRight, Plus, Minus } from "lucide-react";
+import { CheckCircle2, Truck, MapPin, Shield, IndianRupee, ArrowRight, Plus, Minus, FileText, Phone, Settings } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

@@ .. @@
      submitButton: "Continue",
       vehicleError: "Invalid vehicle number format",
-      savingsText: "Save ₹10,000 setup + ₹2,000/month = ₹34,000 first year!"
+      savingsText: "Save ₹10,000 setup + ₹2,000/month = ₹34,000 first year!",
+      howItWorksTitle: "How It Works",
+      steps: [
+        {
+          title: "Fill the Form",
+          description: "Complete the registration form with your vehicle details"
+        },
+        {
+          title: "Executive Contact",
+          description: "Wheelseye executive will contact you to schedule a visit"
+        },
+        {
+          title: "Installation & Setup",
+          description: "Hardware installation and software setup completed at your location"
+        }
+      ]
     },
     hi: {
       headline: "बाढो सेलर्स के लिए मुफ्त GPS ट्रैकिंग",
@@ .. @@
       submitButton: "जारी रखें",
       vehicleError: "गलत वाहन नंबर फॉर्मेट",
-      savingsText: "₹10,000 सेटअप + ₹2,000/माह = पहले साल ₹34,000 बचाएं!"
+      savingsText: "₹10,000 सेटअप + ₹2,000/माह = पहले साल ₹34,000 बचाएं!",
+      howItWorksTitle: "यह कैसे काम करता है",
+      steps: [
+        {
+          title: "फॉर्म भरें",
+          description: "अपने वाहन की जानकारी के साथ रजिस्ट्रेशन फॉर्म पूरा करें"
+        },
+        {
+          title: "एक्जीक्यूटिव संपर्क",
+          description: "व्हील्साई एक्जीक्यूटिव आपसे संपर्क करके विजिट शेड्यूल करेंगे"
+        },
+        {
+          title: "इंस्टॉलेशन और सेटअप",
+          description: "आपके स्थान पर हार्डवेयर इंस्टॉलेशन और सॉफ्टवेयर सेटअप पूरा किया जाएगा"
+        }
+      ]
     }
   };

@@ .. @@
         </div>

+        {/* How It Works Section */}
+        <section>
+          <Card className="border-gray-100">
+            <CardHeader className="text-center pb-4">
+              <CardTitle className="text-lg font-semibold" data-testid="text-how-it-works-title">
+                {t.howItWorksTitle}
+              </CardTitle>
+            </CardHeader>
+            <CardContent>
+              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
+                {t.steps.map((step, index) => {
+                  const icons = [FileText, Phone, Settings];
+                  const Icon = icons[index];
+                  return (
+                    <div key={index} className="text-center space-y-3" data-testid={`step-${index}`}>
+                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
+                        <Icon className="w-6 h-6 text-primary" />
+                      </div>
+                      <div className="space-y-1">
+                        <h3 className="font-semibold text-sm" data-testid={`step-title-${index}`}>
+                          {step.title}
+                        </h3>
+                        <p className="text-xs text-muted-foreground" data-testid={`step-description-${index}`}>
+                          {step.description}
+                        </p>
+                      </div>
+                      {index < t.steps.length - 1 && (
+                        <div className="hidden md:block absolute top-6 left-full w-full">
+                          <ArrowRight className="w-4 h-4 text-muted-foreground mx-auto" />
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
         {/* Compact Lead Form */}
         <section id="lead-form" className="scroll-mt-16">