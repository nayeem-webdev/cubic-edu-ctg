import {
  Bed,
  FileText,
  GraduationCap,
  ScanHeart,
  Send,
  TicketsPlane,
  University,
} from "lucide-react";

const servicesData = [
  {
    id: 1,
    title: "Enrollment Guidance",
    icon: University,
    iconBgColor: "bg-amber-100",
    iconColor: "text-amber-500",
  },
  {
    id: 2,
    title: "Scholarship Support",
    icon: GraduationCap,
    iconBgColor: "bg-green-100",
    iconColor: "text-green-500",
  },
  {
    id: 3,
    title: "Health Coverage",
    icon: ScanHeart,
    iconBgColor: "bg-red-100",
    iconColor: "text-red-400",
  },
  {
    id: 4,
    title: "Documentation Assistance",
    icon: FileText,
    iconBgColor: "bg-blue-100",
    iconColor: "text-blue-400",
  },
  {
    id: 5,
    title: "Visa Application",
    icon: Send,
    iconBgColor: "bg-lime-100",
    iconColor: "text-lime-500",
  },
  {
    id: 6,
    title: "Student Residence",
    icon: Bed,
    iconBgColor: "bg-yellow-100",
    iconColor: "text-yellow-500",
  },
  {
    id: 7,
    title: "Flight Ticket",
    icon: TicketsPlane,
    iconBgColor: "bg-indigo-100",
    iconColor: "text-indigo-500",
  },
];

export default servicesData;
