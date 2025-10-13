import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Programs } from "@/components/programs"
import { Activities } from "@/components/activities"
import { Global } from "@/components/global"
import { Partners } from "@/components/partners"
import { News } from "@/components/news"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Programs />
      <Activities />
      <Global />
      <Partners />
      <News />
      <Contact />
      <Footer />
    </main>
  )
}
