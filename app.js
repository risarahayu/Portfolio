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
});
