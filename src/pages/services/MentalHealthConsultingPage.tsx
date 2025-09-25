import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const MentalHealthConsultingPage = () => {
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

            <Badge className="mb-4 bg-purple-100 text-purple-800">Mental Health Consulting</Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              Mental Health Practice Consulting
            </h1>
            <p className="text-xl text-blue-700 mb-8 leading-relaxed">
              Comprehensive business consulting for mental health practices, therapy centers, and wellness clinics
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-3">
                  Get Practice Consulting
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

      {/* Mental Health Consulting Expertise */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}>

              <h2 className="text-4xl font-bold mb-6 text-blue-800">Mental Health Practice Expertise</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Building a successful mental health practice requires more than clinical expertise. It demands 
                  understanding of business operations, patient experience, staff management, and growth strategies 
                  unique to the mental health field.
                </p>
                <p>
                  Our team brings deep experience in mental health practice operations, having built and scaled 
                  successful treatment centers. We understand the unique challenges facing mental health providers 
                  and offer practical solutions for sustainable growth.
                </p>
                <p>
                  From startup practices to established clinics looking to expand, we provide comprehensive 
                  consulting services that address every aspect of mental health practice management.
                </p>
              </div>
              
              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-purple-50 rounded-lg">
                  <div className="text-3xl font-bold text-purple-600">50+</div>
                  <div className="text-sm text-purple-800">Practices Consulted</div>
                </div>
                <div className="text-center p-4 bg-purple-50 rounded-lg">
                  <div className="text-3xl font-bold text-purple-600">95%</div>
                  <div className="text-sm text-purple-800">Client Satisfaction Rate</div>
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
                src="https://newoaks.s3.us-west-1.amazonaws.com/AutoDev/17785/2c232ffc-7635-47fc-8656-fef32cf73716.webp"
                alt="Dr Karan with TMS specialist doctor in conference"
                className="rounded-lg shadow-lg w-full h-48 object-cover" />

              <img
                src="https://newoaks.s3.us-west-1.amazonaws.com/AutoDev/17785/1fa34bf5-9a21-42af-9e2f-beb1a8db5598.webp"
                alt="Dr Karan with TMS specialist doctor in conference"
                className="rounded-lg shadow-lg w-full h-48 object-cover" />

              <img
                src="https://newoaks.s3.us-west-1.amazonaws.com/AutoDev/17785/d96bb788-357d-478f-9c18-a19a7f51a046.webp"
                alt="Brian in conference"
                className="rounded-lg shadow-lg w-full h-48 object-cover" />

              <img
                src="https://newoaks.s3.us-west-1.amazonaws.com/AutoDev/17785/d377e1bd-f120-4c9b-8138-af76e0c4de34.webp"
                alt="Dr Karan with TMS specialist doctor in conference"
                className="rounded-lg shadow-lg w-full h-48 object-cover" />

            </motion.div>
          </div>
        </div>
      </section>

      {/* Mental Health Consulting Services */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-50 to-blue-100">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12">

            <h3 className="text-4xl font-bold mb-4 text-blue-800">Mental Health Consulting Services</h3>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-800 mx-auto mb-6"></div>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Comprehensive consulting solutions designed for mental health practices
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
                  <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-2xl">🏢</span>
                  </div>
                  <CardTitle className="text-blue-800 text-center">Practice Setup & Launch</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 text-center">
                    Complete guidance for launching new mental health practices, from business planning 
                    and licensing to operational setup and staff hiring.
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
                  <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-2xl">⚙️</span>
                  </div>
                  <CardTitle className="text-blue-800 text-center">Operational Optimization</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 text-center">
                    Streamline your practice operations with improved workflows, patient scheduling, 
                    and administrative processes for maximum efficiency.
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
                  <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-2xl">💰</span>
                  </div>
                  <CardTitle className="text-blue-800 text-center">Revenue Optimization</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 text-center">
                    Maximize practice revenue through improved billing processes, insurance optimization, 
                    and strategic service offerings.
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
                  <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-2xl">👥</span>
                  </div>
                  <CardTitle className="text-blue-800 text-center">Staff Development</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 text-center">
                    Comprehensive staff training and development programs to enhance patient care 
                    and improve overall practice performance.
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
                  <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-2xl">📊</span>
                  </div>
                  <CardTitle className="text-blue-800 text-center">Performance Analytics</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 text-center">
                    Data-driven insights and KPI tracking to monitor practice performance and 
                    identify opportunities for improvement and growth.
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
                  <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-2xl">🔒</span>
                  </div>
                  <CardTitle className="text-blue-800 text-center">Compliance & Risk Management</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 text-center">
                    Ensure your practice meets all regulatory requirements and implements best practices 
                    for HIPAA compliance and risk management.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Practice Types Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12">

            <h3 className="text-4xl font-bold mb-4 text-blue-800">Practice Types We Serve</h3>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-800 mx-auto mb-6"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}>

              <Card className="text-center border-blue-200">
                <CardHeader>
                  <div className="text-6xl mb-4">⚡</div>
                  <CardTitle className="text-blue-800">TMS Centers</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    Specialized consulting for TMS treatment centers and neuromodulation practices.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}>

              <Card className="text-center border-blue-200">
                <CardHeader>
                  <div className="text-6xl mb-4">💊</div>
                  <CardTitle className="text-blue-800">Ketamine Clinics</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    Comprehensive support for ketamine therapy and infusion centers.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}>

              <Card className="text-center border-blue-200">
                <CardHeader>
                  <div className="text-6xl mb-4">🗣️</div>
                  <CardTitle className="text-blue-800">Therapy Practices</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    Business consulting for individual and group therapy practices.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}>

              <Card className="text-center border-blue-200">
                <CardHeader>
                  <div className="text-6xl mb-4">🏥</div>
                  <CardTitle className="text-blue-800">Psychiatric Clinics</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    Strategic consulting for psychiatric practices and mental health centers.
                  </p>
                </CardContent>
              </Card>
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

            <h3 className="text-4xl font-bold mb-6">Ready to Transform Your Mental Health Practice?</h3>
            <p className="text-xl mb-8 text-blue-100">
              Let's work together to optimize your operations and help you serve more patients effectively.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-blue-50 text-lg px-8 py-3">
                  Schedule Consultation
                </Button>
              </Link>
              <Link to="/team">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 text-lg px-8 py-3">
                  Meet Our Consultants
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>);

};

export default MentalHealthConsultingPage;