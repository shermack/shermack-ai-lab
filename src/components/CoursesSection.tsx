import { useState } from "react";
import { Button } from "@/components/ui/button";
import { BookingModal } from "./BookingModal";
import { Code, Shield, Palette, Brain, DollarSign, Monitor } from "lucide-react";

const courses = [
  {
    id: 1,
    name: "Introduction to Computer",
    price: "2,000",
    duration: "8 weeks",
    icon: Monitor,
    description: "Master fundamental computer skills, basic software, and digital literacy essentials.",
    features: ["Basic Computer Operations", "Microsoft Office Suite", "Internet & Email", "File Management"],
  },
  {
    id: 2,
    name: "Graphic Design",
    price: "3,000",
    duration: "10 weeks",
    icon: Palette,
    description: "Create stunning visuals with industry-standard design tools and creative techniques.",
    features: ["Adobe Creative Suite", "Logo Design", "Brand Identity", "Print & Digital Design"],
  },
  {
    id: 3,
    name: "Python Programming",
    price: "3,500",
    duration: "12 weeks",
    icon: Code,
    description: "Learn the world's most popular programming language from basics to advanced concepts.",
    features: ["Python Fundamentals", "Web Development", "Data Analysis", "Automation Scripts"],
  },
  {
    id: 4,
    name: "Cybersecurity",
    price: "4,000",
    duration: "14 weeks",
    icon: Shield,
    description: "Protect digital assets and learn ethical hacking techniques for modern security.",
    features: ["Network Security", "Ethical Hacking", "Incident Response", "Security Auditing"],
  },
  {
    id: 5,
    name: "Artificial Intelligence",
    price: "4,000",
    duration: "16 weeks",
    icon: Brain,
    description: "Dive into machine learning, neural networks, and AI application development.",
    features: ["Machine Learning", "Neural Networks", "Computer Vision", "NLP Applications"],
  },
  {
    id: 6,
    name: "Freelancing",
    price: "3,500",
    duration: "8 weeks",
    icon: DollarSign,
    description: "Build a successful freelance business with digital marketing and client management.",
    features: ["Client Acquisition", "Project Management", "Digital Marketing", "Portfolio Building"],
  },
];

export const CoursesSection = () => {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState<string>("");

  const handleBookClass = (courseName: string) => {
    setSelectedCourse(courseName);
    setIsBookingOpen(true);
  };

  return (
    <section id="courses" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-gradient">Premium Courses</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Choose from our comprehensive selection of industry-leading courses designed 
            to accelerate your career in technology and AI.
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => {
            const IconComponent = course.icon;
            return (
              <div key={course.id} className="card-futuristic group">
                {/* Course Icon */}
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-xl mb-6 pulse-glow">
                  <IconComponent className="w-8 h-8 text-primary-foreground" />
                </div>

                {/* Course Info */}
                <div className="space-y-4">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">
                      {course.name}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      {course.description}
                    </p>
                  </div>

                  {/* Features */}
                  <ul className="space-y-2">
                    {course.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* Pricing and Duration */}
                  <div className="flex items-center justify-between py-4 border-t border-border">
                    <div>
                      <div className="text-2xl font-bold text-gradient">
                        {course.price} Ksh
                      </div>
                      <div className="text-sm text-muted-foreground">
                        per month
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-medium text-foreground">
                        {course.duration}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        duration
                      </div>
                    </div>
                  </div>

                  {/* Book Button */}
                  <Button 
                    onClick={() => handleBookClass(course.name)}
                    className="btn-course w-full"
                  >
                    Book Class
                  </Button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-lg text-muted-foreground mb-6">
            Not sure which course is right for you?
          </p>
          <Button 
            onClick={() => setIsBookingOpen(true)}
            variant="outline"
            className="border-border hover:bg-secondary hover:border-primary transition-all duration-300"
          >
            Get Free Consultation
          </Button>
        </div>
      </div>

      <BookingModal 
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        selectedCourse={selectedCourse}
      />
    </section>
  );
};