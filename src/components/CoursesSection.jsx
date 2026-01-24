import React from "react";
import { BookOpen } from "lucide-react";
import courseData from "../assets/data/courseData";
import CourseCard from "../ui/CourseCard";

const CoursesSection = () => {
  return (
    <section
      id="courses"
      className="py-20 bg-linear-to-br from-slate-50 to-primary/5"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-secondary/10 text-secondary px-4 py-2 rounded-full text-sm font-medium mb-4">
            <BookOpen size={16} />
            <span>Our Programs</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            Test Preparation <span className="text-secondary">Courses</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Comprehensive training programs designed to help you achieve your
            target scores
          </p>
        </div>

        {/* Courses Grid using the Reusable CourseCard */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {courseData.map((course, index) => (
            <CourseCard
              key={course.id || index}
              title={course.title}
              duration={course.duration}
              imageUrl={course.imageUrl}
              modules={course.modules}
              onEnroll={() => console.log(`Enrolling in ${course.title}`)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
