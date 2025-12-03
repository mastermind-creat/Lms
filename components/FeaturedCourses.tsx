import React from 'react';
import { Star, Clock, BarChart } from 'lucide-react';

interface Course {
  id: number;
  title: string;
  category: string;
  instructor: string;
  rating: number;
  students: number;
  duration: string;
  level: string;
  image: string;
  avatar: string;
}

const FeaturedCourses: React.FC = () => {
  const courses: Course[] = [
    {
      id: 1,
      title: "Full-Stack Web Development Bootcamp",
      category: "Development",
      instructor: "Sarah Jenkins",
      rating: 4.9,
      students: 1250,
      duration: "12 weeks",
      level: "Beginner",
      image: "https://picsum.photos/600/400?random=10",
      avatar: "https://picsum.photos/100/100?random=11"
    },
    {
      id: 2,
      title: "Data Science & Machine Learning",
      category: "Data Science",
      instructor: "David Chen",
      rating: 4.8,
      students: 850,
      duration: "10 weeks",
      level: "Intermediate",
      image: "https://picsum.photos/600/400?random=12",
      avatar: "https://picsum.photos/100/100?random=13"
    },
    {
      id: 3,
      title: "Digital Marketing Masterclass 2024",
      category: "Marketing",
      instructor: "Emily Roth",
      rating: 4.7,
      students: 2100,
      duration: "6 weeks",
      level: "All Levels",
      image: "https://picsum.photos/600/400?random=14",
      avatar: "https://picsum.photos/100/100?random=15"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Explore Top Courses</h2>
            <p className="text-gray-600 max-w-2xl">
              From coding to design, find the perfect course to upgrade your career.
            </p>
          </div>
          <button className="text-primary-600 font-semibold hover:text-primary-700 flex items-center gap-1 group whitespace-nowrap">
            View all courses 
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <div key={course.id} className="group bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col h-full">
              {/* Image Container */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={course.image} 
                  alt={course.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-gray-800 uppercase tracking-wide">
                  {course.category}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center gap-2 mb-3 text-xs text-gray-500 font-medium">
                  <span className="flex items-center gap-1"><Clock size={14} /> {course.duration}</span>
                  <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                  <span className="flex items-center gap-1"><BarChart size={14} /> {course.level}</span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors line-clamp-2">
                  {course.title}
                </h3>

                <div className="flex items-center gap-2 mb-6">
                   <div className="flex items-center text-yellow-400 text-sm">
                     <Star size={16} fill="currentColor" />
                     <span className="ml-1 font-bold text-gray-900">{course.rating}</span>
                   </div>
                   <span className="text-gray-400 text-sm">({course.students.toLocaleString()} students)</span>
                </div>

                <div className="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <img src={course.avatar} alt={course.instructor} className="w-8 h-8 rounded-full object-cover" />
                    <span className="text-sm font-medium text-gray-700">{course.instructor}</span>
                  </div>
                  <button className="text-primary-600 font-bold text-sm hover:underline">Enroll Now</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCourses;