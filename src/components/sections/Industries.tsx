import { 
  ShoppingBag, 
  Cloud, 
  Shirt, 
  Heart, 
  Wallet, 
  Bitcoin, 
  Building2, 
  Home, 
  GraduationCap, 
  Sparkles, 
  Coffee, 
  Plane 
} from 'lucide-react';

const industries = [
  { name: 'eCommerce', icon: ShoppingBag },
  { name: 'SaaS', icon: Cloud },
  { name: 'Fashion & DTC', icon: Shirt },
  { name: 'Healthcare', icon: Heart },
  { name: 'Fintech', icon: Wallet },
  { name: 'Crypto & Web3', icon: Bitcoin },
  { name: 'B2B Services', icon: Building2 },
  { name: 'Real Estate', icon: Home },
  { name: 'Education', icon: GraduationCap },
  { name: 'Beauty & Wellness', icon: Sparkles },
  { name: 'Food & Beverage', icon: Coffee },
  { name: 'Travel & Hospitality', icon: Plane },
];

export function Industries() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-fuchsia-500/10 text-fuchsia-400 text-sm font-medium mb-4">
            Industries We Serve
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            AI Marketing for <span className="text-gradient">Every Sector</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From scrappy startups to enterprise brands — our AI-powered strategies adapt to your industry.
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="group relative p-6 rounded-xl bg-white/5 border border-white/10 hover:border-violet-500/50 hover:bg-violet-500/5 transition-all duration-300 cursor-default"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center mb-3 group-hover:bg-violet-500/20 group-hover:scale-110 transition-all">
                  <industry.icon className="w-6 h-6 text-muted-foreground group-hover:text-violet-400 transition-colors" />
                </div>
                <span className="text-sm font-medium text-muted-foreground group-hover:text-white transition-colors">
                  {industry.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
