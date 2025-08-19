import { Github, Linkedin, Mail, MapPin, Phone, Send } from "lucide-react"
import { cn } from "../lib/utils";
import { useToast } from "../hooks/use-toast"
import { useState } from "react";
import emailjs from "emailjs-com";

export const ContactSection = () => {
    const { toast } = useToast();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const SERVICE_ID = "service_rjf4o1j";
    const TEMPLATE_ID = "template_5yldh5l";
    const PUBLIC_KEY = "r9c3z4ZHw_ui3osWZ";

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY)
        .then((result) => {
            toast({
                title: "Message sent!",
                description: "Thank you for your message. I'll get back to you soon."
            });
            e.target.reset(); // reset form
        })
        .catch((error) => {
            toast({
                title: "Failed to send",
                description: "Please try again later.",
                variant: "destructive"
            });
        })
        .finally(() => setIsSubmitting(false));
    };

    return (
        <section id="contact" className="py-24 px-4 relative bg-secondary/30">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    Get In <span className="text-primary">Touch</span>
                </h2>

                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Interested in working together or starting a new project? Feel free to get in touch anytime.
                    I’m always open to collaborations and new opportunities.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="space-y-8">
                        <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>

                        <div className="space-y-6 justify-center">
                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Mail className="h-6 w-6 text-primary" />
                                </div>
                                <div>
                                    <h4 className="font-medium text-left"> Email</h4>
                                    <a href="https://mail.google.com/mail/?view=cm&fs=1&to=julianhimawan@gmail.com" target="_blank" className="text-muted-foreground hover:text-primary transition-colors">
                                        julianhimawan@gmail.com
                                    </a>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Phone className="h-6 w-6 text-primary" />
                                </div>
                                <div>
                                    <h4 className="font-medium text-left"> Phone</h4>
                                    <a href="https://wa.me/6285779702737?text=Hello%2C%20I%20found%20your%20portfolio%20and%20would%20like%20to%20connect!" target="_blank" className="text-muted-foreground hover:text-primary transition-colors">
                                        +62 857-7970-2737
                                    </a>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <MapPin className="h-6 w-6 text-primary" />
                                </div>
                                <div>
                                    <h4 className="font-medium text-left"> Location</h4>
                                    <a href="https://maps.app.goo.gl/KX7R2m8MRBJ8BRFy6" target="_blank" className="text-muted-foreground hover:text-primary transition-colors">
                                        Bogor, Indonesia
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="pt-8">
                            <h4 className="font-medium mb-4"> Connect With Me</h4>
                            <div className="flex space-x-4 justify-center">
                                <a href="https://linkedin.com/in/zecky-julian-himawan" target="_blank">
                                    <Linkedin />
                                </a>
                                <a href="https://github.com/zeckyjulian" target="_blank">
                                    <Github />
                                </a>
                            </div>
                        </div>
                    </div>
                    
                    <div className="bg-card p-8 rounded-lg shadow-xs">
                        <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>

                        <form className="space-y-6" onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium mb-2">Your Name</label>
                                <input 
                                    type="text"
                                    id="name"
                                    name="name"
                                    placeholder="Enter your full name..."
                                    required
                                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                                    autoComplete="off"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium mb-2">Your Email</label>
                                <input 
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder="Enter your email..."
                                    required
                                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                                    autoComplete="off"
                                />
                            </div>
                            <div>
                                <label htmlFor="subject" className="block text-sm font-medium mb-2">Your Subject</label>
                                <input 
                                    type="text"
                                    id="subject"
                                    name="title"
                                    placeholder="Enter Subject..."
                                    required
                                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                                    autoComplete="off"
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium mb-2">Your Message</label>
                                <textarea 
                                    id="message"
                                    name="message"
                                    placeholder="Write your message here..."
                                    required
                                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none"
                                    autoComplete="off"
                                />
                            </div>

                            <button 
                                type="submit"
                                disabled={isSubmitting}
                                className={cn(
                                    "cosmic-button w-full flex items-center justify-center gap-2"
                                )}
                            >
                                {isSubmitting ? "Sending..." : "Send Message"} <Send size={16} />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};