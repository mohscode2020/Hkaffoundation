import { Facebook, Twitter, Youtube, Music } from 'lucide-react';

export default function SocialMedia() {
  const socialLinks = [
    {
      name: 'Facebook',
      icon: Facebook,
      url: 'https://facebook.com',
      color: 'hover:bg-blue-600',
      bgColor: 'bg-blue-500',
    },
    {
      name: 'Twitter/X',
      icon: Twitter,
      url: 'https://twitter.com',
      color: 'hover:bg-sky-600',
      bgColor: 'bg-sky-500',
    },
    {
      name: 'TikTok',
      icon: Music,
      url: 'https://tiktok.com',
      color: 'hover:bg-gray-900',
      bgColor: 'bg-gray-800',
    },
    {
      name: 'YouTube',
      icon: Youtube,
      url: 'https://youtube.com',
      color: 'hover:bg-red-700',
      bgColor: 'bg-red-600',
    },
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Stay <span className="text-orange-600">Connected</span>
          </h2>
          <div className="w-24 h-1 bg-orange-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Follow us on our social platforms to see stories of impact, community events, and ministry updates
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`${social.bgColor} ${social.color} text-white rounded-xl p-6 flex flex-col items-center justify-center transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl`}
            >
              <social.icon className="w-12 h-12 mb-3" />
              <span className="font-semibold text-sm">{social.name}</span>
            </a>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8 max-w-2xl mx-auto shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Get Involved
            </h3>
            <p className="text-lg text-gray-700 mb-6">
              Join us in transforming lives and advancing God's Kingdom. Your support makes a lasting difference in our communities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-orange-600 text-white font-semibold rounded-lg hover:bg-orange-700 transition-all duration-200 shadow-lg hover:shadow-xl">
                Partner With Us
              </button>
              <button className="px-8 py-3 bg-white text-orange-600 font-semibold border-2 border-orange-600 rounded-lg hover:bg-orange-50 transition-all duration-200 shadow-lg hover:shadow-xl">
                Volunteer
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
