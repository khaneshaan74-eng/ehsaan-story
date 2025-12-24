import { useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100, "Name is too long"),
  email: z.string().trim().email("Invalid email address").max(255, "Email is too long"),
  subject: z.string().min(1, "Please select a subject"),
  message: z.string().trim().min(1, "Message is required").max(2000, "Message is too long"),
});

const subjects = [
  "Media & Press",
  "Speaking / Podcast",
  "Collaboration",
  "Business Inquiry",
  "General Message",
];

const FooterSection = () => {
  const { ref, isVisible } = useScrollAnimation<HTMLElement>();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const result = contactSchema.safeParse(formData);
    if (!result.success) {
      toast({
        title: "Validation Error",
        description: result.error.errors[0].message,
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    try {
      const { error } = await supabase.functions.invoke("send-contact-email", {
        body: formData,
      });

      if (error) throw error;

      toast({
        title: "Message Sent",
        description: "Thank you for reaching out. We'll be in touch soon.",
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error("Error sending message:", error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer
      id="contact"
      ref={ref}
      className="relative bg-foreground px-6 py-32 md:py-40"
    >
      <div className="mx-auto max-w-xl">
        {/* Section label */}
        <p
          className={cn(
            "mb-8 text-center text-xs font-sans uppercase tracking-[0.3em] text-primary-foreground/60 transition-all duration-700",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}
        >
          Get in Touch
        </p>

        {/* Contact form */}
        <form
          onSubmit={handleSubmit}
          className={cn(
            "space-y-6 transition-all duration-700 delay-100",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}
        >
          <Input
            type="text"
            placeholder="Full Name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="border-primary-foreground/20 bg-transparent text-primary-foreground placeholder:text-primary-foreground/40 focus-visible:ring-primary-foreground/30"
          />

          <Input
            type="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="border-primary-foreground/20 bg-transparent text-primary-foreground placeholder:text-primary-foreground/40 focus-visible:ring-primary-foreground/30"
          />

          <Select
            value={formData.subject}
            onValueChange={(value) => setFormData({ ...formData, subject: value })}
          >
            <SelectTrigger className="border-primary-foreground/20 bg-transparent text-primary-foreground focus:ring-primary-foreground/30 [&>span]:text-primary-foreground/40 [&>span[data-state=checked]]:text-primary-foreground">
              <SelectValue placeholder="Subject" />
            </SelectTrigger>
            <SelectContent>
              {subjects.map((subject) => (
                <SelectItem key={subject} value={subject}>
                  {subject}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Textarea
            placeholder="Message"
            rows={5}
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="resize-none border-primary-foreground/20 bg-transparent text-primary-foreground placeholder:text-primary-foreground/40 focus-visible:ring-primary-foreground/30"
          />

          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-primary-foreground text-foreground hover:bg-primary-foreground/90"
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </Button>
        </form>

        {/* Email */}
        <p
          className={cn(
            "mt-12 text-center font-sans text-sm text-primary-foreground/60 transition-all duration-700 delay-200",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}
        >
          <a
            href="mailto:talkto@ehsaan.life"
            className="transition-colors hover:text-primary-foreground"
          >
            talkto@ehsaan.life
          </a>
        </p>

        {/* Divider */}
        <div
          className={cn(
            "mx-auto my-16 h-px w-24 bg-primary-foreground/20 transition-all duration-700 delay-300",
            isVisible ? "opacity-100" : "opacity-0"
          )}
        />

        {/* Copyright */}
        <p
          className={cn(
            "text-center font-sans text-xs uppercase tracking-wider text-primary-foreground/40 transition-all duration-700 delay-[400ms]",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}
        >
          © Ehsaan Quresshi | All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default FooterSection;
