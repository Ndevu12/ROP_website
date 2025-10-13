import Image from "next/image";
import Link from "next/link";
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

export function Footer() {
  const navigation = {
    programs: [
      { name: "Mathematics", href: "#" },
      { name: "Physics", href: "#" },
      { name: "Informatics", href: "#" },
      { name: "Artificial Intelligence", href: "#" },
    ],
    about: [
      { name: "About ROP", href: "#about" },
      { name: "Our Team", href: "#" },
      { name: "Partners", href: "#partners" },
      { name: "News", href: "#news" },
    ],
    resources: [
      { name: "Training Materials", href: "#" },
      { name: "Past Papers", href: "#" },
      { name: "Success Stories", href: "#" },
      { name: "FAQ", href: "#" },
    ],
    legal: [
      { name: "Privacy Policy", href: "#" },
      { name: "Terms of Service", href: "#" },
      { name: "Code of Conduct", href: "#" },
    ],
  };

  const social = [
    { name: "Facebook", icon: Facebook, href: "#" },
    { name: "Twitter", icon: Twitter, href: "#" },
    { name: "LinkedIn", icon: Linkedin, href: "#" },
    { name: "Instagram", icon: Instagram, href: "#" },
  ];

  return (
    <footer className="bg-[#0C1E33] text-white">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          <div className="lg:col-span-1">
            <Image
              src="/images/rop-logo-short.png"
              alt="ROP Logo"
              width={80}
              height={80}
              className="h-16 w-auto mb-4"
            />
            <p className="text-sm text-gray-400 leading-relaxed">
              Nurturing Rwanda's future innovators through excellence in STEM
              education.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-[#FBBF24] mb-4">
              Programs
            </h3>
            <ul className="space-y-3">
              {navigation.programs.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-[#FBBF24] mb-4">About</h3>
            <ul className="space-y-3">
              {navigation.about.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-[#FBBF24] mb-4">
              Resources
            </h3>
            <ul className="space-y-3">
              {navigation.resources.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-[#FBBF24] mb-4">Legal</h3>
            <ul className="space-y-3">
              {navigation.legal.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} Rwanda Olympiad Program. All rights
            reserved.
          </p>
          <div className="flex gap-6">
            {social.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <span className="sr-only">{item.name}</span>
                <item.icon className="h-5 w-5" aria-hidden="true" />
              </Link>
            ))}
          </div>
        </div>
        <p className="text-sm text-gray-400 text-center mt-4">
          Built with ❤️ by{" "}
          <Link
            href="https://github.com/Ndevu12"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            Ndevu
          </Link>
        </p>
      </div>
    </footer>
  );
}
