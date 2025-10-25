import { GraduationCap, Trophy, Users, Sparkles } from "lucide-react";
import Image from "next/image";

export function SuccessStories() {
  const universities = [
    { name: "MIT", logo: "/images/universities/mit.png" },
    { name: "Harvard", logo: "/images/universities/harvard.png" },
    { name: "Yale", logo: "/images/universities/yale.png" },
    {
      name: "African Leadership University",
      logo: "/images/universities/alu.png",
    },
    { name: "Union University", logo: "/images/universities/union.png" },
    { name: "Caltech", logo: "/images/universities/caltech.png" },
    { name: "Rice University", logo: "/images/universities/rice.png" },
    { name: "Cambridge", logo: "/images/universities/cambridge.png" },
    { name: "Carnegie Mellon", logo: "/images/universities/cmu.png" },
    { name: "Global Health", logo: "/images/universities/global-health.png" },
    { name: "University of Rwanda", logo: "/images/universities/ur.png" },
  ];

  const stats = [
    {
      icon: GraduationCap,
      value: "500+",
      label: "Students Trained",
      color: "text-[#0891B2]",
    },
    {
      icon: Trophy,
      value: "50+",
      label: "International Medals",
      color: "text-[#FBBF24]",
    },
    {
      icon: Users,
      value: "100+",
      label: "Alumni Network",
      color: "text-[#0891B2]",
    },
    {
      icon: Sparkles,
      value: "15+",
      label: "Countries Represented",
      color: "text-[#FBBF24]",
    },
  ];

  return (
    <section
      id="success-stories"
      className="py-16 sm:py-24 bg-gradient-to-br from-[#0C1E33] via-[#0C1E33] to-[#065F46] text-white relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-10 w-72 h-72 bg-[#0891B2] rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-[#FBBF24] rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Our <span className="text-[#FBBF24]">Success Stories</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Students trained in the Rwanda Olympiad Program have gained
            exceptional skills and knowledge that opened doors to some of the
            world's most prestigious universities. Our alumni continue to excel
            and make Rwanda proud on the global stage.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-sm rounded-lg p-6 text-center border border-white/10 hover:bg-white/10 transition-all"
            >
              <stat.icon
                className={`${stat.color} w-8 h-8 sm:w-10 sm:h-10 mx-auto mb-3`}
              />
              <div
                className={`text-3xl sm:text-4xl font-bold ${stat.color} mb-2`}
              >
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm text-gray-300">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Universities Section */}
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 sm:p-12 border border-white/10">
          <div className="text-center mb-10">
            <h3 className="text-2xl sm:text-3xl font-bold mb-3">
              Where Our <span className="text-[#FBBF24]">Alumni Study</span>
            </h3>
            <p className="text-sm sm:text-base text-gray-300">
              Our graduates have been accepted into top universities worldwide
            </p>
          </div>

          {/* Universities Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8">
            {universities.map((university, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center p-4 bg-white/10 rounded-lg hover:bg-white/20 transition-all group"
              >
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white rounded-full flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                  {/* Placeholder for university logos - you'll need to add actual images */}
                  <span className="text-[#0C1E33] font-bold text-xs sm:text-sm text-center px-2">
                    {university.name === "African Leadership University"
                      ? "ALU"
                      : university.name === "University of Rwanda"
                      ? "UR"
                      : university.name}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-center text-gray-300 font-medium">
                  {university.name}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonial Section */}
        <div className="mt-12 sm:mt-16 text-center">
          <blockquote className="max-w-3xl mx-auto">
            <p className="text-lg sm:text-xl md:text-2xl font-medium text-gray-200 italic mb-6">
              "The Rwanda Olympiad Program transformed my academic journey. The
              rigorous training, mentorship, and competitive environment
              prepared me not just for university admission, but for excellence
              in my field."
            </p>
            <footer className="text-sm sm:text-base">
              <span className="text-[#FBBF24] font-semibold">- ROP Alumni</span>
              <span className="text-gray-400"> • Now studying at MIT</span>
            </footer>
          </blockquote>
        </div>
      </div>
    </section>
  );
}
