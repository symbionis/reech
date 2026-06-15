import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";
import { Mail, MapPin, AlertTriangle } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    organization: "",
    email: "",
    phone: "",
    message: "",
    interests: {
      general: false,
      cpuMechanism: false,
      strategy: false,
      other: false,
    },
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Thank You for Your Interest",
      description: "We'll review your inquiry and respond with further information at an appropriate time. Note: This is an informational exploration only.",
    });

    setFormData({
      name: "",
      organization: "",
      email: "",
      phone: "",
      message: "",
      interests: {
        general: false,
        cpuMechanism: false,
        strategy: false,
        other: false,
      },
    });
    setIsSubmitting(false);
  };

  return (
    <>
      {/* Hero */}
      <section className="bg-cream-light section-spacing">
        <div className="section-container">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-primary mb-6">
              Request Information
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Share your interest or questions about Reech Fund, our climate investment approach, 
              or the CPU mechanism. We'll respond with further details.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="section-spacing bg-background">
        <div className="section-container">
          <div className="grid lg:grid-cols-3 gap-12 lg:gap-20">
            {/* Form */}
            <div className="lg:col-span-2">
              {/* Intro Text */}
              <div className="bg-cream-light rounded-lg p-6 border border-border/30 mb-8">
                <p className="text-muted-foreground leading-relaxed">
                  We're exploring climate finance innovation through digital fund concepts. If you're 
                  interested in learning more about our approach to climate impact investing, climate 
                  performance units, or our investment strategy, please share your inquiry below.
                </p>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  We'll respond with additional information and discussion at an appropriate time. 
                  <strong className="text-foreground"> This is an informational exploration only—no investment 
                  opportunity is being offered at this time.</strong>
                </p>
              </div>

              {/* Retail Investor Warning */}
              <div className="bg-destructive/5 rounded-lg p-4 border border-destructive/20 mb-8 flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                <p className="text-sm text-destructive/80">
                  <strong>Notice:</strong> This form is intended for institutional and professional parties only. 
                  If you are a retail investor, please do not complete this form.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="h-12"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="organization">Organization *</Label>
                    <Input
                      id="organization"
                      required
                      value={formData.organization}
                      onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                      className="h-12"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="h-12"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone (optional)</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="h-12"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Your Inquiry *</Label>
                  <Textarea
                    id="message"
                    required
                    rows={6}
                    placeholder="Please share your questions or what aspects of Reech Fund interest you..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>

                <div className="space-y-4">
                  <Label>Areas of Interest (optional)</Label>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="general"
                        checked={formData.interests.general}
                        onCheckedChange={(checked) =>
                          setFormData({
                            ...formData,
                            interests: { ...formData.interests, general: checked as boolean },
                          })
                        }
                      />
                      <Label htmlFor="general" className="font-normal">
                        General fund concept
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="cpuMechanism"
                        checked={formData.interests.cpuMechanism}
                        onCheckedChange={(checked) =>
                          setFormData({
                            ...formData,
                            interests: { ...formData.interests, cpuMechanism: checked as boolean },
                          })
                        }
                      />
                      <Label htmlFor="cpuMechanism" className="font-normal">
                        CPU mechanism
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="strategy"
                        checked={formData.interests.strategy}
                        onCheckedChange={(checked) =>
                          setFormData({
                            ...formData,
                            interests: { ...formData.interests, strategy: checked as boolean },
                          })
                        }
                      />
                      <Label htmlFor="strategy" className="font-normal">
                        Investment strategy
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="other"
                        checked={formData.interests.other}
                        onCheckedChange={(checked) =>
                          setFormData({
                            ...formData,
                            interests: { ...formData.interests, other: checked as boolean },
                          })
                        }
                      />
                      <Label htmlFor="other" className="font-normal">
                        Other
                      </Label>
                    </div>
                  </div>
                </div>

                <Button type="submit" disabled={isSubmitting} className="w-full md:w-auto">
                  {isSubmitting ? "Sending..." : "Submit Inquiry"}
                </Button>

                <p className="text-xs text-muted-foreground">
                  By submitting this form, you confirm you are a sophisticated, professional, or institutional 
                  party and have read and understood the disclaimers on this website. This is an informational 
                  inquiry only and does not constitute an investment commitment or application.
                </p>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div className="bg-card rounded-lg p-8 border border-border/50">
                <h3 className="font-display font-semibold text-xl text-foreground mb-6">
                  Contact Information
                </h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground mb-1">Email</p>
                      <a href="mailto:info@reech.fund" className="text-muted-foreground hover:text-primary transition-colors">
                        info@reech.fund
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground mb-1">Office</p>
                      <p className="text-muted-foreground">
                        Geneva, Switzerland
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-cream-light rounded-lg p-6 border border-border/30">
                <h4 className="font-semibold text-foreground mb-2">Response Time</h4>
                <p className="text-sm text-muted-foreground">
                  We'll review your inquiry and respond with further information at an appropriate time. 
                  We will only contact you once Reech Fund has been formally established and properly authorized.
                </p>
              </div>

              <div className="bg-primary/5 rounded-lg p-6 border border-primary/20">
                <h4 className="font-semibold text-foreground mb-2">Important Notice</h4>
                <p className="text-sm text-muted-foreground">
                  This is an informational exploration only. Reech Fund is not yet established or authorized. 
                  No investment opportunity is being offered at this time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
