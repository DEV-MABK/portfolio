import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { OrbitProjects } from "@/components/orbit-projects"
import { Navbar } from "@/components/navbar"
import { NeonLiquidFlow } from "@/components/neon-liquid-flow"
import { TypingAnimation } from "@/components/typing-animation"
import {
  Code2,
  Palette,
  Braces,
  Figma,
  Github,
  Terminal,
  Zap,
  Wind,
  Layout,
  Linkedin,
  Twitter,
  MessageCircle,
  Instagram,
  Facebook,
} from "lucide-react"

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <NeonLiquidFlow />

      {/* Fixed Navigation Bar */}
      <Navbar />

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center px-6 md:px-12 lg:px-24 py-24 pt-32">
        <div className="container mx-auto grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <p className="text-primary text-sm tracking-wider uppercase">Hello</p>
            <div className="space-y-4">
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold leading-tight text-balance">
                I'm <br />
                <span className="text-primary neon-glow-strong">Abu Bakar</span>
              </h1>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">Web Specialist</h2>
            </div>

            <Button className="bg-primary text-black hover:bg-primary/90 font-semibold px-8 py-6 text-base neon-border-strong">
              FULL STACK DEVELOPER
            </Button>

            <TypingAnimation
              text="I am a full-stack programmer with years of experience in creating and optimizing responsive, user-friendly, and modern web applications. Let's build something amazing together!"
              className="text-muted-foreground text-lg leading-relaxed max-w-xl"
            />
          </div>

          {/* Right Content - Portrait */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-80 h-[500px] md:w-96 md:h-[600px]">
              <div className="absolute inset-0 bg-gradient-to-b from-primary/20 via-transparent to-transparent blur-3xl" />
              <Image
                src="/images/image.jpg"
                alt="Professional Portrait"
                width={400}
                height={600}
                className="relative z-10 object-cover rounded-lg scale-x-[-1]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section id="about" className="py-32 px-6 md:px-12 lg:px-24">
        <div className="container mx-auto">
          <p className="text-primary text-sm tracking-wider uppercase mb-4">MY INTRO</p>
          <h2 className="text-5xl md:text-6xl font-bold mb-20">ABOUT ME</h2>

          <div className="grid lg:grid-cols-4 gap-12 items-start">
            {/* Profile Image */}
            <div className="lg:col-span-1">
              <div className="relative w-48 h-64 neon-border rounded-lg overflow-hidden">
                <Image
                  src="/images/profile-outdoor.jpg"
                  alt="Profile"
                  width={250}
                  height={300}
                  className="object-cover scale-150 object-[center_20%]"
                />
              </div>
            </div>

            {/* Feature Cards */}
            <div className="lg:col-span-3 grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: "📍",
                  title: "Frontend Developer",
                  desc: "I create user-interactive experience with 1+ years",
                },
                { icon: "💼", title: "Backend Developer", desc: "Building robust server-side applications and APIs" },
                { icon: "🎧", title: "UI/UX Design", desc: "Designing intuitive and creative user experiences" },
              ].map((item, i) => (
                <Card
                  key={i}
                  className="bg-card border-primary/30 p-8 space-y-4 hover:border-primary neon-border transition-all duration-300"
                >
                  <div className="text-4xl text-primary">{item.icon}</div>
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-32 px-6 md:px-12 lg:px-24">
        <div className="container mx-auto">
          <p className="text-primary text-sm tracking-wider uppercase mb-4">MY ABILITIES</p>
          <h2 className="text-5xl md:text-6xl font-bold mb-20">SKILLS & EXPERIENCE</h2>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
            {[
              { name: "HTML", icon: Code2, color: "#E34F26", comingSoon: false },
              { name: "CSS", icon: Palette, color: "#1572B6", comingSoon: false },
              { name: "JavaScript", icon: Braces, color: "#F7DF1E", comingSoon: false },
              { name: "Figma", icon: Figma, color: "#F24E1E", comingSoon: false },
              { name: "WordPress", icon: Layout, color: "#61DAFB", comingSoon: false },
              { name: "GitHub", icon: Github, color: "#fff", comingSoon: false },
              { name: "Python", icon: Terminal, color: "#3776AB", comingSoon: false },
              { name: "Next.js", icon: Zap, color: "#fff", comingSoon: true },
              { name: "Tailwind", icon: Wind, color: "#06B6D4", comingSoon: true },
              { name: "React", icon: Code2, color: "#21759B", comingSoon: true },
            ].map((skill, i) => (
              <Card
                key={i}
                className="bg-card border-primary/20 p-6 flex flex-col items-center justify-center space-y-3 hover:border-primary neon-border transition-all duration-300 group relative"
              >
                {skill.comingSoon && (
                  <div className="absolute inset-0 bg-black/80 backdrop-blur-sm rounded-lg flex items-center justify-center z-10">
                    <span className="text-primary text-xs font-bold uppercase tracking-wider neon-glow">
                      Coming Soon
                    </span>
                  </div>
                )}
                <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                  <skill.icon className="w-8 h-8" strokeWidth={1.5} style={{ color: skill.color }} />
                </div>
                <p className="text-sm font-semibold text-center">{skill.name}</p>
                <div className="w-full h-1 bg-muted rounded-full overflow-hidden">
                  <div className="h-full bg-primary neon-border" style={{ width: "85%" }} />
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-32 px-6 md:px-12 lg:px-24">
        <div className="container mx-auto">
          <p className="text-primary text-sm tracking-wider uppercase mb-4">MY WORK</p>
          <h2 className="text-5xl md:text-6xl font-bold mb-12">Working</h2>

          <div className="space-y-4 mb-20">
            <p className="text-3xl md:text-4xl font-bold text-primary neon-glow">My Projects</p>
            <p className="text-muted-foreground text-lg">A few features work I've built and contributed to.</p>
          </div>

          <OrbitProjects />
        </div>
      </section>

      {/* Services Section */}
      <section className="py-32 px-6 md:px-12 lg:px-24">
        <div className="container mx-auto">
          <p className="text-primary text-sm tracking-wider uppercase mb-4">MY SERVICES</p>
          <h2 className="text-5xl md:text-6xl font-bold mb-20">What I Offer</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Web Development", desc: "Full-stack development with modern frameworks" },
              { title: "UI/UX Design", desc: "Beautiful and intuitive user interfaces" },
              { title: "Backend & APIs", desc: "Robust server-side solutions" },
            ].map((service, i) => (
              <Card
                key={i}
                className="bg-transparent border-primary/30 p-12 space-y-6 hover:border-primary neon-border-strong transition-all duration-300 group"
              >
                <h3 className="text-2xl font-bold group-hover:text-primary neon-glow transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">{service.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Thank You Section */}
      <section id="contact" className="py-32 px-6 md:px-12 lg:px-24">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-6xl md:text-7xl lg:text-8xl font-bold leading-tight">
                <span className="text-primary neon-glow-strong">THANK</span>
                <br />
                <span className="text-white">YOU</span>
              </h2>
              <p className="text-2xl font-semibold">For Your Attention</p>
              <p className="text-muted-foreground text-lg leading-relaxed max-w-lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua.
              </p>

              <div className="flex gap-4">
                {[
                  { name: "GitHub", icon: Github, url: "https://github.com" },
                  { name: "LinkedIn", icon: Linkedin, url: "https://linkedin.com" },
                  { name: "Twitter", icon: Twitter, url: "https://twitter.com" },
                  { name: "WhatsApp", icon: MessageCircle, url: "https://whatsapp.com" },
                  { name: "Instagram", icon: Instagram, url: "https://instagram.com" },
                  { name: "Facebook", icon: Facebook, url: "https://facebook.com" },
                ].map((social) => {
                  const Icon = social.icon
                  return (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center hover:bg-primary hover:text-black neon-border transition-all duration-300"
                      aria-label={social.name}
                    >
                      <Icon className="w-5 h-5" />
                    </a>
                  )
                })}
              </div>
            </div>

            <div className="flex justify-center lg:justify-end">
              <div className="relative w-80 h-[500px]">
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent blur-3xl" />
                <Image
                  src="\images\IMG_4791~3.jpg"
                  alt="Full Body"
                  width={350}
                  height={500}
                  className="relative z-10 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12 px-6 md:px-12 lg:px-24">
        <div className="container mx-auto text-center space-y-6">
          <p className="text-2xl font-script">Abu Bakar</p>
          <nav className="flex justify-center gap-8 text-sm">
            <a href="#home" className="hover:text-primary neon-glow transition-colors">
              Home
            </a>
            <a href="#about" className="hover:text-primary neon-glow transition-colors">
              About
            </a>
            <a href="#skills" className="hover:text-primary neon-glow transition-colors">
              Experience
            </a>
            <a href="#projects" className="hover:text-primary neon-glow transition-colors">
              Work
            </a>
            <a href="#contact" className="hover:text-primary neon-glow transition-colors">
              Contact
            </a>
          </nav>
          <p className="text-sm text-muted-foreground">© 2025 Abu Bakar. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
