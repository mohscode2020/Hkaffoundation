import { Heart } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative bg-gradient-to-br from-amber-50 via-white to-orange-50 overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiIgc3Ryb2tlPSIjZjk3MzE2IiBzdHJva2Utb3BhY2l0eT0iLjA1Ii8+PC9nPjwvc3ZnPg==')] opacity-40"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
        <div className="text-center">
          <div className="flex justify-center mb-6">
            <div className="bg-gradient-to-br from-orange-400 to-amber-600 p-4 rounded-full shadow-lg">
              <Heart className="w-12 h-12 text-white" fill="white" />
            </div>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            His Kingdom Agenda
            <span className="block text-orange-600 mt-2">Foundation</span>
          </h1>

          <p className="text-xl sm:text-2xl text-gray-700 mb-4 font-medium max-w-3xl mx-auto">
            Transforming Lives. Advancing God's Kingdom.
          </p>

          <p className="text-lg sm:text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            One Generation at a Time.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#about"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-orange-600 rounded-lg hover:bg-orange-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Learn About Our Mission
            </a>
            <a
              href="#projects"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-orange-600 bg-white border-2 border-orange-600 rounded-lg hover:bg-orange-50 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              View Our Projects
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
    </div>
  );
}
