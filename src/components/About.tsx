import { BookOpen, Users, Heart, Lightbulb } from 'lucide-react';

export default function About() {
  const values = [
    {
      icon: Heart,
      title: 'Faith-Centered',
      description: 'Transforming lives through the power of God\'s Word and Kingdom principles',
    },
    {
      icon: BookOpen,
      title: 'Education Focus',
      description: 'Unlocking potential through formal and informal education excellence',
    },
    {
      icon: Users,
      title: 'Community Impact',
      description: 'Building strong families and communities through mentorship and support',
    },
    {
      icon: Lightbulb,
      title: 'Empowerment',
      description: 'Equipping individuals to live purposefully and create lasting change',
    },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            About <span className="text-orange-600">HKAF</span>
          </h2>
          <div className="w-24 h-1 bg-orange-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            At His Kingdom Agenda Foundation, our mission is to change mindsets and hearts through
            the transformative power of God's Word. We believe that the Agenda of God's Kingdom is
            immense—touching every sphere of life—and we are committed to addressing the changes we
            desire to see in our communities and in society at large.
          </p>
        </div>

        <div className="mb-16">
          <h3 className="text-2xl sm:text-3xl font-bold text-center text-gray-900 mb-8">
            Empowering Generations through Education and Faith
          </h3>
          <p className="text-lg text-gray-700 max-w-4xl mx-auto text-center leading-relaxed">
            Education is a cornerstone of transformation. Both formal and informal education unlock
            the tremendous potential God has placed within every individual. HKAF is intentional about
            sowing seeds of excellence, nurturing potential, and empowering individuals to live
            purposefully and bear lasting fruit.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="bg-orange-600 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                <value.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
              <p className="text-gray-700 leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
