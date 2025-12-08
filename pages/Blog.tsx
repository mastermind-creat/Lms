import React from 'react';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Blog: React.FC = () => {
  const articles = [
    {
      id: 1,
      title: "The Rise of Silicon Savannah: Kenya's Tech Boom",
      excerpt: "How Nairobi became the tech hub of East Africa and what it means for new developers entering the market.",
      image: "https://images.unsplash.com/photo-1484807352052-23338990c6c6?auto=format&fit=crop&w=800&q=80",
      date: "Mar 15, 2025",
      author: "Sarah Kamau",
      category: "Industry Insights"
    },
    {
      id: 2,
      title: "Why Flutter is dominating Mobile Dev in Africa",
      excerpt: "Cross-platform development is crucial for startups. Here's why Flutter is the tool of choice for African founders.",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80",
      date: "Mar 10, 2025",
      author: "Alex Chen",
      category: "Tech Trends"
    },
    {
      id: 3,
      title: "Student Success: From Security Guard to Software Engineer",
      excerpt: "Meet David, who used ElimuTech's offline mode to study during night shifts and landed a job at Cellulant.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80",
      date: "Feb 28, 2025",
      author: "ElimuTech Team",
      category: "Success Stories"
    },
    {
      id: 4,
      title: "Top 5 Skills Hiring Managers Look For in 2025",
      excerpt: "Beyond coding: Soft skills, system design, and cloud knowledge are becoming prerequisites for junior roles.",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
      date: "Feb 20, 2025",
      author: "Kevin Omondi",
      category: "Career Advice"
    },
    {
      id: 5,
      title: "Demystifying Data Science for Agriculture",
      excerpt: "How big data is helping small-scale farmers in Kenya predict weather patterns and optimize yields.",
      image: "https://images.unsplash.com/photo-1586771107445-d3ca888129ff?auto=format&fit=crop&w=800&q=80",
      date: "Feb 15, 2025",
      author: "Dr. Zainab Ahmed",
      category: "AgriTech"
    },
    {
      id: 6,
      title: "Understanding M-PESA API Integration",
      excerpt: "A technical deep dive into the Daraja API. Tips and tricks for smooth B2C and C2B payments.",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80",
      date: "Feb 05, 2025",
      author: "Brian Kipkorir",
      category: "Tutorials"
    }
  ];

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
        <div className="mb-16 animate-fade-in-up [animation-delay:100ms]">
          <Link to="#" className="group relative block rounded-3xl overflow-hidden aspect-[21/9] w-full">
            <img 
              src={articles[0].image} 
              alt={articles[0].title} 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-6 md:p-12 max-w-3xl">
              <span className="inline-block px-3 py-1 rounded-full bg-brand-500 text-white text-xs font-bold mb-4">
                {articles[0].category}
              </span>
              <h2 className="text-2xl md:text-4xl font-bold text-white mb-4 leading-tight group-hover:text-brand-300 transition-colors">
                {articles[0].title}
              </h2>
              <p className="text-gray-300 text-sm md:text-lg mb-6 line-clamp-2 md:line-clamp-none">
                {articles[0].excerpt}
              </p>
              <div className="flex items-center gap-6 text-sm text-gray-400">
                <div className="flex items-center gap-2">
                  <User size={16} /> {articles[0].author}
                </div>
                <div className="flex items-center gap-2">
                  <Calendar size={16} /> {articles[0].date}
                </div>
              </div>
            </div>
          </Link>
        </div>

        {/* Grid for other posts */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.slice(1).map((article, index) => (
            <Link 
              key={article.id} 
              to="#" 
              className="group flex flex-col bg-gray-50 dark:bg-gray-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${(index + 2) * 100}ms` }}
            >
              <div className="aspect-video relative overflow-hidden">
                <img 
                  src={article.image} 
                  alt={article.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-gray-900 dark:text-white">
                  {article.category}
                </div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center gap-4 text-xs text-gray-500 dark:text-gray-400 mb-3">
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