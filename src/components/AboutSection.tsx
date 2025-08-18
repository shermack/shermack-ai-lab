import { Award, Users, Target, Zap } from "lucide-react";

const features = [
  {
    icon: Award,
    title: "Professional Excellence",
    description: "Industry-certified instructors with years of real-world experience in AI and technology.",
  },
  {
    icon: Users,
    title: "Personalized Learning",
    description: "Small class sizes ensuring individual attention and customized learning paths for every student.",
  },
  {
    icon: Target,
    title: "Career-Focused Training",
    description: "Curriculum designed with industry needs in mind, preparing you for high-demand tech roles.",
  },
  {
    icon: Zap,
    title: "Cutting-Edge Technology",
    description: "Access to latest tools, software, and AI technologies used by leading tech companies worldwide.",
  },
];

export const AboutSection = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-background to-secondary/30">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            About <span className="text-gradient">Shermack AI Lab</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            We are North Eastern Kenya's leading AI and technology education platform, 
            committed to empowering individuals with future-ready skills. Our mission is to 
            bridge the digital divide and create opportunities for career advancement through 
            professional, high-quality technology training.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div key={index} className="text-center space-y-4">
                <div className="flex items-center justify-center w-20 h-20 bg-gradient-to-r from-primary to-accent rounded-2xl mx-auto pulse-glow">
                  <IconComponent className="w-10 h-10 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold text-foreground">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Mission Statement */}
        <div className="text-center bg-gradient-to-r from-card to-secondary rounded-2xl p-12 border border-border">
          <h3 className="text-3xl font-bold text-gradient mb-6">
            Our Vision
          </h3>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            To become the most trusted and innovative AI education platform in East Africa, 
            producing skilled professionals who drive technological advancement and economic 
            growth in their communities. We believe in democratizing access to quality technology 
            education and creating pathways to prosperity through digital skills.
          </p>
        </div>

        {/* Why Choose Us */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-foreground">
              Why Choose <span className="text-gradient">Shermack AI Lab?</span>
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Expert Instructors</h4>
                  <p className="text-muted-foreground">Learn from certified professionals with extensive industry experience.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Practical Learning</h4>
                  <p className="text-muted-foreground">Hands-on projects and real-world applications of every concept taught.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Career Support</h4>
                  <p className="text-muted-foreground">Job placement assistance and career guidance for all our graduates.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Affordable Excellence</h4>
                  <p className="text-muted-foreground">Premium education at accessible prices with flexible payment options.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl p-8 backdrop-blur-sm border border-border">
              <div className="text-center space-y-8">
                <div>
                  <div className="text-4xl font-bold text-gradient mb-2">5+ Years</div>
                  <div className="text-muted-foreground">Training Excellence</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-gradient mb-2">500+</div>
                  <div className="text-muted-foreground">Successful Graduates</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-gradient mb-2">95%</div>
                  <div className="text-muted-foreground">Employment Rate</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};