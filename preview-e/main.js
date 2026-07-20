/* Design E — Server Rack. Same real content as the main site, restyled. */

const EDUCATION = [
  {
    date: "Mar 2025 — Jul 2026",
    title: "Master's degree, Cybersecurity",
    org: "AGH University of Krakow",
    led: "amber",
    desc: "Graduate studies in cybersecurity, continuing on from the engineering degree below.",
    tags: ["Cybersecurity"],
  },
  {
    date: "Oct 2021 — Jan 2025",
    title: "Engineer's degree, Cybersecurity",
    org: "AGH University of Krakow",
    led: "off",
    desc: "Undergraduate engineering degree covering cybersecurity, networking, and operating systems.",
    tags: ["Cybersecurity"],
  },
];

const CERTIFICATIONS = [
  { name: "Microsoft Certified: Azure Security Engineer Associate", issuer: "Microsoft", meta: "Issued Jan 2026 · Expires Jan 2027 · ID 67475B239E939146" },
  { name: "GitHub Advanced Security", issuer: "GitHub", meta: "Issued Oct 2025 · Expires Oct 2027 · ID 4B1AD3-8763V1" },
];

const EXPERIENCE = [
  {
    date: "Nov 2024 — Present",
    title: "Cybersecurity Engineer",
    org: "RBC Bearings · Kraków, Poland · Hybrid",
    led: "green",
    groups: [
      { label: "DevSecOps", items: [
        "Covered the platform with dynamic application security scanning (OWASP ZAP, SQLmap).",
        "Covered repositories with static analysis via GitHub Advanced Security: CodeQL, Dependabot, Secret Scanning.",
        "Conducted shift-left security assessments.",
      ]},
      { label: "Azure Cloud Security", items: [
        "Built Infrastructure as Code for Azure resources using Bicep.",
        "Tuned Azure Web Application Firewall rules.",
        "Authored Microsoft Sentinel analytics rules; investigated and resolved security incidents.",
        "Queried and analyzed logs using KQL.",
      ]},
      { label: "Penetration Testing", items: [
        "Performed internal penetration tests across Web, API, and IIoT surfaces.",
      ]},
      { label: "Security Engagements", items: [
        "Ran cybersecurity awareness sessions and implemented ISO 27001 policies.",
        "Completed client security assessments and biweekly platform security status reports.",
      ]},
    ],
    tags: ["DevSecOps", "Azure", "Sentinel", "Penetration Testing", "ISO 27001"],
  },
  {
    date: "Nov 2023 — Jun 2024",
    title: "Junior IT Security Specialist — SOC L2",
    org: "Comarch · Kraków, Poland",
    led: "off",
    bullets: [
      "Implemented security monitoring using HIDS (Wazuh), SIEM (Splunk), and OSquery.",
      "Managed system hardening and security configuration assessments per CIS benchmarks.",
      "Reviewed phishing emails and performed malware analysis.",
      "Administered and maintained Linux systems.",
    ],
    tags: ["Wazuh", "Splunk", "OSquery", "Linux", "CIS Benchmarks"],
  },
];

const PROJECTS = [
  {
    title: "ConsultIT — Security Assessment Report",
    desc: "Laureate project for the ConsultIT competition (SGH, with Accenture, LOT, P&G, Allegro, GFT). Advanced through a CTF qualifier, then analyzed a real company's systems, processes, and architecture in the final, proposing concrete security improvements.",
    tags: ["CTF", "Security Assessment", "Team Project"],
  },
  {
    title: "HackAGH 2023 — Autonomous Vehicle App",
    desc: "Finalist at HackAGH, a team hackathon organized by URSS AGH on autonomous-vehicle automotive tech. Devised a creative autonomous-car feature and built a mobile app prototype, presented live to a jury in the final.",
    tags: ["Hackathon", "Mobile App", "Team Project"],
  },
];

/* ---------------- rendering ---------------- */

function unitBody(item) {
  if (item.groups) {
    return `<ul class="unit-groups">${item.groups.map(g => `
      <li>
        <p class="unit-group-label">${g.label}</p>
        <ul class="unit-bullets">${g.items.map(i => `<li>${i}</li>`).join("")}</ul>
      </li>`).join("")}</ul>`;
  }
  if (item.bullets) {
    return `<ul class="unit-bullets">${item.bullets.map(i => `<li>${i}</li>`).join("")}</ul>`;
  }
  return `<p class="unit-desc">${item.desc}</p>`;
}

function ledClass(led) {
  if (led === "green") return "led led-green";
  if (led === "amber") return "led led-amber";
  return "led";
}

function renderUnits(containerId, items) {
  const el = document.getElementById(containerId);
  el.innerHTML = items.map(item => `
    <article class="unit reveal">
      <span class="unit-led ${ledClass(item.led)}"></span>
      <div class="unit-head">
        <p class="unit-title">${item.title}</p>
        <span class="unit-date">${item.date}</span>
      </div>
      <p class="unit-org">${item.org}</p>
      ${unitBody(item)}
      <ul class="unit-tags">${item.tags.map(t => `<li>${t}</li>`).join("")}</ul>
    </article>
  `).join("");
}

function renderCertifications(containerId, items) {
  const el = document.getElementById(containerId);
  if (!el) return;
  el.innerHTML = items.map(c => `
    <div class="cert-card">
      <span class="cert-icon">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
          <path d="M12 2 3 6v6c0 5 4 8.5 9 10 5-1.5 9-5 9-10V6l-9-4Z"/>
          <path d="m9 12 2 2 4-4" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </span>
      <div>
        <p class="cert-name">${c.name}</p>
        <p class="cert-meta">${c.issuer} · ${c.meta}</p>
      </div>
    </div>
  `).join("");
}

function renderProjects(containerId, items) {
  const el = document.getElementById(containerId);
  el.innerHTML = items.map(p => `
    <article class="project-card reveal">
      <h3 class="project-title">${p.title}</h3>
      <p class="project-desc">${p.desc}</p>
      <ul class="project-tags">${p.tags.map(t => `<li>${t}</li>`).join("")}</ul>
    </article>
  `).join("") + `<div class="project-card placeholder reveal">+ More projects coming soon</div>`;
}

renderUnits("educationList", EDUCATION);
renderCertifications("certStrip", CERTIFICATIONS);
renderUnits("experienceList", EXPERIENCE);
renderProjects("projectsGrid", PROJECTS);

/* ---------------- live career-uptime counter (signature element) ---------------- */

(function uptimeLoop() {
  const el = document.getElementById("uptimeValue");
  if (!el) return;
  const start = new Date("2023-11-01T00:00:00Z").getTime();

  function tick() {
    const diffMs = Date.now() - start;
    const totalSeconds = Math.floor(diffMs / 1000);
    const days = Math.floor(totalSeconds / 86400);
    const years = Math.floor(days / 365);
    const remDays = days % 365;
    const h = String(Math.floor((totalSeconds % 86400) / 3600)).padStart(2, "0");
    const m = String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, "0");
    const s = String(totalSeconds % 60).padStart(2, "0");
    el.textContent = `${years}y ${remDays}d ${h}:${m}:${s}`;
  }
  tick();
  setInterval(tick, 1000);
})();

/* ---------------- scroll reveal ---------------- */

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("in-view");
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.15, rootMargin: "0px 0px -60px 0px" });
document.querySelectorAll(".reveal").forEach(el => revealObserver.observe(el));

/* ---------------- active nav on scroll ---------------- */

const sections = document.querySelectorAll("main .section");
const navLinks = document.querySelectorAll(".nav-link");
const navObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.getAttribute("id");
      navLinks.forEach(link => link.classList.toggle("active", link.getAttribute("href") === `#${id}`));
    }
  });
}, { threshold: 0.4, rootMargin: "-60px 0px -40% 0px" });
sections.forEach(section => navObserver.observe(section));

/* ---------------- mobile nav ---------------- */

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

/* ---------------- back to top ---------------- */

const backToTop = document.getElementById("backToTop");
window.addEventListener("scroll", () => backToTop.classList.toggle("visible", window.scrollY > 600));
backToTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

document.getElementById("year").textContent = new Date().getFullYear();
