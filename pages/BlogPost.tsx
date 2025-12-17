
import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Calendar, User, Clock, ArrowLeft, Share2, Facebook, Twitter, Linkedin, Link as LinkIcon } from 'lucide-react';
import { blogPosts } from '../data/blogPosts';

const BlogPost: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const post = blogPosts.find(p => p.id === Number(id));
  
  // Get related posts (exclude current)
  const relatedPosts = blogPosts
    .filter(p => p.id !== Number(id))
    .slice(0, 2);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!post) {
    return (
      <div className="min-h-screen pt-32 flex flex-col items-center justify-center bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
        <h2 className="text-2xl font-bold mb-4">Article Not Found</h2>
        <Link to="/blog" className="text-brand-600 hover:underline">Return to Blog</Link>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-20 bg-white dark:bg-gray-900 transition-colors duration-300 min-h-screen">
      {/* Hero */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 mb-8">
        <Link to="/blog" className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-brand-600 dark:text-gray-400 dark:hover:text-brand-400 mb-6 transition-colors">
          <ArrowLeft size={16} /> Back to Blog
        </Link>
        
        <div className="flex flex-wrap gap-3 items-center mb-6">
          <span className="bg-brand-100 dark:bg-brand-900/30 text-brand-700 dark:text-brand-300 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide">
            {post.category}
          </span>
          <span className="flex items-center gap-1 text-gray-500 text-sm">
            <Calendar size={14} /> {post.date}
          </span>
          <span className="flex items-center gap-1 text-gray-500 text-sm">
            <Clock size={14} /> {post.readTime}
          </span>
        </div>

        <h1 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-8 leading-tight">
          {post.title}
        </h1>

        <div className="flex items-center justify-between border-y border-gray-100 dark:border-gray-800 py-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-gray-200 overflow-hidden">
               <img src={`https://i.pravatar.cc/150?u=${post.author}`} alt={post.author} className="w-full h-full object-cover" />
            </div>
            <div>
              <p className="font-bold text-gray-900 dark:text-white text-sm">{post.author}</p>
              <p className="text-xs text-gray-500">Author</p>
            </div>
          </div>
          
          <div className="flex gap-2">
            <button className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-500 hover:text-blue-600 transition-colors"><Twitter size={18} /></button>
            <button className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-500 hover:text-blue-700 transition-colors"><Linkedin size={18} /></button>
            <button className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors"><LinkIcon size={18} /></button>
          </div>
        </div>
      </div>

      {/* Featured Image */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 mb-12">
        <div className="aspect-[21/9] rounded-2xl overflow-hidden shadow-lg">
          <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
        </div>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 mb-16">
        <article className="prose prose-lg dark:prose-invert prose-headings:font-display prose-headings:font-bold prose-a:text-brand-600 dark:prose-a:text-brand-400 prose-img:rounded-xl max-w-none">
           <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </article>
      </div>

      {/* Related Posts */}
      <div className="bg-gray-50 dark:bg-gray-950/50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">Related Articles</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {relatedPosts.map(related => (
              <Link 
                key={related.id} 
                to={`/blog/${related.id}`}
                className="group flex gap-4 items-start p-4 bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-all"
              >
                <div className="w-24 h-24 rounded-lg overflow-hidden shrink-0">
                  <img src={related.image} alt={related.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div>
                  <span className="text-[10px] font-bold text-brand-600 dark:text-brand-400 uppercase tracking-wider">{related.category}</span>
                  <h4 className="font-bold text-gray-900 dark:text-white leading-tight mt-1 mb-2 group-hover:text-brand-600 transition-colors">
                    {related.title}
                  </h4>
                  <p className="text-xs text-gray-500">{related.readTime}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
