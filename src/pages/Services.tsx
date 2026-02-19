import { 
  Megaphone, 
  Palette, 
  Globe, 
  Bot, 
  FileText, 
  BarChart3,
  ArrowRight,
  Check,
  Sparkles,
  Zap,
  Target
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const mainServices = [
  {
    icon: Megaphone,
    title: 'AI Ad Campaigns',
    shortDesc: 'Data-driven advertising across all major platforms',
    fullDescription: 'We create and manage high-performing ad campaigns across Google Ads, Meta (Facebook & Instagram), TikTok, LinkedIn, and more. Our AI generates hundreds of creative variants, identifies the best-performing audiences, and optimizes bids in real-time for maximum ROAS.',
    benefits: [
      'AI-generated ad creatives that convert',
      'Smart audience targeting and lookalike modeling',
      'Real-time bid optimization',
      'Continuous A/B testing at scale',
      'Cross-platform attribution tracking',
    ],
    deliverables: [
      'Campaign strategy & setup',
      'AI-generated creatives (images & videos)',
      'Copy variations for testing',
      'Weekly optimization reports',
      'Monthly strategy calls',
    ],
    color: 'from-violet-500 to-purple-500',
  },
  {
    icon: Palette,
    title: 'Creative Production',
    shortDesc: 'High-converting visuals and videos',
    fullDescription: 'Our creative team uses AI tools like Midjourney, DALL-E, and RunwayML to generate stunning visuals and videos at scale. Every asset is then refined by human designers to match your brand identity and campaign goals.',
    benefits: [
      '10x faster creative production',
      'Consistent brand identity',
      'Unlimited creative variations',
      'Platform-optimized formats',
      'Cost-effective scaling',
    ],
    deliverables: [
      'Brand style guide',
      'Social media graphics',
      'Video ads & motion graphics',
      'Display banners',
      'Landing page designs',
    ],
    color: 'from-fuchsia-500 to-pink-500',
  },
  {
    icon: Globe,
    title: 'Web Development',
    shortDesc: 'Lightning-fast, conversion-optimized websites',
    fullDescription: 'We build modern, high-performance websites using React, Next.js, and other cutting-edge technologies. Every site is optimized for speed, SEO, and conversions, with AI-enhanced user experiences.',
    benefits: [
      'Sub-second load times',
      'SEO-optimized structure',
      'Mobile-first design',
      'AI chatbot integration',
      'Conversion rate optimization',
    ],
    deliverables: [
      'Custom website design',
      'Frontend & backend development',
      'CMS integration',
      'Analytics setup',
      'Ongoing maintenance',
    ],
    color: 'from-cyan-500 to-blue-500',
  },
  {
    icon: Bot,
    title: 'AI Chatbots',
    shortDesc: 'Intelligent conversational agents',
    fullDescription: 'We build custom AI chatbots that qualify leads, answer questions, and drive sales 24/7. Our bots are trained on your business data and integrate seamlessly with your existing tools.',
    benefits: [
      '24/7 lead qualification',
      'Instant customer support',
      'Higher conversion rates',
      'Reduced support costs',
      'CRM & tool integration',
    ],
    deliverables: [
      'Custom AI model training',
      'Multi-platform deployment',
      'Conversation flow design',
      'Knowledge base setup',
      'Performance analytics',
    ],
    color: 'from-emerald-500 to-teal-500',
  },
  {
    icon: FileText,
    title: 'Content Strategy',
    shortDesc: 'SEO-optimized content that ranks and converts',
    fullDescription: 'Our content team combines AI research with human expertise to create content that drives organic traffic and conversions. From blog posts to social media, we handle it all.',
    benefits: [
      'AI-accelerated research',
      'SEO-optimized content',
      'Consistent publishing schedule',
      'Multi-format content',
      'Performance tracking',
    ],
    deliverables: [
      'Content strategy & calendar',
      'Blog posts & articles',
      'Social media content',
      'Email campaigns',
      'SEO optimization',
    ],
    color: 'from-orange-500 to-amber-500',
  },
  {
    icon: BarChart3,
    title: 'Analytics & Insights',
    shortDesc: 'Deep-dive analytics and actionable insights',
    fullDescription: 'We provide comprehensive analytics and reporting to help you understand what is working and what is not. Our dashboards give you real-time visibility into your marketing performance.',
    benefits: [
      'Real-time performance tracking',
      'Custom dashboard creation',
      'Attribution modeling',
      'Predictive analytics',
      'Actionable recommendations',
    ],
    deliverables: [
      'Custom analytics dashboard',
      'Weekly performance reports',
      'Monthly strategy reviews',
      'Attribution analysis',
      'Competitive insights',
    ],
    color: 'from-rose-500 to-red-500',
  },
];

const whyChooseUs = [
  {
    icon: Zap,
    title: '10x Faster Delivery',
    description: 'AI-powered workflows mean we deliver in days what takes others weeks.',
  },
  {
    icon: Target,
    title: 'Higher ROI',
    description: 'Our clients see an average 4.8× ROAS within the first 90 days.',
  },
  {
    icon: Sparkles,
    title: 'Cutting-Edge Tech',
    description: 'We use the latest AI tools and constantly test new technologies.',
  },
];

export function Services() {
  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-violet-500/10 to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-block px-4 py-1.5 rounded-full bg-violet-500/10 text-violet-400 text-sm font-medium mb-4">
              Our Services
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Full-Stack <span className="text-gradient">AI Marketing</span> Services
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Everything you need to scale your business, powered by cutting-edge AI and human expertise.
            </p>
            <Link to="/contact">
              <Button size="lg" className="bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white border-0">
                Get Free Consultation
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {mainServices.map((service, index) => (
              <div key={index} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-white mb-4">{service.title}</h2>
                  <p className="text-lg text-muted-foreground mb-6">{service.fullDescription}</p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-white font-semibold mb-3">Benefits</h4>
                      <ul className="space-y-2">
                        {service.benefits.map((benefit, bIndex) => (
                          <li key={bIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <Check className="w-4 h-4 text-violet-400 flex-shrink-0 mt-0.5" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-3">Deliverables</h4>
                      <ul className="space-y-2">
                        {service.deliverables.map((deliverable, dIndex) => (
                          <li key={dIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <Check className="w-4 h-4 text-fuchsia-400 flex-shrink-0 mt-0.5" />
                            {deliverable}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="aspect-square rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 p-8 flex items-center justify-center">
                    <div className={`w-32 h-32 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center opacity-80`}>
                      <service.icon className="w-16 h-16 text-white" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-violet-500/5 to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Why Choose <span className="text-gradient">LOGIQ Studio</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="text-center p-8 rounded-2xl bg-white/5 border border-white/10">
                <div className="w-14 h-14 rounded-xl bg-violet-500/20 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-7 h-7 text-violet-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center p-12 rounded-3xl bg-gradient-to-r from-violet-500/20 to-fuchsia-500/20 border border-violet-500/30">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-muted-foreground mb-8">
              Book a free consultation and let us discuss how we can help scale your business.
            </p>
            <Link to="/contact">
              <Button size="lg" className="bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white border-0">
                Book Free Consultation
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
