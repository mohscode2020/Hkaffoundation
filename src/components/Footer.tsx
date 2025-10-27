import { Heart, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-gradient-to-br from-orange-400 to-amber-600 p-2 rounded-lg">
                <Heart className="w-6 h-6 text-white" fill="white" />
              </div>
              <div>
                <div className="text-lg font-bold">HKAF</div>
                <div className="text-xs text-gray-400">His Kingdom Agenda Foundation</div>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Transforming lives and advancing God's Kingdom, one generation at a time.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center text-gray-400">
                <Mail className="w-4 h-4 mr-2 text-orange-500" />
                <span>info@hkafoundation.org</span>
              </div>
              <div className="flex items-center text-gray-400">
                <Phone className="w-4 h-4 mr-2 text-orange-500" />
                <span>+233 XX XXX XXXX</span>
              </div>
              <div className="flex items-center text-gray-400">
                <MapPin className="w-4 h-4 mr-2 text-orange-500" />
                <span>Accra, Ghana</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#about" className="text-gray-400 hover:text-orange-500 transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#mission" className="text-gray-400 hover:text-orange-500 transition-colors">
                  Mission & Vision
                </a>
              </li>
              <li>
                <a href="#projects" className="text-gray-400 hover:text-orange-500 transition-colors">
                  Our Projects
                </a>
              </li>
              <li>
                <a href="#programs" className="text-gray-400 hover:text-orange-500 transition-colors">
                  Programs
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} His Kingdom Agenda Foundation. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
