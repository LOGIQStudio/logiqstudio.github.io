import { ArrowRight, TrendingUp, Users, DollarSign, Target } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const caseStudies = [
  {
    client: 'NovaTech eCommerce',
    industry: 'eCommerce',
    title: '300% ROAS Increase in 60 Days',
    description: 'Revamped entire ad strategy with AI-generated creatives and smart audience targeting.',
    metrics: [
      { label: 'ROAS Increase', value: '+300%', icon: TrendingUp },
      { label: 'Ad Spend', value: '$50K', icon: DollarSign },
      { label: 'Revenue', value: '$200K', icon: Target },
    ],
    color: 'from-violet-500 to-purple-500',
  },
  {
    client: 'GlowUp Beauty',
    industry: 'Beauty & Wellness',
    title: 'AI Chatbot Driving 45% More Conversions',
    description: 'Implemented 24/7 AI chatbot that qualifies leads and handles customer support.',
    metrics: [
      { label: 'Conversion Rate', value: '+45%', icon: TrendingUp },
      { label: 'Tickets Handled', value: '80%', icon: Users },
      { label: 'Response Time', value: '<1min', icon: Target },
    ],
    color: 'from-fuchsia-500 to-pink-500',
  },
  {
    client: 'SwiftLogistics B2B',
    industry: 'B2B Services',
    title: 'From Zero to $120K in First Quarter',
    description: 'Complete digital transformation with new website, content strategy, and LinkedIn ads.',
    metrics: [
      { label: 'Revenue', value: '$120K', icon: DollarSign },
      { label: 'Leads', value: '250+', icon: Users },
      { label: 'Conversion', value: '12%', icon: TrendingUp },
    ],
    color: 'from-cyan-500 to-blue-500',
  },
];

export function Portfolio() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-violet-500/10 text-violet-400 text-sm font-medium mb-4">
            Case Studies
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Results That <span className="text-gradient">Speak</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real results from real clients. See how we have helped businesses scale with AI-powered marketing.
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-all duration-300 hover:-translate-y-1"
            >
              {/* Gradient Background on Hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${study.color} rounded-2xl opacity-0 group-hover:opacity-5 transition-opacity`} />

              {/* Content */}
              <div className="relative">
                {/* Industry Tag */}
                <span className="inline-block px-3 py-1 rounded-full bg-white/10 text-xs text-muted-foreground mb-4">
                  {study.industry}
                </span>

                {/* Client */}
                <h4 className="text-sm text-violet-400 font-medium mb-2">{study.client}</h4>

                {/* Title */}
                <h3 className="text-xl font-semibold text-white mb-3">{study.title}</h3>

                {/* Description */}
                <p className="text-muted-foreground mb-6">{study.description}</p>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  {study.metrics.map((metric, mIndex) => (
                    <div key={mIndex} className="text-center p-3 rounded-lg bg-white/5">
                      <metric.icon className="w-4 h-4 text-violet-400 mx-auto mb-1" />
                      <div className="text-lg font-bold text-white">{metric.value}</div>
                      <div className="text-xs text-muted-foreground">{metric.label}</div>
                    </div>
                  ))}
                </div>

                {/* Link */}
                <Link 
                  to="/portfolio" 
                  className="inline-flex items-center gap-2 text-sm font-medium text-violet-400 hover:text-violet-300 transition-colors"
                >
                  View full case study
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link to="/portfolio">
            <Button variant="outline" className="border-white/20 text-white hover:bg-white/10">
              View All Case Studies
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
