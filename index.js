import { contactItems } from "./data/contactItems.js"
import { projects } from "./data/projects.js"
import { techItems } from "./data/techItems.js"


let current = 0;

const inner = document.getElementById('carousel-inner')
const dotsContainer = document.getElementById('carousel-dots')
const prevBtn = document.getElementById('carousel-prev')
const nextBtn = document.getElementById('carousel-next')
const techGrid = document.getElementById('tech-grid')

//PROJECTS
function renderSlide(index) {
  const p = projects[index]

  const techHTML = p.tech.map(t => `<li>${t}</li>`).join('')

  const imageHTML = p.image
    ? `<div class="carousel-image"><img src="${p.image}" alt="${p.title} preview" /></div>`
    : `<div class="carousel-image carousel-no-image"><span>${p.title}</span></div>`

  inner.innerHTML = `
    <div class="carousel-slide">
      ${imageHTML}
      <div class="carousel-content">
        <h3>${p.title}</h3>
        <p>${p.description}</p>
        <ul class="project-tech">${techHTML}</ul>
        <div class="project-links">
          <a href="${p.live}" target="_blank" rel="noopener noreferrer">
            <img class="link-icon" src="images/link.png" alt="Live link" />
          </a>
          <a href="${p.github}" target="_blank" rel="noopener noreferrer">
            <img class="github-logo" src="images/GitHub_Invertocat_White_Clearspace.png" alt="GitHub" />
          </a>
        </div>
      </div>
    </div>
  `

  // update dots
  document.querySelectorAll('.carousel-dot').forEach((dot, i) => {
    dot.classList.toggle('active', i === index)
  })
}

function goTo(index) {
  current = (index + projects.length) % projects.length
  renderSlide(current)
}

// Build dots
projects.forEach((_, i) => {
  const dot = document.createElement('button')
  dot.className = 'carousel-dot'
  dot.setAttribute('aria-label', `Go to project ${i + 1}`)
  dot.addEventListener('click', () => goTo(i))
  dotsContainer.appendChild(dot)
})

prevBtn.addEventListener('click', () => goTo(current - 1))
nextBtn.addEventListener('click', () => goTo(current + 1))

// Keyboard navigation
document.addEventListener('keydown', e => {
  if (e.key === 'ArrowLeft') goTo(current - 1)
  if (e.key === 'ArrowRight') goTo(current + 1)
})

renderSlide(0)

// TECH
techItems.forEach(item => {
  const img = document.createElement('img')
  img.src = item.src
  img.alt = item.name
  img.title = item.name
  techGrid.appendChild(img)
})

// CONTACT 
const grid = document.getElementById('contact-grid')

contactItems.forEach(item => {
  const a = document.createElement('a')
  a.className = 'contact-item'
  a.href = item.href
  a.target = '_blank'
  a.rel = 'noopener noreferrer'
  a.innerHTML = `
    <span class="contact-icon">${item.svg}</span>
    <p>${item.href}</p>
  `
  grid.appendChild(a)
})

// ── TOUCH SWIPE (mobile) ──────────────────────────────────────
let touchStartX = 0
inner.addEventListener('touchstart', e => { touchStartX = e.touches[0].clientX }, { passive: true })
inner.addEventListener('touchend', e => {
  const diff = touchStartX - e.changedTouches[0].clientX
  if (Math.abs(diff) > 40) goTo(diff > 0 ? current + 1 : current - 1)
});














