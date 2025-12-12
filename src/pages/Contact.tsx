import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    organization: "",
    email: "",
    phone: "",
    message: "",
    interests: {
      general: false,
      investment: false,
      partnership: false,
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
      title: "Message Sent",
      description: "Thank you. We'll be in touch within 2 business days.",
    });

    setFormData({
      name: "",
      organization: "",
      email: "",
      phone: "",
      message: "",
      interests: {
        general: false,
        investment: false,
        partnership: false,
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
              Contact
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Questions? We're here to help. Reach out to learn more about Reech Fund 
              and how your organization can participate.
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
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name *</Label>
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
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    required
                    rows={6}
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
                        General fund inquiry
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="investment"
                        checked={formData.interests.investment}
                        onCheckedChange={(checked) =>
                          setFormData({
                            ...formData,
                            interests: { ...formData.interests, investment: checked as boolean },
                          })
                        }
                      />
                      <Label htmlFor="investment" className="font-normal">
                        Investment inquiry
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="partnership"
                        checked={formData.interests.partnership}
                        onCheckedChange={(checked) =>
                          setFormData({
                            ...formData,
                            interests: { ...formData.interests, partnership: checked as boolean },
                          })
                        }
                      />
                      <Label htmlFor="partnership" className="font-normal">
                        Partnership opportunity
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
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>

                <p className="text-xs text-muted-foreground">
                  By submitting this form, you confirm you are a qualified institutional investor 
                  and have read our Privacy Policy and Risk Disclaimers.
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
                      <a href="mailto:info@reechfund.com" className="text-muted-foreground hover:text-primary transition-colors">
                        info@reechfund.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground mb-1">Phone</p>
                      <p className="text-muted-foreground">+352 XXX XXX XXX</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground mb-1">Office</p>
                      <p className="text-muted-foreground">
                        Luxembourg City<br />
                        Luxembourg
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-cream-light rounded-lg p-6 border border-border/30">
                <h4 className="font-semibold text-foreground mb-2">Response Time</h4>
                <p className="text-sm text-muted-foreground">
                  We typically respond within 2 business days. For urgent matters, 
                  please indicate in your message.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
