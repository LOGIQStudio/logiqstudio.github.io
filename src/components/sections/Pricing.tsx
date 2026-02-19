import { Check, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const plans = [
  {
    name: 'Starter',
    description: 'Perfect for small businesses just getting started with AI marketing.',
    price: '$2,500',
    period: '/month',
    features: [
      'AI-generated ad creatives (20/month)',
      'Social media management (2 platforms)',
      'Basic AI chatbot',
      'Weekly performance reports',
      'Email support',
    ],
    cta: 'Get Started',
    popular: false,
  },
  {
    name: 'Growth',
    description: 'For scaling businesses ready to leverage full AI marketing power.',
    price: '$5,000',
    period: '/month',
    features: [
      'AI-generated ad creatives (50/month)',
      'Social media management (4 platforms)',
      'Advanced AI chatbot with CRM',
      'Content strategy & blog posts',
      'A/B testing & optimization',
      'Bi-weekly strategy calls',
      'Priority support',
    ],
    cta: 'Get Started',
    popular: true,
  },
  {
    name: 'Enterprise',
    description: 'Custom solutions for large-scale operations and complex needs.',
    price: 'Custom',
    period: '',
    features: [
      'Unlimited AI-generated creatives',
      'Full social media management',
      'Custom AI chatbot development',
      'Dedicated account manager',
      'Advanced analytics & attribution',
      'Custom integrations',
      '24/7 phone support',
      'Quarterly business reviews',
    ],
    cta: 'Contact Us',
    popular: false,
  },
];

export function Pricing() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-cyan-500/10 text-cyan-400 text-sm font-medium mb-4">
            Pricing
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Simple, <span className="text-gradient">Transparent</span> Pricing
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose the plan that fits your business. All plans include our hybrid AI + human approach.
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative p-8 rounded-2xl transition-all duration-300 ${
                plan.popular
                  ? 'bg-gradient-to-b from-violet-500/20 to-fuchsia-500/20 border-2 border-violet-500/50 scale-105'
                  : 'bg-white/5 border border-white/10 hover:border-white/20'
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="flex items-center gap-1 px-4 py-1.5 rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white text-sm font-medium">
                    <Sparkles className="w-4 h-4" />
                    Most Popular
                  </div>
                </div>
              )}

              {/* Plan Name */}
              <h3 className="text-xl font-semibold text-white mb-2">{plan.name}</h3>
              <p className="text-sm text-muted-foreground mb-6">{plan.description}</p>

              {/* Price */}
              <div className="mb-6">
                <span className="text-4xl font-bold text-white">{plan.price}</span>
                <span className="text-muted-foreground">{plan.period}</span>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-start gap-3">
                    <Check className={`w-5 h-5 flex-shrink-0 mt-0.5 ${plan.popular ? 'text-violet-400' : 'text-muted-foreground'}`} />
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Link to="/contact">
                <Button
                  className={`w-full ${
                    plan.popular
                      ? 'bg-gradient-to-r from-violet-500 to-fuchsia-500 hover:from-violet-600 hover:to-fuchsia-600 text-white border-0'
                      : 'bg-white/10 hover:bg-white/20 text-white border-0'
                  }`}
                >
                  {plan.cta}
                </Button>
              </Link>
            </div>
          ))}
        </div>

        {/* Note */}
        <p className="text-center text-sm text-muted-foreground mt-8">
          All plans include a 14-day money-back guarantee. No long-term contracts required.
        </p>
      </div>
    </section>
  );
}
