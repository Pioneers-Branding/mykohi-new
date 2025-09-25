import { Link } from 'react-router-dom';
import { Separator } from '@/components/ui/separator';

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-12 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-3 mb-4">
              <img
                src="https://newoaks.s3.us-west-1.amazonaws.com/AutoDev/17785/b943c8e9-3afe-4def-98dc-7dbc474a2be6.webp"
                alt="MyKohi Logo"
                className="h-8 w-auto" />

              <h4 className="text-xl font-bold">MyKohi</h4>
            </div>
            <p className="text-blue-200 mb-4">
              Expert Marketing &amp; Consulting for TMS, Ketamine and Mental Health Practices
            </p>
            <p className="text-blue-300 text-sm">
              Empowering mental health practices to create lasting impact in their communities.
            </p>
          </div>
          
          {/* Services */}
          <div>
            <h5 className="font-bold mb-4">Services</h5>
            <ul className="space-y-2 text-blue-200">
              <li><Link to="/services" className="hover:text-white transition-colors">All Services</Link></li>
              <li><Link to="/services/tms-treatment" className="hover:text-white transition-colors">TMS Treatment Consulting</Link></li>
              <li><Link to="/services/depression-treatment" className="hover:text-white transition-colors">Depression Treatment Marketing</Link></li>
              <li><Link to="/services/mental-health-consulting" className="hover:text-white transition-colors">Mental Health Consulting</Link></li>
              <li><Link to="/services/ketamine-therapy" className="hover:text-white transition-colors">Ketamine Therapy Marketing</Link></li>
              <li><Link to="/services/digital-marketing" className="hover:text-white transition-colors">Digital Marketing Solutions</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h5 className="font-bold mb-4">Company</h5>
            <ul className="space-y-2 text-blue-200">
              <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/team" className="hover:text-white transition-colors">Our Team</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
              <li><Link to="/treatment-fund" className="hover:text-white transition-colors">Treatment Fund</Link></li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h5 className="font-bold mb-4">Contact</h5>
            <div className="space-y-2 text-blue-200">
              <p>📧 info@mykohi.com</p>
              <p>🌐 MyKohi Consulting</p>
              <p>📍 Serving TMS &amp; Ketamine Practices Nationwide</p>
              <div className="mt-4">
                <p className="text-sm">Ready to grow your practice?</p>
                <Link
                  to="/contact"
                  className="inline-block mt-2 bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded transition-colors">

                  Get Started Today
                </Link>
              </div>
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
    </footer>);

};

export default Footer;