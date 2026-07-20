/* ==========================================================================
   Content data — edit these arrays to add education, experience & projects.
   No build step needed: just save and push.
   ========================================================================== */

const EDUCATION = [
  {
    date: "2020 — 2023",
    title: "B.Sc. in Computer Science / Cybersecurity",
    org: "Your University Name",
    desc: "Replace with a short description: focus areas, thesis topic, notable coursework.",
    tags: ["Networking", "Systems", "Security Fundamentals"],
  },
  {
    date: "2023",
    title: "Add a certification (e.g. CompTIA Security+, CEH, OSCP)",
    org: "Issuing organization",
    desc: "One or two lines about what the certification covers and why it mattered to you.",
    tags: ["Certification"],
  },
];

const EXPERIENCE = [
  {
    date: "2023 — Present",
    title: "Cybersecurity Engineer",
    org: "Company Name",
    desc: "Replace with real responsibilities: e.g. hardening infrastructure, running vulnerability assessments, incident response, SIEM/monitoring, security automation.",
    tags: ["SOC", "SIEM", "Incident Response"],
  },
  {
    date: "2020 — 2023",
    title: "Systems Administrator",
    org: "Previous Company Name",
    desc: "Replace with real responsibilities: e.g. managing Linux/Windows server fleets, Active Directory, backups, network administration, automation scripting.",
    tags: ["Linux", "Windows Server", "Active Directory"],
  },
];

const PROJECTS = [
  {
    title: "Add your first project",
    desc: "Short summary of what it does, the problem it solves, and your role building it.",
    tags: ["Tag1", "Tag2"],
    link: "#",
    repo: "#",
  },
  {
    title: "Add another project",
    desc: "Short summary of what it does, the problem it solves, and your role building it.",
    tags: ["Tag1", "Tag2"],
    link: "#",
    repo: "#",
  },
];

/* ==========================================================================
   Rendering
   ========================================================================== */

function renderTimeline(containerId, items) {
  const el = document.getElementById(containerId);
  el.innerHTML = items.map(item => `
    <li class="timeline-item reveal">
      <span class="timeline-date">${item.date}</span>
      <h3 class="timeline-title">${item.title}</h3>
      <p class="timeline-org">${item.org}</p>
      <p class="timeline-desc">${item.desc}</p>
      <ul class="timeline-tags">
        ${item.tags.map(t => `<li>${t}</li>`).join("")}
      </ul>
    </li>
  `).join("");
}

function renderProjects(containerId, items) {
  const el = document.getElementById(containerId);
  el.innerHTML = items.map(p => `
    <article class="project-card reveal">
      <div class="project-card-head">
        <span class="project-icon">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6">
            <path d="M12 2 3 6v6c0 5 4 8.5 9 10 5-1.5 9-5 9-10V6l-9-4Z"/>
          </svg>
        </span>
        <span class="project-links">
          ${p.repo ? `<a href="${p.repo}" target="_blank" rel="noopener">Code</a>` : ""}
          ${p.link ? `<a href="${p.link}" target="_blank" rel="noopener">Live</a>` : ""}
        </span>
      </div>
      <h3 class="project-title">${p.title}</h3>
      <p class="project-desc">${p.desc}</p>
      <ul class="project-tags">
        ${p.tags.map(t => `<li>${t}</li>`).join("")}
      </ul>
    </article>
  `).join("") + `
    <div class="project-card placeholder reveal">+ More projects coming soon</div>
  `;
}

renderTimeline("educationList", EDUCATION);
renderTimeline("experienceList", EXPERIENCE);
renderProjects("projectsGrid", PROJECTS);

/* ==========================================================================
   Typing effect for role line
   ========================================================================== */

const ROLES = [
  "Cybersecurity Engineer",
  "Systems Administrator",
  "Blue Team / Security Ops",
  "Infrastructure Hardening",
];

(function typeLoop() {
  const el = document.getElementById("roleTyped");
  if (!el) return;
  let roleIndex = 0, charIndex = 0, deleting = false;

  function tick() {
    const current = ROLES[roleIndex];
    if (!deleting) {
      charIndex++;
      el.textContent = current.slice(0, charIndex);
      if (charIndex === current.length) {
        deleting = true;
        setTimeout(tick, 1500);
        return;
      }
    } else {
      charIndex--;
      el.textContent = current.slice(0, charIndex);
      if (charIndex === 0) {
        deleting = false;
        roleIndex = (roleIndex + 1) % ROLES.length;
      }
    }
    setTimeout(tick, deleting ? 40 : 70);
  }
  tick();
})();

/* ==========================================================================
   Scroll reveal
   ========================================================================== */

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("in-view");
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.15, rootMargin: "0px 0px -60px 0px" });

document.querySelectorAll(".reveal").forEach(el => revealObserver.observe(el));

/* ==========================================================================
   Active nav link on scroll
   ========================================================================== */

const sections = document.querySelectorAll("main .section");
const navLinks = document.querySelectorAll(".nav-link");

const navObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.getAttribute("id");
      navLinks.forEach(link => {
        link.classList.toggle("active", link.getAttribute("href") === `#${id}`);
      });
    }
  });
}, { threshold: 0.4, rootMargin: "-64px 0px -40% 0px" });

sections.forEach(section => navObserver.observe(section));

/* ==========================================================================
   Mobile nav toggle
   ========================================================================== */

const navToggle = document.getElementById("navToggle");
const navLinksEl = document.getElementById("navLinks");

navToggle.addEventListener("click", () => {
  const open = navLinksEl.classList.toggle("open");
  navToggle.setAttribute("aria-expanded", String(open));
});

navLinksEl.querySelectorAll("a").forEach(a => {
  a.addEventListener("click", () => {
    navLinksEl.classList.remove("open");
    navToggle.setAttribute("aria-expanded", "false");
  });
});

/* ==========================================================================
   Back to top
   ========================================================================== */

const backToTop = document.getElementById("backToTop");
window.addEventListener("scroll", () => {
  backToTop.classList.toggle("visible", window.scrollY > 600);
});
backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

/* ==========================================================================
   Footer year
   ========================================================================== */

document.getElementById("year").textContent = new Date().getFullYear();
