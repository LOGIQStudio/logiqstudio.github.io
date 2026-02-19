import { Cpu, Users, Rocket } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: Cpu,
    title: 'AI Generation',
    description: 'Our proprietary AI stack (GPT-4, Gemini, Claude, Midjourney, RunwayML) generates hundreds of creative variants, copy options, and strategic angles in minutes.',
    color: 'from-violet-500 to-purple-500',
  },
  {
    number: '02',
    icon: Users,
    title: 'Human Refinement',
    description: 'Expert marketers hand-pick the best outputs, refine messaging, align with brand voice, and optimize for your specific audience and platform.',
    color: 'from-fuchsia-500 to-pink-500',
  },
  {
    number: '03',
    icon: Rocket,
    title: 'Data-Driven Launch',
    description: 'We deploy, A/B test, and continuously optimize using real-time analytics. You get performance reports with actionable insights every week.',
    color: 'from-cyan-500 to-blue-500',
  },
];

export function Process() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-fuchsia-500/5 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-cyan-500/10 text-cyan-400 text-sm font-medium mb-4">
            Our Approach
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Hybrid <span className="text-gradient">AI + Human</span> Process
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            AI generates, humans refine. Every deliverable passes through our three-stage hybrid pipeline for maximum quality and ROI.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative group">
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-16 left-[60%] w-[80%] h-px bg-gradient-to-r from-white/20 to-transparent" />
              )}

              <div className="relative p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-all duration-300">
                {/* Number Badge */}
                <div className="absolute -top-4 -left-2 w-10 h-10 rounded-lg bg-gradient-to-br from-violet-500 to-fuchsia-500 flex items-center justify-center text-white font-bold text-sm">
                  {step.number}
                </div>

                {/* Icon */}
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center mb-6 mt-4 group-hover:scale-110 transition-transform`}>
                  <step.icon className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-white mb-3">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
