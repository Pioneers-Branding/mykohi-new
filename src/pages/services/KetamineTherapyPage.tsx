import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const KetamineTherapyPage = () => {
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

            <Badge className="mb-4 bg-orange-100 text-orange-800">Ketamine Therapy</Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              Ketamine Therapy Marketing
            </h1>
            <p className="text-xl text-blue-700 mb-8 leading-relaxed">
              Specialized marketing and consulting for ketamine infusion centers and therapy practices
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-3">
                  Get Ketamine Marketing
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

      {/* Ketamine Marketing Expertise */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}>

              <h2 className="text-4xl font-bold mb-6 text-blue-800">Ketamine Therapy Marketing Expertise</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Ketamine therapy represents a revolutionary breakthrough in mental health treatment, offering 
                  rapid relief for treatment-resistant depression, anxiety, and other conditions. Marketing this 
                  innovative treatment requires specialized knowledge and expertise.
                </p>
                <p>
                  Our team understands the unique considerations for ketamine therapy marketing, including 
                  patient education, safety communication, and regulatory compliance. We help ketamine centers 
                  reach qualified patients while maintaining the highest standards of medical marketing.
                </p>
                <p>
                  From startup ketamine clinics to established centers looking to expand, we provide comprehensive 
                  marketing strategies that drive patient acquisition and build trust in your innovative treatments.
                </p>
              </div>
              
              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-orange-50 rounded-lg">
                  <div className="text-3xl font-bold text-orange-600">300%</div>
                  <div className="text-sm text-orange-800">Average Patient Increase</div>
                </div>
                <div className="text-center p-4 bg-orange-50 rounded-lg">
                  <div className="text-3xl font-bold text-orange-600">90%</div>
                  <div className="text-sm text-orange-800">Client Retention Rate</div>
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
                src="https://newoaks.s3.us-west-1.amazonaws.com/AutoDev/17785/984fbe23-426b-4a05-80fa-d8106643957b.webp"
                alt="Dr Karan with TMS specialist doctor in conference"
                className="rounded-lg shadow-lg w-full h-48 object-cover" />

              <img
                src="https://newoaks.s3.us-west-1.amazonaws.com/AutoDev/17785/fbc4af1b-e863-42e9-9df7-f4cd4e6683df.webp"
                alt="Dr Karan with TMS specialist doctor in conference"
                className="rounded-lg shadow-lg w-full h-48 object-cover" />

              <img
                src="https://newoaks.s3.us-west-1.amazonaws.com/AutoDev/17785/2c622d41-a395-45c6-9f28-98c4e3aa34b5.webp"
                alt="Dr Karan in a conference posing"
                className="rounded-lg shadow-lg w-full h-48 object-cover" />

              <img
                src="https://newoaks.s3.us-west-1.amazonaws.com/AutoDev/17785/a2797802-9234-402c-a49d-afe5feb5621f.webp"
                alt="Dr Karan holding coffee in presentation"
                className="rounded-lg shadow-lg w-full h-48 object-cover" />

            </motion.div>
          </div>
        </div>
      </section>

      {/* Ketamine Marketing Services */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-50 to-blue-100">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12">

            <h3 className="text-4xl font-bold mb-4 text-blue-800">Ketamine Therapy Marketing Services</h3>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-800 mx-auto mb-6"></div>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Specialized marketing solutions designed for ketamine therapy centers
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
                  <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-2xl">🧪</span>
                  </div>
                  <CardTitle className="text-blue-800 text-center">Patient Education Campaigns</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 text-center">
                    Comprehensive educational content that helps patients understand ketamine therapy, 
                    its benefits, and safety profile for informed decision-making.
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
                  <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-2xl">🔍</span>
                  </div>
                  <CardTitle className="text-blue-800 text-center">Ketamine SEO Strategy</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 text-center">
                    Targeted search engine optimization focused on ketamine therapy keywords 
                    to help patients find your services when searching for treatment options.
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
                  <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-2xl">🎯</span>
                  </div>
                  <CardTitle className="text-blue-800 text-center">Targeted Advertising</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 text-center">
                    Precision-targeted ad campaigns that reach individuals seeking ketamine therapy 
                    for depression, anxiety, PTSD, and chronic pain conditions.
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
                  <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-2xl">🏥</span>
                  </div>
                  <CardTitle className="text-blue-800 text-center">Provider Partnerships</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 text-center">
                    Build strategic relationships with psychiatrists, therapists, and medical professionals 
                    for sustainable ketamine therapy referrals.
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
                  <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-2xl">✅</span>
                  </div>
                  <CardTitle className="text-blue-800 text-center">Compliance Marketing</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 text-center">
                    Ensure all marketing materials meet regulatory requirements and industry best practices 
                    for ketamine therapy promotion and patient safety.
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
                  <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-2xl">💬</span>
                  </div>
                  <CardTitle className="text-blue-800 text-center">Success Story Marketing</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 text-center">
                    Showcase the transformative power of ketamine therapy through carefully crafted 
                    patient success stories and outcome testimonials.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Ketamine Specialties Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12">

            <h3 className="text-4xl font-bold mb-4 text-blue-800">Ketamine Treatment Specialties</h3>
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
                  <div className="text-6xl mb-4">😔</div>
                  <CardTitle className="text-blue-800">Treatment-Resistant Depression</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    Rapid-acting ketamine therapy for patients who haven't responded to traditional antidepressants.
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
                  <div className="text-6xl mb-4">😰</div>
                  <CardTitle className="text-blue-800">Anxiety Disorders</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    Innovative ketamine treatment for severe anxiety and panic disorders resistant to other therapies.
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
                  <div className="text-6xl mb-4">🎖️</div>
                  <CardTitle className="text-blue-800">PTSD Treatment</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    Breakthrough ketamine therapy for post-traumatic stress disorder and trauma-related conditions.
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
                  <div className="text-6xl mb-4">🤕</div>
                  <CardTitle className="text-blue-800">Chronic Pain</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    Ketamine infusion therapy for chronic pain conditions and complex regional pain syndrome.
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

            <h3 className="text-4xl font-bold mb-6">Ready to Grow Your Ketamine Practice?</h3>
            <p className="text-xl mb-8 text-blue-100">
              Let's create a marketing strategy that connects you with patients who can benefit from ketamine therapy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-blue-50 text-lg px-8 py-3">
                  Start Ketamine Marketing
                </Button>
              </Link>
              <Link to="/services/depression-treatment">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 text-lg px-8 py-3">
                  Depression Treatment Marketing
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>);

};

export default KetamineTherapyPage;