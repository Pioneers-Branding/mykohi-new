import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const DigitalMarketingPage = () => {
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

            <Badge className="mb-4 bg-pink-100 text-pink-800">Digital Marketing</Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              Digital Marketing Solutions
            </h1>
            <p className="text-xl text-blue-700 mb-8 leading-relaxed">
              Comprehensive digital marketing services designed specifically for mental health and medical practices
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-3">
                  Get Digital Marketing
                </Button>
              </Link>
              <Link to="/services">
                <Button size="lg" variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50 text-lg px-8 py-3">
                  All Services
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Digital Marketing Expertise */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}>

              <h2 className="text-4xl font-bold mb-6 text-blue-800">Digital Marketing Expertise</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  In today's digital landscape, mental health practices need sophisticated marketing strategies 
                  to connect with patients seeking care. Our digital marketing expertise combines medical 
                  industry knowledge with cutting-edge online marketing techniques.
                </p>
                <p>
                  We understand the unique challenges of marketing mental health services, including compliance 
                  requirements, patient privacy concerns, and the sensitive nature of mental health communications. 
                  Our strategies are designed to build trust while driving meaningful patient connections.
                </p>
                <p>
                  From search engine optimization to social media management, we provide comprehensive digital 
                  marketing solutions that help mental health practices thrive in the digital age.
                </p>
              </div>
              
              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-pink-50 rounded-lg">
                  <div className="text-3xl font-bold text-pink-600">500%</div>
                  <div className="text-sm text-pink-800">Average Website Traffic Increase</div>
                </div>
                <div className="text-center p-4 bg-pink-50 rounded-lg">
                  <div className="text-3xl font-bold text-pink-600">250%</div>
                  <div className="text-sm text-pink-800">Average Lead Generation Boost</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4">

              <img
                src="https://newoaks.s3.us-west-1.amazonaws.com/AutoDev/17785/e001493f-f2bb-4e4a-8643-c955a61d6ba5.webp"
                alt="Dr Karan giving presentation about TMS consulting"
                className="rounded-lg shadow-lg w-full h-48 object-cover" />

              <img
                src="https://newoaks.s3.us-west-1.amazonaws.com/AutoDev/17785/94e48b32-26c0-42fe-bb54-2d170b935ea4.webp"
                alt="Dr Karan with TMS specialist doctors in conference"
                className="rounded-lg shadow-lg w-full h-48 object-cover" />

              <img
                src="https://newoaks.s3.us-west-1.amazonaws.com/AutoDev/17785/1fa34bf5-9a21-42af-9e2f-beb1a8db5598.webp"
                alt="Dr Karan with TMS specialist doctor in conference"
                className="rounded-lg shadow-lg w-full h-48 object-cover" />

              <img
                src="https://newoaks.s3.us-west-1.amazonaws.com/AutoDev/17785/d96bb788-357d-478f-9c18-a19a7f51a046.webp"
                alt="Brian in conference"
                className="rounded-lg shadow-lg w-full h-48 object-cover" />

            </motion.div>
          </div>
        </div>
      </section>

      {/* Digital Marketing Services */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-50 to-blue-100">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12">

            <h3 className="text-4xl font-bold mb-4 text-blue-800">Digital Marketing Services</h3>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-800 mx-auto mb-6"></div>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Complete digital marketing solutions for mental health practices
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}>

              <Card className="h-full border-blue-200 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-16 h-16 bg-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-2xl">🌐</span>
                  </div>
                  <CardTitle className="text-blue-800 text-center">Website Design & Development</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 text-center">
                    Custom, responsive websites optimized for mental health practices with HIPAA-compliant 
                    features and patient-friendly design.
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
                <CardHeader>
                  <div className="w-16 h-16 bg-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-2xl">🔍</span>
                  </div>
                  <CardTitle className="text-blue-800 text-center">Search Engine Optimization</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 text-center">
                    Comprehensive SEO strategies to improve your practice's visibility in search results 
                    and attract patients actively seeking mental health services.
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
                <CardHeader>
                  <div className="w-16 h-16 bg-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-2xl">💰</span>
                  </div>
                  <CardTitle className="text-blue-800 text-center">Pay-Per-Click Advertising</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 text-center">
                    Strategic PPC campaigns on Google and social media platforms to drive qualified traffic 
                    and convert prospects into patients.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}>

              <Card className="h-full border-blue-200 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-16 h-16 bg-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-2xl">📱</span>
                  </div>
                  <CardTitle className="text-blue-800 text-center">Social Media Management</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 text-center">
                    Professional social media strategy and management to build your practice's online presence 
                    and engage with your community meaningfully.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}>

              <Card className="h-full border-blue-200 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-16 h-16 bg-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-2xl">✍️</span>
                  </div>
                  <CardTitle className="text-blue-800 text-center">Content Marketing</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 text-center">
                    Educational and engaging content creation that establishes your expertise and helps 
                    patients understand mental health treatment options.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}>

              <Card className="h-full border-blue-200 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-16 h-16 bg-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-2xl">📧</span>
                  </div>
                  <CardTitle className="text-blue-800 text-center">Email Marketing</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 text-center">
                    HIPAA-compliant email marketing campaigns to nurture patient relationships and 
                    maintain engagement with your practice community.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              viewport={{ once: true }}>

              <Card className="h-full border-blue-200 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-16 h-16 bg-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-2xl">🎨</span>
                  </div>
                  <CardTitle className="text-blue-800 text-center">Creative Design Services</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 text-center">
                    Professional graphic design for digital marketing materials, ensuring consistent 
                    branding across all your online platforms.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}>

              <Card className="h-full border-blue-200 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-16 h-16 bg-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-2xl">📊</span>
                  </div>
                  <CardTitle className="text-blue-800 text-center">Analytics & Reporting</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 text-center">
                    Comprehensive analytics and reporting to track campaign performance and optimize 
                    your digital marketing ROI.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              viewport={{ once: true }}>

              <Card className="h-full border-blue-200 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-16 h-16 bg-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-2xl">🌟</span>
                  </div>
                  <CardTitle className="text-blue-800 text-center">Online Reputation Management</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 text-center">
                    Monitor and enhance your practice's online reputation through review management 
                    and positive online presence building.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Digital Strategy Process */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12">

            <h3 className="text-4xl font-bold mb-4 text-blue-800">Our Digital Marketing Process</h3>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-800 mx-auto mb-6"></div>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center">

              <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-3xl font-bold">1</span>
              </div>
              <h4 className="text-xl font-bold mb-2 text-blue-800">Discovery & Analysis</h4>
              <p className="text-gray-700">
                Comprehensive analysis of your practice, target audience, and competitive landscape.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center">

              <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-3xl font-bold">2</span>
              </div>
              <h4 className="text-xl font-bold mb-2 text-blue-800">Strategy Development</h4>
              <p className="text-gray-700">
                Custom digital marketing strategy tailored to your practice goals and patient needs.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center">

              <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-3xl font-bold">3</span>
              </div>
              <h4 className="text-xl font-bold mb-2 text-blue-800">Implementation</h4>
              <p className="text-gray-700">
                Execute campaigns across multiple digital channels with precision and expertise.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-center">

              <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-3xl font-bold">4</span>
              </div>
              <h4 className="text-xl font-bold mb-2 text-blue-800">Optimization</h4>
              <p className="text-gray-700">
                Continuous monitoring and optimization to maximize ROI and patient acquisition.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center">

            <h3 className="text-4xl font-bold mb-6">Ready to Transform Your Digital Presence?</h3>
            <p className="text-xl mb-8 text-blue-100">
              Let's create a comprehensive digital marketing strategy that drives real results for your practice.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-blue-50 text-lg px-8 py-3">
                  Start Digital Marketing
                </Button>
              </Link>
              <Link to="/services/mental-health-consulting">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 text-lg px-8 py-3">
                  Practice Consulting
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>);

};

export default DigitalMarketingPage;