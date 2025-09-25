import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { motion } from "motion/react";
import { Link } from "react-router-dom";

const TeamPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-blue-100 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <Link to="/" className="flex items-center space-x-3">
              <img
                src="https://newoaks.s3.us-west-1.amazonaws.com/AutoDev/17785/b943c8e9-3afe-4def-98dc-7dbc474a2be6.webp"
                alt="MyKohi Logo"
                className="h-10 w-auto" />

              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                MyKohi
              </h1>
            </Link>
            <nav className="hidden md:flex space-x-6">
              <Link to="/">
                <Button variant="ghost" className="text-blue-700 hover:text-blue-900">
                  Home
                </Button>
              </Link>
              <Link to="/about">
                <Button variant="ghost" className="text-blue-700 hover:text-blue-900">
                  About
                </Button>
              </Link>
              <Link to="/services">
                <Button variant="ghost" className="text-blue-700 hover:text-blue-900">
                  Services
                </Button>
              </Link>
              <Button variant="ghost" className="text-blue-700 hover:text-blue-900 bg-blue-50">
                Team
              </Button>
              <Link to="/contact">
                <Button className="bg-blue-600 hover:bg-blue-700">
                  Contact Us
                </Button>
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              Meet Our Team
            </h2>
            <p className="text-xl text-blue-700 mb-4 font-medium">
              Experienced Professionals Dedicated to Your Success
            </p>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Our team combines clinical expertise, business acumen, and genuine passion for mental health care. 
              Explore our <Link to="/services" className="text-blue-600 hover:text-blue-800 underline">comprehensive services</Link> and 
              <Link to="/contact" className="text-blue-600 hover:text-blue-800 underline">get in touch</Link> to see how we can help your practice.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12">
            <h3 className="text-4xl font-bold mb-4 text-blue-800">Leadership Team</h3>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-800 mx-auto"></div>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Dr. Karan */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}>
              <Card className="border-blue-200 bg-white h-full">
                <CardHeader className="text-center">
                  <img
                    src="https://newoaks.s3.us-west-1.amazonaws.com/AutoDev/17785/c62d549d-083f-4e3d-b4ea-af549dfb5632.webp"
                    alt="Dr. Karan Narwal - Professional Profile"
                    className="w-40 h-40 rounded-full mx-auto mb-4 object-cover shadow-lg" />

                  <CardTitle className="text-3xl text-blue-800">Dr. Karan Narwal</CardTitle>
                  <CardDescription className="text-blue-600 font-medium text-lg">
                    Founder, CMO & COO
                  </CardDescription>
                  <div className="flex flex-wrap justify-center gap-2 mt-4">
                    <Badge variant="secondary" className="bg-blue-100 text-blue-800">MD</Badge>
                    <Badge variant="secondary" className="bg-blue-100 text-blue-800">TMS Specialist</Badge>
                    <Badge variant="secondary" className="bg-blue-100 text-blue-800">Clinical Researcher</Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4 text-gray-700">
                  <p>
                    Dr. Karan brings over a decade of experience in the mental health community as a clinical researcher, 
                    treatment specialist, and business executive. A graduate of Aureus University School of Medicine and 
                    the New York Institute of Technology, Dr. Karan has dedicated his career to advancing mental health care 
                    through innovation and leadership.
                  </p>
                  <p>
                    Under his guidance as part owner of Transcranial Magnetic Stimulation (TMS) treatment facilities, he built 
                    one of Tampa Bay's leading mental health centers, delivering more than 15,000 transformative treatments.
                  </p>
                  <p>
                    Dr. Karan actively contributes to the field by publishing studies on TMS treatment and serving as a Clinical 
                    TMS Society member. Through presentations at conferences, seminars, and podcasts nationwide, he shares insights 
                    on emerging trends in treatments like TMS and Ketamine. <Link to="/services" className="text-blue-600 hover:text-blue-800 underline">See how his expertise shapes our services</Link>.
                  </p>
                  
                  <div className="mt-6">
                    <h5 className="font-bold text-blue-800 mb-3">Key Achievements</h5>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                        15,000+ TMS treatments delivered
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                        Clinical TMS Society member
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                        Published TMS research studies
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                        National conference speaker
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Brian Goldbeck */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}>
              <Card className="border-blue-200 bg-white h-full">
                <CardHeader className="text-center">
                  <img
                    src="https://newoaks.s3.us-west-1.amazonaws.com/AutoDev/17785/6778a3fd-9622-4965-b9c0-31b8f265c976.webp"
                    alt="Brian Goldbeck - Professional Profile"
                    className="w-40 h-40 rounded-full mx-auto mb-4 object-cover shadow-lg" />

                  <CardTitle className="text-3xl text-blue-800">Brian Goldbeck</CardTitle>
                  <CardDescription className="text-blue-600 font-medium text-lg">
                    Co-Founder, CEO & CRO
                  </CardDescription>
                  <div className="flex flex-wrap justify-center gap-2 mt-4">
                    <Badge variant="secondary" className="bg-blue-100 text-blue-800">Business Management</Badge>
                    <Badge variant="secondary" className="bg-blue-100 text-blue-800">Sales Leadership</Badge>
                    <Badge variant="secondary" className="bg-blue-100 text-blue-800">President's Club</Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4 text-gray-700">
                  <p>
                    Brian Goldbeck's journey reflects a lifelong passion for leadership, growth, and creating meaningful impact. 
                    Born and raised in New Jersey, Brian cultivated his drive early on, forming a lasting bond with Dr. Karan Narwal 
                    during their time at Christian Brothers Academy.
                  </p>
                  <p>
                    After earning a Bachelor's degree in Business Management from Monmouth University, Brian embarked on a new chapter 
                    in Florida with his wife in 2011. With decades of expertise in sales, business development, and client success, 
                    Brian built a career defined by leadership and excellence.
                  </p>
                  <p>
                    Recognized with President's Club honors and MVP awards at multiple organizations, he led sales teams to consistently 
                    exceed expectations, generating millions in revenue. Having witnessed the challenges and triumphs of mental health 
                    within his own family, Brian approaches this work with deep empathy and personal conviction. 
                    <Link to="/about" className="text-blue-600 hover:text-blue-800 underline">Learn more about our company's mission</Link>.
                  </p>

                  <div className="mt-6">
                    <h5 className="font-bold text-blue-800 mb-3">Key Achievements</h5>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                        Multiple President's Club honors
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                        MVP awards at multiple organizations
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                        Millions in revenue generated
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                        Decades of sales leadership experience
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Conference Gallery */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-50 to-blue-100">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12">
            <h3 className="text-4xl font-bold mb-4 text-blue-800">Our Team in Action</h3>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-800 mx-auto mb-6"></div>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              See our team actively engaging with the mental health community through conferences, presentations, and professional development.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}>
              <Card className="border-blue-200 overflow-hidden">
                <img
                  src="https://newoaks.s3.us-west-1.amazonaws.com/AutoDev/17785/258f3061-0676-432f-8cf3-d05fb0fc9647.webp"
                  alt="Dr Karan with TMS specialist doctors in conference"
                  className="w-full h-48 object-cover" />

                <CardContent className="p-4">
                  <h4 className="font-bold text-blue-800 mb-2">Industry Collaboration</h4>
                  <p className="text-gray-700 text-sm">
                    Building relationships with leading TMS specialists and mental health professionals.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}>
              <Card className="border-blue-200 overflow-hidden">
                <img
                  src="https://newoaks.s3.us-west-1.amazonaws.com/AutoDev/17785/984fbe23-426b-4a05-80fa-d8106643957b.webp"
                  alt="Dr Karan with TMS specialist doctors"
                  className="w-full h-48 object-cover" />

                <CardContent className="p-4">
                  <h4 className="font-bold text-blue-800 mb-2">Expert Networking</h4>
                  <p className="text-gray-700 text-sm">
                    Connecting with thought leaders in TMS and mental health treatment.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}>
              <Card className="border-blue-200 overflow-hidden">
                <img
                  src="https://newoaks.s3.us-west-1.amazonaws.com/AutoDev/17785/d96bb788-357d-478f-9c18-a19a7f51a046.webp"
                  alt="Brian in conference"
                  className="w-full h-48 object-cover" />

                <CardContent className="p-4">
                  <h4 className="font-bold text-blue-800 mb-2">Professional Development</h4>
                  <p className="text-gray-700 text-sm">
                    Staying current with industry trends and best practices in mental health business development.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}>
              <Card className="border-blue-200 overflow-hidden">
                <img
                  src="https://newoaks.s3.us-west-1.amazonaws.com/AutoDev/17785/fbc4af1b-e863-42e9-9df7-f4cd4e6683df.webp"
                  alt="Dr Karan with TMS specialist doctors at conference"
                  className="w-full h-48 object-cover" />

                <CardContent className="p-4">
                  <h4 className="font-bold text-blue-800 mb-2">Knowledge Sharing</h4>
                  <p className="text-gray-700 text-sm">
                    Participating in discussions about advancing TMS and mental health care practices.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}>
              <Card className="border-blue-200 overflow-hidden">
                <img
                  src="https://newoaks.s3.us-west-1.amazonaws.com/AutoDev/17785/13b1c16e-4a61-4609-8020-ff685803ca16.webp"
                  alt="Dr Kohi smiling in front of TMS posing as patient"
                  className="w-full h-48 object-cover" />

                <CardContent className="p-4">
                  <h4 className="font-bold text-blue-808 mb-2">Patient Experience</h4>
                  <p className="text-gray-700 text-sm">
                    Understanding the patient perspective through hands-on experience with TMS treatments.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}>
              <Card className="border-blue-200 overflow-hidden">
                <img
                  src="https://newoaks.s3.us-west-1.amazonaws.com/AutoDev/17785/1fa34bf5-9a21-42af-9e2f-beb1a8db5598.webp"
                  alt="Dr Karan with TMS specialist doctors at conference"
                  className="w-full h-48 object-cover" />

                <CardContent className="p-4">
                  <h4 className="font-bold text-blue-800 mb-2">Continuous Learning</h4>
                  <p className="text-gray-700 text-sm">
                    Committed to ongoing education and staying at the forefront of mental health innovations.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12">
            <h3 className="text-4xl font-bold mb-4 text-blue-800">Why Choose Our Team</h3>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-800 mx-auto"></div>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}>
              <Card className="h-full border-blue-200 hover:shadow-lg transition-shadow text-center">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-2xl">🎯</span>
                  </div>
                  <h4 className="text-xl font-bold text-blue-800 mb-3">Proven Experience</h4>
                  <p className="text-gray-700">
                    Decades of combined experience in mental health practice management, marketing, and business development. 
                    <Link to="/services" className="text-blue-600 hover:text-blue-800 underline">Discover our proven solutions</Link>.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}>
              <Card className="h-full border-blue-200 hover:shadow-lg transition-shadow text-center">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-2xl">💙</span>
                  </div>
                  <h4 className="text-xl font-bold text-blue-800 mb-3">Personal Touch</h4>
                  <p className="text-gray-700">
                    Small team approach ensures personalized service and direct access to decision-makers who understand your needs. 
                    <Link to="/contact" className="text-blue-600 hover:text-blue-800 underline">Experience our personal approach</Link>.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}>
              <Card className="h-full border-blue-200 hover:shadow-lg transition-shadow text-center">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-2xl">🚀</span>
                  </div>
                  <h4 className="text-xl font-bold text-blue-800 mb-3">Results-Driven</h4>
                  <p className="text-gray-700">
                    Track record of delivering measurable results that help practices grow while maintaining focus on patient care. 
                    <Link to="/about" className="text-blue-600 hover:text-blue-800 underline">Read about our values and approach</Link>.
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
            <h3 className="text-4xl font-bold mb-6">Ready to Work With Our Team?</h3>
            <p className="text-xl mb-8 text-blue-100">
              Let's discuss how our expertise can help transform your practice and reach more patients.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-blue-50 text-lg px-8 py-3">
                  Schedule a Consultation
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

export default TeamPage;