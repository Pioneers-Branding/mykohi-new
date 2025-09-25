import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const AboutPage = () => {
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
              About MyKohi
            </h2>
            <p className="text-xl text-blue-700 mb-4 font-medium">
              Empowering Mental Health Practices with Heart and Expertise
            </p>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Our story is rooted in love, dedication, and a commitment to transforming mental health care. 
              Discover how our <Link to="/services" className="text-blue-600 hover:text-blue-800 underline">comprehensive services</Link> can help your practice thrive.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12">
            <h3 className="text-4xl font-bold mb-4 text-blue-800">Our Story</h3>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-800 mx-auto"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}>
              <h4 className="text-2xl font-bold mb-6 text-blue-800">The Heart Behind MyKohi</h4>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  MyKohi draws inspiration from Kohi, Dr. Karan's beloved rescue dog who brought joy and comfort to everyone she met. 
                  Though Kohi passed away in April 2025, her legacy of love, empathy, and compassion continues to guide our mission. 
                  She showed us the transformative power of caring for others with purpose and the incredible impact of unconditional love.
                </p>
                <p>
                  Dr. Karan brings years of experience as a clinic owner, operator, executive, and patient advocate, collaborating with 
                  mental health professionals to help their practices thrive. Together with Brian, they launched a service dedicated to 
                  supporting providers and teams who elevate patient care. <Link to="/team" className="text-blue-600 hover:text-blue-800 underline">Meet our leadership team</Link>.
                </p>
                <p>
                  By blending expertise, heart, and a focus on meaningful growth, MyKohi Consulting empowers mental health practices 
                  to create a lasting impact in their communities. <Link to="/services" className="text-blue-600 hover:text-blue-800 underline">Explore our services</Link> to see how we can help your practice grow.
                </p>
              </div>
              <Card className="mt-6 border-blue-200 bg-blue-50">
                <CardContent className="p-6">
                  <blockquote className="text-blue-800 font-medium italic text-center">
                    "A dog will teach you unconditional love. If you have that in your life, things won't be too hard."
                  </blockquote>
                  <p className="text-center text-sm text-blue-600 mt-2">A Timeless Truth About Unconditional Love</p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4">
              <img
                src="https://newoaks.s3.us-west-1.amazonaws.com/AutoDev/17785/f8c202f9-b734-475e-899d-d5a9840776b4.webp"
                alt="Kohi - The inspiration behind MyKohi"
                className="rounded-lg shadow-lg w-full h-48 object-cover" />

              <img
                src="https://newoaks.s3.us-west-1.amazonaws.com/AutoDev/17785/d7279ab8-a706-45a8-8b10-0c3c581a43cd.webp"
                alt="Dr Karan with mental health professionals"
                className="rounded-lg shadow-lg w-full h-48 object-cover" />

              <img
                src="https://newoaks.s3.us-west-1.amazonaws.com/AutoDev/17785/2c622d41-a395-45c6-9f28-98c4e3aa34b5.webp"
                alt="Dr Karan at conference"
                className="rounded-lg shadow-lg w-full h-48 object-cover" />

              <img
                src="https://newoaks.s3.us-west-1.amazonaws.com/AutoDev/17785/e001493f-f2bb-4e4a-8643-c955a61d6ba5.webp"
                alt="Dr Karan giving TMS presentation"
                className="rounded-lg shadow-lg w-full h-48 object-cover" />

            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Values Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-50 to-blue-100">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12">
            <h3 className="text-4xl font-bold mb-4 text-blue-800">Our Mission & Values</h3>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-800 mx-auto"></div>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}>
              <Card className="h-full border-blue-200 hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-2xl">💙</span>
                  </div>
                  <CardTitle className="text-blue-800">Compassion</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 text-center">
                    We approach every interaction with empathy and understanding, knowing that behind every practice 
                    are real people making a difference in mental health care. <Link to="/team" className="text-blue-600 hover:text-blue-800 underline">Meet the people behind MyKohi</Link>.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}>
              <Card className="h-full border-blue-200 hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-2xl">🎯</span>
                  </div>
                  <CardTitle className="text-blue-800">Excellence</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 text-center">
                    We deliver exceptional results through strategic thinking, proven methodologies, and continuous 
                    innovation in mental health practice management. <Link to="/services" className="text-blue-600 hover:text-blue-800 underline">View our proven strategies</Link>.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}>
              <Card className="h-full border-blue-200 hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-2xl">🚀</span>
                  </div>
                  <CardTitle className="text-blue-800">Growth</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 text-center">
                    We believe in sustainable growth that enhances patient outcomes while building thriving, 
                    meaningful practices that serve their communities. <Link to="/contact" className="text-blue-600 hover:text-blue-800 underline">Start your growth journey today</Link>.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center">
            <h3 className="text-4xl font-bold mb-6">Ready to Transform Your Practice?</h3>
            <p className="text-xl mb-8 text-blue-100">
              Let's work together to help you help more people in your community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-blue-50 text-lg px-8 py-3">
                  Get Started Today
                </Button>
              </Link>
              <Link to="/services">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 text-lg px-8 py-3">
                  Explore Our Services
                </Button>
              </Link>
            </div>
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
    </div>);

};

export default AboutPage;