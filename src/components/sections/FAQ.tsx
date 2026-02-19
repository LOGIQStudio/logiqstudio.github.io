import { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

const faqs = [
  {
    question: 'How does your AI + human hybrid approach work?',
    answer: 'Our proprietary process starts with AI generating hundreds of creative variants, copy options, and strategic angles. Then, our expert marketers hand-pick the best outputs, refine messaging, align with your brand voice, and optimize for your specific audience. Finally, we deploy, A/B test, and continuously optimize using real-time analytics.',
  },
  {
    question: 'What AI tools do you use?',
    answer: 'We use a stack of cutting-edge AI tools including GPT-4, Gemini, and Claude for copywriting and strategy; Midjourney, DALL-E, and RunwayML for creative production; and custom-trained models for specific client needs. We are always testing and integrating new tools as they become available.',
  },
  {
    question: 'How quickly can we see results?',
    answer: 'Most clients see initial improvements within the first 2-4 weeks. However, significant results typically appear after 60-90 days of continuous optimization. We provide weekly reports so you can track progress in real-time.',
  },
  {
    question: 'Do you require long-term contracts?',
    answer: 'No. We believe in earning your business every month. While we recommend a minimum 3-month commitment for optimal results, all our plans are month-to-month with a 14-day money-back guarantee.',
  },
  {
    question: 'What industries do you work with?',
    answer: 'We work with a wide range of industries including eCommerce, SaaS, B2B services, healthcare, fintech, beauty, education, and more. Our AI models are trained to adapt to any industry-specific requirements.',
  },
  {
    question: 'How do you measure success?',
    answer: 'We track KPIs that matter to your business: ROAS, CPA, conversion rates, lead quality, revenue generated, and more. You will receive weekly reports with actionable insights and monthly strategy reviews.',
  },
  {
    question: 'Can I see examples of your work?',
    answer: 'Absolutely! Check out our Portfolio page for detailed case studies, or book a free audit call where we will share relevant examples from your industry.',
  },
  {
    question: 'What is included in the free audit?',
    answer: 'Our free audit includes a comprehensive review of your current marketing efforts, competitor analysis, AI-generated recommendations, and a custom growth strategy tailored to your business goals. No obligation, no credit card required.',
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-violet-500/10 text-violet-400 text-sm font-medium mb-4">
            FAQ
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Frequently Asked <span className="text-gradient">Questions</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Got questions? We have got answers. If you do not find what you are looking for, feel free to contact us.
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`rounded-xl border transition-all duration-300 ${
                openIndex === index
                  ? 'bg-white/5 border-violet-500/30'
                  : 'bg-white/[0.02] border-white/10 hover:border-white/20'
              }`}
            >
              <button
                className="w-full flex items-center justify-between p-6 text-left"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <div className="flex items-center gap-4">
                  <HelpCircle className={`w-5 h-5 flex-shrink-0 ${openIndex === index ? 'text-violet-400' : 'text-muted-foreground'}`} />
                  <span className="text-white font-medium">{faq.question}</span>
                </div>
                <ChevronDown
                  className={`w-5 h-5 text-muted-foreground transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-6 pb-6 pl-15">
                  <p className="text-muted-foreground leading-relaxed ml-9">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
