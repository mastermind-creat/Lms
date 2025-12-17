
import React from 'react';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { blogPosts } from '../data/blogPosts';

const Blog: React.FC = () => {
  // Use the shared data source instead of hardcoded articles
  const featuredPost = blogPosts[0];
  const otherPosts = blogPosts.slice(1);

  return (
    <div className="pt-24 pb-20 bg-white dark:bg-gray-900 min-h-screen transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <span className="text-brand-500 font-bold text-xs uppercase tracking-widest mb-2 block">Our Blog</span>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Insights & Stories
          </h1>
          <p className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
            Stay updated with the latest tech trends, career advice, and success stories from the ElimuTech community.
          </p>
        </div>

        {/* Featured Post (First one) */}
        {featuredPost && (
          <div className="mb-16 animate-fade-in-up [animation-delay:100ms]">
            <Link to={`/blog/${featuredPost.id}`} className="group relative block rounded-3xl overflow-hidden aspect-[21/9] w-full shadow-2xl">
              <img 
                src={featuredPost.image} 
                alt={featuredPost.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6 md:p-12 max-w-3xl">
                <span className="inline-block px-3 py-1 rounded-full bg-brand-500 text-white text-xs font-bold mb-4 shadow-lg">
                  {featuredPost.category}
                </span>
                <h2 className="text-2xl md:text-4xl font-bold text-white mb-4 leading-tight group-hover:text-brand-300 transition-colors">
                  {featuredPost.title}
                </h2>
                <p className="text-gray-300 text-sm md:text-lg mb-6 line-clamp-2 md:line-clamp-none">
                  {featuredPost.excerpt}
                </p>
                <div className="flex items-center gap-6 text-sm text-gray-400 font-medium">
                  <div className="flex items-center gap-2">
                    <User size={16} /> {featuredPost.author}
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar size={16} /> {featuredPost.date}
                  </div>
                </div>
              </div>
            </Link>
          </div>
        )}

        {/* Grid for other posts */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {otherPosts.map((article, index) => (
            <Link 
              key={article.id} 
              to={`/blog/${article.id}`} 
              className="group flex flex-col bg-gray-50 dark:bg-gray-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 animate-fade-in-up border border-gray-100 dark:border-gray-800"
              style={{ animationDelay: `${(index + 2) * 100}ms` }}
            >
              <div className="aspect-video relative overflow-hidden">
                <img 
                  src={article.image} 
                  alt={article.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-gray-900 dark:text-white shadow-sm">
                  {article.category}
                </div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center gap-4 text-xs text-gray-500 dark:text-gray-400 mb-3 font-medium">
                  <span className="flex items-center gap-1"><Calendar size={12} /> {article.date}</span>
                  <span className="flex items-center gap-1"><User size={12} /> {article.author}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-brand-500 dark:group-hover:text-brand-400 transition-colors line-clamp-2">
                  {article.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-3 flex-grow leading-relaxed">
                  {article.excerpt}
                </p>
                <div className="flex items-center text-brand-600 dark:text-brand-400 text-sm font-bold mt-auto group-hover:gap-2 transition-all">
                  Read Article <ArrowRight size={16} className="ml-1" />
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Blog;
