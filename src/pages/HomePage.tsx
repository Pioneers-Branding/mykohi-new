import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { motion } from "motion/react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const HomePage = () => {
  const [activeSection, setActiveSection] = useState("");

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  useEffect(() => {
    // This code will run once when the component mounts

    // Define the script loading function
    const loadScript = () => {
      if (window.EMRPixel) {
        console.info("EMR: Pixel already loaded");
        return;
      }

      const script = document.createElement("script");
      script.defer = true;
      // Ensure the correct timestamp logic if needed, or simplify if not critical
      script.src = "https://cdn2.revw.me/js/pixel.js?t=" + 864e5 * Math.ceil(new Date().getTime() / 864e5);
      script.charset = "utf-8";

      const existingScript = document.getElementsByTagName("script")[0];
      existingScript.parentNode.insertBefore(script, existingScript);

      script.onload = () => {
        if (window.EMRPixel) {
          window.EMRPixel.init("reviewmagnet.in", 29);
        } else {
          console.error("EMRPixel not found after script load.");
        }
      };
    };

    // Call the script loading function
    loadScript();

    // Clean up function (optional, but good practice if the script creates global objects)
    return () => {









      // If the script adds elements or listeners that need removal on component unmount,
      // you would add that cleanup logic here. For this specific pixel, it might not be strictly necessary,
      // but it's good to be aware of.
    };}, []); // The empty dependency array ensures this effect runs only once on mount
  return <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="container mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center max-w-4xl mx-auto">

            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              Expert Marketing &amp; Consulting for TMS, Ketamine and Mental Health Practices
            </h2>
            <p className="text-xl text-blue-700 mb-4 font-medium">
              Is Your Practice Set Up for Growth and Success?
            </p>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              MyKohi brings over a decade of experience in TMS, Ketamine and mental health practice management, growth, and operations. 
              As providers, marketers, and business development professionals, we understand the challenges of delivering exceptional care. 
              Our mission is to help practices grow while keeping patient needs at the heart of everything we do. <Link to="/about" className="text-blue-600 hover:text-blue-800 underline">Learn more about our story</Link>.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" onClick={() => scrollToSection('services')} className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-3">
                Explore Our Services
              </Button>
              <Button size="lg" variant="outline" onClick={() => scrollToSection('about')} className="border-blue-600 text-blue-600 hover:bg-blue-50 text-lg px-8 py-3">
                Learn Our Story
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12">

            <h3 className="text-4xl font-bold mb-4 text-blue-800">About Us</h3>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-800 mx-auto"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}>

              <h4 className="text-2xl font-bold mb-6 text-blue-800">Our Story</h4>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  MyKohi draws inspiration from Kohi, Dr. Karan's beloved rescue dog who brought joy and comfort to everyone she met. 
                  Though Kohi passed away in April 2025, her legacy of love, empathy, and compassion continues to guide our mission. 
                  She showed us the transformative power of caring for others with purpose and the incredible impact of unconditional love.
                </p>
                <p>
                  Dr. Karan brings years of experience as a clinic owner, operator, executive, and patient advocate, collaborating with 
                  mental health professionals to help their practices thrive. Together with Brian, they launched a service dedicated to 
                  supporting providers and teams who elevate patient care.
                </p>
                <p>
                  By blending expertise, heart, and a focus on meaningful growth, MyKohi Consulting empowers mental health practices 
                  to create a lasting impact in their communities.
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

      {/* What We Do Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-50 to-blue-100">
        <div className="container mx-auto">
          <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12">

            <h3 className="text-4xl font-bold mb-4 text-blue-800">What We Do</h3>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-800 mx-auto mb-6"></div>
            <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
              We partner with mental health providers to transform patient enrollment into a seamless and value-driven experience. 
              Our approach creates a patient journey that strengthens provider-patient relationships from intake through treatment completion.
            </p>
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
                    <span className="text-white text-2xl">🎯</span>
                  </div>
                  <CardTitle className="text-blue-800">Strategic Marketing</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 text-center">
                    Marketing strategies crafted to enhance your digital presence and drive meaningful inquiries through 
                    authentic messaging, organic content creation, and targeted ad management.
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
                  </p>
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

      {/* Services Section */}
      <section id="services" className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12">

            <h3 className="text-4xl font-bold mb-4 text-blue-800">Our Services</h3>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-800 mx-auto"></div>
          </motion.div>

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
                        to local SEO and authoritative backlink-building. <Link to="/services" className="text-blue-600 hover:text-blue-800 underline">Learn about all our marketing services</Link>.
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
                        <Link to="/services" className="text-blue-600 hover:text-blue-800 underline">Explore our comprehensive consulting services</Link>.
                      </AccordionContent>
                    </AccordionItem>
                    
                    <AccordionItem value="intake">
                      <AccordionTrigger className="text-blue-800 hover:text-blue-600">
                        Intake Training
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-700">
                        Our specialized intake training empowers your TMS and Ketamine clinic team to optimize patient enrollment and 
                        enhance conversion rates. The first point of contact sets the tone for a patient's journey. 
                        <Link to="/contact" className="text-blue-600 hover:text-blue-800 underline">Contact us to discuss your training needs</Link>.
                      </AccordionContent>
                    </AccordionItem>
                    
                    <AccordionItem value="mystery">
                      <AccordionTrigger className="text-blue-800 hover:text-blue-600">
                        Mystery Patient Call &amp; Review
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
                        local community organizations.
                      </AccordionContent>
                    </AccordionItem>
                    
                    <AccordionItem value="interviews">
                      <AccordionTrigger className="text-blue-800 hover:text-blue-600">
                        Staff Interviews
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-700">
                        We provide comprehensive staff interview services to help you build the right team for your TMS and Ketamine practice, 
                        ensuring you have qualified, compassionate professionals who align with your practice values.
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Review Section */}
      <emr-simple-carousel widget-id="cc3c9d0f-8ef1-4563-a80f-ee52eee873fb"></emr-simple-carousel>

      {/* Team Section */}
      <section id="team" className="py-16 px-4 bg-gradient-to-r from-blue-50 to-blue-100">
        <div className="container mx-auto">
          <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12">

            <h3 className="text-4xl font-bold mb-4 text-blue-800">Our Team</h3>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-800 mx-auto"></div>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Dr. Karan */}
            <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}>

              <Card className="border-blue-200 bg-white">
                <CardHeader className="text-center">
                  <img
                  src="https://newoaks.s3.us-west-1.amazonaws.com/AutoDev/17785/c62d549d-083f-4e3d-b4ea-af549dfb5632.webp"
                  alt="Dr. Karan Narwal - Professional Profile"
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover shadow-lg" />

                  <CardTitle className="text-2xl text-blue-800">Dr. Karan Narwal</CardTitle>
                  <CardDescription className="text-blue-600 font-medium">
                    Founder, CMO &amp; COO
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
                    on emerging trends in treatments like TMS and Ketamine. <Link to="/team" className="text-blue-600 hover:text-blue-800 underline">Learn more about Dr. Karan's expertise</Link>.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Brian Goldbeck */}
            <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}>

              <Card className="border-blue-200 bg-white">
                <CardHeader className="text-center">
                  <img
                  src="https://newoaks.s3.us-west-1.amazonaws.com/AutoDev/17785/6778a3fd-9622-4965-b9c0-31b8f265c976.webp"
                  alt="Brian Goldbeck - Professional Profile"
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover shadow-lg" />
                  <CardTitle className="text-2xl text-blue-800">Brian Goldbeck</CardTitle>
                  <CardDescription className="text-blue-600 font-medium">
                    Co-Founder, CEO &amp; CRO
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
                    within his own family, Brian approaches this work with deep empathy and personal conviction. <Link to="/team" className="text-blue-600 hover:text-blue-800 underline">Read more about Brian's background</Link>.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Treatment Fund Section */}
      <section id="fund" className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto">

            <h3 className="text-4xl font-bold mb-6 text-blue-800">MyKohi Treatment Fund</h3>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-800 mx-auto mb-8"></div>
            
            <Card className="border-blue-200 bg-gradient-to-r from-blue-50 to-blue-100">
              <CardContent className="p-8">
                <h4 className="text-2xl font-bold mb-4 text-blue-800">Sponsor a Treatment or Therapy Session</h4>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  With the MyKohi Treatment Fund, we can help those who need treatment and might need a little help to get it. 
                  This isn't just about getting our clients more patients. It's about raising awareness and helping those who need it.
                </p>
                <p className="text-gray-700 mb-8">
                  If you're interested in sponsoring any amount towards treatment fund, 100% of funds raised are provided to practices 
                  to cover the expense of a series of Ketamine infusions, rounds of TMS therapy, or sessions with a provider. 
                  Let's make this life saving treatment accessible to those who need it the most! <Link to="/contact" className="text-blue-600 hover:text-blue-800 underline">Contact us to learn more</Link>.
                </p>
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-3">
                  Support the Treatment Fund
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto">
          <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center">

            <h3 className="text-4xl font-bold mb-6">Ready to Grow Your Practice?</h3>
            <p className="text-xl mb-8 text-blue-100">
              Let's talk about how we can help you help more people.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-blue-50 text-lg px-8 py-3">
                Schedule a Consultation
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 text-lg px-8 py-3">
                Contact Us Today
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />

      <noindex><script src="//widget.callbacktracker.com/tracker/3df8ce93e93c71a8f9b1c1a449be0d1dbfe96964" charset="UTF-8" async="async" type="text/javascript"></script></noindex>
    </div>;

};

export default HomePage;