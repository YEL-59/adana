"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    alert("Thank you for your message! We'll get back to you soon.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 pt-16 sm:pt-20">
        {/* Hero Section */}
        <section className="bg-background py-12 sm:py-16 md:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center mb-8 sm:mb-12">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-foreground">
                Get in Touch
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground leading-relaxed">
                Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-12 sm:py-16 md:py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
                {/* Contact Form */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl sm:text-3xl">Send us a Message</CardTitle>
                    <CardDescription>
                      Fill out the form below and we'll get back to you as soon as possible.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium mb-2 text-foreground">
                          Name
                        </label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Your name"
                          className="w-full"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-2 text-foreground">
                          Email
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="your.email@example.com"
                          className="w-full"
                        />
                      </div>
                      <div>
                        <label htmlFor="subject" className="block text-sm font-medium mb-2 text-foreground">
                          Subject
                        </label>
                        <Input
                          id="subject"
                          name="subject"
                          type="text"
                          required
                          value={formData.subject}
                          onChange={handleChange}
                          placeholder="What's this about?"
                          className="w-full"
                        />
                      </div>
                      <div>
                        <label htmlFor="message" className="block text-sm font-medium mb-2 text-foreground">
                          Message
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          required
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="Your message..."
                          rows={6}
                          className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 resize-none"
                        />
                      </div>
                      <Button
                        type="submit"
                        className="w-full bg-[#5C4033] text-white hover:bg-[#4a3328]"
                        size="lg"
                      >
                        Send Message
                        <Send className="ml-2 h-4 w-4" />
                      </Button>
                    </form>
                  </CardContent>
                </Card>

                {/* Contact Information */}
                <div className="space-y-6 sm:space-y-8">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-2xl sm:text-3xl">Contact Information</CardTitle>
                      <CardDescription>
                        Reach out to us through any of these channels.
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4 sm:space-y-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-full bg-[#5C4033]/10 flex items-center justify-center flex-shrink-0">
                          <Mail className="h-6 w-6 text-[#5C4033]" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground mb-1">Email</h3>
                          <a
                            href="mailto:info@ourhairitage.com"
                            className="text-muted-foreground hover:text-primary transition-colors"
                          >
                            info@ourhairitage.com
                          </a>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-full bg-[#5C4033]/10 flex items-center justify-center flex-shrink-0">
                          <Phone className="h-6 w-6 text-[#5C4033]" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground mb-1">Phone</h3>
                          <a
                            href="tel:+1234567890"
                            className="text-muted-foreground hover:text-primary transition-colors"
                          >
                            +1 (234) 567-890
                          </a>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-full bg-[#5C4033]/10 flex items-center justify-center flex-shrink-0">
                          <MapPin className="h-6 w-6 text-[#5C4033]" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground mb-1">Address</h3>
                          <p className="text-muted-foreground">
                            123 Hair Care Street<br />
                            Beauty City, BC 12345<br />
                            United States
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-xl sm:text-2xl">Business Hours</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2 text-muted-foreground">
                        <p><span className="font-medium text-foreground">Monday - Friday:</span> 9:00 AM - 6:00 PM</p>
                        <p><span className="font-medium text-foreground">Saturday:</span> 10:00 AM - 4:00 PM</p>
                        <p><span className="font-medium text-foreground">Sunday:</span> Closed</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

