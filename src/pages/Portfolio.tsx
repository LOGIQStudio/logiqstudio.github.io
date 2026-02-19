import { useState } from 'react';
import { ArrowRight, TrendingUp, Users, DollarSign, Target, Filter, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const categories = ['All', 'eCommerce', 'SaaS', 'B2B', 'Healthcare', 'Beauty'];

const caseStudies = [
  {
    id: 1,
    client: 'NovaTech eCommerce',
    industry: 'eCommerce',
    title: '300% ROAS Increase in 60 Days',
    description: 'Revamped entire ad strategy with AI-generated creatives and smart audience targeting for a consumer electronics brand.',
    challenge: 'High CPA and low conversion rates on existing campaigns.',
    solution: 'Implemented AI-generated creatives, lookalike audiences, and dynamic product ads.',
    metrics: [
      { label: 'ROAS Increase', value: '+300%', icon: TrendingUp },
      { label: 'Ad Spend', value: '$50K', icon: DollarSign },
      { label: 'Revenue', value: '$200K', icon: Target },
      { label: 'CPA Reduction', value: '-45%', icon: Users },
    ],
    testimonial: {
      quote: 'LOGIQ Studio transformed our ad performance completely. Their AI-generated creatives gave us results we never thought possible.',
      author: 'James K.',
      role: 'CEO',
    },
    color: 'from-violet-500 to-purple-500',
  },
  {
    id: 2,
    client: 'GlowUp Beauty',
    industry: 'Beauty',
    title: 'AI Chatbot Driving 45% More Conversions',
    description: 'Implemented 24/7 AI chatbot that qualifies leads and handles customer support for a DTC beauty brand.',
    challenge: 'High volume of support tickets and missed sales opportunities.',
    solution: 'Custom AI chatbot trained on product catalog and brand voice.',
    metrics: [
      { label: 'Conversion Rate', value: '+45%', icon: TrendingUp },
      { label: 'Tickets Handled', value: '80%', icon: Users },
      { label: 'Response Time', value: '<1min', icon: Target },
      { label: 'Sales Increase', value: '+30%', icon: DollarSign },
    ],
    testimonial: {
      quote: 'The AI chatbot handles 80% of our support and has directly increased our monthly sales.',
      author: 'Sarah L.',
      role: 'Founder',
    },
    color: 'from-fuchsia-500 to-pink-500',
  },
  {
    id: 3,
    client: 'SwiftLogistics B2B',
    industry: 'B2B',
    title: 'From Zero to $120K in First Quarter',
    description: 'Complete digital transformation with new website, content strategy, and LinkedIn ads for a logistics company.',
    challenge: 'Zero online presence and no lead generation system.',
    solution: 'Full-funnel marketing: website, content, LinkedIn ads, and email nurture.',
    metrics: [
      { label: 'Revenue', value: '$120K', icon: DollarSign },
      { label: 'Leads Generated', value: '250+', icon: Users },
      { label: 'Conversion Rate', value: '12%', icon: TrendingUp },
      { label: 'Website Traffic', value: '+500%', icon: Target },
    ],
    testimonial: {
      quote: 'We went from zero to a fully functioning marketing machine in under two weeks.',
      author: 'Michael R.',
      role: 'COO',
    },
    color: 'from-cyan-500 to-blue-500',
  },
  {
    id: 4,
    client: 'EduSpark',
    industry: 'SaaS',
    title: '200% Social Engagement Increase',
    description: 'AI-powered content strategy that saved 30+ hours per month for an ed-tech startup.',
    challenge: 'Inconsistent social presence and time-consuming content creation.',
    solution: 'AI content generation with human refinement and automated posting.',
    metrics: [
      { label: 'Social Engagement', value: '+200%', icon: TrendingUp },
      { label: 'Time Saved', value: '30h/mo', icon: Users },
      { label: 'Follower Growth', value: '+150%', icon: Target },
      { label: 'Lead Quality', value: '+60%', icon: DollarSign },
    ],
    testimonial: {
      quote: 'Their content strategy saved us 30+ hours per month while outperforming our in-house team.',
      author: 'Anna P.',
      role: 'Marketing Director',
    },
    color: 'from-emerald-500 to-teal-500',
  },
  {
    id: 5,
    client: 'MediCare Plus',
    industry: 'Healthcare',
    title: 'HIPAA-Compliant AI Chatbot',
    description: 'Built a secure AI chatbot for patient intake and appointment scheduling.',
    challenge: 'Long wait times for patient intake and scheduling.',
    solution: 'HIPAA-compliant AI chatbot with EHR integration.',
    metrics: [
      { label: 'Wait Time', value: '-70%', icon: TrendingUp },
      { label: 'Appointments', value: '+40%', icon: Users },
      { label: 'Accuracy', value: '99%', icon: Target },
      { label: 'Cost Savings', value: '$50K/yr', icon: DollarSign },
    ],
    testimonial: {
      quote: 'The chatbot has transformed our patient experience while maintaining full compliance.',
      author: 'Dr. Emily Chen',
      role: 'Medical Director',
    },
    color: 'from-orange-500 to-amber-500',
  },
  {
    id: 6,
    client: 'CloudSync',
    industry: 'SaaS',
    title: '5× Increase in Demo Requests',
    description: 'Complete marketing overhaul including website, content, and paid acquisition for a B2B SaaS.',
    challenge: 'Low demo conversion and high customer acquisition costs.',
    solution: 'New website, AI content, and targeted LinkedIn + Google campaigns.',
    metrics: [
      { label: 'Demo Requests', value: '5×', icon: TrendingUp },
      { label: 'CAC Reduction', value: '-40%', icon: DollarSign },
      { label: 'MQL Quality', value: '+80%', icon: Users },
      { label: 'Pipeline', value: '$2M', icon: Target },
    ],
    testimonial: {
      quote: 'LOGIQ Studio helped us build a predictable pipeline that fuels our growth.',
      author: 'David Park',
      role: 'VP of Marketing',
    },
    color: 'from-rose-500 to-red-500',
  },
];

export function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredCases = activeCategory === 'All' 
    ? caseStudies 
    : caseStudies.filter(c => c.industry === activeCategory);

  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-violet-500/10 to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-block px-4 py-1.5 rounded-full bg-violet-500/10 text-violet-400 text-sm font-medium mb-4">
              Portfolio
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Results That <span className="text-gradient">Speak</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Real results from real clients. See how we have helped businesses across industries scale with AI-powered marketing.
            </p>
          </div>
        </div>
      </section>

      {/* Filter */}
      <section className="pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 mb-4">
            <Filter className="w-4 h-4 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">Filter by industry:</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  activeCategory === category
                    ? 'bg-violet-500 text-white'
                    : 'bg-white/5 text-muted-foreground hover:bg-white/10 hover:text-white'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredCases.map((study) => (
              <div
                key={study.id}
                className="group p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-all duration-300"
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <span className="inline-block px-3 py-1 rounded-full bg-white/10 text-xs text-muted-foreground mb-2">
                      {study.industry}
                    </span>
                    <h3 className="text-xl font-semibold text-white">{study.client}</h3>
                  </div>
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${study.color} flex items-center justify-center`}>
                    <TrendingUp className="w-6 h-6 text-white" />
                  </div>
                </div>

                {/* Title & Description */}
                <h4 className="text-2xl font-bold text-white mb-3">{study.title}</h4>
                <p className="text-muted-foreground mb-6">{study.description}</p>

                {/* Challenge & Solution */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                  <div className="p-4 rounded-lg bg-white/5">
                    <span className="text-xs text-violet-400 font-medium uppercase tracking-wider">Challenge</span>
                    <p className="text-sm text-muted-foreground mt-1">{study.challenge}</p>
                  </div>
                  <div className="p-4 rounded-lg bg-white/5">
                    <span className="text-xs text-fuchsia-400 font-medium uppercase tracking-wider">Solution</span>
                    <p className="text-sm text-muted-foreground mt-1">{study.solution}</p>
                  </div>
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-4 gap-4 mb-6">
                  {study.metrics.map((metric, mIndex) => (
                    <div key={mIndex} className="text-center p-3 rounded-lg bg-white/5">
                      <metric.icon className="w-4 h-4 text-violet-400 mx-auto mb-1" />
                      <div className="text-lg font-bold text-white">{metric.value}</div>
                      <div className="text-xs text-muted-foreground">{metric.label}</div>
                    </div>
                  ))}
                </div>

                {/* Testimonial */}
                <div className="p-4 rounded-lg bg-violet-500/5 border border-violet-500/20 mb-6">
                  <p className="text-sm text-white/80 italic mb-2">"{study.testimonial.quote}"</p>
                  <div className="text-xs text-muted-foreground">
                    — {study.testimonial.author}, {study.testimonial.role}
                  </div>
                </div>

                {/* Link */}
                <button className="inline-flex items-center gap-2 text-sm font-medium text-violet-400 hover:text-violet-300 transition-colors">
                  View full case study
                  <ExternalLink className="w-4 h-4" />
                </button>
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
              Want Results Like These?
            </h2>
            <p className="text-muted-foreground mb-8">
              Book a free audit and let us show you how we can help your business grow.
            </p>
            <Link to="/contact">
              <Button size="lg" className="bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white border-0">
                Get Free Audit
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
