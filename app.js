const skillCardsData = [
  {
    title: "Web Developer",
    label: "Support Skill",
    isMain: false,
    hardSkills: [
      "HTML",
      "CSS",
      "Laravel",
      "React JS / Next JS / Typescript JS",
      "Bootstrap / Tailwind"
    ],
    softwares: [
      { alt: "GitHub", src: "image/logo/tools/gitHub.png" },
      { alt: "WordPress", src: "image/logo/tools/wordpress.png" },
      { alt: "Shopify", src: "image/logo/tools/Shopify.png" },
      { alt: "Wix", src: "image/logo/tools/Wix.png" }
    ]
  },
  {
    title: "UI/UX Designer",
    label: "Main Skill",
    isMain: true,
    hardSkills: [
      "Design Thinking",
      "User Research",
      "Responsive Wireframing",
      "Prototyping",
      "Usability Testing"
    ],
    softwares: [
      { alt: "Figma", src: "image/logo/tools/figma.png" },
      { alt: "Adobe XD", src: "image/logo/tools/adobe xd.png" }
    ]
  },
  {
    title: "Digital Marketing",
    label: "Support Skill",
    isMain: false,
    hardSkills: [
      "Organic Marketing (Social Media Management, SEO)",
      "Paid Marketing (Google Ads, Meta Ads, Social Media Ads)",
      "CRM (Email, Whatsapp)"
    ],
    softwares: [
      { alt: "Google Ads", src: "image/logo/tools/GoogleAds.png" },
      { alt: "Google Analytic", src: "image/logo/tools/GoogleAnalytic.png" },
      { alt: "Mailchimp", src: "image/logo/tools/Mailchimp.png" },
      { alt: "Canva", src: "image/logo/tools/Canva.png" }
    ]
  }
];

const experienceData = [
  {
    role: "UI/UX Developer",
    company: "1zero.biz",
    duration: "2024 - Present",
    logo: "image/logo/experience/1zero white.svg"
  },
  {
    role: "UI/UX Designer",
    company: "PT Konverto",
    duration: "2023-2024",
    logo: "image/logo/experience/PT Konverto.png"
  },
  {
    role: "UI/UX Designer",
    company: "AidHub Foundation",
    duration: "2021 - 2023",
    logo: "image/logo/experience/Aidhub.png"
  }
];

const projectsData = [
  {
    id: 1,
    projectTitle: "Impact Portal Dashboard",
    company: "4Ocean",
    companyURL: "https://www.4ocean.com/",
    projectURL: "portfolio/4ocean.html",
    description: "A data-driven web dashboard and mobile app designed for investors to track and showcase 4ocean's clean-up impact with transparent daily results.",
    impact: ["Improved investor engagement with real-time clean-up data.", "Enhanced transparency of environmental clean-up efforts."],
    role: ["UI/UX", "Web Development"],
    projectType: ["Platform Building"],
    tools: ["Figma", "React JS", "Next.js", "Tailwindcss"],
    images: [
      "image/portfolio img/UIUX/Impact Portal Dashboard-mockup.jpg",
      "image/portfolio img/UIUX/Impact Portal Dashboard 2.png"
    ]
  },
  {
    id: 2,
    projectTitle: "Bali Teak Company Website",
    company: "Bali Teak",
    companyURL: "https://baliteak.ca",
    projectURL: "portfolio/BaliTeak.html",
    description: "A digital showcase for a local furniture company looking to build an online presence without fully implementing e-commerce functionality.",
    impact: ["Increased User Engagement",
      "Better Mobile Experience",
      "Built E-commerce foundation."],
    role: ["UI/UX", "Web Development"],
    projectType: ["Redesign", "Platform Building"],
    tools: ["Figma", "WordPress", "Elementor", "Google Ads"],
    images: [
      "image/portfolio img/UIUX/BalI Teak Company Website-mockup.jpg",
      "image/portfolio img/UIUX/BalI Teak Company Website 2.png"
    ]
  },
  // {
  //   id: 3,
  //   projectTitle: "Stray Dog Adoption Website",
  //   company: "Mission Pawsible Bali",
  //   companyURL: "https://missionpawsible.org",
  //   description: "A website dedicated to rescuing stray dogs and connecting them with loving adopters, developed in collaboration with MissionPawsible Bali.",
  //   impact: ["Streamlined the adoption process for potential adopters.",
  //     "Increased visibility for stray dogs in need of adoption.",
  //     "Improved access to adoption information and opportunities."
  //   ],
  //   role: ["UI/UX", "Web Development"],
  //   projectType: ["Platform Building"],
  //   tools: ["Figma", "Bootstrap", "Laravel"],
  //   images: [
  //     "image/portfolio img/UIUX/Dog Adoption Website-mockup.jpg",
  //     "image/portfolio img/UIUX/Dog Adoption Website 2.png"
  //   ]
  // }
];

const testimonials = [
  {
    name: "Dharma Putra",
    role: "IT Manager",
    company: "1zero",
    quote: "It was a absolute pleasure working alongside Risa Rahayu. They pick up new tools and concepts at lightning speed and never hesitate to take full ownership of their deliverables. Dependable and deadline-driven, Risa consistently balances speed with thoughtful, user-centered design. They would be an outstanding asset to any product team."
  },
  {
    name: "Mutia Rosa",
    role: "Executive Assistant",
    company: "1zero",
    quote: " was always impressed by her passion and dedication to her work. She is highly responsible, responsive, and efficient, and it is clear that she genuinely enjoys what she does. Risa is also always willing to learn new things and continuously improve her skills. I truly enjoyed working alongside Risa and would highly recommend her to any team or company looking for a passionate, dedicated, talented, and supportive UI/UX professional. I’m confident she will continue to grow and achieve great things in her career."
  }
];

const teamPhotos = [
  "image/team photo/photo 1.png",
  "image/team photo/photo 2.png",
  "image/team photo/photo 3.jpg"
];
// Preload images
teamPhotos.forEach((photo) => {
  const img = new Image();
  img.src = photo;
});

// testimony
const testimonialTrack = document.getElementById("testimonialTrack");

if (testimonialTrack) {

  testimonials.forEach((testimonial, index) => {

    testimonialTrack.innerHTML += `
      <article class="testimonial-card rounded-4">

        <div class="testimonial-person">

          <h3 class="fs-5 fw-semibold mb-1">
            ${testimonial.name}
          </h3>

          <p class="small text-secondary mb-0">
            ${testimonial.role} · ${testimonial.company}
          </p>

        </div>

        <blockquote class="testimonial-quote">
          “${testimonial.quote}”
        </blockquote>

      </article>
    `;

  });

}

const testimonialTeamImage =
  document.getElementById("testimonialTeamImage");
let currentTeamPhoto = 0;

// FOTO PERTAMA
// kalau punya foto, masukan foto pertama
if (testimonialTeamImage) {
  testimonialTeamImage.src =
    teamPhotos[currentTeamPhoto];
}
// GANTI FOTO
function updateTeamPhoto() {

  if (!testimonialTeamImage) return;

  testimonialTeamImage.classList.add("fade-out");

  setTimeout(() => {

    currentTeamPhoto++;

    if (currentTeamPhoto >= teamPhotos.length) {
      currentTeamPhoto = 0;
    }

    testimonialTeamImage.src =
      teamPhotos[currentTeamPhoto];

    testimonialTeamImage.classList.remove("fade-out");

  }, 500);
}

if (testimonialTeamImage) {
  setInterval(updateTeamPhoto, 4000);
}




document.addEventListener("DOMContentLoaded", () => {
  // Smooth parallax scroll for "See Portfolio" button
  const seePortfolioBtn = document.getElementById("seePortfolioBtn");
  if (seePortfolioBtn) {
    seePortfolioBtn.addEventListener("click", (e) => {
      e.preventDefault();
      const target = document.getElementById("portfolio");
      if (!target) return;

      const targetY = target.getBoundingClientRect().top + window.scrollY;
      const startY = window.scrollY;
      const distance = targetY - startY;
      const duration = 900; // ms
      let startTime = null;

      // Easing: easeInOutCubic untuk efek parallax yang smooth
      function easeInOutCubic(t) {
        return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
      }

      function scrollStep(timestamp) {
        if (!startTime) startTime = timestamp;
        const elapsed = timestamp - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const easedProgress = easeInOutCubic(progress);
        window.scrollTo(0, startY + distance * easedProgress);
        if (progress < 1) requestAnimationFrame(scrollStep);
      }

      requestAnimationFrame(scrollStep);
    });
  }


  // Render Skill Cards
  const skillCardsContainer = document.getElementById("skillCardsContainer");
  if (skillCardsContainer) {
    let skillsHTML = "";
    skillCardsData.forEach(card => {
      const hardSkillsHTML = card.hardSkills.map(skill => `<li>${skill}</li>`).join("");
      const softwaresHTML = card.softwares.map(sw => `
                      <span>
                        <img src="${sw.src}" alt="${sw.alt}" height="20px">
                      </span>`).join("");

      skillsHTML += `
              <div class="col-md-4">
                <article class="skill-card rounded-4 ${card.isMain ? 'main-skill' : ''}">
                  <div class="card-label rounded-top-4">
                    ${card.label}
                  </div>
                  <div class="card-body">
                    <h2>
                      ${card.title}
                    </h2>
                    <div class="skill-heading fw-medium">
                      Hard Skill
                    </div>
                    <ul>
                      ${hardSkillsHTML}
                    </ul>
                  </div>

                  <!-- SOFTWARE -->
                  <div class="software">
                    <div class="software-title fw-medium">
                      Software used
                    </div>
                    <div class="software-list">
                      ${softwaresHTML}
                    </div>
                  </div>
                </article>
              </div>
      `;
    });
    skillCardsContainer.innerHTML = skillsHTML;
  }

  // Render Experience Items
  const experienceContainer = document.getElementById("experienceContainer");

  if (experienceContainer) {
    let experienceHTML = "";

    // Duplicate data supaya marquee bisa looping tanpa putus
    const marqueeData = [...experienceData, ...experienceData];

    marqueeData.forEach(exp => {
      experienceHTML += `
      <div class="experience-item">
        <div>
          <img 
            src="${exp.logo}" 
            class="img-fluid w-75" 
            alt="${exp.company}"
          >
        </div>

        <div class="fs-5">
          ${exp.role}
        </div>

        <div class="fs-6 fw-light">
          ${exp.company} | ${exp.duration}
        </div>
      </div>
    `;
    });

    experienceContainer.innerHTML = experienceHTML;
  }

  // Render Projects Items & Filters
  const projectsContainer = document.getElementById("projectsContainer");
  const filterContainer = document.getElementById("filterContainer");

  if (projectsContainer) {
    // 1. Generate unique filter tags based on 'role'
    const allRoles = new Set();
    projectsData.forEach(project => {
      project.role.forEach(r => allRoles.add(r));
    });
    const filterTags = ["All", ...Array.from(allRoles)];

    // 2. Render Filters
    if (filterContainer) {
      filterContainer.innerHTML = filterTags.map(tag =>
        `<button class="btn btn-outline-dark filter-btn ${tag === 'All' ? 'active' : ''}" data-tag="${tag}">${tag}</button>`
      ).join("");

      // 3. Add Click Events to Filters
      const buttons = filterContainer.querySelectorAll(".filter-btn");
      buttons.forEach(btn => {
        btn.addEventListener("click", (e) => {
          buttons.forEach(b => b.classList.remove("active"));
          e.target.classList.add("active");
          renderProjects(e.target.getAttribute("data-tag"));
        });
      });
    }

    // 4. Render Projects Function

    // Role → badge color mapping
    const roleBadgeColor = {
      "UI/UX": "role-badge-purple",
      "Web Development": "role-badge-blue",
      "Digital Marketing": "role-badge-red"
    };

    // company 
    const companyLogoMap = {
      "4Ocean": "image/logo/company/4Ocean.png",
      "Bali Teak": "image/logo/company/Bali Teak.png",
      "Mission Pawsible Bali": "image/logo/company/Mission Pawsible.webp"
    }

    // Tool → logo image path mapping
    const toolLogoMap = {
      "Figma": "image/logo/tools/figma-color.svg",
      "Adobe XD": "image/logo/tools/adobe xd.png",
      "GitHub": "image/logo/tools/gitHub.png",
      "WordPress": "image/logo/tools/wordpress-color.svg",
      "Shopify": "image/logo/tools/Shopify.png",
      "Wix": "image/logo/tools/Wix.png",
      "Google Ads": "image/logo/tools/GoogleAds.png",
      "Google Analytic": "image/logo/tools/GoogleAnalytic.png",
      "Mailchimp": "image/logo/tools/Mailchimp.png",
      "Canva": "image/logo/tools/Canva.png",
      "React JS": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      "Next.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
      "Bootstrap": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
      "Laravel": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg",
      "Elementor": "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/elementor.svg",
      "Tailwindcss": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg"
    };

    function renderProjects(filterTag) {
      const filteredData = filterTag === "All"
        ? projectsData
        : projectsData.filter(project => project.role.includes(filterTag));

      let projectsHTML = "";
      filteredData.forEach(project => {
        // Role badges with per-role color
        const rolesHTML = project.role.map(r => {
          const colorClass = roleBadgeColor[r] || "role-badge-default";
          return `<span class="role-badge ${colorClass}">${r}</span>`;
        }).join("");

        const typesHTML = project.projectType.map(pt =>
          `<span class="badge bg-secondary me-1">${pt}</span>`
        ).join("");

        // Tools as logo icons (with text fallback)
        const toolsHTML = project.tools.map(tool => {
          const logo = toolLogoMap[tool];
          if (logo) {
            return `<span class="tool-icon-wrap" title="${tool}">
              <img src="${logo}" alt="${tool}" class="tool-icon-img">
            </span>`;
          }
          return `<span class="badge bg-dark me-1">${tool}</span>`;
        }).join("");

        // Render 2 detail images inside the card
        const imagesHTML = project.images.map(imgSrc =>
          `<img src="${imgSrc}" class="img-fluid w-50 p-1 rounded" alt="Detail Image" style="object-fit: cover; height: 80px;">`
        ).join("");

        projectsHTML += `
        <div class="col-md-6 col-lg-4">
        <a href="${project.projectURL}" class="text-decoration-none text-reset">
          <div class="card h-100 shadow-sm border-0 project-card rounded-4" style="">
            <!-- Thumbnail utama diambil dari gambar pertama -->
            <div class="p-3">
                <img 
                    src="${project.images[0]}" 
                    class="card-img-top rounded-4" 
                    alt="${project.projectTitle}" 
                    style="height: 220px; object-fit: cover;"
                >
            </div>
            <div class="card-body d-flex flex-column">
                <h5 class="card-title fw-semibold">${project.projectTitle}</h5>
              
              <p class="card-text text-muted small mb-3">${project.description}</p>
              

              <div class="mt-3">
                <div class="mb-2">
                  <span class="text-secondary small fw-bold">Impact:</span><br>
                  <div class="my-3">
                    <ul class="list-unstyled d-flex flex-column gap-2 mb-0 small">
                      ${project.impact.map(i => `
                        <li class="d-flex align-items-start gap-2">
                          
                          <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            width="1.25rem" 
                            height="1.25rem" 
                            viewBox="0 0 24 24"
                            class="flex-shrink-0"
                          >
                            <path d="M0 0h24v24H0z" fill="none" />
                            
                            <path 
                              fill="#268003" 
                              d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10s10-4.5 10-10S17.5 2 12 2m-2 15l-5-5l1.41-1.41L10 14.17l7.59-7.59L19 8z"
                            />
                          </svg>

                          <span>${i}</span>

                        </li>
                      `).join('')}
                    </ul>
                  </div>
                </div>
                </div>
                </div>
                <div class="d-flex flex-column gap-2 card-footer mt-auto pt-3 pb-3">
                  <div class="mb-2 d-flex flex-wrap gap-2">
                    ${rolesHTML} 
                  </div>
                  <div class="d-flex justify-content-between gap-4">
                    <!-- TOOLS -->
                    <div class="d-flex flex-column gap-2">
                      <span class="text-secondary small fw-bold">Core Tools:</span>
                      <div class="d-flex flex-wrap gap-2">
                        ${toolsHTML}
                      </div>
                    </div>
                    <!-- COMPANY -->
                    <div class="d-flex flex-column gap-2">
                      <span class="text-secondary small fw-bold">Company:</span>

                      <a href="${project.companyURL}" target="_blank">
                        <img 
                          src="${companyLogoMap[project.company]}" 
                          alt="${project.company}"
                          class="company-logo"
                        >
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </a>
        </div>
        `;
      });

      projectsContainer.innerHTML = projectsHTML;
    }

    // Initial render for all projects
    renderProjects("All");
  }
});

function renderPortfolioFooter() {
  const footerPortfolio = document.getElementById("portfolioFooter");

  if (!footerPortfolio) return;

  footerPortfolio.innerHTML = `
            <div class="container  contact-inner rounded-4">

        <!-- Animated blobs in background -->
        <div class="contact-blob blob-1"></div>
        <div class="contact-blob blob-2"></div>

        <div class="contact-content">
        <img src="../image/face.png" alt="" style="width:5rem; height:5rem; object-fit:contain;">
          <p class="contact-eyebrow">Thank you for reading this far</p>
          
          <h2 class="contact-headline">Ready to Turn Ideas<br>Into Reality Together.</h2>
          <p class="contact-subtext">
            Whether you have a project in mind or just want to say hello —<br>
            I'd love to hear from you.
          </p>

          <!-- Social Links -->
          <div class="contact-links">
            <a href="https://www.linkedin.com/in/risarahayu" target="_blank" class="contact-link" aria-label="LinkedIn">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path
                  d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
              </svg>
              <span>LinkedIn</span>
            </a>

            <a href="mailto:rrisa329@gmail.com" class="contact-link" aria-label="Email">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path
                  d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z" />
              </svg>
              <span>rrisa329@gmail.com</span>
            </a>

            <a href="https://wa.me/6289685788761" target="_blank" class="contact-link" aria-label="WhatsApp">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path
                  d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.38 1.26 4.8L2.05 22l5.42-1.42c1.37.73 2.93 1.14 4.57 1.14 5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2m4.49 13.39c-.2.57-1.18 1.09-1.63 1.16-.41.06-.93.09-1.5-.09-.35-.12-.79-.27-1.36-.53-2.37-1.02-3.92-3.41-4.04-3.57-.12-.16-.96-1.27-.96-2.43 0-1.15.61-1.72.83-1.96.22-.24.48-.3.64-.3l.46.01c.15 0 .35-.06.55.42.2.48.68 1.66.74 1.78.06.12.1.26.02.42-.08.16-.12.26-.24.4-.12.14-.25.31-.36.42-.12.12-.24.25-.1.49.14.24.62.97 1.33 1.57.91.81 1.68 1.06 1.92 1.18.24.12.38.1.52-.06.14-.16.6-.7.76-.94.16-.24.32-.2.54-.12.22.08 1.4.66 1.64.78.24.12.4.18.46.28.06.1.06.57-.14 1.14z" />
              </svg>
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    `;
}

renderPortfolioFooter();

function renderBreadcrumb() {
  const breadcrumb = document.getElementById("breadcrumb");

  if (!breadcrumb) return;

  // Make the wrapper sticky so it actually sticks to the viewport
  breadcrumb.classList.add("sticky-top");
  breadcrumb.style.zIndex = "1020";

  const currentPage = window.location.pathname
    .split("/")
    .pop()
    .replace(".html", "");

  const pageNames = {
    "BaliTeak": "Bali Teak - Redesign Website",
    "4ocean": "4ocean - Website Redesign",
    "mission-pawsible": "Mission Pawsible"
  };

  const currentPageName = pageNames[currentPage] || currentPage;

  breadcrumb.innerHTML = `
        <nav 
            style="--bs-breadcrumb-divider: '>';" 
            aria-label="breadcrumb"
            class="breadcrumb-bg d-flex justify-content-between align-items-center container"
        >
            <div class="d-flex align-items-center gap-3">
                <button class="btn btn-outline-light d-flex align-items-center justify-content-center p-2" type="button" data-bs-toggle="offcanvas" data-bs-target="#projectSidebar" aria-controls="projectSidebar" style="border-radius: 8px;">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                  </svg>
                </button>
                <a class="fw-bold m-0 fs-4 text-decoration-none" href="../index.html">
                    Risa's Project
                </a>
            </div>

            <ol class="breadcrumb text-white m-0">
                <li class="breadcrumb-item">
                    <a href="../index.html">Home</a>
                </li>

                <li class="breadcrumb-item">
                    <a href="../index.html#portfolios">Portfolios</a>
                </li>

                <li class="breadcrumb-item active" aria-current="page">
                    ${currentPageName}
                </li>
            </ol>
        </nav>

        <!-- Offcanvas Sidebar -->
        <div class="offcanvas offcanvas-start" tabindex="-1" id="projectSidebar" aria-labelledby="projectSidebarLabel" style="background-color: var(--white); color: var(--text-primary);">
          <div class="offcanvas-header border-bottom">
            <h5 class="offcanvas-title fw-bold" id="projectSidebarLabel">Project Navigation</h5>
            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div class="offcanvas-body">
            <ul class="nav flex-column gap-2" id="sidebarNavLinks">
              <!-- Links will be injected here -->
            </ul>
          </div>
        </div>
    `;

  // Populate Sidebar Links dynamically
  setTimeout(() => {
    const sidebarNav = document.getElementById("sidebarNavLinks");
    if (sidebarNav) {
      // Find all sections that have an ID in the main content
      const sections = document.querySelectorAll("main section[id]");

      let linksHTML = "";
      sections.forEach(section => {
        // Try to find a heading inside the section to use as link text
        const heading = section.querySelector("h1, h2, h3, h4, h5, h6");
        if (heading && section.id && section.id !== "portfolioFooter") {
          const title = heading.innerText.trim();
          linksHTML += `
            <li class="nav-item">
              <a class="nav-link text-dark rounded px-3 py-2 sidebar-link" 
                 style="background-color: rgba(0,0,0,0.05); transition: all 0.2s ease; cursor: pointer;" 
                 onclick="
                   document.querySelector('#projectSidebar .btn-close').click();
                   setTimeout(() => {
                     const target = document.getElementById('${section.id}');
                     if(target) {
                       const y = target.getBoundingClientRect().top + window.scrollY - 100;
                       window.scrollTo({top: y, behavior: 'smooth'});
                     }
                   }, 350);
                 "
                 onmouseover="this.style.backgroundColor='rgba(0,0,0,0.1)'" 
                 onmouseout="this.style.backgroundColor='rgba(0,0,0,0.05)'">${title}</a>
            </li>
          `;
        }
      });

      if (linksHTML === "") {
        linksHTML = `<p class="text-muted small">No sections found. Please add IDs to your sections.</p>`;
      }
      sidebarNav.innerHTML = linksHTML;
    }
  }, 100);
}
document.querySelectorAll(".image-viewer").forEach((viewer) => {

  const image = viewer.querySelector(".zoomable-image");
  const modal = viewer.closest(".modal");

  if (!image || !modal) return;

  const zoomIn = modal.querySelector(".zoom-in-btn");
  const zoomOut = modal.querySelector(".zoom-out-btn");
  const zoomReset = modal.querySelector(".zoom-reset-btn");

  if (!zoomIn || !zoomOut || !zoomReset) return;

  let scale = 1;
  const baseWidth = 1000;

  function updateZoom() {
    const newWidth = baseWidth * scale;

    image.style.width = `${newWidth}px`;

    zoomReset.textContent = `${Math.round(scale * 100)}%`;
  }

  zoomIn.addEventListener("click", () => {
    scale += 0.25;

    if (scale > 5) {
      scale = 5;
    }

    updateZoom();
  });

  zoomOut.addEventListener("click", () => {
    scale -= 0.25;

    if (scale < 0.5) {
      scale = 0.5;
    }

    updateZoom();
  });

  viewer.addEventListener("wheel", (event) => {

    event.preventDefault();

    if (event.deltaY < 0) {
      scale += 0.1;
    } else {
      scale -= 0.1;
    }

    scale = Math.min(Math.max(scale, 0.5), 5);

    updateZoom();

  }, { passive: false });

  let isDragging = false;
  let startX;
  let startY;
  let scrollLeft;
  let scrollTop;

  viewer.addEventListener("mousedown", (e) => {

    isDragging = true;

    startX = e.pageX - viewer.offsetLeft;
    startY = e.pageY - viewer.offsetTop;

    scrollLeft = viewer.scrollLeft;
    scrollTop = viewer.scrollTop;

  });

  viewer.addEventListener("mouseleave", () => {
    isDragging = false;
  });

  viewer.addEventListener("mouseup", () => {
    isDragging = false;
  });

  viewer.addEventListener("mousemove", (e) => {

    if (!isDragging) return;

    e.preventDefault();

    const x = e.pageX - viewer.offsetLeft;
    const y = e.pageY - viewer.offsetTop;

    const walkX = x - startX;
    const walkY = y - startY;

    viewer.scrollLeft = scrollLeft - walkX;
    viewer.scrollTop = scrollTop - walkY;

  });

});
renderBreadcrumb();

// Page loader — waits for every image on the page to finish loading
// before revealing the content (index page only).
const pageLoader = document.getElementById("pageLoader");

if (pageLoader) {

  document.body.classList.add("is-loading");

  function hidePageLoader() {
    pageLoader.classList.add("is-hidden");
    document.body.classList.remove("is-loading");
    setTimeout(() => pageLoader.remove(), 600);
  }

  function waitForImages() {
    const images = Array.from(document.images);

    return Promise.all(
      images.map((img) => {
        if (img.complete) return Promise.resolve();

        return new Promise((resolve) => {
          img.addEventListener("load", resolve, { once: true });
          img.addEventListener("error", resolve, { once: true });
        });
      })
    );
  }

  const windowLoaded = new Promise((resolve) => {
    if (document.readyState === "complete") {
      resolve();
    } else {
      window.addEventListener("load", resolve, { once: true });
    }
  });

  // Safety net in case a resource stalls — never block the page forever.
  const safetyTimeout = new Promise((resolve) => setTimeout(resolve, 6000));

  Promise.race([
    windowLoaded.then(waitForImages),
    safetyTimeout
  ]).then(hidePageLoader);

}
