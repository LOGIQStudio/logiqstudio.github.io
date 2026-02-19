import { useState } from 'react';
import { Mail, Send, Clock, Check, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

const contactInfo = [
  {
    icon: Mail,
    title: 'Email',
    value: 'hellologiqstudio@gmail.com',
    href: 'mailto:hellologiqstudio@gmail.com',
  },
  {
    icon: Send,
    title: 'Telegram',
    value: '@logiqstudio',
    href: 'https://t.me/logiqstudio',
  },
  {
    icon: Clock,
    title: 'Response Time',
    value: 'Within 24 hours',
    href: null,
  },
];

const services = [
  'AI Ad Campaigns',
  'Creative Production',
  'Web Development',
  'AI Chatbots',
  'Content Strategy',
  'Analytics & Insights',
];

const budgets = [
  '$1,000 - $2,500',
  '$2,500 - $5,000',
  '$5,000 - $10,000',
  '$10,000+',
];

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    budget: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        company: '',
        service: '',
        budget: '',
        message: '',
      });
    }, 3000);
  };

  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-violet-500/10 to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-block px-4 py-1.5 rounded-full bg-violet-500/10 text-violet-400 text-sm font-medium mb-4">
              Contact Us
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Let Us <span className="text-gradient">Talk</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Ready to scale your business with AI? Get in touch and let us discuss 
              how we can help you achieve your goals.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-bold text-white mb-6">Get in Touch</h2>
              <p className="text-muted-foreground mb-8">
                Fill out the form and we will get back to you within 24 hours. 
                Or reach out directly using the contact info below.
              </p>

              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-violet-500/20 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-violet-400" />
                    </div>
                    <div>
                      <h4 className="text-white font-medium mb-1">{item.title}</h4>
                      {item.href ? (
                        <a 
                          href={item.href} 
                          className="text-muted-foreground hover:text-violet-400 transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-muted-foreground">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Trust Badges */}
              <div className="mt-12 p-6 rounded-2xl bg-white/5 border border-white/10">
                <h4 className="text-white font-medium mb-4">What to Expect</h4>
                <ul className="space-y-3">
                  {[
                    'Free 30-minute consultation',
                    'Custom growth strategy',
                    'No obligation, no pressure',
                    'Response within 24 hours',
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="p-8 rounded-2xl bg-white/5 border border-white/10">
                {isSubmitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 rounded-full bg-emerald-500/20 flex items-center justify-center mx-auto mb-4">
                      <Check className="w-8 h-8 text-emerald-400" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                    <p className="text-muted-foreground">
                      Thank you for reaching out. We will get back to you within 24 hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-white">Name *</Label>
                        <Input
                          id="name"
                          placeholder="Your name"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          required
                          className="bg-white/5 border-white/10 text-white placeholder:text-muted-foreground focus:border-violet-500"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-white">Email *</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="you@company.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          required
                          className="bg-white/5 border-white/10 text-white placeholder:text-muted-foreground focus:border-violet-500"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="company" className="text-white">Company</Label>
                      <Input
                        id="company"
                        placeholder="Your company name"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="bg-white/5 border-white/10 text-white placeholder:text-muted-foreground focus:border-violet-500"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="service" className="text-white">Service Interested In</Label>
                        <select
                          id="service"
                          value={formData.service}
                          onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                          className="w-full h-10 px-3 rounded-md bg-white/5 border border-white/10 text-white focus:border-violet-500 focus:outline-none"
                        >
                          <option value="" className="bg-background">Select a service</option>
                          {services.map((service, index) => (
                            <option key={index} value={service} className="bg-background">{service}</option>
                          ))}
                        </select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="budget" className="text-white">Monthly Budget</Label>
                        <select
                          id="budget"
                          value={formData.budget}
                          onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                          className="w-full h-10 px-3 rounded-md bg-white/5 border border-white/10 text-white focus:border-violet-500 focus:outline-none"
                        >
                          <option value="" className="bg-background">Select budget range</option>
                          {budgets.map((budget, index) => (
                            <option key={index} value={budget} className="bg-background">{budget}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-white">Message *</Label>
                      <Textarea
                        id="message"
                        placeholder="Tell us about your project and goals..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        required
                        rows={5}
                        className="bg-white/5 border-white/10 text-white placeholder:text-muted-foreground focus:border-violet-500 resize-none"
                      />
                    </div>

                    <Button 
                      type="submit" 
                      size="lg"
                      className="w-full bg-gradient-to-r from-violet-500 to-fuchsia-500 hover:from-violet-600 hover:to-fuchsia-600 text-white border-0"
                    >
                      Send Message
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
