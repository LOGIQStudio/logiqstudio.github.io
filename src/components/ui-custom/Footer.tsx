import { Zap, Mail, Send, Twitter, Linkedin, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';

const footerLinks = {
  pages: [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Blog', href: '/blog' },
  ],
  company: [
    { name: 'About Us', href: '/about' },
    { name: 'Contact', href: '/contact' },
    { name: 'Careers', href: '#' },
    { name: 'Privacy Policy', href: '#' },
  ],
  services: [
    { name: 'AI Marketing', href: '/services' },
    { name: 'Ad Campaigns', href: '/services' },
    { name: 'Web Development', href: '/services' },
    { name: 'Chatbots', href: '/services' },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-500 to-fuchsia-500 flex items-center justify-center">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold">
                <span className="text-white">LOGIQ</span>
                <span className="text-gradient"> Studio</span>
              </span>
            </Link>
            <p className="text-muted-foreground mb-6 max-w-sm">
              Hybrid AI Marketing Agency. Scaling brands worldwide with AI-powered growth strategies.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-muted-foreground hover:text-white hover:bg-white/10 transition-all">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-muted-foreground hover:text-white hover:bg-white/10 transition-all">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-muted-foreground hover:text-white hover:bg-white/10 transition-all">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://t.me/logiqstudio" className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-muted-foreground hover:text-white hover:bg-white/10 transition-all">
                <Send className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Pages */}
          <div>
            <h4 className="text-white font-semibold mb-4">Pages</h4>
            <ul className="space-y-3">
              {footerLinks.pages.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-muted-foreground hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-muted-foreground hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-muted-foreground hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2 text-muted-foreground">
            <Mail className="w-4 h-4" />
            <a href="mailto:hellologiqstudio@gmail.com" className="hover:text-white transition-colors">
              hellologiqstudio@gmail.com
            </a>
          </div>
          <p className="text-muted-foreground text-sm">
            © 2026 LOGIQ Studio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
