import React, { useState } from 'react';
import { Search, Filter, BookOpen, Clock, BarChart, Star } from 'lucide-react';

const AllCourses: React.FC = () => {
  const allCourses = [
    {
      id: 1,
      title: "Full-Stack Web Development Bootcamp",
      category: "Development",
      instructor: "Sarah Jenkins",
      rating: 4.9,
      students: 1250,
      duration: "12 weeks",
      level: "Beginner",
      price: "KES 15,000",
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
      price: "KES 18,500",
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
      price: "Free",
      image: "https://picsum.photos/600/400?random=14",
      avatar: "https://picsum.photos/100/100?random=15"
    },
    {
      id: 4,
      title: "UI/UX Design Fundamentals",
      category: "Design",
      instructor: "Michael Ross",
      rating: 4.9,
      students: 3200,
      duration: "8 weeks",
      level: "Beginner",
      price: "KES 5,000",
      image: "https://picsum.photos/600/400?random=16",
      avatar: "https://picsum.photos/100/100?random=17"
    },
    {
      id: 5,
      title: "Advanced React Patterns",
      category: "Development",
      instructor: "Sarah Jenkins",
      rating: 4.8,
      students: 500,
      duration: "4 weeks",
      level: "Advanced",
      price: "KES 8,000",
      image: "https://picsum.photos/600/400?random=18",
      avatar: "https://picsum.photos/100/100?random=11"
    },
    {
      id: 6,
      title: "Python for Finance",
      category: "Finance",
      instructor: "James Wilson",
      rating: 4.6,
      students: 1200,
      duration: "8 weeks",
      level: "Intermediate",
      price: "KES 12,000",
      image: "https://picsum.photos/600/400?random=19",
      avatar: "https://picsum.photos/100/100?random=20"
    },
    {
      id: 7,
      title: "Mobile App Development with Flutter",
      category: "Development",
      instructor: "Alex Chen",
      rating: 4.7,
      students: 950,
      duration: "10 weeks",
      level: "Intermediate",
      price: "KES 14,000",
      image: "https://picsum.photos/600/400?random=21",
      avatar: "https://picsum.photos/100/100?random=22"
    },
    {
      id: 8,
      title: "Copywriting for Conversion",
      category: "Marketing",
      instructor: "Lisa Ray",
      rating: 4.9,
      students: 1500,
      duration: "5 weeks",
      level: "Beginner",
      price: "Free",
      image: "https://picsum.photos/600/400?random=23",
      avatar: "https://picsum.photos/100/100?random=24"
    },
    {
      id: 9,
      title: "Blockchain Basics",
      category: "Technology",
      instructor: "Tom Baker",
      rating: 4.5,
      students: 600,
      duration: "6 weeks",
      level: "Beginner",
      price: "Free",
      image: "https://picsum.photos/600/400?random=25",
      avatar: "https://picsum.photos/100/100?random=26"
    },
    {
      id: 10,
      title: "Cybersecurity Essentials",
      category: "Technology",
      instructor: "Maria Garcia",
      rating: 4.8,
      students: 900,
      duration: "8 weeks",
      level: "Beginner",
      price: "KES 9,500",
      image: "https://picsum.photos/600/400?random=27",
      avatar: "https://picsum.photos/100/100?random=28"
    }
  ];

  const categories = ["All", "Development", "Design", "Marketing", "Data Science", "Finance"];
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredCourses = activeCategory === "All" 
    ? allCourses 
    : allCourses.filter(c => c.category === activeCategory);

  return (
    <div className="pt-32 pb-20 min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Minimal Header */}
        <div className="mb-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-4 tracking-tight">Course Catalog</h1>
          
          <div className="flex flex-col md:flex-row gap-4 justify-between items-start md:items-center">
            {/* Categories as clean tabs */}
            <div className="flex gap-1 overflow-x-auto pb-2 no-scrollbar w-full md:w-auto">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3 py-1.5 rounded text-sm font-medium transition-colors whitespace-nowrap ${
                    activeCategory === cat 
                      ? 'bg-gray-900 text-white' 
                      : 'text-gray-500 hover:text-gray-900 hover:bg-gray-50'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Simple Search */}
            <div className="relative w-full md:w-64 shrink-0">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
              <input 
                type="text" 
                placeholder="Search..." 
                className="w-full bg-gray-50 border-none rounded-lg py-2 pl-9 pr-4 text-sm focus:outline-none focus:ring-1 focus:ring-gray-300 transition-all placeholder:text-gray-400"
              />
            </div>
          </div>
        </div>

        {/* Minimal Grid: 1 col mobile, 2 col sm, 3 col lg, 4 col xl */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-10">
          {filteredCourses.map((course) => (
            <div key={course.id} className="group flex flex-col cursor-pointer">
              {/* Image */}
              <div className="relative aspect-[16/10] overflow-hidden rounded-lg bg-gray-100 mb-4">
                <img 
                  src={course.image} 
                  alt={course.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 grayscale-[10%] group-hover:grayscale-0"
                />
                {/* Price Badge */}
                <div className={`absolute top-2 right-2 backdrop-blur-md px-2.5 py-1 rounded-md text-[10px] font-bold shadow-sm ${
                  course.price === 'Free' 
                    ? 'bg-green-500/90 text-white' 
                    : 'bg-white/90 text-gray-900'
                }`}>
                  {course.price}
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-1">
                   <h3 className="text-sm font-semibold text-gray-900 leading-tight group-hover:text-primary-600 transition-colors line-clamp-2 pr-2">
                    {course.title}
                  </h3>
                </div>

                <div className="flex items-center gap-2 mb-3 text-[11px] text-gray-500 font-medium">
                  <span>{course.level}</span>
                  <span className="w-0.5 h-0.5 bg-gray-300 rounded-full"></span>
                  <span>{course.duration}</span>
                </div>

                <div className="mt-auto flex items-center justify-between border-t border-gray-100 pt-3">
                   <div className="flex items-center gap-2">
                     <span className="text-[11px] text-gray-600 truncate">{course.instructor}</span>
                   </div>
                   <div className="flex items-center gap-1 text-[11px] font-bold text-gray-900">
                     <Star size={10} className="text-gray-900 fill-current" />
                     {course.rating}
                   </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Empty State */}
        {filteredCourses.length === 0 && (
          <div className="flex flex-col items-center justify-center py-32 text-gray-400">
            <BookOpen size={48} strokeWidth={1} className="mb-4 opacity-50" />
            <p className="text-sm font-medium">No courses found matching that category.</p>
          </div>
        )}

      </div>
    </div>
  );
};

export default AllCourses;