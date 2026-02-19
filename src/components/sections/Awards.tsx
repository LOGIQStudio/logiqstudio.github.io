import { Award, Trophy, Medal, Star } from 'lucide-react';

const awards = [
  {
    title: 'Top AI Agency 2026',
    organization: 'MarTech Awards',
    icon: Trophy,
  },
  {
    title: 'Google Partner',
    organization: 'Certified Ads Partner',
    icon: Award,
  },
  {
    title: 'Meta Business Partner',
    organization: 'Certified Marketing',
    icon: Medal,
  },
  {
    title: 'Best ROI Agency',
    organization: 'GrowthHackers 2026',
    icon: Star,
  },
];

export function Awards() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-amber-500/10 text-amber-400 text-sm font-medium mb-4">
            Recognition
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Awards & <span className="text-gradient">Certifications</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Recognized by industry leaders for our innovative approach and outstanding results.
          </p>
        </div>

        {/* Awards Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {awards.map((award, index) => (
            <div
              key={index}
              className="group p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-amber-500/30 hover:bg-amber-500/5 transition-all duration-300 text-center"
            >
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <award.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-white font-semibold mb-1">{award.title}</h3>
              <p className="text-sm text-muted-foreground">{award.organization}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
