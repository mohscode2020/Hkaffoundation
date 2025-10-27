import { Target, Eye, BookHeart } from 'lucide-react';

export default function MissionVision() {
  return (
    <section id="mission" className="py-20 bg-gradient-to-br from-orange-50 via-amber-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Our Mission & Vision
          </h2>
          <div className="w-24 h-1 bg-orange-600 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="flex items-center mb-6">
              <div className="bg-orange-600 p-3 rounded-lg mr-4">
                <Eye className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900">Our Vision</h3>
            </div>
            <div className="mb-4">
              <div className="bg-amber-50 border-l-4 border-orange-600 p-4 rounded-r-lg mb-4">
                <p className="text-lg italic text-gray-800 font-semibold">
                  "Raising oaks of righteousness—the planting of the Lord."
                </p>
                <p className="text-sm text-gray-600 mt-1">— Isaiah 61:3</p>
              </div>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed">
              To prioritize the Kingdom Agenda, empower this generation to succeed, and in turn
              empower the next. We seek to change future generations, one child at a time.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="flex items-center mb-6">
              <div className="bg-orange-600 p-3 rounded-lg mr-4">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900">Our Mission</h3>
            </div>
            <div className="mb-4">
              <div className="bg-amber-50 border-l-4 border-orange-600 p-4 rounded-r-lg mb-4">
                <p className="text-lg italic text-gray-800 font-semibold">
                  "Occupy till I come."
                </p>
                <p className="text-sm text-gray-600 mt-1">— Luke 19:13</p>
              </div>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed">
              To turn the hearts and minds of people toward God, transforming them by His power and
              equipping them to disciple others. We are building a Kingdom-minded generation that
              lives out God's heartbeat and purpose on earth.
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-orange-600 to-amber-600 rounded-2xl p-8 text-white text-center shadow-xl">
          <div className="flex justify-center mb-4">
            <BookHeart className="w-12 h-12" />
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold mb-4">
            Through us, we reach children, youth, and adults
          </h3>
          <p className="text-lg opacity-95 max-w-3xl mx-auto">
            Equipping them to discover their God-given purpose and make meaningful impact in their
            communities and beyond.
          </p>
        </div>
      </div>
    </section>
  );
}
