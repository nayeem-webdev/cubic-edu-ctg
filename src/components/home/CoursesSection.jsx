import { BookOpen } from "lucide-react";
import courseData from "../../assets/data/courseData";
import CourseCard from "../../ui/CourseCard";
import SectionTitle from "../../ui/SectionTitle";

const CoursesSection = () => {
  return (
    <section className="w-full py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <SectionTitle
          topTitle={"Our Programs"}
          icon={BookOpen}
          title="Test Preparation"
          titleColor=" Courses"
          subtitle="Comprehensive training programs designed to help you achieve your
            target scores."
          color="secondary"
        />
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
