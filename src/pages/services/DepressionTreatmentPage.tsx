import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const DepressionTreatmentPage = () => {
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

            <Badge className="mb-4 bg-green-100 text-green-800">Depression Treatment</Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              Depression Treatment Marketing
            </h1>
            <p className="text-xl text-blue-700 mb-8 leading-relaxed">
              Specialized marketing strategies for depression treatment providers using TMS, Ketamine, and therapy
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-3">
                  Get Marketing Help
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

      {/* Depression Treatment Marketing Expertise */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}>

              <h2 className="text-4xl font-bold mb-6 text-blue-800">Depression Treatment Marketing Expertise</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Depression affects millions of people, and reaching those who need help requires specialized 
                  marketing approaches. Our team understands the sensitive nature of mental health marketing 
                  and creates campaigns that build trust while educating potential patients.
                </p>
                <p>
                  We specialize in marketing for innovative depression treatments including TMS, Ketamine therapy, 
                  and traditional therapeutic approaches. Our campaigns are designed to connect with patients 
                  who are ready for life-changing treatment.
                </p>
                <p>
                  Our approach combines clinical understanding with proven marketing strategies to help depression 
                  treatment providers reach more patients and build sustainable practices.
                </p>
              </div>
              
              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <div className="text-3xl font-bold text-blue-600">85%</div>
                  <div className="text-sm text-blue-800">Patient Conversion Rate</div>
                </div>
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <div className="text-3xl font-bold text-blue-600">200%</div>
                  <div className="text-sm text-blue-800">Average ROI Increase</div>
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
                src="https://newoaks.s3.us-west-1.amazonaws.com/AutoDev/17785/d7279ab8-a706-45a8-8b10-0c3c581a43cd.webp"
                alt="Dr Karan with mental health professionals"
                className="rounded-lg shadow-lg w-full h-48 object-cover" />

              <img
                src="https://newoaks.s3.us-west-1.amazonaws.com/AutoDev/17785/a2797802-9234-402c-a49d-afe5feb5621f.webp"
                alt="Dr Karan presenting at conference"
                className="rounded-lg shadow-lg w-full h-48 object-cover" />

              <img
                src="https://newoaks.s3.us-west-1.amazonaws.com/AutoDev/17785/94e48b32-26c0-42fe-bb54-2d170b935ea4.webp"
                alt="Dr Karan with TMS specialists in conference"
                className="rounded-lg shadow-lg w-full h-48 object-cover" />

              <img
                src="https://newoaks.s3.us-west-1.amazonaws.com/AutoDev/17785/1f148eb0-ee1b-40da-936c-76afbc593b79.webp"
                alt="Dr Karan in conference"
                className="rounded-lg shadow-lg w-full h-48 object-cover" />

            </motion.div>
          </div>
        </div>
      </section>

      {/* Depression Marketing Services */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-50 to-blue-100">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12">

            <h3 className="text-4xl font-bold mb-4 text-blue-800">Depression Treatment Marketing Services</h3>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-800 mx-auto mb-6"></div>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Comprehensive marketing solutions designed for depression treatment providers
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
                  <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-2xl">💚</span>
                  </div>
                  <CardTitle className="text-blue-800 text-center">Empathetic Content Creation</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 text-center">
                    Sensitive, hope-focused content that resonates with individuals seeking depression treatment 
                    while maintaining professional medical standards.
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
                  <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-2xl">🔍</span>
                  </div>
                  <CardTitle className="text-blue-800 text-center">Depression SEO Strategy</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 text-center">
                    Targeted SEO campaigns focused on depression-related keywords and local search optimization 
                    to help patients find your services when they need them most.
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
                  <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-2xl">📱</span>
                  </div>
                  <CardTitle className="text-blue-800 text-center">Social Media Outreach</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 text-center">
                    Thoughtful social media strategies that educate, inspire hope, and connect with individuals 
                    seeking depression treatment options.
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
                  <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-2xl">💬</span>
                  </div>
                  <CardTitle className="text-blue-800 text-center">Patient Testimonial Campaigns</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 text-center">
                    Authentic patient success stories that showcase the transformative power of depression 
                    treatment while respecting privacy and confidentiality.
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
                  <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-2xl">🎯</span>
                  </div>
                  <CardTitle className="text-blue-800 text-center">Targeted Ad Campaigns</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 text-center">
                    Precisely targeted advertising campaigns that reach individuals actively seeking depression 
                    treatment options in your local area.
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
                  <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-2xl">📚</span>
                  </div>
                  <CardTitle className="text-blue-800 text-center">Educational Resources</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 text-center">
                    Comprehensive educational materials that help patients understand depression treatment 
                    options and make informed decisions about their mental health care.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Treatment Options Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12">

            <h3 className="text-4xl font-bold mb-4 text-blue-800">Depression Treatment Specialties We Market</h3>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-800 mx-auto mb-6"></div>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}>

              <Card className="text-center border-blue-200">
                <CardHeader>
                  <div className="text-6xl mb-4">⚡</div>
                  <CardTitle className="text-blue-800">TMS for Depression</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    FDA-approved TMS therapy for treatment-resistant depression with proven effectiveness 
                    and minimal side effects.
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
                  <CardTitle className="text-blue-800">Ketamine Therapy</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    Innovative ketamine-assisted therapy for treatment-resistant depression, offering 
                    rapid relief for qualifying patients.
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
                  <CardTitle className="text-blue-800">Therapy & Counseling</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    Traditional and innovative therapy approaches including CBT, DBT, and other 
                    evidence-based depression treatments.
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

            <h3 className="text-4xl font-bold mb-6">Ready to Help More People with Depression?</h3>
            <p className="text-xl mb-8 text-blue-100">
              Let's create a marketing strategy that connects you with patients who need your help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-blue-50 text-lg px-8 py-3">
                  Start Marketing Campaign
                </Button>
              </Link>
              <Link to="/services/tms-treatment">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 text-lg px-8 py-3">
                  Learn About TMS Marketing
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>);

};

export default DepressionTreatmentPage;