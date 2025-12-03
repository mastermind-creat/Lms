import React from 'react';
import { Star, ArrowRight } from 'lucide-react';
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
      title: "Full-Stack Web Development Bootcamp",
      category: "Development",
      instructor: "Sarah Jenkins",
      rating: 4.9,
      image: "https://picsum.photos/600/400?random=10",
    },
    {
      id: 2,
      title: "Data Science & Machine Learning",
      category: "Data Science",
      instructor: "David Chen",
      rating: 4.8,
      image: "https://picsum.photos/600/400?random=12",
    },
    {
      id: 3,
      title: "Digital Marketing Masterclass 2024",
      category: "Marketing",
      instructor: "Emily Roth",
      rating: 4.7,
      image: "https://picsum.photos/600/400?random=14",
    },
    {
      id: 4,
      title: "UI/UX Design Fundamentals",
      category: "Design",
      instructor: "Michael Ross",
      rating: 4.9,
      image: "https://picsum.photos/600/400?random=16",
    }
  ];

  return (
    <section className="py-24 bg-white border-b border-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2 tracking-tight">Popular Courses</h2>
            <p className="text-gray-500 text-sm">
              Top-rated learning paths selected by students.
            </p>
          </div>
          <Link to="/courses" className="hidden md:flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-gray-900 hover:text-gray-600 transition-colors">
            See All Courses <ArrowRight size={14} />
          </Link>
        </div>

        {/* Minimal Grid: 1 col mobile, 2 col tablet, 4 col desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10">
          {courses.map((course) => (
            <div key={course.id} className="group cursor-pointer flex flex-col h-full">
              {/* Image */}
              <div className="relative aspect-[16/10] overflow-hidden bg-gray-100 rounded-lg mb-4">
                <img 
                  src={course.image} 
                  alt={course.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Minimal Content */}
              <div className="flex flex-col flex-grow">
                <div className="flex justify-between items-center mb-2">
                   <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{course.category}</span>
                   <div className="flex items-center gap-1 bg-gray-50 px-1.5 py-0.5 rounded">
                     <Star size={10} className="text-gray-900 fill-current" />
                     <span className="text-[10px] font-bold text-gray-900">{course.rating}</span>
                   </div>
                </div>
                
                <h3 className="text-sm font-semibold text-gray-900 mb-1 leading-snug group-hover:text-primary-600 transition-colors">
                  {course.title}
                </h3>
                
                <p className="text-xs text-gray-500 mt-auto">
                  {course.instructor}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center md:hidden">
          <Link to="/courses" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-gray-900 border border-gray-200 px-6 py-3 rounded-full hover:bg-gray-50">
            View all courses <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCourses;