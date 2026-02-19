import { Zap, Target, Users, Sparkles, ArrowRight, Linkedin, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const values = [
  {
    icon: Zap,
    title: 'Innovation First',
    description: 'We are always testing and integrating the latest AI tools to stay ahead of the curve.',
  },
  {
    icon: Target,
    title: 'Results-Driven',
    description: 'Everything we do is measured by the impact it has on your bottom line.',
  },
  {
    icon: Users,
    title: 'Human + AI',
    description: 'We believe the best results come from combining AI efficiency with human creativity.',
  },
  {
    icon: Sparkles,
    title: 'Transparency',
    description: 'Clear reporting, honest communication, and no hidden fees. Ever.',
  },
];

const team = [
  {
    name: 'Alex Chen',
    role: 'Founder & CEO',
    bio: 'Former Google ads strategist with 10+ years in digital marketing.',
    avatar: 'AC',
  },
  {
    name: 'Maria Santos',
    role: 'Head of AI',
    bio: 'AI researcher and prompt engineering expert.',
    avatar: 'MS',
  },
  {
    name: 'James Wilson',
    role: 'Creative Director',
    bio: 'Award-winning designer with a passion for AI-generated art.',
    avatar: 'JW',
  },
  {
    name: 'Sarah Kim',
    role: 'Head of Strategy',
    bio: 'Ex-McKinsey consultant specializing in growth marketing.',
    avatar: 'SK',
  },
];

const stats = [
  { value: '150+', label: 'Campaigns Launched' },
  { value: '$2.4M', label: 'Revenue Generated' },
  { value: '4.8×', label: 'Average ROAS' },
  { value: '60+', label: 'Happy Clients' },
];

export function About() {
  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-violet-500/10 to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-block px-4 py-1.5 rounded-full bg-violet-500/10 text-violet-400 text-sm font-medium mb-4">
              About Us
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              We Are <span className="text-gradient">LOGIQ Studio</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              A hybrid AI marketing agency on a mission to help businesses scale faster, 
              smarter, and more efficiently than ever before.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Our Story</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  LOGIQ Studio was founded in 2024 with a simple belief: the future of marketing 
                  lies in the perfect marriage of artificial intelligence and human creativity.
                </p>
                <p>
                  After years of working in traditional agencies, our founders saw an opportunity 
                  to revolutionize the industry. AI could handle the repetitive, data-heavy tasks 
                  while humans focused on strategy, creativity, and client relationships.
                </p>
                <p>
                  Today, we are a team of marketers, designers, and AI specialists who have helped 
                  over 60 businesses achieve an average 4.8× ROAS. We have generated over $2.4M in 
                  revenue for our clients and launched 150+ successful campaigns.
                </p>
                <p>
                  But numbers only tell part of the story. What drives us is seeing our clients 
                  grow, scale, and achieve things they never thought possible.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <div key={index} className="p-6 rounded-2xl bg-white/5 border border-white/10 text-center">
                  <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-violet-500/5 to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Our Values</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div key={index} className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-all">
                <div className="w-12 h-12 rounded-lg bg-violet-500/20 flex items-center justify-center mb-4">
                  <value.icon className="w-6 h-6 text-violet-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Meet the Team</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The humans behind the AI. Our team brings together expertise in marketing, 
              design, and artificial intelligence.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <div key={index} className="group p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-all text-center">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-violet-500 to-fuchsia-500 flex items-center justify-center mx-auto mb-4 text-white text-xl font-bold">
                  {member.avatar}
                </div>
                <h3 className="text-lg font-semibold text-white mb-1">{member.name}</h3>
                <p className="text-sm text-violet-400 mb-2">{member.role}</p>
                <p className="text-sm text-muted-foreground mb-4">{member.bio}</p>
                <div className="flex justify-center gap-2">
                  <button className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-muted-foreground hover:text-white hover:bg-white/10 transition-all">
                    <Linkedin className="w-4 h-4" />
                  </button>
                  <button className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-muted-foreground hover:text-white hover:bg-white/10 transition-all">
                    <Twitter className="w-4 h-4" />
                  </button>
                </div>
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
              Want to Work With Us?
            </h2>
            <p className="text-muted-foreground mb-8">
              We are always looking for new challenges and exciting projects. 
              Let us discuss how we can help you grow.
            </p>
            <Link to="/contact">
              <Button size="lg" className="bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white border-0">
                Get in Touch
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
