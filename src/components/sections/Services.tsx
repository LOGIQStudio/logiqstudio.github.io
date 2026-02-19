import { 
  Megaphone, 
  Palette, 
  Globe, 
  Bot, 
  FileText, 
  BarChart3,
  ArrowRight,
  Check
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const services = [
  {
    icon: Megaphone,
    title: 'AI Ad Campaigns',
    description: 'Data-driven advertising across Google, Meta, TikTok, and LinkedIn with AI-optimized targeting and creatives.',
    features: [
      'AI-generated ad creatives',
      'Smart audience targeting',
      'Real-time bid optimization',
      'A/B testing at scale',
    ],
    color: 'from-violet-500 to-purple-500',
  },
  {
    icon: Palette,
    title: 'Creative Production',
    description: 'High-converting visuals and videos generated and refined by AI, polished by human designers.',
    features: [
      'AI image generation',
      'Video ad production',
      'Brand identity design',
      'Motion graphics',
    ],
    color: 'from-fuchsia-500 to-pink-500',
  },
  {
    icon: Globe,
    title: 'Web Development',
    description: 'Lightning-fast, conversion-optimized websites built with modern tech and AI-enhanced UX.',
    features: [
      'React & Next.js development',
      'AI chatbot integration',
      'Conversion optimization',
      'Performance tuning',
    ],
    color: 'from-cyan-500 to-blue-500',
  },
  {
    icon: Bot,
    title: 'AI Chatbots',
    description: 'Intelligent conversational agents that qualify leads, support customers, and drive sales 24/7.',
    features: [
      'Custom AI training',
      'Multi-platform deployment',
      'Lead qualification',
      'CRM integration',
    ],
    color: 'from-emerald-500 to-teal-500',
  },
  {
    icon: FileText,
    title: 'Content Strategy',
    description: 'SEO-optimized content that ranks and converts, powered by AI research and human expertise.',
    features: [
      'AI content generation',
      'SEO optimization',
      'Social media management',
      'Email marketing',
    ],
    color: 'from-orange-500 to-amber-500',
  },
  {
    icon: BarChart3,
    title: 'Analytics & Insights',
    description: 'Deep-dive analytics and actionable insights to continuously improve your marketing performance.',
    features: [
      'Custom dashboards',
      'Attribution modeling',
      'Predictive analytics',
      'Weekly reports',
    ],
    color: 'from-rose-500 to-red-500',
  },
];

export function Services() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-violet-500/5 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-violet-500/10 text-violet-400 text-sm font-medium mb-4">
            Our Services
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Everything You Need to <span className="text-gradient">Scale</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Full-stack AI marketing services that combine cutting-edge technology with human expertise.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
              <div className="relative h-full p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-all duration-300 hover:-translate-y-1">
                {/* Icon */}
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <service.icon className="w-7 h-7 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-6">{service.description}</p>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Check className="w-4 h-4 text-violet-400 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Link */}
                <Link 
                  to="/services" 
                  className="inline-flex items-center gap-2 text-sm font-medium text-violet-400 hover:text-violet-300 transition-colors"
                >
                  Learn more
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link to="/services">
            <Button variant="outline" className="border-white/20 text-white hover:bg-white/10">
              View All Services
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
