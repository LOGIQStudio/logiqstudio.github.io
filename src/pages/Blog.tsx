import { useState } from 'react';
import { ArrowRight, Calendar, Clock, User, Tag } from 'lucide-react';

const categories = ['All', 'AI Marketing', 'Strategy', 'Case Studies', 'Tools', 'Trends'];

const posts = [
  {
    id: 1,
    title: 'How AI is Revolutionizing Digital Marketing in 2026',
    excerpt: 'Discover the latest AI tools and techniques that are transforming how businesses approach marketing.',
    category: 'AI Marketing',
    author: 'Alex Chen',
    date: 'Feb 15, 2026',
    readTime: '8 min read',
    featured: true,
  },
  {
    id: 2,
    title: 'The Complete Guide to AI-Generated Ad Creatives',
    excerpt: 'Learn how to use Midjourney, DALL-E, and RunwayML to create stunning ad visuals at scale.',
    category: 'Tools',
    author: 'James Wilson',
    date: 'Feb 10, 2026',
    readTime: '12 min read',
    featured: false,
  },
  {
    id: 3,
    title: 'Case Study: How We Achieved 300% ROAS with AI',
    excerpt: 'A deep dive into our strategy for NovaTech eCommerce and the results we achieved.',
    category: 'Case Studies',
    author: 'Sarah Kim',
    date: 'Feb 5, 2026',
    readTime: '10 min read',
    featured: false,
  },
  {
    id: 4,
    title: 'Building AI Chatbots That Actually Convert',
    excerpt: 'Best practices for designing conversational AI that qualifies leads and drives sales.',
    category: 'Strategy',
    author: 'Maria Santos',
    date: 'Jan 28, 2026',
    readTime: '15 min read',
    featured: false,
  },
  {
    id: 5,
    title: 'Top 10 Marketing AI Tools for 2026',
    excerpt: 'Our curated list of the most powerful AI tools every marketer should know about.',
    category: 'Tools',
    author: 'Alex Chen',
    date: 'Jan 20, 2026',
    readTime: '6 min read',
    featured: false,
  },
  {
    id: 6,
    title: 'The Future of Content Marketing with AI',
    excerpt: 'How AI is changing content creation and what it means for your strategy.',
    category: 'Trends',
    author: 'Sarah Kim',
    date: 'Jan 15, 2026',
    readTime: '9 min read',
    featured: false,
  },
];

export function Blog() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredPosts = activeCategory === 'All' 
    ? posts 
    : posts.filter(p => p.category === activeCategory);

  const featuredPost = posts.find(p => p.featured);
  const regularPosts = filteredPosts.filter(p => !p.featured || activeCategory !== 'All');

  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-violet-500/10 to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-block px-4 py-1.5 rounded-full bg-violet-500/10 text-violet-400 text-sm font-medium mb-4">
              Blog
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Insights & <span className="text-gradient">Resources</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              The latest trends, strategies, and insights in AI-powered marketing.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {activeCategory === 'All' && featuredPost && (
        <section className="pb-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="p-8 rounded-2xl bg-gradient-to-r from-violet-500/20 to-fuchsia-500/20 border border-violet-500/30">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <span className="inline-block px-3 py-1 rounded-full bg-violet-500/20 text-violet-400 text-sm mb-4">
                    Featured
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                    {featuredPost.title}
                  </h2>
                  <p className="text-muted-foreground mb-6">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                    <span className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      {featuredPost.author}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {featuredPost.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {featuredPost.readTime}
                    </span>
                  </div>
                  <button className="inline-flex items-center gap-2 text-violet-400 hover:text-violet-300 transition-colors">
                    Read Article
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
                <div className="aspect-video rounded-xl bg-white/5 flex items-center justify-center">
                  <div className="w-24 h-24 rounded-xl bg-gradient-to-br from-violet-500 to-fuchsia-500 flex items-center justify-center">
                    <Tag className="w-10 h-10 text-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Filter */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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

      {/* Posts Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post) => (
              <article
                key={post.id}
                className="group p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-all duration-300"
              >
                {/* Category */}
                <span className="inline-block px-3 py-1 rounded-full bg-white/10 text-xs text-muted-foreground mb-4">
                  {post.category}
                </span>

                {/* Title */}
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-violet-400 transition-colors">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-muted-foreground mb-4">
                  {post.excerpt}
                </p>

                {/* Meta */}
                <div className="flex items-center gap-3 text-xs text-muted-foreground mb-4">
                  <span className="flex items-center gap-1">
                    <User className="w-3 h-3" />
                    {post.author}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {post.readTime}
                  </span>
                </div>

                {/* Link */}
                <button className="inline-flex items-center gap-2 text-sm font-medium text-violet-400 hover:text-violet-300 transition-colors">
                  Read more
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center p-12 rounded-3xl bg-gradient-to-r from-violet-500/20 to-fuchsia-500/20 border border-violet-500/30">
            <h2 className="text-3xl font-bold text-white mb-4">
              Subscribe to Our Newsletter
            </h2>
            <p className="text-muted-foreground mb-8">
              Get the latest AI marketing insights delivered to your inbox. No spam, unsubscribe anytime.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 h-12 px-4 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-muted-foreground focus:border-violet-500 focus:outline-none"
              />
              <button
                type="submit"
                className="h-12 px-6 rounded-lg bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white font-medium hover:from-violet-600 hover:to-fuchsia-600 transition-all"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
