import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0C1E33] via-[#0C1E33] to-[#065F46] text-white overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#0891B2] rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#FBBF24] rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-32 sm:py-40 lg:px-8 text-center">
        <div className="mb-8 flex justify-center">
          <Image
            src="/images/rop-logo-full.png"
            alt="Rwanda Olympiad Program"
            width={300}
            height={300}
            className="h-48 w-auto rounded"
            priority
          />
        </div>

        <h1 className="text-5xl font-bold tracking-tight sm:text-7xl mb-6 text-balance">
          Nurturing Rwanda's <br />
          <span className="text-[#FBBF24]">Future Innovators</span>
        </h1>

        <p className="mt-6 text-lg leading-8 text-gray-300 max-w-2xl mx-auto text-pretty">
          The national umbrella organization coordinating Mathematics, Physics,
          Informatics, and Artificial Intelligence Olympiads in Rwanda.
          Empowering students to compete and excel on the global stage.
        </p>

        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Button
            size="lg"
            className="bg-[#0891B2] hover:bg-[#0891B2]/90 text-white text-lg px-8"
          >
            Explore Programs
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-white text-white hover:bg-white/10 text-lg px-8 bg-transparent"
          >
            Learn More
          </Button>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-8 md:grid-cols-4 max-w-3xl mx-auto">
          <div className="text-center">
            <div className="text-4xl font-bold text-[#0891B2]">4+</div>
            <div className="text-sm text-gray-300 mt-1">
              Olympiad Disciplines
            </div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-[#FBBF24]">500+</div>
            <div className="text-sm text-gray-300 mt-1">Students Trained</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-[#0891B2]">6+</div>
            <div className="text-sm text-gray-300 mt-1">
              International Competitions
            </div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-[#FBBF24]">10+</div>
            <div className="text-sm text-gray-300 mt-1">
              Partner Organizations
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
