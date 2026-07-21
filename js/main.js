/* ==========================================================================
   Content data: edit these arrays to add education, experience & projects.
   No build step needed: just save and push.
   ========================================================================== */

const EDUCATION = [
  {
    date: "Mar 2025 – Jul 2026",
    title: "Master's degree, Cybersecurity",
    org: "AGH University of Krakow",
    desc: "Graduate studies in cybersecurity, continuing on from the engineering degree below.",
    tags: ["Cybersecurity"],
    detail: {
      label: "graduate coursework highlights",
      intro: "90-ECTS, 3-semester accredited graduate program (in progress). Coursework most relevant to the job market:",
      items: [
        "Purple Teaming: combined offensive/defensive exercises bridging red and blue team practice",
        "Cybersecurity Operations: running and maturing security operations at scale",
        "Threat Intelligence: collecting, analyzing, and operationalizing threat data",
        "Detection & Analysis of Computer Threats: building and tuning detection capabilities",
        "Post-Quantum Cryptography: cryptographic protocols resilient to quantum attacks",
        "Digital Forensic Data Analysis: forensic examination of digital evidence",
        "5G & 6G Network Security: securing next-generation mobile infrastructure",
        "Enterprise Architecture & Risk Management: aligning security with business risk",
        "Capture the Flag (CTF): competitive, hands-on offensive security practice",
        "Deep Learning for Cybersecurity Applications: applying AI/ML to detection and analysis",
      ],
      note: "Also included: a full master's thesis, plus dedicated R&D methodology and legal/ethics coursework in cybersecurity.",
    },
  },
  {
    date: "Oct 2021 – Jan 2025",
    title: "Engineer's degree, Cybersecurity",
    org: "AGH University of Krakow",
    desc: "Undergraduate engineering degree covering cybersecurity, networking, and operating systems.",
    tags: ["Cybersecurity"],
    detail: {
      label: "coursework highlights",
      intro: "210-ECTS, 7-semester accredited engineering program. Coursework most relevant to the job market:",
      items: [
        "Penetration Testing: offensive methodology and hands-on exploitation labs",
        "Incident Management (SOC & CERT): triage, monitoring, and response workflows",
        "Critical Infrastructure & Industrial Control Systems Security: securing OT/ICS/IIoT environments",
        "Network & Systems Administration: organizing and administering wired and wireless networks across protocol layers",
        "Security of ICT Systems & Networks: network security fundamentals across the protocol stack",
        "Local Area Network (LAN) Security: securing local network infrastructure",
        "Wireless Network Security: Wi-Fi and radio-layer attack and defense techniques",
        "Wide Area Network (WAN) Security: routing and large-scale perimeter protection",
        "Cellular & 5G Network Security: mobile network infrastructure protection",
        "Secure Network Programming: building network-layer applications with security built in",
        "Cybersecurity & Cloud Computing: cloud-specific threat models and controls",
        "Web & Mobile Application Security: AppSec across the SDLC",
        "Cryptography & Cryptanalysis: applied cryptographic protocols and attacks",
        "Digital Forensics & Post-Breach Analysis: evidence handling and incident reconstruction",
        "Malware Analysis: static and dynamic analysis of malicious binaries",
        "Open-Source Intelligence (OSINT): reconnaissance and information-gathering techniques",
        "National Cybersecurity System & Information Security Management: policy and ISO 27001-aligned governance",
      ],
      note: "Also included: a mandatory 4-week industry internship and a full engineering thesis project.",
    },
  },
  {
    date: "Oct 2021 – Oct 2022",
    title: "Technologies Security Programme",
    org: "EITCA Academy",
    desc: "Independent European IT security certification programme (EITCA/IS) covering cryptography, network security, and information security theory.",
    tags: ["Cybersecurity", "Certification"],
    detail: {
      label: "programme highlights",
      intro: "EITCA/IS Information Technologies Security Programme, European IT Certification Institute (EITCI), Brussels. 24 ECTS credits earned across component EITC certifications:",
      items: [
        "EITC/IS/CF Cryptography Fundamentals: ciphers, symmetric/asymmetric cryptosystems, PKI, digital signatures",
        "EITC/CN/SCN1 Computer Networking 1: network layers, TCP/IP, routing, secure protocols (SSL, IPsec, VPN)",
        "EITC/IS/SMMOS Security Management in Microsoft Operating Systems: Windows hardening, Active Directory, access control, backup/recovery",
        "EITC/IS/IST Information Security Theory: information theory, entropy, computational complexity, cryptographic foundations",
        "EITC/QI/QIF Quantum Information & Quantum Computation Fundamentals: qubits, quantum circuits, Quantum Key Distribution",
        "EITC/IS/EEIS Electronic Economy Information Security: security audits, threat modeling (STRIDE), cryptographic data protection",
        "EITC/FC/CCT Computational Complexity Theory: Turing machines, NP-completeness, approximation algorithms",
        "EITC/IS/QCF Quantum Cryptography Fundamentals: QKD protocols (BB84, E91), quantum-safe secure communication",
        "EITC/CN/SCN2 Computer Networking 2: Ethernet, WLAN security (WEP/WPA), dynamic routing protocols (OSPF, RIP)",
        "EITC/IS/OS Operating Systems Security: process and file-system security, access control, Unix and Windows hardening",
        "EITC/IS/ACNS Advanced Computer Networks Security: firewalls, IDS, VPN tunnels, web application attack defense",
        "EITC/IS/FAIS Formal Aspects of Information Security: security standards (ISO/IEC 27001, ITIL, COBIT), legal frameworks, threat modeling",
      ],
      note: "Certificate ID EITCA/IS/LEH25004484, issued February 2025 by the European IT Certification Institute (EITCI), Brussels.",
    },
  },
];

const CERTIFICATIONS = [
  {
    name: "Microsoft Certified: Azure Security Engineer Associate",
    issuer: "Microsoft",
    meta: "Issued Jan 2026 · Expires Jan 2027 · ID 67475B239E939146",
  },
  {
    name: "GitHub Advanced Security",
    issuer: "GitHub",
    meta: "Issued Oct 2025 · Expires Oct 2027 · ID 4B1AD3-8763V1",
  },
];

const EXPERIENCE = [
  {
    date: "Nov 2024 – Present",
    title: "Cybersecurity Engineer",
    org: "RBC Bearings · Kraków, Poland · Hybrid",
    desc: "Covering DevSecOps, Azure cloud security, penetration testing, and security engagements across the company's platform and infrastructure.",
    tags: ["DevSecOps", "Azure", "Sentinel", "Penetration Testing", "ISO 27001"],
    detail: {
      label: "job details",
      groups: [
        {
          label: "DevSecOps",
          items: [
            "Covered the platform with dynamic application security scanning (OWASP ZAP, SQLmap).",
            "Covered repositories with static analysis via GitHub Advanced Security: CodeQL, Dependabot, Secret Scanning.",
            "Conducted shift-left security assessments.",
          ],
        },
        {
          label: "Azure Cloud Security",
          items: [
            "Built Infrastructure as Code for Azure resources using Bicep.",
            "Tuned Azure Web Application Firewall rules.",
            "Authored Microsoft Sentinel analytics rules; investigated and resolved security incidents.",
            "Queried and analyzed logs using KQL.",
          ],
        },
        {
          label: "Penetration Testing",
          items: [
            "Performed internal penetration tests across Web, API, and IIoT surfaces.",
          ],
        },
        {
          label: "Security Engagements",
          items: [
            "Ran cybersecurity awareness sessions and implemented ISO 27001 policies.",
            "Completed client security assessments and biweekly platform security status reports.",
          ],
        },
      ],
    },
  },
  {
    date: "Nov 2023 – Jun 2024",
    title: "Junior IT Security Specialist – SOC L2",
    org: "Comarch · Kraków, Poland",
    desc: "SOC L2 analyst covering security monitoring, system hardening, and Linux administration.",
    tags: ["Wazuh", "Splunk", "OSquery", "Linux", "CIS Benchmarks"],
    detail: {
      label: "job details",
      items: [
        "Implemented security monitoring using HIDS (Wazuh), SIEM (Splunk), and OSquery.",
        "Managed system hardening and security configuration assessments per CIS benchmarks.",
        "Reviewed phishing emails and performed malware analysis.",
        "Administered and maintained Linux systems.",
      ],
    },
  },
];

const PROJECTS = [
  {
    title: "RBAC IaC – Azure Access Management as Code",
    desc: "Replaced ad-hoc, portal-driven Azure access management with a fully declarative, GitOps-style RBAC pipeline. Every identity, role assignment, and permission boundary across three environments is defined in YAML, reviewed in pull requests, and reconciled automatically, including zero-trust ABAC constraints and time-boxed PIM eligibility for privileged roles.",
    tags: ["Azure Entra ID", "RBAC/PIM/ABAC", "GitHub Actions (OIDC)", "Python"],
    detail: {
      label: "technical breakdown",
      paragraphs: [
        "Each environment lives on its own Git branch with its own YAML config fragments, merged by a small Python script into a single manifest before every deployment. A Bash-based deploy flow drives that manifest against Azure through GitHub Actions' OIDC federation (no stored credentials), creating or updating managed identities, RBAC role assignments, Cosmos DB data-plane roles, and Azure SQL database roles (the latter via Entra-authenticated <code>sqlcmd</code> calls that idempotently create database users and add them to roles).",
        "Privileged assignments can be marked PIM-eligible with a configurable expiry instead of granted permanently, and ABAC condition strings can be attached directly to role assignments to restrict exactly which roles an identity is allowed to grant, preventing privilege escalation even for administrative identities.",
        "On every run, the pipeline compares the manifest against live Azure state and removes anything no longer defined in YAML, so configuration drift never accumulates; user-facing role assignments are the one exception, kept additive-only to avoid accidentally locking people out.",
      ],
    },
  },
  {
    title: "On-Prem Virtualization Platform as Code",
    desc: "Designed and built a self-hosted, on-prem infrastructure platform from the ground up: one push to production provisions VMs with Terraform and configures them with Ansible, covering DNS, internal PKI, SIEM, EDR, and application hosting, with zero manual steps. On top of it: a production RAG (Retrieval-Augmented Generation) platform with SSO, and an ERP host with automated backups.",
    tags: ["Proxmox VE", "Terraform", "Ansible", "GitHub Actions (OIDC)", "Wazuh"],
    detail: {
      label: "technical breakdown",
      paragraphs: [
        "The provisioning layer uses the <code>bpg/proxmox</code> Terraform provider to clone new VMs from a cloud-init template, wiring up CPU, memory, disk, and networking, with Terraform state kept remotely in Azure Storage and authenticated via OIDC rather than static keys. A small Python bridge script converts Terraform's outputs into a generated Ansible inventory, so the configuration stage never needs to know about infrastructure state directly. A chain of GitHub Actions workflows takes over from there: a Terraform apply triggers an Ansible run only once it succeeds.",
        "Every VM in the fleet gets the same baseline through shared Ansible roles regardless of its job: SSH key distribution, common hardening, an EDR agent, a SIEM agent enrolled against the central manager, and a leaf certificate from an internal CA so it can serve TLS the rest of the fleet trusts.",
        "On top of that shared baseline, each VM carries one specialised role: a self-managed ERP instance on PostgreSQL with scheduled database and filestore backups pushed to Azure Blob Storage; a single-node SIEM manager that every other VM ships logs and audit events to, with a dedicated SSD-backed data disk for the indexer's growing storage; a minimal internal certificate authority issuing the leaf certificates the rest of the fleet trusts, kept deliberately tiny since a CA has almost no footprint; a self-hosted GitHub Actions runner that executes the deploy jobs from inside the network so the hypervisor's management API never needs to be exposed to the internet; the RAG platform's data plane, running LightRAG together with PostgreSQL extended with <code>pgvector</code> and <code>AGE</code> for the vector store and knowledge graph, calling out to a separate GPU host for inference rather than running any heavy model locally; the RAG platform's front door, running Caddy terminating TLS issued by the internal CA, oauth2-proxy enforcing Microsoft Entra single sign-on and group membership, and a FastAPI backend holding the API key server-side; and an internal DNS server, authoritative for internal zones.",
        "A smaller sandbox VM rounds out the fleet, used to validate changes to the Terraform and Ansible roles themselves before they touch anything production.",
      ],
    },
  },
  {
    title: "Local LLM Inference Host",
    desc: "Turned a bare NVIDIA DGX Spark box into a hardened, self-hosted LLM inference platform: several local models served behind an authenticated reverse proxy, speculative decoding for faster responses, and full audit and SIEM visibility into every request. Now the model backend behind an internal RAG platform.",
    tags: ["Ansible", "NVIDIA DGX Spark", "llama.cpp", "systemd", "Caddy"],
    detail: {
      label: "technical breakdown",
      paragraphs: [
        "The core of the setup is an Ansible role that builds <code>llama.cpp</code> from source with CUDA support on the DGX Spark's ARM64 hardware, pinned to a specific upstream commit to guarantee Multi-Token Prediction support, then runs it as a <code>systemd</code>-managed router service exposing several model profiles (including a large MoE model tuned with speculative decoding for lower latency) behind a single API.",
        "Alongside it, the role deploys and hardens a diffusion model server, OpenWebUI as a chat front-end, and ComfyUI for image and video generation, each as its own <code>systemd</code> unit with its own service user and log files. All of these sit behind a single Caddy reverse proxy that terminates TLS and enforces bearer-token API-key authentication before any request reaches a model.",
        "To make the host observable rather than a black box, the role also configures structured JSON access logging, persistent journald storage, log rotation, and <code>auditd</code> rules that watch configuration files, secrets, and privileged service commands; it then enrolls the host as a SIEM agent so all of that telemetry flows into the same central monitoring used across the rest of the infrastructure.",
      ],
    },
  },
  {
    title: "Azure IaC Program – Migrating a Cloud Estate to Code",
    desc: "Beyond individual platforms, a broader effort ported nearly an entire company's Azure estate from manual, portal-driven changes into version-controlled, environment-aware Infrastructure as Code, one domain at a time. Each area got its own Bicep templates and its own GitHub Actions pipeline authenticated via OIDC, following a consistent dev/beta/prod branching pattern.",
    tags: ["Azure Bicep", "AKS", "Application Gateway (WAF)", "Microsoft Sentinel"],
    detail: {
      label: "technical breakdown",
      paragraphs: [
        "<strong>Networking</strong> – core VNets for dev, beta, and prod, each with its own non-overlapping address space, subnets for database, web, storage, key vault, function app, and API management workloads, private DNS zones, and DMZ peering, all provisioned from a single parameterised Bicep template.",
        "<strong>DMZ</strong> – the public edge of the network: a dedicated DMZ VNet peered to the intranet, and an Application Gateway (WAF_v2) with its listeners, backend pools, probes, routing rules, redirects, and rewrites.",
        "<strong>WAF rules</strong> – the Web Application Firewall policy attached to that gateway: custom rule sets, log scrubbing for sensitive fields such as passwords, environment-aware switching between detection and prevention mode, and a temporary, time-boxed pentest IP allowlist for non-production.",
        "<strong>Storage estate</strong> – a primary and geo-replicated SQL Server pair behind a manual-failover group, two Cosmos DB accounts, and their supporting storage account, checked against the live environment with <code>az deployment group what-if</code> until the plan showed zero creates or deletes: a faithful, drift-free match for what was already running in production.",
        "<strong>Static frontend hosting</strong> – Storage-Account-backed static website hosting behind private endpoints, with public blob access and shared-key authentication disabled and RBAC enforced.",
        "<strong>AKS platform</strong> – an Azure Kubernetes Service cluster and Container Registry in Bicep, with a GitOps-style pipeline that follows infrastructure provisioning with a Helm-based rollout of Envoy Gateway and cert-manager for automated Let's Encrypt certificates.",
        "<strong>Security tooling</strong> – Microsoft Defender for Cloud and Defender for Storage with environment-appropriate coverage, Microsoft Sentinel, subscription and resource diagnostic settings, and an automated Function App that renews Let's Encrypt certificates in Key Vault in response to expiry notifications.",
        "Access to every resource provisioned across this estate is, in turn, governed by the RBAC pipeline above, closing the loop between what gets deployed and who is allowed to touch it.",
      ],
    },
  },
  {
    title: "ConsultIT – Security Assessment Report",
    desc: "Laureate project for the ConsultIT competition (SGH, with Accenture, LOT, P&G, Allegro, GFT). Advanced through a CTF qualifier, then analyzed a real company's systems, processes, and architecture in the final, proposing concrete security improvements.",
    tags: ["CTF", "Security Assessment", "Team Project"],
    // Write-up lives in a private repo (github.com/JakubMlocek/CTF): make it public and set `repo` below to link it.
  },
  {
    title: "HackAGH 2023 – Autonomous Vehicle App",
    desc: "Finalist at HackAGH, a team hackathon organized by URSS AGH on autonomous-vehicle automotive tech. Devised a creative autonomous-car feature and built a mobile app prototype, presented live to a jury in the final.",
    tags: ["Hackathon", "Mobile App", "Team Project"],
  },
];

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
document.addEventListener("click", (e) => {
  const btn = e.target.closest(".detail-toggle");
  if (!btn) return;
  const panel = btn.nextElementSibling;
  const label = btn.dataset.label || "details";
  const expanded = btn.getAttribute("aria-expanded") === "true";
  btn.setAttribute("aria-expanded", String(!expanded));
  panel.classList.toggle("open", !expanded);
  btn.querySelector(".detail-toggle-label").textContent = expanded ? `Show ${label}` : `Hide ${label}`;
  btn.querySelector(".detail-toggle-icon").textContent = expanded ? "+" : "−";
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
      ${renderDetailPanel(p)}
    </article>
  `).join("") + `
    <div class="project-card placeholder reveal">+ More projects coming soon</div>
  `;
}

renderTimeline("educationList", EDUCATION);
renderCertifications("certStrip", CERTIFICATIONS);
renderTimeline("experienceList", EXPERIENCE);
renderProjects("projectsGrid", PROJECTS);

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
