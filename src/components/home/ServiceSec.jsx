import {
  ArrowRightIcon,
  Bed,
  ChevronsRight,
  FileText,
  GraduationCap,
  ScanHeart,
  Send,
  TicketsPlane,
  University,
} from "lucide-react";
import SectionTitle from "../../ui/SectionTitle";
import Button from "../../ui/Button";

const ServiceSec = () => {
  return (
    <div className="w-full bg-gray-50">
      <div className="max-w-7xl mx-auto py-28 px-4">
        <SectionTitle
          title="How We Makes Your"
          titleColor=" Study Abroad Journey Simple"
          subtitle="Our expert team offers complete, end-to-end support for students
                planning to study overseas, ensuring a smooth and stress-free
                experience from start to finish."
          color="secondary"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {/* sec start */}
          {/* Card 1 */}
          <div className="flex justify-between items-center border-2 p-4 rounded-lg border-secondary bg-secondary/5 hover:scale-102 transition-all backdrop-blur-md">
            <div className="flex gap-4 items-center">
              <div className="text-2xl bg-amber-100 text-amber-500 p-2 rounded-md">
                <University size={30} />
              </div>
              <p className="font-medium">Enrollment Guidance</p>
            </div>
            <div className="text-secondary">
              <ChevronsRight size={30} />
            </div>
          </div>
          {/* Card 1 */}
          {/* Card 2 */}
          <div className="flex justify-between items-center border-2 p-4 rounded-lg border-secondary bg-secondary/5 hover:scale-102 transition-all backdrop-blur-md">
            <div className="flex gap-4 items-center">
              <div className="text-2xl bg-green-100 text-green-500 p-2 rounded-md">
                <GraduationCap size={30} />
              </div>
              <p className="font-medium">Scholarship Support</p>
            </div>
            <div className="text-secondary">
              <ChevronsRight size={30} />
            </div>
          </div>
          {/* Card 2 */}
          {/* Card 3 */}
          <div className="flex justify-between items-center border-2 p-4 rounded-lg border-secondary bg-secondary/5 hover:scale-102 transition-all backdrop-blur-md">
            <div className="flex gap-4 items-center">
              <div className="text-2xl bg-red-100 text-red-400 p-2 rounded-md">
                <ScanHeart size={30} />
              </div>
              <p className="font-medium">Health Coverage</p>
            </div>
            <div className="text-secondary">
              <ChevronsRight size={30} />
            </div>
          </div>
          {/* Card 3 */}
          {/* Card 4 */}
          <div className="flex justify-between items-center border-2 p-4 rounded-lg border-secondary bg-secondary/5 hover:scale-102 transition-all backdrop-blur-md">
            <div className="flex gap-4 items-center">
              <div className="text-2xl bg-blue-100 text-blue-400 p-2 rounded-md">
                <FileText size={30} />
              </div>
              <p className="font-medium">Documentation Assistance</p>
            </div>
            <div className="text-secondary">
              <ChevronsRight size={30} />
            </div>
          </div>
          {/* Card 4 */}
          {/* Card 5 */}
          <div className="flex justify-between items-center border-2 p-4 rounded-lg border-secondary bg-secondary/5 hover:scale-102 transition-all backdrop-blur-md">
            <div className="flex gap-4 items-center">
              <div className="text-2xl bg-lime-100 text-lime-500 p-2 rounded-md">
                <Send size={30} />
              </div>
              <p className="font-medium">Visa Application</p>
            </div>
            <div className="text-secondary">
              <ChevronsRight size={30} />
            </div>
          </div>
          {/* Card 5 */}
          {/* Card 6 */}
          <div className="flex justify-between items-center border-2 p-4 rounded-lg border-secondary bg-secondary/5 hover:scale-102 transition-all backdrop-blur-md">
            <div className="flex gap-4 items-center">
              <div className="text-2xl bg-yellow-100 text-yellow-500 p-2 rounded-md">
                <Bed size={30} />
              </div>
              <p className="font-medium">Student Residence</p>
            </div>
            <div className="text-secondary">
              <ChevronsRight size={30} />
            </div>
          </div>
          {/* Card 6 */}
          {/* Card 7 */}
          <div className="flex justify-between items-center border-2 p-4 rounded-lg border-secondary bg-secondary/5 hover:scale-102 transition-all backdrop-blur-md">
            <div className="flex gap-4 items-center">
              <div className="text-2xl bg-indigo-100 text-indigo-500 p-2 rounded-md">
                <TicketsPlane size={30} />
              </div>
              <p className="font-medium">Flight Ticket</p>
            </div>
            <div className="text-secondary">
              <ChevronsRight size={30} />
            </div>
          </div>
          {/* Card 7 */}
          {/* sec end */}
        </div>
        <div className="mt-8 flex mx-auto justify-center">
          <Button
            to="/services"
            variant="secondary"
            icon={<ArrowRightIcon />}
            iconPosition="right"
          >
            Explore Services
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ServiceSec;
