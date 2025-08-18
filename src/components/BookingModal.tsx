import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedCourse?: string;
}

const courses = [
  { name: "Introduction to Computer", price: "2,000 Ksh/month" },
  { name: "Graphic Design", price: "3,000 Ksh/month" },
  { name: "Python Programming", price: "3,500 Ksh/month" },
  { name: "Cybersecurity", price: "4,000 Ksh/month" },
  { name: "Artificial Intelligence", price: "4,000 Ksh/month" },
  { name: "Freelancing", price: "3,500 Ksh/month" },
];

export const BookingModal = ({ isOpen, onClose, selectedCourse }: BookingModalProps) => {
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    location: "",
    email: "",
    course: selectedCourse || "",
  });
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/.netlify/functions/sendemail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        toast({
          title: "Booking Request Submitted!",
          description: "We'll contact you soon to confirm your enrollment.",
          duration: 5000,
        });

        setFormData({
          fullName: "",
          phoneNumber: "",
          location: "",
          email: "",
          course: "",
        });
        onClose();
      } else {
        toast({
          title: "Error",
          description: "Something went wrong. Please try again later.",
          duration: 5000,
        });
      }
    } catch (err) {
      console.error("Booking error:", err);
      toast({
        title: "Error",
        description: "Unable to send booking. Please try again later.",
        duration: 5000,
      });
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[500px] bg-card border-border">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-gradient text-center">
            Book Your Class
          </DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6 mt-6">
          <div className="space-y-2">
            <Label htmlFor="fullName" className="text-foreground font-medium">
              Full Name *
            </Label>
            <Input
              id="fullName"
              value={formData.fullName}
              onChange={(e) => handleInputChange("fullName", e.target.value)}
              required
              className="bg-secondary border-border focus:border-primary focus:ring-primary"
              placeholder="Enter your full name"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phoneNumber" className="text-foreground font-medium">
              Phone Number *
            </Label>
            <Input
              id="phoneNumber"
              value={formData.phoneNumber}
              onChange={(e) => handleInputChange("phoneNumber", e.target.value)}
              required
              className="bg-secondary border-border focus:border-primary focus:ring-primary"
              placeholder="+254 7XX XXX XXX"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="location" className="text-foreground font-medium">
              Location *
            </Label>
            <Input
              id="location"
              value={formData.location}
              onChange={(e) => handleInputChange("location", e.target.value)}
              required
              className="bg-secondary border-border focus:border-primary focus:ring-primary"
              placeholder="Your city/town"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className="text-foreground font-medium">
              Email Address *
            </Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => handleInputChange("email", e.target.value)}
              required
              className="bg-secondary border-border focus:border-primary focus:ring-primary"
              placeholder="your.email@example.com"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="course" className="text-foreground font-medium">
              Course/Unit *
            </Label>
            <Select value={formData.course} onValueChange={(value) => handleInputChange("course", value)}>
              <SelectTrigger className="bg-secondary border-border focus:border-primary focus:ring-primary">
                <SelectValue placeholder="Select a course" />
              </SelectTrigger>
              <SelectContent className="bg-card border-border">
                {courses.map((course) => (
                  <SelectItem key={course.name} value={course.name} className="focus:bg-secondary">
                    {course.name} - {course.price}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="flex gap-4 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              className="flex-1 border-border hover:bg-secondary"
            >
              Cancel
            </Button>
            <Button type="submit" className="flex-1 btn-hero" disabled={loading}>
              {loading ? "Submitting..." : "Submit Booking"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};