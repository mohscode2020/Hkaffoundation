import { Baby, Users2, GraduationCap, Leaf } from 'lucide-react';

export default function Programs() {
  const programs = [
    {
      icon: Baby,
      title: 'The King\'s Kids',
      category: 'Children',
      verse: '"Train up a child in the way he should go; even when he is old he will not depart from it." — Proverbs 22:6',
      initiatives: [
        'Partnering with schools, churches, and communities to provide school supplies, uniforms, and library resources',
        'Promoting literacy and a love for reading through Literacy Week events',
        'Identifying and supporting promising students through mentorship and scholarships',
        'Raising oaks of righteousness, the planting of the Lord — Isaiah 61:3',
      ],
      color: 'from-blue-500 to-cyan-600',
      bgColor: 'from-blue-50 to-cyan-50',
    },
    {
      icon: Users2,
      title: 'Youth Development',
      category: 'Youth',
      verse: null,
      initiatives: [
        'Providing mentorship, discipleship, and career guidance',
        'Equipping young people to live with integrity, excellence, and purpose',
        'Empowering youth to become change agents in their communities',
        'Building leadership skills and godly character',
      ],
      color: 'from-purple-500 to-pink-600',
      bgColor: 'from-purple-50 to-pink-50',
    },
    {
      icon: GraduationCap,
      title: 'Adults & Parents',
      category: 'Adults',
      verse: null,
      initiatives: [
        'Supporting parents and guardians to nurture godly children',
        'Building strong families and communities through faith-based workshops',
        'Leadership development programs for community impact',
        'Mentorship training for next-generation discipleship',
      ],
      color: 'from-green-500 to-emerald-600',
      bgColor: 'from-green-50 to-emerald-50',
    },
    {
      icon: Leaf,
      title: 'Civic Responsibility & Life Skills',
      category: 'Community',
      verse: null,
      initiatives: [
        'Teaching values such as integrity, hard work, and accountability',
        'Promoting environmental stewardship, personal hygiene, and community care',
        'Educating youth to avoid harmful practices such as gambling and negative peer influences',
        'Building responsible citizens who honor God and serve others',
      ],
      color: 'from-orange-500 to-amber-600',
      bgColor: 'from-orange-50 to-amber-50',
    },
  ];

  return (
    <section id="programs" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="text-orange-600">Programs</span>
          </h2>
          <div className="w-24 h-1 bg-orange-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Comprehensive initiatives designed to transform lives at every stage
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {programs.map((program, index) => (
            <div
              key={index}
              className={`bg-gradient-to-br ${program.bgColor} rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1`}
            >
              <div className="flex items-center mb-6">
                <div className={`bg-gradient-to-br ${program.color} p-4 rounded-xl mr-4`}>
                  <program.icon className="w-10 h-10 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">{program.title}</h3>
                  <p className="text-sm font-semibold text-gray-600 uppercase tracking-wide">
                    {program.category}
                  </p>
                </div>
              </div>

              {program.verse && (
                <div className="bg-white bg-opacity-70 border-l-4 border-gray-800 p-4 rounded-r-lg mb-6">
                  <p className="text-sm italic text-gray-800">{program.verse}</p>
                </div>
              )}

              <ul className="space-y-3">
                {program.initiatives.map((initiative, idx) => (
                  <li key={idx} className="flex items-start">
                    <div className="bg-white rounded-full p-1 mt-0.5 mr-3 flex-shrink-0">
                      <div className={`bg-gradient-to-br ${program.color} rounded-full w-2 h-2`}></div>
                    </div>
                    <span className="text-gray-700 leading-relaxed">{initiative}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
