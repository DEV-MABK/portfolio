"use client"

import { useState } from "react"

interface Project {
  id: number
  title: string
  description: string
  icon: string
}

const projects: Project[] = [
  {
    id: 1,
    title: "GitHub Explorer",
    description: "A React app that fetches and visualizes GitHub repositories",
    icon: "📦",
  },
  { id: 2, title: "E-Commerce Platform", description: "Full-stack shopping cart with payment integration", icon: "🛒" },
  { id: 3, title: "AI Chatbot", description: "Intelligent conversational AI using modern LLMs", icon: "🤖" },
  { id: 4, title: "Portfolio Builder", description: "Create stunning portfolios with drag-and-drop", icon: "🎨" },
  { id: 5, title: "Task Manager", description: "Productivity app with real-time collaboration", icon: "✓" },
  { id: 6, title: "Weather Dashboard", description: "Beautiful weather forecasts and analytics", icon: "☀" },
]

export function OrbitProjects() {
  const [centerProject, setCenterProject] = useState<Project>(projects[0])
  const [orbitingProjects, setOrbitingProjects] = useState<Project[]>(projects.slice(1))

  const handleOrbitClick = (project: Project) => {
    // Move clicked project to center
    const newOrbitingProjects = [...orbitingProjects.filter((p) => p.id !== project.id), centerProject]
    setCenterProject(project)
    setOrbitingProjects(newOrbitingProjects)
  }

  return (
    <div className="relative w-full h-[800px] flex items-center justify-center">
      {/* Center Project */}
      <div className="absolute z-20 transition-all duration-700 ease-out">
        <div className="relative group">
          <div className="absolute inset-0 bg-primary/30 rounded-full blur-3xl animate-pulse" />
          <div className="relative w-72 h-72 rounded-full bg-gradient-to-br from-card/80 via-card/60 to-card/40 backdrop-blur-xl border-2 border-primary neon-border-strong flex flex-col items-center justify-center p-8 cursor-default transition-transform duration-500 hover:scale-105">
            <div className="text-7xl mb-6">{centerProject.icon}</div>
            <h3 className="text-2xl font-bold text-center mb-3 neon-glow">{centerProject.title}</h3>
            <p className="text-sm text-muted-foreground text-center leading-relaxed">{centerProject.description}</p>
          </div>
        </div>
      </div>

      {/* Orbiting Projects */}
      {orbitingProjects.map((project, index) => {
        const angle = (index / orbitingProjects.length) * 360
        const radius = 350
        const x = Math.cos((angle * Math.PI) / 180) * radius
        const y = Math.sin((angle * Math.PI) / 180) * radius

        // Create depth effect based on angle
        const depth = Math.sin((angle * Math.PI) / 180) * 0.5 + 0.5
        const scale = 0.6 + depth * 0.4
        const blur = (1 - depth) * 2

        return (
          <button
            key={project.id}
            onClick={() => handleOrbitClick(project)}
            className="absolute z-10 transition-all duration-700 ease-out hover:z-30 group"
            style={{
              transform: `translate(${x}px, ${y}px) scale(${scale})`,
              filter: `blur(${blur}px)`,
              animation: `orbit${index} 20s linear infinite`,
            }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative w-36 h-36 rounded-full bg-gradient-to-br from-card/70 via-card/50 to-card/30 backdrop-blur-md border border-primary/50 group-hover:border-primary neon-border flex flex-col items-center justify-center p-4 transition-all duration-300 group-hover:scale-110">
                <div className="text-4xl mb-2">{project.icon}</div>
                <p className="text-xs font-semibold text-center line-clamp-2">{project.title}</p>
              </div>
            </div>
          </button>
        )
      })}

      {/* Orbit Path Indicator */}
      <div className="absolute w-[700px] h-[700px] rounded-full border border-primary/10" />
      <div
        className="absolute w-[700px] h-[700px] rounded-full border border-primary/5 animate-spin"
        style={{ animationDuration: "40s" }}
      />
    </div>
  )
}
