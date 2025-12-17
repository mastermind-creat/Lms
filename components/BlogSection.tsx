
import React from 'react';
import { Calendar, User, ArrowRight, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { blogPosts } from '../data/blogPosts';

const BlogSection: React.FC = () => {
  // Show first 5 posts for the scrollable area
  const recentPosts = blogPosts.slice(0, 5);

  return (
    <section className="py-12 md:py-20 bg-white dark:bg-gray-900 transition-colors duration-300 border-t border-gray-100 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-8 gap-4">
          <div className="max-w-2xl">
            <span className="text-brand-500 font-bold text-xs uppercase tracking-widest mb-2 block">Our Blog</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">
              Latest Insights
            </h2>
            <p className="text-gray-500 dark:text-gray-400 text-sm md:text-base">
              Trends, success stories, and tech news from the Silicon Savannah.
            </p>
          </div>
          <Link 
            to="/blog" 
            className="hidden md:flex items-center gap-2 text-brand-600 dark:text-brand-400 font-bold hover:gap-3 transition-all text-sm"
          >
            View All Posts <ArrowRight size={16} />
          </Link>
        </div>

        {/* Horizontal Scroll Container */}
        <div className="relative group -mx-4 px-4 sm:mx-0 sm:px-0">
           {/* Fading Edges for scroll indication on mobile */}
           <div className="absolute top-0 left-0 h-full w-12 bg-gradient-to-r from-white dark:from-gray-900 to-transparent z-10 pointer-events-none md:hidden"></div>
           <div className="absolute top-0 right-0 h-full w-12 bg-gradient-to-l from-white dark:from-gray-900 to-transparent z-10 pointer-events-none md:hidden"></div>

           <div className="flex overflow-x-auto gap-5 pb-8 pt-4 px-1 no-scrollbar snap-x snap-mandatory scroll-smooth">
            {recentPosts.map((post) => (
              <Link 
                key={post.id} 
                to={`/blog/${post.id}`}
                className="min-w-[280px] md:min-w-[340px] max-w-[340px] snap-center flex flex-col bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-[4px_4px_12px_rgba(0,0,0,0.05)] dark:shadow-none border border-gray-100 dark:border-gray-800 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group/card h-full"
              >
                {/* Image Area */}
                <div className="aspect-[16/9] relative overflow-hidden bg-gray-200 dark:bg-gray-700">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-110"
                  />
                  <div className="absolute top-3 left-3 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md px-2.5 py-1 rounded-lg text-[10px] font-bold text-brand-600 dark:text-brand-400 shadow-sm uppercase tracking-wide">
                    {post.category}
                  </div>
                </div>
                
                {/* Content Area */}
                <div className="p-5 flex flex-col flex-grow">
                  <div className="flex items-center gap-3 text-[10px] text-gray-500 dark:text-gray-400 mb-3 font-medium">
                    <span className="flex items-center gap-1 bg-gray-50 dark:bg-gray-700/50 px-2 py-1 rounded-md border border-gray-100 dark:border-gray-700"><Calendar size={10} /> {post.date}</span>
                    <span className="flex items-center gap-1 bg-gray-50 dark:bg-gray-700/50 px-2 py-1 rounded-md border border-gray-100 dark:border-gray-700"><Clock size={10} /> {post.readTime}</span>
                  </div>
                  
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover/card:text-brand-600 dark:group-hover/card:text-brand-400 transition-colors line-clamp-2 leading-tight">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-400 text-xs mb-4 line-clamp-2 flex-grow leading-relaxed">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100 dark:border-gray-700">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-brand-50 dark:bg-brand-900/30 flex items-center justify-center text-brand-600 dark:text-brand-400 border border-brand-100 dark:border-brand-800">
                        <User size={10} />
                      </div>
                      <span className="text-xs font-bold text-gray-700 dark:text-gray-300 truncate max-w-[100px]">{post.author}</span>
                    </div>
                    <span className="text-brand-600 dark:text-brand-400 text-xs font-bold flex items-center gap-1 group-hover/card:gap-2 transition-all">
                      Read More <ArrowRight size={12} />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
            
            {/* 'View All' Card for end of scroll */}
            <Link 
              to="/blog"
              className="min-w-[150px] md:min-w-[200px] snap-center flex flex-col items-center justify-center bg-gray-50 dark:bg-gray-800/50 rounded-2xl border-2 border-dashed border-gray-200 dark:border-gray-700 hover:border-brand-500 dark:hover:border-brand-500 hover:bg-brand-50 dark:hover:bg-brand-900/10 transition-all group/last"
            >
               <div className="w-12 h-12 rounded-full bg-white dark:bg-gray-800 shadow-md flex items-center justify-center text-gray-400 group-hover/last:text-brand-500 transition-colors mb-3">
                 <ArrowRight size={20} />
               </div>
               <span className="text-sm font-bold text-gray-500 dark:text-gray-400 group-hover/last:text-brand-600 dark:group-hover/last:text-brand-400">View All Posts</span>
            </Link>
          </div>
        </div>

        <div className="mt-6 text-center md:hidden">
          <Link 
            to="/blog" 
            className="inline-flex items-center gap-2 px-6 py-3 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white rounded-xl font-bold text-xs hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors shadow-sm"
          >
            Explore Full Blog <ArrowRight size={14} />
          </Link>
        </div>

      </div>
    </section>
  );
};

export default BlogSection;
