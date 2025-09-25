import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    practiceType: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Prepare email content
      const emailContent = `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${formData.name}</p>
        <p><strong>Email:</strong> ${formData.email}</p>
        <p><strong>Phone:</strong> ${formData.phone}</p>
        <p><strong>Practice Type:</strong> ${formData.practiceType}</p>
        <p><strong>Message:</strong></p>
        <p>${formData.message.replace(/\n/g, '<br>')}</p>
      `;

      // Send email using the API
      const { error } = await window.ezsite.apis.sendEmail({
        from: 'info@mykohi.com',
        to: ['info@mykohi.com'],
        subject: `New MyKohi Contact Form Submission - ${formData.name}`,
        html: emailContent,
        text: `New Contact Form Submission\n\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nPractice Type: ${formData.practiceType}\nMessage: ${formData.message}`
      });

      if (error) throw error;

      // Success - show toast and reset form
      toast({
        title: "Message Sent Successfully!",
        description: "Thank you for contacting us. We'll get back to you within 24 hours."
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        practiceType: "",
        message: ""
      });

    } catch (error) {
      console.error('Error sending email:', error);
      toast({
        title: "Error Sending Message",
        description: "There was an issue sending your message. Please try again or contact us directly.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              Contact Us
            </h2>
            <p className="text-xl text-blue-700 mb-4 font-medium">
              Ready to Transform Your Mental Health Practice?
            </p>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Let's discuss how we can help you grow your practice and reach more patients in need. 
              Learn more <Link to="/about" className="text-blue-600 hover:text-blue-800 underline">about our story</Link>, 
              explore our <Link to="/services" className="text-blue-600 hover:text-blue-800 underline">comprehensive services</Link>, or 
              <Link to="/team" className="text-blue-600 hover:text-blue-800 underline">meet our expert team</Link>.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}>
              <Card className="border-blue-200">
                <CardHeader>
                  <CardTitle className="text-2xl text-blue-800">Send Us a Message</CardTitle>
                  <CardDescription>
                    Fill out the form below and we'll get back to you within 24 hours.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          type="text"
                          value={formData.name}
                          onChange={(e) => handleInputChange('name', e.target.value)}
                          placeholder="Dr. John Smith"
                          required
                          className="border-blue-200 focus:border-blue-500" />

                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          placeholder="john@practice.com"
                          required
                          className="border-blue-200 focus:border-blue-500" />

                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => handleInputChange('phone', e.target.value)}
                          placeholder="(555) 123-4567"
                          className="border-blue-200 focus:border-blue-500" />

                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="practiceType">Practice Type</Label>
                        <Select value={formData.practiceType} onValueChange={(value) => handleInputChange('practiceType', value)}>
                          <SelectTrigger className="border-blue-200 focus:border-blue-500">
                            <SelectValue placeholder="Select practice type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="tms">TMS Practice</SelectItem>
                            <SelectItem value="ketamine">Ketamine Practice</SelectItem>
                            <SelectItem value="both">TMS & Ketamine</SelectItem>
                            <SelectItem value="psychiatry">General Psychiatry</SelectItem>
                            <SelectItem value="therapy">Therapy Practice</SelectItem>
                            <SelectItem value="other">Other Mental Health</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => handleInputChange('message', e.target.value)}
                        placeholder="Tell us about your practice and how we can help you grow..."
                        required
                        className="border-blue-200 focus:border-blue-500 min-h-[120px]" />

                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-blue-600 hover:bg-blue-700"
                      disabled={isSubmitting}>

                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-8">
              
              <Card className="border-blue-200">
                <CardHeader>
                  <CardTitle className="text-xl text-blue-800">Get in Touch</CardTitle>
                  <CardDescription>
                    We're here to answer your questions and help you get started.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                      <span className="text-white">📧</span>
                    </div>
                    <div>
                      <p className="font-medium text-blue-800">Email</p>
                      <p className="text-gray-700">info@mykohi.com</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                      <span className="text-white">🌐</span>
                    </div>
                    <div>
                      <p className="font-medium text-blue-800">Service Area</p>
                      <p className="text-gray-700">TMS & Ketamine Practices Nationwide</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                      <span className="text-white">⏰</span>
                    </div>
                    <div>
                      <p className="font-medium text-blue-800">Response Time</p>
                      <p className="text-gray-700">Within 24 hours</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-blue-200 bg-gradient-to-r from-blue-50 to-blue-100">
                <CardContent className="p-6">
                  <h4 className="text-xl font-bold text-blue-800 mb-4">Why Choose MyKohi?</h4>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Over a decade of TMS and mental health experience - <Link to="/team" className="text-blue-600 hover:text-blue-800 underline">meet our team</Link></span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Personalized service from industry experts - <Link to="/about" className="text-blue-600 hover:text-blue-800 underline">learn our approach</Link></span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Proven track record of practice growth - <Link to="/services" className="text-blue-600 hover:text-blue-800 underline">see our services</Link></span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Comprehensive marketing and consulting solutions - <Link to="/services" className="text-blue-600 hover:text-blue-800 underline">explore all options</Link></span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-blue-200">
                <CardContent className="p-6">
                  <h4 className="text-xl font-bold text-blue-800 mb-4">Schedule a Consultation</h4>
                  <p className="text-gray-700 mb-4">
                    Ready to discuss your practice's needs? Schedule a free consultation to learn how we can help you grow. 
                    Review our <Link to="/services" className="text-blue-600 hover:text-blue-800 underline">services</Link> to see what might be right for your practice.
                  </p>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">
                    Book Your Free Consultation
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Treatment Fund CTA */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-50 to-blue-100">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto">
            <Card className="border-blue-200 bg-white">
              <CardContent className="p-8">
                <h3 className="text-3xl font-bold mb-4 text-blue-800">Support the MyKohi Treatment Fund</h3>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  Help us make life-saving TMS and Ketamine treatments accessible to those who need them most. 
                  100% of donations go directly to covering treatment costs for patients in need. 
                  <Link to="/about" className="text-blue-600 hover:text-blue-800 underline">Learn more about our mission</Link> and why this fund matters to us.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-3">
                    Support the Treatment Fund
                  </Button>
                  <Button size="lg" variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50 text-lg px-8 py-3">
                    Learn More
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <img
                  src="https://newoaks.s3.us-west-1.amazonaws.com/AutoDev/17785/b943c8e9-3afe-4def-98dc-7dbc474a2be6.webp"
                  alt="MyKohi Logo"
                  className="h-8 w-auto" />

                <h4 className="text-xl font-bold">MyKohi</h4>
              </div>
              <p className="text-blue-200 mb-4">
                Expert Marketing & Consulting for TMS, Ketamine and Mental Health Practices
              </p>
              <p className="text-blue-300 text-sm">
                Empowering mental health practices to create lasting impact in their communities.
              </p>
            </div>
            
            <div>
              <h5 className="font-bold mb-4">Quick Links</h5>
              <ul className="space-y-2 text-blue-200">
                <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
                <li><Link to="/about" className="hover:text-white transition-colors">About</Link></li>
                <li><Link to="/services" className="hover:text-white transition-colors">Services</Link></li>
                <li><Link to="/team" className="hover:text-white transition-colors">Team</Link></li>
                <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </div>
            
            <div>
              <h5 className="font-bold mb-4">Contact</h5>
              <div className="space-y-2 text-blue-200">
                <p>📧 support@ezsite.ai</p>
                <p>🌐 MyKohi Consulting</p>
                <p>📍 Serving TMS & Ketamine Practices Nationwide</p>
              </div>
            </div>
          </div>
          
          <Separator className="my-8 bg-blue-700" />
          
          <div className="text-center text-blue-300">
            <p>&copy; {new Date().getFullYear()} MyKohi Consulting. All rights reserved.</p>
            <p className="mt-2 text-sm">
              Dedicated to Kohi's memory - spreading love, empathy, and healing in mental health care.
            </p>
          </div>
        </div>
      </footer>

      <noindex><script src="//widget.callbacktracker.com/tracker/3df8ce93e93c71a8f9b1c1a449be0d1dbfe96964" charset="UTF-8" async="async" type="text/javascript"></script></noindex>

     <div class="embedded-booking" data-url="https://mykohi.wlbookings.com" data-query="&t=s&uuid=3915806e-e68f-43c3-96a8-7b78bf82c85c" data-lang="en" data-autoresize="1" data-showsidebar="1" style="min-width: 320px; height: 768px;"></div><script type="text/javascript" src="https://mykohi.wlbookings.com/embed.js" async></script>
    </div>);

};

export default ContactPage;