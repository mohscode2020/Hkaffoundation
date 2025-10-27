import { useState } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import MissionVision from './components/MissionVision';
import Programs from './components/Programs';
import Projects from './components/Projects';
import SocialMedia from './components/SocialMedia';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import AdminPanel from './components/AdminPanel';
import { Lock, Home } from 'lucide-react';

function App() {
  const [isAdmin, setIsAdmin] = useState(false);
  const [password, setPassword] = useState('');
  const [showAdminLogin, setShowAdminLogin] = useState(false);

  const handleAdminLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === 'hkaf2024') {
      setIsAdmin(true);
      setShowAdminLogin(false);
    } else {
      alert('Incorrect password');
    }
  };

  if (isAdmin) {
    return (
      <>
        <div className="bg-orange-600 text-white py-2 px-4 flex justify-between items-center">
          <span className="font-semibold">Admin Mode</span>
          <button
            onClick={() => setIsAdmin(false)}
            className="flex items-center px-4 py-2 bg-white text-orange-600 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <Home className="w-4 h-4 mr-2" />
            Back to Website
          </button>
        </div>
        <AdminPanel />
      </>
    );
  }

  return (
    <>
      <div className="relative">
        <button
          onClick={() => setShowAdminLogin(!showAdminLogin)}
          className="fixed top-4 right-4 z-50 p-2 bg-gray-800 text-white rounded-full hover:bg-gray-700 transition-colors shadow-lg"
          title="Admin Login"
        >
          <Lock className="w-5 h-5" />
        </button>

        {showAdminLogin && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl p-8 max-w-md w-full shadow-2xl">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Admin Login</h2>
              <form onSubmit={handleAdminLogin}>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Password
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-transparent mb-4"
                  placeholder="Enter admin password"
                />
                <div className="flex space-x-4">
                  <button
                    type="submit"
                    className="flex-1 px-6 py-3 bg-orange-600 text-white font-semibold rounded-lg hover:bg-orange-700 transition-colors"
                  >
                    Login
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowAdminLogin(false)}
                    className="px-6 py-3 bg-gray-200 text-gray-700 font-semibold rounded-lg hover:bg-gray-300 transition-colors"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        <Navigation />
        <Hero />
        <About />
        <MissionVision />
        <Programs />
        <Projects />
        <SocialMedia />
        <Footer />
        <WhatsAppButton />
      </div>
    </>
  );
}

export default App;
