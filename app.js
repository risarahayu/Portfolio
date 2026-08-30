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
    companyURL: "baliteak.ca",
    description: "A digital showcase for a local furniture company looking to build an online presence without fully implementing e-commerce functionality.",
    impact: ["Strengthened online visibility and brand presence.",
      "Improved customer engagement and inquiries.",
      "Created a clearer and more effective digital experience."],
    role: ["UI/UX", "Web Development"],
    projectType: ["Redesign", "Platform Building"],
    tools: ["Figma", "WordPress", "Elementor", "Google Ads"],
    images: [
      "image/portfolio img/UIUX/BalI Teak Company Website-mockup.jpg",
      "image/portfolio img/UIUX/BalI Teak Company Website 2.png"
    ]
  },
  {
    id: 3,
    projectTitle: "Stray Dog Adoption Website",
    company: "Mission Pawsible Bali",
    companyURL: "missionpawsible.org",
    description: "A website dedicated to rescuing stray dogs and connecting them with loving adopters, developed in collaboration with MissionPawsible Bali.",
    impact: ["Streamlined the adoption process for potential adopters.",
      "Increased visibility for stray dogs in need of adoption.",
      "Improved access to adoption information and opportunities."
    ],
    role: ["UI/UX", "Web Development"],
    projectType: ["Platform Building"],
    tools: ["Figma", "Bootstrap", "Laravel"],
    images: [
      "image/portfolio img/UIUX/Dog Adoption Website-mockup.jpg",
      "image/portfolio img/UIUX/Dog Adoption Website 2.png"
    ]
  }
];

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
                <article class="skill-card ${card.isMain ? 'main-skill' : ''}">
                  <div class="card-label">
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
      "4Ocean": "image/logo/company/4Ocean.webp",
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
          <div class="card h-100 shadow-sm border-0 project-card" style="border-radius: 20px;">
            <!-- Thumbnail utama diambil dari gambar pertama -->
            <img src="${project.images[0]}" class="card-img-top p-3" alt="${project.projectTitle}" style="height: 220px; object-fit: cover; border-radius: 36px;">
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
                      <span class="text-secondary small fw-bold">Tools:</span>
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
        </div>
        `;
      });

      projectsContainer.innerHTML = projectsHTML;
    }

    // Initial render for all projects
    renderProjects("All");
  }
});

