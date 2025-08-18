import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-card to-secondary border-t border-border">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-gradient">
              Shermack AI Lab
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Leading AI and technology education platform in North Eastern Kenya, 
              empowering the next generation of tech professionals.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#courses" className="text-muted-foreground hover:text-primary transition-colors duration-300">Our Courses</a></li>
              <li><a href="#about" className="text-muted-foreground hover:text-primary transition-colors duration-300">About Us</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-300">Success Stories</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-300">Blog</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-300">FAQ</a></li>
            </ul>
          </div>

          {/* Courses */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Popular Courses</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-300">Artificial Intelligence</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-300">Python Programming</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-300">Cybersecurity</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-300">Graphic Design</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-300">Freelancing</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">North Eastern Kenya</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">+254 798 244 407</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">shermacksalat@gmail.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            © 2024 Shermack AI Lab. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors duration-300">Privacy Policy</a>
            <a href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors duration-300">Terms of Service</a>
            <a href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors duration-300">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};