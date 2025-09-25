import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { motion } from "motion/react";
import { Link } from "react-router-dom";

const ServicesPage = () => {
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
              <Button variant="ghost" className="text-blue-700 hover:text-blue-900 bg-blue-50">
                Services
              </Button>
              <Link to="/team">
                <Button variant="ghost" className="text-blue-700 hover:text-blue-900">
                  Team
                </Button>
              </Link>
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
              Our Services
            </h2>
            <p className="text-xl text-blue-700 mb-4 font-medium">
              Comprehensive Solutions for TMS, Ketamine & Mental Health Practices
            </p>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              From strategic marketing to operational excellence, we provide everything your practice needs to thrive. 
              <Link to="/about" className="text-blue-600 hover:text-blue-800 underline">Learn about our story</Link> and 
              <Link to="/team" className="text-blue-600 hover:text-blue-800 underline">meet our expert team</Link>.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12">
            <h3 className="text-4xl font-bold mb-4 text-blue-800">What We Offer</h3>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-800 mx-auto mb-6"></div>
            <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
              We partner with mental health providers to transform patient enrollment into a seamless and value-driven experience. 
              Our approach creates a patient journey that strengthens provider-patient relationships from intake through treatment completion. 
              <Link to="/contact" className="text-blue-600 hover:text-blue-800 underline">Contact us</Link> to discuss how we can help your practice.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}>
              <Card className="h-full border-blue-200 hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-2xl">🎯</span>
                  </div>
                  <CardTitle className="text-blue-800">Strategic Marketing</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 text-center">
                    Marketing strategies crafted to enhance your digital presence and drive meaningful inquiries through 
                    authentic messaging, organic content creation, and targeted ad management. 
                    <Link to="/team" className="text-blue-600 hover:text-blue-800 underline">Learn about our team's expertise</Link>.
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
                    <span className="text-white text-2xl">🏥</span>
                  </div>
                  <CardTitle className="text-blue-800">Practice Optimization</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 text-center">
                    Tailored training, coaching, and actionable strategies that equip providers with tools to foster 
                    organic and meaningful conversations with patients. 
                    <Link to="/about" className="text-blue-600 hover:text-blue-800 underline">Discover our approach</Link>.
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
                    <span className="text-white text-2xl">🤝</span>
                  </div>
                  <CardTitle className="text-blue-800">Personal Service</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 text-center">
                    Our small-team model offers direct access to experts who understand the nuances of TMS and Ketamine practices, 
                    providing personalized service unmatched by larger agencies. 
                    <Link to="/team" className="text-blue-600 hover:text-blue-800 underline">Meet our dedicated team</Link>.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Detailed Services */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-50 to-blue-100">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Marketing Services */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}>
              <Card className="border-blue-200">
                <CardHeader className="bg-gradient-to-r from-blue-600 to-blue-700 text-white">
                  <CardTitle className="text-2xl">Strategic Marketing Solutions</CardTitle>
                  <CardDescription className="text-blue-100">
                    Driving Growth Through Strategic Marketing Solutions
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-6">
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="website">
                      <AccordionTrigger className="text-blue-800 hover:text-blue-600">
                        Website Management
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-700">
                        Your website serves as the foundation of your online presence and the gateway for potential patients. 
                        We craft fast, secure, and user-friendly sites that reflect your brand, educate patients on TMS and 
                        Ketamine treatments, and inspire action. Our team handles everything from initial development to ongoing updates.
                      </AccordionContent>
                    </AccordionItem>
                    
                    <AccordionItem value="seo">
                      <AccordionTrigger className="text-blue-800 hover:text-blue-600">
                        SEO Optimization
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-700">
                        Ranking high on search engines like Google is essential for connecting with patients seeking mental health solutions. 
                        We craft SEO strategies tailored to TMS and Ketamine practices, from detailed keyword research and on-page optimization 
                        to local SEO and authoritative backlink-building.
                      </AccordionContent>
                    </AccordionItem>
                    
                    <AccordionItem value="creatives">
                      <AccordionTrigger className="text-blue-800 hover:text-blue-600">
                        Digital Creatives
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-700">
                        Marketing success depends on creating content that grabs attention and resonates with your audience. 
                        We craft high-quality digital creatives designed to engage patients seeking TMS and Ketamine treatments, 
                        beginning with understanding your practice's story, brand identity, and patient demographics.
                      </AccordionContent>
                    </AccordionItem>
                    
                    <AccordionItem value="gmb">
                      <AccordionTrigger className="text-blue-800 hover:text-blue-600">
                        Google My Business
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-700">
                        A well-optimized Google My Business profile positions your practice as the go-to choice in local search results. 
                        We provide comprehensive GMB management to ensure your practice shines online and prospective patients find 
                        the confidence to choose your services.
                      </AccordionContent>
                    </AccordionItem>
                    
                    <AccordionItem value="ads">
                      <AccordionTrigger className="text-blue-800 hover:text-blue-600">
                        Ads Management
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-700">
                        We create and manage targeted ad campaigns across platforms like Google, Facebook, and Instagram to boost visibility, 
                        drive engagement, and convert potential patients into loyal clients. Our process begins with understanding your 
                        practice's goals and target audience.
                      </AccordionContent>
                    </AccordionItem>
                    
                    <AccordionItem value="social">
                      <AccordionTrigger className="text-blue-800 hover:text-blue-600">
                        Social Media Strategy
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-700">
                        We empower mental health professionals to elevate their digital presence with social media strategies crafted 
                        specifically for TMS and Ketamine practices. We guide you in creating authentic, impactful content that resonates 
                        with your audience while staying true to your brand's voice and values.
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </CardContent>
              </Card>
            </motion.div>

            {/* Consulting Services */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}>
              <Card className="border-blue-200">
                <CardHeader className="bg-gradient-to-r from-blue-700 to-blue-800 text-white">
                  <CardTitle className="text-2xl">Comprehensive Consulting</CardTitle>
                  <CardDescription className="text-blue-100">
                    Comprehensive Consulting for Operational Excellence
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-6">
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="assessment">
                      <AccordionTrigger className="text-blue-800 hover:text-blue-600">
                        Clinic Assessment
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-700">
                        Our clinic assessment provides a 360-degree evaluation of your practice, uncovering opportunities to optimize 
                        operations and elevate patient care. We analyze every aspect of your workflows, from staff roles and patient 
                        interactions to accommodations and resource management.
                      </AccordionContent>
                    </AccordionItem>
                    
                    <AccordionItem value="training">
                      <AccordionTrigger className="text-blue-800 hover:text-blue-600">
                        Provider Training
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-700">
                        Our tailored training programs for TMS and Ketamine providers equip your team with tools and strategies to engage 
                        patients confidently and effectively. We focus on patient enrollment, outreach, and delivering exceptional care.
                      </AccordionContent>
                    </AccordionItem>
                    
                    <AccordionItem value="intake">
                      <AccordionTrigger className="text-blue-800 hover:text-blue-600">
                        Intake Training
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-700">
                        Our specialized intake training empowers your TMS and Ketamine clinic team to optimize patient enrollment and 
                        enhance conversion rates. The first point of contact sets the tone for a patient's journey.
                      </AccordionContent>
                    </AccordionItem>
                    
                    <AccordionItem value="mystery">
                      <AccordionTrigger className="text-blue-800 hover:text-blue-600">
                        Mystery Patient Call & Review
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-700">
                        Our secret shopper service provides an authentic evaluation of your clinic's intake strategy, offering invaluable 
                        insights into the patient experience through undercover assessments via phone calls, online inquiries, or in-person visits.
                      </AccordionContent>
                    </AccordionItem>
                    
                    <AccordionItem value="referral">
                      <AccordionTrigger className="text-blue-800 hover:text-blue-600">
                        Referral Network Strategy
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-700">
                        We craft targeted referral strategies for TMS and Ketamine providers, unlocking untapped opportunities to grow your 
                        patient base. We identify often-overlooked sources such as primary care physicians, therapists, specialists, and 
                        local community organizations. <Link to="/team" className="text-blue-600 hover:text-blue-800 underline">Meet the experts</Link> who will develop your referral strategy.
                      </AccordionContent>
                    </AccordionItem>
                    
                    <AccordionItem value="interviews">
                      <AccordionTrigger className="text-blue-800 hover:text-blue-600">
                        Staff Interviews
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-700">
                        We provide comprehensive staff interview services to help you build the right team for your TMS and Ketamine practice, 
                        ensuring you have qualified, compassionate professionals who align with your practice values. 
                        <Link to="/about" className="text-blue-600 hover:text-blue-800 underline">Learn about our values</Link> and how we help you find the right team members.
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          <Card className="mt-12 border-blue-300 bg-white">
            <CardContent className="p-8 text-center">
              <blockquote className="text-2xl font-medium text-blue-800 italic mb-4">
                "Quality is never an accident; it is always the result of intelligent effort."
              </blockquote>
              <p className="text-blue-600 font-medium">The Power of Intelligent Effort</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Images Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12">
            <h3 className="text-4xl font-bold mb-4 text-blue-800">Our Expertise in Action</h3>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-800 mx-auto"></div>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}>
              <Card className="border-blue-200">
                <img
                  src="https://newoaks.s3.us-west-1.amazonaws.com/AutoDev/17785/9f9defb6-b5bf-41c8-8ea6-1d4af12d9100.webp"
                  alt="Dr Karan giving Brainsway TMS demo"
                  className="w-full h-48 object-cover rounded-t-lg" />

                <CardContent className="p-4">
                  <h4 className="font-bold text-blue-800 mb-2">TMS Equipment Training</h4>
                  <p className="text-gray-700 text-sm">
                    Hands-on training and demonstrations with leading TMS equipment manufacturers. <Link to="/team" className="text-blue-600 hover:text-blue-800 underline">Learn about our team's expertise</Link>.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}>
              <Card className="border-blue-200">
                <img
                  src="https://newoaks.s3.us-west-1.amazonaws.com/AutoDev/17785/94e48b32-26c0-42fe-bb54-2d170b935ea4.webp"
                  alt="Dr Karan with TMS specialists at conference"
                  className="w-full h-48 object-cover rounded-t-lg" />

                <CardContent className="p-4">
                  <h4 className="font-bold text-blue-800 mb-2">Industry Conferences</h4>
                  <p className="text-gray-700 text-sm">
                    Active participation in mental health and TMS conferences nationwide. <Link to="/about" className="text-blue-600 hover:text-blue-800 underline">Read about our mission</Link>.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}>
              <Card className="border-blue-200">
                <img
                  src="https://newoaks.s3.us-west-1.amazonaws.com/AutoDev/17785/a2797802-9234-402c-a49d-afe5feb5621f.webp"
                  alt="Dr Karan presenting at conference"
                  className="w-full h-48 object-cover rounded-t-lg" />

                <CardContent className="p-4">
                  <h4 className="font-bold text-blue-800 mb-2">Educational Presentations</h4>
                  <p className="text-gray-700 text-sm">
                    Leading presentations on TMS consulting and mental health practice optimization. <Link to="/contact" className="text-blue-600 hover:text-blue-800 underline">Contact us to discuss your needs</Link>.
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
            <h3 className="text-4xl font-bold mb-6">Ready to Elevate Your Practice?</h3>
            <p className="text-xl mb-8 text-blue-100">
              Let's discuss how our tailored solutions can help you reach more patients and grow your impact.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-blue-50 text-lg px-8 py-3">
                  Schedule a Consultation
                </Button>
              </Link>
              <Link to="/team">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 text-lg px-8 py-3">
                  Meet Our Team
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
              <h5 className="font-bold mb-4">Services</h5>
              <ul className="space-y-2 text-blue-200">
                <li>Website Management</li>
                <li>SEO Optimization</li>
                <li>Digital Marketing</li>
                <li>Clinic Assessment</li>
                <li>Provider Training</li>
                <li>Referral Network Strategy</li>
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

export default ServicesPage;