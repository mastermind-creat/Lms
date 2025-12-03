import React from 'react';
import { Star, ArrowRight, Layout } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Course {
  id: number;
  title: string;
  category: string;
  instructor: string;
  rating: number;
  price: string;
  image: string;
}

const FeaturedCourses: React.FC = () => {
  const courses: Course[] = [
    {
      id: 1,
      title: "M-PESA Integration & API Development",
      category: "Fintech",
      instructor: "Kevin Omondi",
      rating: 5.0,
      price: "KES 5,000",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 2,
      title: "Data Science for Agriculture",
      category: "AgriTech",
      instructor: "Dr. Zainab Ahmed",
      rating: 4.8,
      price: "Free",
      image: "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 3,
      title: "Frontend Development with React",
      category: "Web Dev",
      instructor: "Wanjiku Kimani",
      rating: 4.9,
      price: "KES 8,500",
      image: "https://images.unsplash.com/photo-1593720213428-28a5b9e94613?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 4,
      title: "UX Design for Mobile Money Apps",
      category: "Design",
      instructor: "Brian Kipkorir",
      rating: 4.9,
      price: "KES 6,000",
      image: "https://images.unsplash.com/photo-1586717791821-3f44a5638d48?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-8 md:mb-12 gap-4 md:gap-6">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 md:mb-3 tracking-tight">Market-Ready Skills</h2>
            <p className="text-sm md:text-base text-gray-500 max-w-lg">
              Curriculum designed by Kenya's top tech leads to get you hired.
            </p>
          </div>
          <Link to="/courses" className="hidden md:flex items-center gap-2 text-sm font-semibold text-brand-600 hover:text-brand-800 transition-colors">
            View All Courses <ArrowRight size={16} />
          </Link>
        </div>

        {/* Responsive Grid: 2 cols on mobile, 3 on md, 4 on lg */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-6">
          {courses.map((course) => (
            <div key={course.id} className="group relative bg-white rounded-xl md:rounded-2xl overflow-hidden border border-gray-100 hover:border-gray-200 hover:shadow-xl transition-all duration-300 flex flex-col h-full">
              {/* Image with overlay */}
              <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
                <img 
                  src={course.image} 
                  alt={course.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Mobile-optimized badges */}
                <div className="absolute top-2 left-2 bg-white/90 backdrop-blur-sm px-1.5 py-0.5 rounded text-[8px] md:text-[10px] font-bold uppercase tracking-wider text-gray-800">
                  {course.category}
                </div>
                
                {/* Price Badge */}
                <div className={`absolute top-2 right-2 backdrop-blur-md px-1.5 py-0.5 rounded text-[8px] md:text-[10px] font-bold shadow-sm ${
                  course.price === 'Free' 
                    ? 'bg-green-500/90 text-white' 
                    : 'bg-white/90 text-gray-900'
                }`}>
                  {course.price}
                </div>
              </div>

              {/* Content - Compact padding for mobile */}
              <div className="p-3 md:p-5 flex flex-col flex-grow">
                <h3 className="text-sm md:text-lg font-bold text-gray-900 mb-1.5 md:mb-2 leading-tight group-hover:text-brand-600 transition-colors line-clamp-2">
                  {course.title}
                </h3>
                
                <div className="mt-auto pt-3 md:pt-4 border-t border-gray-50 flex items-center justify-between">
                   <div className="flex items-center gap-1.5 md:gap-2 overflow-hidden">
                     <div className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-gray-100 flex items-center justify-center text-[10px] md:text-xs font-bold text-gray-500 shrink-0">
                       {course.instructor.charAt(0)}
                     </div>
                     <span className="text-[10px] md:text-xs text-gray-500 font-medium truncate">{course.instructor}</span>
                   </div>
                   <div className="flex items-center gap-0.5 md:gap-1 text-[10px] md:text-xs font-bold text-gray-900 shrink-0">
                     <Star size={10} className="text-yellow-500 fill-current md:w-3 md:h-3" />
                     {course.rating}
                   </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-8 md:mt-12 text-center md:hidden">
          <Link to="/courses" className="w-full inline-flex justify-center items-center gap-2 text-sm font-bold text-gray-900 border border-gray-200 px-6 py-3 rounded-xl hover:bg-gray-50">
            View all courses <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCourses;