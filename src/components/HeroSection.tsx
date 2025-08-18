import { useState } from "react";
import { Button } from "@/components/ui/button";
import { BookingModal } from "./BookingModal";
import heroImage from "@/assets/ai-lab-hero.jpg";
import { ArrowRight, Sparkles } from "lucide-react";

export const HeroSection = () => {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden neural-bg">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Futuristic AI Learning Laboratory" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/40 to-background/80" />
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-20 w-20 h-20 bg-gradient-to-r from-primary to-accent rounded-full opacity-20 float" style={{ animationDelay: '0s' }} />
      <div className="absolute top-40 right-32 w-12 h-12 bg-gradient-to-r from-accent to-primary rounded-full opacity-30 float" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-32 left-40 w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-full opacity-25 float" style={{ animationDelay: '2s' }} />

      {/* Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <div className="space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/50 backdrop-blur-sm rounded-full border border-border/50">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-foreground">
              North Eastern Kenya's Premier AI Learning Platform
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            <span className="text-gradient">Shermack AI Lab</span>
            <br />
            <span className="text-foreground">Where Future</span>
            <br />
            <span className="text-foreground">Meets</span> <span className="text-gradient">Innovation</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Master cutting-edge AI technologies, programming, cybersecurity, and digital skills 
            with our professional guidance. Transform your career with future-ready skills 
            that drive innovation and success.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button 
              onClick={() => setIsBookingOpen(true)}
              className="btn-hero text-lg px-8 py-4 group"
            >
              Start Your Journey
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
            
            <Button 
              variant="outline"
              className="text-lg px-8 py-4 border-border hover:bg-secondary hover:border-primary transition-all duration-300"
              onClick={() => {
                document.getElementById('courses')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Explore Courses
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-16">
            <div className="text-center space-y-2">
              <div className="text-3xl md:text-4xl font-bold text-gradient">500+</div>
              <div className="text-muted-foreground">Students Trained</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-3xl md:text-4xl font-bold text-gradient">95%</div>
              <div className="text-muted-foreground">Success Rate</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-3xl md:text-4xl font-bold text-gradient">6</div>
              <div className="text-muted-foreground">Expert Courses</div>
            </div>
          </div>
        </div>
      </div>

      <BookingModal 
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
      />
    </section>
  );
};