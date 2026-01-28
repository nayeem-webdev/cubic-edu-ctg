import { Users, Award, Target, Star } from "lucide-react";

// Stats data
export const stats = [
  {
    icon: Users,
    label: "Global Students",
    value: "600+",
  },
  { icon: Award, label: "Avg IELTS", value: "8.5" },
  {
    icon: Target,
    label: "Success Rate",
    value: "98%",
  },
  { icon: Star, label: "Top Scores", value: "500+" },
];

// Countries data with success metrics
export const countries = [
  {
    id: "us",
    name: "USA",
    count: 1500,
    topScore: "TOEFL 120",
    color: "#0A3161",
  },
  {
    id: "uk",
    name: "UK",
    count: 980,
    topScore: "IELTS 9.0",
    color: "#012169",
  },
  {
    id: "au",
    name: "Australia",
    count: 850,
    topScore: "PTE 90",
    color: "#012169",
  },
  {
    id: "ca",
    name: "Canada",
    count: 720,
    topScore: "IELTS 8.5",
    color: "#D80621",
  },
  {
    id: "hu",
    name: "Hungary",
    count: 450,
    topScore: "TOEFL 118",
    color: "#477050",
  },
  {
    id: "se",
    name: "Sweden",
    count: 290,
    topScore: "PTE 88",
    color: "#006AA7",
  },
];

// Student testimonials with photos
export const testimonials = [
  {
    id: 1,
    name: "Sarah Chen",
    country: "us",
    score: "IELTS 8.5",
    quote: "Achieved my dream score after 12 weeks!",
    image: "https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg",
    bgColor: "bg-blue-50",
  },
  {
    id: 2,
    name: "Rahul Sharma",
    country: "au",
    score: "PTE 89",
    quote: "Personalized coaching made all the difference.",
    image: "https://images.pexels.com/photos/764529/pexels-photo-764529.jpeg",
    bgColor: "bg-purple-50",
  },
  {
    id: 3,
    name: "Lena Müller",
    country: "se",
    score: "TOEFL 118",
    quote: "Guidance was impeccable from start to finish.",
    image: "https://images.pexels.com/photos/32976/pexels-photo.jpg",
    bgColor: "bg-indigo-50",
  },
  {
    id: 4,
    name: "James Wilson",
    country: "uk",
    score: "IELTS 9.0",
    quote: "Perfect score achieved with expert trainers!",
    image: "https://images.pexels.com/photos/1520760/pexels-photo-1520760.jpeg",
    bgColor: "bg-red-50",
  },
];
