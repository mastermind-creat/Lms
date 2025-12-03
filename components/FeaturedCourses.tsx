import React from 'react';
import { Star, ArrowRight, Layout } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Course {
  id: number;
  title: string;
  category: string;
  instructor: string;
  rating: number;
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
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 2,
      title: "Data Science for Agriculture",
      category: "AgriTech",
      instructor: "Dr. Zainab Ahmed",
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 3,
      title: "Frontend Development with React",
      category: "Web Dev",
      instructor: "Wanjiku Kimani",
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1593720213428-28a5b9e94613?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 4,
      title: "UX Design for Mobile Money Apps",
      category: "Design",
      instructor: "Brian Kipkorir",
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1586717791821-3f44a5638d48?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-3 tracking-tight">Market-Ready Skills</h2>
            <p className="text-gray-500">
              Curriculum designed by Kenya's top tech leads to get you hired.
            </p>
          </div>
          <Link to="/courses" className="hidden md:flex items-center gap-2 text-sm font-semibold text-brand-600 hover:text-brand-800 transition-colors">
            View All Courses <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {courses.map((course) => (
            <div key={course.id} className="group relative bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-gray-200 hover:shadow-xl transition-all duration-300 flex flex-col h-full">
              {/* Image with overlay */}
              <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
                <img 
                  src={course.image} 
                  alt={course.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider text-gray-800">
                  {course.category}
                </div>
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col flex-grow">
                <h3 className="text-lg font-bold text-gray-900 mb-2 leading-snug group-hover:text-brand-600 transition-colors">
                  {course.title}
                </h3>
                
                <div className="mt-auto pt-4 border-t border-gray-50 flex items-center justify-between">
                   <div className="flex items-center gap-2">
                     <div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center text-xs font-bold text-gray-500">
                       {course.instructor.charAt(0)}
                     </div>
                     <span className="text-xs text-gray-500 font-medium">{course.instructor}</span>
                   </div>
                   <div className="flex items-center gap-1 text-xs font-bold text-gray-900">
                     <Star size={12} className="text-yellow-500 fill-current" />
                     {course.rating}
                   </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center md:hidden">
          <Link to="/courses" className="w-full inline-flex justify-center items-center gap-2 text-sm font-bold text-gray-900 border border-gray-200 px-6 py-4 rounded-xl hover:bg-gray-50">
            View all courses <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCourses;