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
    description: "A data-driven web dashboard and mobile app designed for investors to track and showcase 4ocean's clean-up impact with transparent daily results.",
    impact: "Increased investor engagement and transparency by providing real-time data on environmental clean-up efforts.",
    role: ["UI/UX", "Web Development"],
    projectType: ["Platform Building"],
    tools: ["Figma", "React JS", "Node.js"],
    images: [
      "image/portfolio img/UIUX/Impact Portal Dashboard.png",
      "image/portfolio img/UIUX/Impact Portal Dashboard 2.png"
    ]
  },
  {
    id: 2,
    projectTitle: "Bali Teak Company Website",
    description: "A digital showcase for a local furniture company looking to build an online presence without fully implementing e-commerce functionality.",
    impact: "Boosted online visibility and customer inquiries by 40% within the first three months of launch.",
    role: ["UI/UX", "Digital Marketing"],
    projectType: ["Redesign", "Platform Building"],
    tools: ["Figma", "WordPress", "Elementor", "Google Ads"],
    images: [
      "image/portfolio img/UIUX/BalI Teak Company Website.png",
      "image/portfolio img/UIUX/BalI Teak Company Website 2.png"
    ]
  },
  {
    id: 3,
    projectTitle: "Stray Dog Adoption Website - MissionPawsible Bali",
    description: "A website dedicated to rescuing stray dogs and connecting them with loving adopters, developed in collaboration with MissionPawsible Bali.",
    impact: "Streamlined the adoption process and increased rescue visibility for stray dogs.",
    role: ["UI/UX", "Web Development"],
    projectType: ["Platform Building"],
    tools: ["Figma", "Bootstrap", "Laravel"],
    images: [
      "image/portfolio img/UIUX/Dog Adoption Website.png",
      "image/portfolio img/UIUX/Dog Adoption Website 2.png"
    ]
  }
];

document.addEventListener("DOMContentLoaded", () => {
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
    function renderProjects(filterTag) {
      const filteredData = filterTag === "All"
        ? projectsData
        : projectsData.filter(project => project.role.includes(filterTag));

      let projectsHTML = "";
      filteredData.forEach(project => {
        const rolesHTML = project.role.map(r => `<span class="badge bg-primary me-1">${r}</span>`).join("");
        const typesHTML = project.projectType.map(pt => `<span class="badge bg-secondary me-1">${pt}</span>`).join("");
        const toolsHTML = project.tools.map(tool => `<span class="badge bg-dark me-1">${tool}</span>`).join("");

        // Render 2 detail images inside the card
        const imagesHTML = project.images.map(imgSrc => `<img src="${imgSrc}" class="img-fluid w-50 p-1 rounded" alt="Detail Image" style="object-fit: cover; height: 80px;">`).join("");

        projectsHTML += `
        <div class="col-md-6 col-lg-4">
          <div class="card h-100 shadow-sm border-0 project-card">
            <!-- Thumbnail utama diambil dari gambar pertama -->
            <img src="${project.images[0]}" class="card-img-top" alt="${project.projectTitle}" style="height: 220px; object-fit: cover;">
            
            <div class="card-body d-flex flex-column">
              <h5 class="card-title fw-bold">${project.projectTitle}</h5>
              <p class="card-text text-muted small mb-3">${project.description}</p>
              
              <div class="mt-auto">
                <div class="mb-2">
                  <span class="text-secondary small fw-bold">Impact:</span><br>
                  <span class="small">${project.impact}</span>
                </div>
                <div class="mb-2">
                  ${rolesHTML} ${typesHTML}
                </div>
                <div class="mb-3">
                  ${toolsHTML}
                </div>
                <div class="d-flex justify-content-start border-top pt-2">
                  ${imagesHTML}
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
