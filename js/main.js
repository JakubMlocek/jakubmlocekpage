/* ==========================================================================
   Content lives in data/*.json, not here: edit those files to add education,
   experience, projects & certifications. No build step needed, just save
   and push. See README.md for the exact schema and examples.
   ========================================================================== */

/* ==========================================================================
   Rendering
   ========================================================================== */

function renderGroups(groups) {
  return `
    <ul class="timeline-groups">
      ${groups.map(g => `
        <li>
          <p class="timeline-group-label">${g.label}</p>
          <ul class="timeline-bullets">
            ${g.items.map(i => `<li>${i}</li>`).join("")}
          </ul>
        </li>
      `).join("")}
    </ul>
  `;
}

function renderTimelineBody(item) {
  if (item.groups) return renderGroups(item.groups);
  if (item.bullets) {
    return `
      <ul class="timeline-bullets">
        ${item.bullets.map(i => `<li>${i}</li>`).join("")}
      </ul>
    `;
  }
  return `<p class="timeline-desc">${item.desc}</p>`;
}

function renderDetailPanel(item) {
  if (!item.detail) return "";
  const { intro, items, paragraphs, groups, note, label = "details" } = item.detail;
  return `
    <button type="button" class="detail-toggle" aria-expanded="false" data-label="${label}">
      <span class="detail-toggle-label">Show ${label}</span>
      <span class="detail-toggle-icon" aria-hidden="true">+</span>
    </button>
    <div class="detail-panel">
      <div class="detail-panel-inner">
        ${intro ? `<p class="detail-intro">${intro}</p>` : ""}
        ${groups ? renderGroups(groups) : ""}
        ${items ? `
          <ul class="detail-list">
            ${items.map(i => `<li>${i}</li>`).join("")}
          </ul>
        ` : ""}
        ${paragraphs ? `
          <div class="detail-paragraphs">
            ${paragraphs.map(p => `<p>${p}</p>`).join("")}
          </div>
        ` : ""}
        ${note ? `<p class="detail-note">${note}</p>` : ""}
      </div>
    </div>
  `;
}

function renderTimeline(containerId, items) {
  const el = document.getElementById(containerId);
  el.innerHTML = items.map(item => `
    <li class="timeline-item reveal">
      <span class="timeline-date">${item.date}</span>
      <h3 class="timeline-title">${item.title}</h3>
      <p class="timeline-org">${item.org}</p>
      ${renderTimelineBody(item)}
      <ul class="timeline-tags">
        ${item.tags.map(t => `<li>${t}</li>`).join("")}
      </ul>
      ${renderDetailPanel(item)}
    </li>
  `).join("");
}

/* Expand/collapse for any ".detail-toggle": reusable across timeline items,
   project cards, or any future panel that follows this same markup pattern. */
function toggleDetail(btn) {
  const panel = btn.nextElementSibling;
  const label = btn.dataset.label || "details";
  const expanded = btn.getAttribute("aria-expanded") === "true";
  btn.setAttribute("aria-expanded", String(!expanded));
  panel.classList.toggle("open", !expanded);
  btn.querySelector(".detail-toggle-label").textContent = expanded ? `Show ${label}` : `Hide ${label}`;
  btn.querySelector(".detail-toggle-icon").textContent = expanded ? "+" : "−";
}

/* ==========================================================================
   Project modal — wide, centered, animated. Replaces the cramped in-card
   expansion for projects (long write-ups read poorly in a ~340px column).
   ========================================================================== */

let projectsData = [];
const projectModal = document.getElementById("projectModal");
const projectModalBody = document.getElementById("projectModalBody");

function renderModalBody(p) {
  const d = p.detail || {};
  return `
    <h3 class="project-modal-title">${p.title}</h3>
    <ul class="project-modal-tags">${p.tags.map(t => `<li>${t}</li>`).join("")}</ul>
    <p class="project-modal-desc">${p.desc}</p>
    ${d.intro ? `<p class="detail-intro">${d.intro}</p>` : ""}
    ${d.groups ? renderGroups(d.groups) : ""}
    ${d.items ? `<ul class="detail-list">${d.items.map(i => `<li>${i}</li>`).join("")}</ul>` : ""}
    ${d.paragraphs ? `<div class="detail-paragraphs">${d.paragraphs.map(pp => `<p>${pp}</p>`).join("")}</div>` : ""}
    ${d.note ? `<p class="detail-note">${d.note}</p>` : ""}
  `;
}

function openProjectModal(index) {
  const p = projectsData[index];
  if (!p) return;
  projectModalBody.innerHTML = renderModalBody(p);
  projectModal.classList.add("open");
  projectModal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
  projectModalBody.scrollTop = 0;
}

function closeProjectModal() {
  projectModal.classList.remove("open");
  projectModal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
}

document.addEventListener("click", (e) => {
  if (e.target.closest("[data-modal-close]")) {
    closeProjectModal();
    return;
  }
  if (e.target.closest("a")) return; // don't hijack real links (e.g. project Code/Live)

  const card = e.target.closest(".project-card.has-detail");
  if (card) {
    openProjectModal(Number(card.dataset.projectIndex));
    return;
  }

  const btn = e.target.closest(".detail-toggle");
  if (btn) toggleDetail(btn);
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && projectModal.classList.contains("open")) closeProjectModal();
});

function renderCertifications(containerId, items) {
  const el = document.getElementById(containerId);
  if (!el) return;
  el.innerHTML = items.map(c => `
    <div class="cert-card">
      <span class="cert-icon">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
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
  projectsData = items;
  const el = document.getElementById(containerId);
  el.innerHTML = items.map((p, i) => `
    <article class="project-card reveal ${p.detail ? "has-detail" : ""}" ${p.detail ? `data-project-index="${i}"` : ""}>
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
      ${p.detail ? `
        <button type="button" class="project-expand-hint">
          <span>${p.detail.label ? `View ${p.detail.label}` : "View details"}</span>
          <span aria-hidden="true">→</span>
        </button>
      ` : ""}
    </article>
  `).join("") + `
    <div class="project-card placeholder reveal">+ More projects coming soon</div>
  `;
}

async function fetchJSON(path) {
  const res = await fetch(path);
  if (!res.ok) throw new Error(`${path}: HTTP ${res.status}`);
  return res.json();
}

async function loadContent() {
  try {
    const [education, certifications, experience, projects] = await Promise.all([
      fetchJSON("data/education.json"),
      fetchJSON("data/certifications.json"),
      fetchJSON("data/experience.json"),
      fetchJSON("data/projects.json"),
    ]);
    renderTimeline("educationList", education);
    renderCertifications("certStrip", certifications);
    renderTimeline("experienceList", experience);
    renderProjects("projectsGrid", projects);
  } catch (err) {
    console.error("Failed to load site content:", err);
    const message = `
      <p style="font-family: monospace; font-size: 0.85rem; color: #ff6b6b; padding: 16px; max-width: 60ch;">
        Couldn't load content from <code>data/*.json</code>. Check the file for a syntax mistake
        (a stray comma, a missing quote) and check the browser console for details.<br><br>
        If you're viewing this by double-clicking <code>index.html</code>, that won't work: run
        <code>python3 -m http.server</code> in this folder and open the printed address instead.
      </p>
    `;
    ["educationList", "experienceList", "projectsGrid"].forEach(id => {
      const el = document.getElementById(id);
      if (el) el.innerHTML = message;
    });
  }
  // Newly rendered .reveal elements need to be observed too; observing an
  // already-observed element again is a harmless no-op.
  document.querySelectorAll(".reveal").forEach(el => revealObserver.observe(el));
}

loadContent();

/* ==========================================================================
   Typing effect for role line
   ========================================================================== */

const ROLES = [
  "Cybersecurity Engineer",
  "DevSecOps",
  "Azure Cloud Security",
  "Penetration Tester",
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
