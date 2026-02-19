import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'James K.',
    role: 'CEO, NovaTech eCommerce',
    content: 'LOGIQ Studio transformed our ad performance completely. Their AI-generated creatives combined with strategic human oversight gave us results we never thought possible at this budget level.',
    result: '+300% ROAS in 60 days',
    avatar: 'JK',
    rating: 5,
  },
  {
    name: 'Sarah L.',
    role: 'Founder, GlowUp Beauty',
    content: 'The AI chatbot they built handles 80% of our support tickets and has directly increased our monthly sales by qualifying leads 24/7. Implementation was smooth and fast.',
    result: '+45% lead conversion rate',
    avatar: 'SL',
    rating: 5,
  },
  {
    name: 'Michael R.',
    role: 'COO, SwiftLogistics B2B',
    content: 'We went from zero online presence to a fully functioning marketing machine in under two weeks. The website, content, and ad campaigns were all delivered on time and on budget.',
    result: '$120K revenue in first quarter',
    avatar: 'MR',
    rating: 5,
  },
  {
    name: 'Anna P.',
    role: 'Marketing Director, EduSpark',
    content: 'Their content strategy saved us 30+ hours per month. The AI-generated posts consistently outperform what our in-house team was producing — and at a fraction of the cost.',
    result: '+200% social engagement',
    avatar: 'AP',
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-violet-500/5 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-fuchsia-500/10 text-fuchsia-400 text-sm font-medium mb-4">
            Client Results
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            What Our <span className="text-gradient">Clients Say</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Do not just take our word for it — hear from the brands we have helped scale.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-all duration-300"
            >
              {/* Quote Icon */}
              <Quote className="absolute top-6 right-6 w-8 h-8 text-violet-500/20" />

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>

              {/* Content */}
              <p className="text-white/90 mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>

              {/* Result Badge */}
              <div className="inline-block px-4 py-2 rounded-lg bg-violet-500/10 border border-violet-500/20 mb-6">
                <span className="text-sm font-medium text-violet-400">{testimonial.result}</span>
              </div>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-violet-500 to-fuchsia-500 flex items-center justify-center text-white font-semibold">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="text-white font-medium">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
