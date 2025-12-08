import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Clock, Users, BookOpen, CheckCircle, PlayCircle, Award, ArrowLeft, Share2, ArrowRight } from 'lucide-react';
import { courses } from '../data/courses';

const CourseDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const course = courses.find(c => c.id === Number(id));

  // Reset scroll on load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!course) {
    return (
      <div className="min-h-screen pt-32 flex flex-col items-center justify-center bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors">
        <h2 className="text-2xl font-bold">Course not found</h2>
        <Link to="/courses" className="mt-4 text-brand-600 dark:text-brand-400 hover:underline">Back to all courses</Link>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-20 overflow-hidden bg-white dark:bg-gray-900 transition-colors duration-300">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 animate-fade-in">
        <Link to="/courses" className="inline-flex items-center text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
          <ArrowLeft size={16} className="mr-1" /> Back to Courses
        </Link>
      </div>

      {/* Hero Header */}
      <div className="bg-gray-50 dark:bg-gray-800/50 border-y border-gray-100 dark:border-gray-800 py-12 mb-12 relative overflow-hidden transition-colors">
        {/* Background Decorative Blob */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-50 dark:bg-brand-900/20 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/4 pointer-events-none animate-pulse-slow"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up [animation-duration:800ms]">
              <div className="flex items-center gap-2 mb-4">
                <span className="bg-brand-100 dark:bg-brand-900/40 text-brand-700 dark:text-brand-300 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide border border-brand-200 dark:border-brand-800">
                  {course.category}
                </span>
                <span className="flex items-center gap-1 text-yellow-500 font-bold text-sm bg-white dark:bg-gray-800 px-2 py-1 rounded-full border border-gray-100 dark:border-gray-700 shadow-sm">
                  <Star size={14} fill="currentColor" /> {course.rating}
                </span>
              </div>
              
              <h1 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight tracking-tight">
                {course.title}
              </h1>
              
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                {course.description}
              </p>

              <div className="flex flex-wrap gap-6 text-sm text-gray-500 dark:text-gray-400 font-medium mb-8">
                <div className="flex items-center gap-2">
                  <Users size={18} className="text-gray-400 dark:text-gray-500" /> {course.students.toLocaleString()} Students
                </div>
                <div className="flex items-center gap-2">
                  <Clock size={18} className="text-gray-400 dark:text-gray-500" /> {course.duration}
                </div>
                <div className="flex items-center gap-2">
                  <Award size={18} className="text-gray-400 dark:text-gray-500" /> Certificate Included
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-gray-900 dark:bg-brand-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-gray-800 dark:hover:bg-brand-500 hover:-translate-y-1 transition-all shadow-xl shadow-gray-900/10 dark:shadow-brand-900/20 flex items-center justify-center gap-2 group">
                  Enroll Now - {course.price}
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="bg-white dark:bg-transparent text-gray-900 dark:text-white border border-gray-200 dark:border-gray-600 px-8 py-4 rounded-xl font-bold hover:bg-gray-50 dark:hover:bg-gray-800/50 hover:border-gray-300 dark:hover:border-gray-500 transition-all flex items-center justify-center gap-2">
                  <PlayCircle size={20} /> Preview Course
                </button>
              </div>
            </div>

            <div className="relative animate-scale-up [animation-duration:1000ms] [animation-delay:200ms]">
              <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl relative group border-4 border-white dark:border-gray-800">
                <img src={course.image} alt={course.title} className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105" />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                  <div className="w-20 h-20 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center text-brand-600 shadow-xl cursor-pointer group-hover:scale-110 transition-transform duration-300">
                    <PlayCircle size={40} fill="currentColor" />
                  </div>
                </div>
              </div>
              {/* Instructor Card */}
              <div className="absolute -bottom-6 -left-6 md:-left-12 bg-white dark:bg-gray-800 p-4 rounded-xl shadow-xl border border-gray-100 dark:border-gray-700 flex items-center gap-3 max-w-xs animate-float">
                 <div className="w-12 h-12 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center font-bold text-gray-500 dark:text-gray-300 text-lg border-2 border-white dark:border-gray-600 shadow-sm">
                   {course.instructor.charAt(0)}
                 </div>
                 <div>
                   <p className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wide font-bold">Instructor</p>
                   <p className="font-bold text-gray-900 dark:text-white">{course.instructor}</p>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12 animate-fade-in-up [animation-delay:400ms]">
            
            {/* What you'll learn */}
            <section>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">What you'll learn</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[1,2,3,4,5,6].map((i) => (
                  <div key={i} className="flex items-start gap-3 text-gray-600 dark:text-gray-300 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                    <CheckCircle size={20} className="text-green-500 shrink-0 mt-0.5" />
                    <span className="text-sm leading-relaxed">Master the core concepts and advanced techniques needed to excel in this field using industry-standard tools.</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Syllabus */}
            <section>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Course Syllabus</h3>
              <div className="border border-gray-200 dark:border-gray-800 rounded-2xl divide-y divide-gray-100 dark:divide-gray-800 overflow-hidden bg-white dark:bg-gray-900 shadow-sm">
                {course.syllabus.map((item, index) => (
                  <div key={index} className="p-4 md:p-6 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors cursor-pointer group">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-4">
                        <span className="w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400 flex items-center justify-center text-sm font-bold group-hover:bg-brand-100 dark:group-hover:bg-brand-900/30 group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">
                          {index + 1}
                        </span>
                        <h4 className="font-bold text-gray-900 dark:text-white group-hover:text-brand-700 dark:group-hover:text-brand-400 transition-colors">{item}</h4>
                      </div>
                      <BookOpen size={18} className="text-gray-300 dark:text-gray-600 group-hover:text-brand-500 dark:group-hover:text-brand-400 transition-colors" />
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-6 animate-fade-in-up [animation-delay:600ms]">
            <div className="bg-white dark:bg-gray-800/50 p-6 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-sm sticky top-24">
              <h3 className="font-bold text-gray-900 dark:text-white mb-4 text-lg">This course includes:</h3>
              <ul className="space-y-4 text-sm text-gray-600 dark:text-gray-300 mb-8">
                 <li className="flex items-center gap-3">
                   <PlayCircle size={18} className="text-brand-500" /> {course.duration} of on-demand video
                 </li>
                 <li className="flex items-center gap-3">
                   <BookOpen size={18} className="text-brand-500" /> 12 downloadable resources
                 </li>
                 <li className="flex items-center gap-3">
                   <Users size={18} className="text-brand-500" /> Access on mobile and TV
                 </li>
                 <li className="flex items-center gap-3">
                   <Award size={18} className="text-brand-500" /> Certificate of completion
                 </li>
              </ul>
              
              <div className="flex items-center justify-between py-4 border-t border-gray-100 dark:border-gray-700">
                <button className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white font-medium text-sm flex items-center gap-2 hover:bg-gray-50 dark:hover:bg-gray-700 px-3 py-2 rounded-lg transition-colors w-full justify-center">
                  <Share2 size={16} /> Share this course
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default CourseDetails;