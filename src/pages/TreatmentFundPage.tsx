import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const TreatmentFundPage = () => {
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

            <Badge className="mb-4 bg-green-100 text-green-800">Making a Difference</Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              MyKohi Treatment Fund
            </h1>
            <p className="text-xl text-blue-700 mb-8 leading-relaxed">
              Sponsor life-changing mental health treatments for those who need them most
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-3">
                  Sponsor Treatment Today
                </Button>
              </Link>
              <Link to="/about">
                <Button size="lg" variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50 text-lg px-8 py-3">
                  Learn Our Story
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Treatment Fund Mission */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}>

              <h2 className="text-4xl font-bold mb-6 text-blue-800">Our Mission: Making Treatment Accessible</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  The MyKohi Treatment Fund isn't just about getting our clients more patients. It's about raising 
                  awareness and helping those who need life-saving mental health treatment but might need a little 
                  help to access it.
                </p>
                <p>
                  Mental health treatment should not be a luxury reserved for those who can afford it. Through our 
                  treatment fund, we're working to bridge the gap between need and access, ensuring that financial 
                  barriers don't prevent someone from receiving the care they deserve.
                </p>
                <p>
                  Named in honor of Kohi, our beloved rescue dog who taught us about unconditional love and compassion, 
                  this fund embodies our commitment to spreading hope and healing in the mental health community.
                </p>
              </div>
              
              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <div className="text-3xl font-bold text-green-600">100%</div>
                  <div className="text-sm text-green-800">Funds Go to Treatment</div>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <div className="text-3xl font-bold text-green-600">50+</div>
                  <div className="text-sm text-green-800">Lives Impacted</div>
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
                src="https://newoaks.s3.us-west-1.amazonaws.com/AutoDev/17785/f8c202f9-b734-475e-899d-d5a9840776b4.webp"
                alt="Kohi - The inspiration behind MyKohi"
                className="rounded-lg shadow-lg w-full h-48 object-cover" />

              <img
                src="https://newoaks.s3.us-west-1.amazonaws.com/AutoDev/17785/d7279ab8-a706-45a8-8b10-0c3c581a43cd.webp"
                alt="Dr Karan with mental health professionals"
                className="rounded-lg shadow-lg w-full h-48 object-cover" />

              <img
                src="https://newoaks.s3.us-west-1.amazonaws.com/AutoDev/17785/13b1c16e-4a61-4609-8020-ff685803ca16.webp"
                alt="Dr Kohi smiling in front of TMS equipment"
                className="rounded-lg shadow-lg w-full h-48 object-cover" />

              <img
                src="https://newoaks.s3.us-west-1.amazonaws.com/AutoDev/17785/9f9defb6-b5bf-41c8-8ea6-1d4af12d9100.webp"
                alt="Dr Karan giving Brainsway TMS demo"
                className="rounded-lg shadow-lg w-full h-48 object-cover" />

            </motion.div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-50 to-blue-100">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12">

            <h3 className="text-4xl font-bold mb-4 text-blue-800">How the Treatment Fund Works</h3>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-800 mx-auto mb-6"></div>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              100% of funds raised are provided directly to practices to cover treatment expenses
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center">

              <div className="w-20 h-20 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-3xl font-bold">1</span>
              </div>
              <h4 className="text-xl font-bold mb-2 text-blue-800">Sponsor a Treatment</h4>
              <p className="text-gray-700">
                Choose to sponsor TMS therapy sessions, Ketamine infusions, or therapy sessions.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center">

              <div className="w-20 h-20 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-3xl font-bold">2</span>
              </div>
              <h4 className="text-xl font-bold mb-2 text-blue-800">Partner Practice Selection</h4>
              <p className="text-gray-700">
                We identify partner practices who are committed to helping patients in need.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center">

              <div className="w-20 h-20 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-3xl font-bold">3</span>
              </div>
              <h4 className="text-xl font-bold mb-2 text-blue-800">Patient Identification</h4>
              <p className="text-gray-700">
                Practices identify patients who would benefit from treatment but face financial barriers.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-center">

              <div className="w-20 h-20 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-3xl font-bold">4</span>
              </div>
              <h4 className="text-xl font-bold mb-2 text-blue-800">Treatment Delivered</h4>
              <p className="text-gray-700">
                Sponsored treatments are provided to patients, changing lives and offering hope.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Treatment Options */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12">

            <h3 className="text-4xl font-bold mb-4 text-blue-800">Treatments You Can Sponsor</h3>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-800 mx-auto mb-6"></div>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}>

              <Card className="h-full border-blue-200 hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <div className="text-6xl mb-4">⚡</div>
                  <CardTitle className="text-blue-800">TMS Therapy Sessions</CardTitle>
                  <CardDescription>Transcranial Magnetic Stimulation</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 text-center mb-4">
                    Sponsor a complete series of TMS treatments for treatment-resistant depression.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li>• 30-36 treatment sessions</li>
                    <li>• FDA-approved for depression</li>
                    <li>• Non-invasive and effective</li>
                    <li>• Minimal side effects</li>
                  </ul>
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
                  <div className="text-6xl mb-4">💊</div>
                  <CardTitle className="text-blue-800">Ketamine Infusions</CardTitle>
                  <CardDescription>Innovative Mental Health Treatment</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 text-center mb-4">
                    Sponsor ketamine infusion therapy for rapid relief from severe depression.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li>• 6-8 initial infusion sessions</li>
                    <li>• Rapid-acting treatment</li>
                    <li>• Treatment-resistant conditions</li>
                    <li>• Breakthrough therapy option</li>
                  </ul>
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
                  <div className="text-6xl mb-4">🗣️</div>
                  <CardTitle className="text-blue-800">Therapy Sessions</CardTitle>
                  <CardDescription>Mental Health Counseling</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 text-center mb-4">
                    Sponsor individual or group therapy sessions with qualified mental health providers.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li>• Individual therapy sessions</li>
                    <li>• Group therapy programs</li>
                    <li>• Specialized trauma therapy</li>
                    <li>• Family therapy sessions</li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Impact Stories */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-50 to-blue-100">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12">

            <h3 className="text-4xl font-bold mb-4 text-blue-800">Making a Real Impact</h3>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-800 mx-auto mb-6"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}>

              <Card className="border-blue-200 bg-white">
                <CardContent className="p-8">
                  <blockquote className="text-lg font-medium text-blue-800 italic mb-4">
                    "The MyKohi Treatment Fund gave me access to TMS therapy when I couldn't afford it. 
                    After years of struggling with depression, I finally found hope and healing. This 
                    fund literally saved my life."
                  </blockquote>
                  <p className="text-blue-600 font-medium">- Sarah M., TMS Patient</p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}>

              <Card className="border-blue-200 bg-white">
                <CardContent className="p-8">
                  <blockquote className="text-lg font-medium text-blue-800 italic mb-4">
                    "As a practice owner, partnering with the MyKohi Treatment Fund allows us to help 
                    patients who desperately need care but face financial barriers. It's incredibly 
                    rewarding to see the transformation in these patients."
                  </blockquote>
                  <p className="text-blue-600 font-medium">- Dr. Jennifer L., Partner Practice</p>
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

            <h3 className="text-4xl font-bold mb-6">Ready to Change a Life?</h3>
            <p className="text-xl mb-8 text-blue-100">
              Every sponsorship has the potential to transform someone's mental health journey. Join us in making treatment accessible to all.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-blue-50 text-lg px-8 py-3">
                  Sponsor Treatment Now
                </Button>
              </Link>
              <Link to="/about">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 text-lg px-8 py-3">
                  Learn About Kohi's Story
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />

      <noindex><script src="//widget.callbacktracker.com/tracker/3df8ce93e93c71a8f9b1c1a449be0d1dbfe96964" charset="UTF-8" async="async" type="text/javascript"></script></noindex>
    </div>);

};

export default TreatmentFundPage;