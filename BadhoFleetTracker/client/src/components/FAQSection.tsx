import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

interface FAQSectionProps {
  language: 'en' | 'hi';
}

export default function FAQSection({ language }: FAQSectionProps) {
  const faqs = {
    en: [
      {
        question: "How is this GPS service free for me?",
        answer: "As a Badho Seller, you get exclusive access to this premium GPS tracking service for FREE. Badho has partnered with Wheels AI to provide this complimentary service, allowing you to save thousands every year."
      },
      {
        question: "Are there any hidden charges?",
        answer: "No! There are no hidden charges. This service is completely free for the first 5 vehicles. If you want to add more vehicles, there's a ₹2,000 setup cost and ₹400 per month per vehicle, but for the first 5, it's 100% free."
      },
      {
        question: "Do I need to buy or recharge a SIM card?",
        answer: "No need to worry about buying or recharging a SIM. Your GPS service comes with a lifetime SIM plan included. The data charges and service are fully covered for 10 years, so you don't have to spend any additional money on SIM recharges."
      },
      {
        question: "Which vehicles are eligible for this free service?",
        answer: "Any commercial vehicle under 5 tonnes capacity is eligible, including Tata Ace, Tata 407, Piaggio Ape, Mahindra Bolero Pickup, and Ashok Leyland Dost."
      },
      {
        question: "Can I add more than 5 vehicles?",
        answer: "Yes, you can add more vehicles beyond the complimentary 5, but there's a ₹2,000 setup cost and ₹400 per month per vehicle. You'll only be charged for the additional vehicles you add."
      },
      {
        question: "What features do I get with the GPS service?",
        answer: "You get live location tracking, route optimization, driver performance reports, fuel tracking, geo-fencing alerts, and more—all for free with your Badho seller account."
      },
      {
        question: "What happens after 10 years?",
        answer: "For the next 10 years, your GPS service, including SIM recharge, is fully covered by Badho. After that, Badho will communicate with you for any changes, but for now, you don't need to worry about recharges or additional costs."
      },
      {
        question: "Is customer support available?",
        answer: "Yes! You'll have access to 24/7 customer support to help with any issues or questions about your GPS tracking service."
      }
    ],
    hi: [
      {
        question: "यह GPS सेवा मेरे लिए फ्री कैसे है?",
        answer: "बाढो सेलर के रूप में, आपको इस प्रीमियम GPS ट्रैकिंग सेवा तक मुफ्त पहुंच मिलती है। बाढो ने व्हील्स AI के साथ भागीदारी की है ताकि आप हर साल हजारों रुपये बचा सकें।"
      },
      {
        question: "क्या कोई छुपे हुए शुल्क हैं?",
        answer: "नहीं! कोई छुपे हुए शुल्क नहीं हैं। यह सेवा पहले 5 वाहनों के लिए पूरी तरह से मुफ्त है। यदि आप अधिक वाहन जोड़ना चाहते हैं, तो ₹2,000 सेटअप लागत और ₹400 प्रति माह प्रति वाहन है।"
      },
      {
        question: "क्या मुझे सिम कार्ड खरीदना या रिचार्ज करना होगा?",
        answer: "सिम खरीदने या रिचार्ज करने की कोई चिंता नहीं। आपकी GPS सेवा में लाइफटाइम सिम प्लान शामिल है। डेटा शुल्क और सेवा 10 साल तक पूरी तरह से कवर है।"
      },
      {
        question: "कौन से वाहन इस मुफ्त सेवा के लिए पात्र हैं?",
        answer: "5 टन क्षमता से कम का कोई भी वाणिज्यिक वाहन पात्र है, जिसमें टाटा एस, टाटा 407, पियाजियो एप, महिंद्रा बोलेरो पिकअप और अशोक लीलैंड दोस्त शामिल हैं।"
      },
      {
        question: "क्या मैं 5 से अधिक वाहन जोड़ सकता हूं?",
        answer: "हां, आप मुफ्त 5 के अलावा अधिक वाहन जोड़ सकते हैं, लेकिन ₹2,000 सेटअप लागत और ₹400 प्रति माह प्रति वाहन है। आप केवल अतिरिक्त वाहनों के लिए चार्ज किए जाएंगे।"
      },
      {
        question: "GPS सेवा के साथ मुझे कौन सी सुविधाएं मिलती हैं?",
        answer: "आपको लाइव लोकेशन ट्रैकिंग, रूट ऑप्टिमाइज़ेशन, ड्राइवर प्रदर्शन रिपोर्ट, ईंधन ट्रैकिंग, जियो-फेंसिंग अलर्ट और अधिक मिलता है—सब कुछ आपके बाढो सेलर अकाउंट के साथ मुफ्त।"
      },
      {
        question: "10 साल बाद क्या होता है?",
        answer: "अगले 10 सालों के लिए, आपकी GPS सेवा, सिम रिचार्ज सहित, बाढो द्वारा पूरी तरह से कवर की जाती है। उसके बाद, बाढो किसी भी बदलाव के लिए आपसे संपर्क करेगा।"
      },
      {
        question: "क्या ग्राहक सहायता उपलब्ध है?",
        answer: "हां! आपको अपनी GPS ट्रैकिंग सेवा के बारे में किसी भी समस्या या प्रश्न के लिए 24/7 ग्राहक सहायता मिलेगी।"
      }
    ]
  };

  const content = {
    en: { title: "Frequently Asked Questions" },
    hi: { title: "अक्सर पूछे जाने वाले प्रश्न" }
  };

  return (
    <div className="max-w-4xl mx-auto" data-testid="section-faq">
      <h2 className="text-2xl font-bold text-center mb-8" data-testid="text-faq-title">
        {content[language].title}
      </h2>
      
      <Accordion type="single" collapsible className="space-y-4" data-testid="accordion-faq">
        {faqs[language].map((faq, index) => (
          <AccordionItem 
            key={index} 
            value={`item-${index}`} 
            className="border rounded-lg px-4"
            data-testid={`faq-item-${index}`}
          >
            <AccordionTrigger className="text-left hover:no-underline" data-testid={`faq-question-${index}`}>
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground" data-testid={`faq-answer-${index}`}>
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}