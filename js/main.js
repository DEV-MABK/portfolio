// Typing Animation
const typingElement = document.getElementById("typing-text")
const fullText =
  "I am a full-stack programmer with years of experience in creating and optimizing responsive, user-friendly, and modern web applications. Let's build something amazing together!"
let displayText = ""
let isDeleting = false
let isPaused = false
let typingTimeout

function typeAnimation() {
  if (isPaused) {
    typingTimeout = setTimeout(() => {
      isPaused = false
      isDeleting = true
      typeAnimation()
    }, 3000)
  } else if (isDeleting) {
    if (displayText.length === 0) {
      isDeleting = false
      typeAnimation()
    } else {
      displayText = displayText.slice(0, -1)
      typingElement.textContent = displayText
      typingTimeout = setTimeout(typeAnimation, 30)
    }
  } else {
    if (displayText.length === fullText.length) {
      isPaused = true
      typeAnimation()
    } else {
      displayText = fullText.slice(0, displayText.length + 1)
      typingElement.textContent = displayText
      typingTimeout = setTimeout(typeAnimation, 50)
    }
  }
}

// Add cursor
const cursor = document.createElement("span")
cursor.className = "typing-cursor"
cursor.style.cssText =
  "display: inline-block; width: 2px; height: 20px; background: var(--primary); margin-left: 4px; animation: blink 1s infinite;"
const style = document.createElement("style")
style.textContent = "@keyframes blink { 0%, 50% { opacity: 1; } 51%, 100% { opacity: 0; } }"
document.head.appendChild(style)
typingElement.appendChild(cursor)

typeAnimation()

// Skills Data
const skills = [
  { name: "HTML", icon: "code", color: "#E34F26", comingSoon: false },
  { name: "CSS", icon: "palette", color: "#1572B6", comingSoon: false },
  { name: "JavaScript", icon: "braces", color: "#F7DF1E", comingSoon: false },
  { name: "Figma", icon: "figma", color: "#F24E1E", comingSoon: false },
  { name: "WordPress", icon: "layout", color: "#21759B", comingSoon: false },
  { name: "GitHub", icon: "github", color: "#fff", comingSoon: false },
  { name: "Python", icon: "terminal", color: "#3776AB", comingSoon: false },
  { name: "Next.js", icon: "zap", color: "#fff", comingSoon: true },
  { name: "Tailwind", icon: "wind", color: "#06B6D4", comingSoon: true },
  { name: "React", icon: "code", color: "#61DAFB", comingSoon: true },
]

// SVG Icons
const svgIcons = {
  code: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>',
  palette:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="13.5" cy="6.5" r=".5"></circle><circle cx="17.5" cy="10.5" r=".5"></circle><circle cx="8.5" cy="7.5" r=".5"></circle><circle cx="6.5" cy="12.5" r=".5"></circle><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"></path></svg>',
  braces:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M8 3H7a2 2 0 0 0-2 2v5a2 2 0 0 1-2 2 2 2 0 0 1 2 2v5c0 1.1.9 2 2 2h1"></path><path d="M16 21h1a2 2 0 0 0 2-2v-5c0-1.1.9-2 2-2a2 2 0 0 1-2-2V5a2 2 0 0 0-2-2h-1"></path></svg>',
  figma:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z"></path><path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z"></path><path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z"></path><path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z"></path><path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z"></path></svg>',
  github:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>',
  terminal:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="4 17 10 11 4 5"></polyline><line x1="12" x2="20" y1="19" y2="19"></line></svg>',
  zap: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>',
  wind: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17.7 7.7a2.5 2.5 0 1 1 1.8 4.3H2"></path><path d="M9.6 4.6A2 2 0 1 1 11 8H2"></path><path d="M12.6 19.4A2 2 0 1 0 14 16H2"></path></svg>',
  layout:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"></rect><line x1="3" x2="21" y1="9" y2="9"></line><line x1="9" x2="9" y1="21" y2="9"></line></svg>',
}

// Render Skills
const skillsGrid = document.getElementById("skills-grid")
skills.forEach((skill) => {
  const skillCard = document.createElement("div")
  skillCard.className = "skill-card"

  skillCard.innerHTML = `
    ${
      skill.comingSoon
        ? `
      <div class="coming-soon-overlay">
        <span class="coming-soon-text">Coming Soon</span>
      </div>
    `
        : ""
    }
    <div class="skill-icon-wrapper">
      <div class="skill-icon" style="color: ${skill.color}">${svgIcons[skill.icon]}</div>
    </div>
    <p class="skill-name">${skill.name}</p>
    <div class="skill-progress">
      <div class="skill-progress-bar"></div>
    </div>
  `

  skillsGrid.appendChild(skillCard)
})

// Projects Data
const projects = [
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

let centerProject = projects[0]
let orbitingProjects = projects.slice(1)

function renderProjects() {
  const centerContainer = document.getElementById("center-project")
  centerContainer.innerHTML = `
    <div class="center-project-card">
      <div class="center-glow"></div>
      <div class="project-icon">${centerProject.icon}</div>
      <h3 class="project-title">${centerProject.title}</h3>
      <p class="project-desc">${centerProject.description}</p>
    </div>
  `

  const orbitingContainer = document.getElementById("orbiting-projects")
  orbitingContainer.innerHTML = ""

  orbitingProjects.forEach((project, index) => {
    const angle = (index / orbitingProjects.length) * 360
    const radius = 350
    const x = Math.cos((angle * Math.PI) / 180) * radius
    const y = Math.sin((angle * Math.PI) / 180) * radius
    const depth = Math.sin((angle * Math.PI) / 180) * 0.5 + 0.5
    const scale = 0.6 + depth * 0.4
    const blur = (1 - depth) * 2

    const orbitProject = document.createElement("div")
    orbitProject.className = "orbit-project"
    orbitProject.style.transform = `translate(${x}px, ${y}px) scale(${scale})`
    orbitProject.style.filter = `blur(${blur}px)`
    orbitProject.innerHTML = `
      <div class="orbit-project-card">
        <div class="orbit-icon">${project.icon}</div>
        <p class="orbit-title">${project.title}</p>
      </div>
    `

    orbitProject.addEventListener("click", () => {
      const newOrbiting = orbitingProjects.filter((p) => p.id !== project.id)
      newOrbiting.push(centerProject)
      centerProject = project
      orbitingProjects = newOrbiting
      renderProjects()
    })

    orbitingContainer.appendChild(orbitProject)
  })
}

renderProjects()

// Social Links
const socialLinks = [
  { name: "GitHub", url: "https://github.com", icon: "github" },
  { name: "LinkedIn", url: "https://linkedin.com", icon: "linkedin" },
  { name: "Twitter", url: "https://twitter.com", icon: "twitter" },
  { name: "WhatsApp", url: "https://whatsapp.com", icon: "message-circle" },
  { name: "Instagram", url: "https://instagram.com", icon: "instagram" },
  { name: "Facebook", url: "https://facebook.com", icon: "facebook" },
]

const socialIconsSvg = {
  github:
    '<svg class="social-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>',
  linkedin:
    '<svg class="social-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>',
  twitter:
    '<svg class="social-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>',
  "message-circle":
    '<svg class="social-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>',
  instagram:
    '<svg class="social-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>',
  facebook:
    '<svg class="social-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>',
}

const socialContainer = document.getElementById("social-links")
socialLinks.forEach((social) => {
  const link = document.createElement("a")
  link.className = "social-link"
  link.href = social.url
  link.target = "_blank"
  link.rel = "noopener noreferrer"
  link.setAttribute("aria-label", social.name)
  link.innerHTML = socialIconsSvg[social.icon]
  socialContainer.appendChild(link)
})

// Navbar Scroll Behavior
const navbar = document.getElementById("navbar")
const neonFlow = document.getElementById("neon-flow")
let lastScroll = 0

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset

  if (currentScroll < 50) {
    navbar.classList.remove("hidden")
    neonFlow.classList.remove("hidden")
  } else {
    navbar.classList.add("hidden")
    neonFlow.classList.add("hidden")
  }

  // Active section detection
  const sections = ["home", "about", "skills", "projects", "contact"]
  const scrollPosition = currentScroll + 100

  sections.forEach((sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const { offsetTop, offsetHeight } = element
      if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
        document.querySelectorAll(".nav-link").forEach((link) => {
          link.classList.remove("active")
          if (link.getAttribute("href") === `#${sectionId}`) {
            link.classList.add("active")
          }
        })
      }
    }
  })

  lastScroll = currentScroll
})

// Smooth Scroll for Links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute("href"))
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  })
})
