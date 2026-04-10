

  gsap.to(".container-bg-2", {
    backgroundPosition: "center 50px", // Bergerak vertikal
    repeat: -1, // Ulang terus
    yoyo: true, // Bergerak naik-turun
    duration: 5, // Durasi animasi
    ease: "power1.inOut"
  });

  gsap.to(".container-bg", {
    backgroundPosition: "center 50px", // Bergerak vertikal
    repeat: -1, // Ulang terus
    yoyo: true, // Bergerak naik-turun
    duration: 2, // Durasi animasi
    ease: "power1.inOut"
  });

  gsap.to(".container-bg-3", {
    backgroundPosition: "center 50px", // Bergerak vertikal
    repeat: -1, // Ulang terus
    yoyo: true, // Bergerak naik-turun
    duration: 5, // Durasi animasi
    ease: "power1.inOut"
  });

  gsap.to(".img-computer", {
    backgroundPosition: "center 50px", // Bergerak vertikal
    repeat: -1, // Ulang terus
    yoyo: true, // Bergerak naik-turun
    duration: 5, // Durasi animasi
    ease: "power1.inOut"
  });

  // social media
  const socialLinks = [
  {
    label: "GitHub",
    url: "https://github.com/username",
    icon: "fa-brands fa-github"
  },
  {
    label: "Dribbble",
    url: "#",
    icon: "fa-brands fa-dribbble"
  },
  {
    label: "Email",
    url: "mailto:your@email.com",
    icon: "fa-solid fa-envelope"
  },
  {
    label: "LinkedIn",
    url: "https://linkedin.com/in/username",
    icon: "fa-brands fa-linkedin-in"
  }
];

// active state
document.querySelectorAll(".social-icons li a").forEach(link => {
  link.addEventListener("click", () => {
    link.classList.add("clicked");
  });
});

// show

const containers = document.querySelectorAll(".social-icons");

containers.forEach((container) => {
  socialLinks.forEach((social) => {
    container.innerHTML += `
      <li data-label="${social.label}">
        <a href="${social.url}" target="_blank" aria-label="${social.label}">
          <i class="${social.icon}"></i>
        </a>
      </li>
    `;
  });
});

  // slider

const ITEMS = [
  {
    title: 'Impact Portal Dashboard',
    link: "https://codepen.io/jh3y/pen/LYNZwGm",
    src: "image/portfolio img/UIUX/Impact Portal Dashboard.png",
    description: "Impact Portal Dashboard showcases 4ocean’s clean-up impact for investors, ensuring transparency through a data-driven web dashboard and a mobile app used by field crews to report daily results.",
    category: "UI/UX",
    badge:["UI/UX Design", "Figma","Dashboard"],
    top: true
  },
  {
    title: "Bali Teak Company Page",
    link: "https://codepen.io/jh3y/pen/abzeaWJ",
    src: "image/portfolio img/UIUX/BalI Teak Company Website.png",
    description: "This website was built for a furniture company that chose not to fully implement e-commerce.",
    category: "UI/UX",
    badge:["UI/UX Design and Web Development", "Semi E-Commerce", "Figma", "Wordpress", "Elementor"],
    top: true
  },
  {
    title: "Donor Dashboard Landing Page",
    link: "https://codepen.io/jh3y/pen/abzeaWJ",
    src: "image/portfolio img/UIUX/The Donor Dashoard Landing Page.png",
    description: "The Donor Dashboard Landing Page was designed to provide donors with a clear and engaging overview of their impact, featuring key metrics, project highlights, and a user-friendly interface.",
    category: "UI/UX",
    badge:["UI/UX Design", "Figma"],

  },
  {
    title: "Stray Dog Adoption Website",
    link: "https://codepen.io/jh3y/pen/abzeaWJ",
    src: "image/portfolio img/UIUX/Dog Adoption Website.png",
    description: "A website dedicated to rescuing stray dogs and connecting them with loving adopters.",
    category: "UI/UX",
    badge:["UI/UX Design and Web Development",  "Figma", "Bootsratp Frontend", "Laravel Backend"],
    top: true
  },
  {
    title: "AidHub Foundation Landing Page",
    link: "https://codepen.io/jh3y/pen/abzeaWJ",
    src: "image/portfolio img/UIUX/AidHub Landing Page.png",
    description: "A landing page website developed to represent Aidhub Foundation, highlighting its mission, programs, and impact in a clear and trustworthy manner.",
    category: "UI/UX",
    badge:["Design", "Adobe XD"]
  },
   {
    title: "Beyond Food Program Course Website",
    link: "https://codepen.io/jh3y/pen/abzeaWJ",
    src: "image/portfolio img/UIUX/Beyond Food Program Website.png",
    description: "A landing page website developed to represent Aidhub Foundation, highlighting its mission, programs, and impact in a clear and trustworthy manner.",
    category: "UI/UX",
    badge:["Design", "Figma"]
  },
   {
    title: "Presence and Payroll Website",
    link: "https://codepen.io/jh3y/pen/abzeaWJ",
    src: "image/portfolio img/UIUX/Lesku Payroll Website.png",
    description: "A landing page website developed to represent Aidhub Foundation, highlighting its mission, programs, and impact in a clear and trustworthy manner.",
    category: "UI/UX",
    badge:["Design", "Adobe XD"]
  },
  {
    title: "Mission Empowerment Platform",
    link: "https://codepen.io/jh3y/pen/abzeaWJ",
    src: "image/portfolio img/UIUX/MEP Website.png",
    description: "A landing page website developed to represent Aidhub Foundation, highlighting its mission, programs, and impact in a clear and trustworthy manner.",
    category: "UI/UX",
    badge:["Design", "Adobe XD"],
    top: true
  }
];

// top list

const contentTop = document.getElementById('contentTop');
const topItems = ITEMS.filter(item => item.top);
topItems.forEach(item => {
  const card = document.createElement('div');
  card.className = 'card editorial-card text-start';
  const badgeHTML = item.badge ? item.badge.map(b => `<span class="badge red-wine-color-bg">${b}</span>`).join(' ') : '';
  card.innerHTML = `
    <img src="${item.src}" class="card-img-top" alt="">
    <div class="card-body d-flex flex-column">
      <h5 class="card-title" style="color: bisque;">${item.title}</h5>
      <p class="card-text fs-6">${item.description}</p>
      <span class="mt-auto">${badgeHTML}</span>
    </div>
  `;
  contentTop.appendChild(card);
});

// all

// const container = document.getElementById('cardContainer');
// // ambil semua button filter
// const buttons = document.querySelectorAll('.filter-buttons button');
// const DEFAULT_CATEGORY = 'UI/UX';
// renderCards(DEFAULT_CATEGORY);

// // set active button untuk kategori default dulu
// buttons.forEach(btn => {
//   if (btn.dataset.category === DEFAULT_CATEGORY) {
//     btn.classList.add('active');
//   }
// });

// // saat setiap button  di klik
// buttons.forEach(button => {
//   button.addEventListener('click', () => {
//     buttons.forEach(btn => btn.classList.remove('active'));
//     button.classList.add('active');   

// // ambil kategori dari data attribute button
//       const category  = button.dataset.category;
//       renderCards(category);
//   });
// });

// // transfer kategorynya ke fungsi renderCards untuk filter dan tampilkan sesuai kategori

// function renderCards(category) {
//   container.innerHTML = '';

//   const filteredItems = category === 'All' ? ITEMS : ITEMS.filter(item => item.category === category);
//   filteredItems.forEach(item => {
//     const card = document.createElement('div');
//     card.className = 'col-12 col-md-6 col-lg-4';
//     const badgeHTML = item.badge ? item.badge.map(b => `<span class="badge red-wine-color-bg">${b}</span>`).join(' ') : '';
//     card.innerHTML = `
    
//         <div class="card text-start" style="min-height: 500px;">
//           <img src="${item.src}" class="card-img-top" alt="...">
//           <div class="card-body d-flex flex-column">
//             <h5 class="card-title">${item.title}</h5>
//             <p class="card-text">${item.description}</p>
//             <span class="mt-auto">${badgeHTML}</span>
//           </div>
//         </div>

//     `;

//     container.appendChild(card);
//   });
// }

// const navItems = document.querySelectorAll('.ccs-pillItem');

// navItems.forEach(item => {
//   item.addEventListener('click', () => {
//     navItems.forEach(i => i.classList.remove('is-active'));
//     item.classList.add('is-active');
//   });
// });


// Experience

const experiences = [
  {
    title: "UI/UX Designer",
    logo: "image/logo/experience/ah.svg",
    company: "AidHub Foundation",
    duration: "2021 - 2023",
    location: "Bali, Indonesia",
    impact: [
      {
        // icon: "bi-bar-chart",
        text: "Collaborated with a team of 22 developers to design and build the Mission Empowerment Platform, ensuring a fully responsive experience across desktop and mobile devices."
      }
    ]
  },
  {
    title: "UI/UX Designer",
    logo: "image/logo/experience/konverto.png",
    company: "PT, Konverto IT Consultant",
    duration: "2023-2024",
    location: "Bali, Indonesia",
    impact: [
      {
        // icon: "bi-bar-chart",
        text: "Redesigned and developed an online course platform using Kajabi CMS while supporting website maintenance and social media optimization."
      }
    ]
  },
  {
    title: "UI/UX Designer",
    logo: "image/logo/experience/1zero.svg",
    company: "1zero IT Consultant",
    duration: "2024 - present",
    location: "Bali, Indonesia",
    impact: [
      {
        // icon: "bi-bar-chart",
        text: "Designed user interfaces for multiple client projects, translating business requirements into responsive and user-centered digital experiences."
      }
    ]
  }
];

const ExperienceContainer = document.getElementById("experienceContainer");
console.log(ExperienceContainer);

experiences.forEach(exp => {

  const impacts = exp.impact.map(item => `
    <div class="d-flex bg-light p-3 rounded-4 gap-2 align-items-start flex-grow-1">
      <i class="bi ${item.icon}"></i>
      <p class="fs-6 mb-0">${item.text}</p>
    </div>
  `).join("");

  ExperienceContainer.innerHTML += `
    <div class="col-md-4 ">
      <div class="h-100 w-100 d-flex border-1 border rounded-4 flex-column align-items-center text-center">
        <div class="d-flex align-items-center gap-3 mb-2">
          <div style="width:60px;height:60px;display:flex;justify-content:center;">
            <img src="${exp.logo}" style="max-width:100%;max-height:100%;object-fit:contain;">
          </div>
        </div>
        <p class="fs-6 fs-md-5 fw-semibold mb-0">${exp.company}</p>

   

        <p class="fs-6 mb-1">${exp.title}</p>

        <p class="fs-6 text-muted mb-2">${exp.duration}</p>

        <div class="d-flex flex-column gap-2 text-start mt-2 flex-grow-1">
          ${impacts}
        </div>
      </div>

    </div>
  `;
});


// nav
document.addEventListener("DOMContentLoaded", () => {
  // Hanya nav links di dalam header
  const navLinks = document.querySelectorAll("header .ccs-pillItem");

  // Target semua section di body
  const sections = document.querySelectorAll("body section");

  const observerOptions = {
  root: null,
  rootMargin: "0px 0px -80% 0px", // trigger begitu section masuk dari atas
  threshold: 0,
};

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const id = entry.target.getAttribute("id");
      const navLink = document.querySelector(`header .ccs-pillItem[href="#${id}"]`);
      if (entry.isIntersecting && navLink) {
        navLinks.forEach((link) => link.classList.remove("is-active"));
        navLink.classList.add("is-active");
      }
    });
  }, observerOptions);

  sections.forEach((section) => observer.observe(section));

  // Smooth scroll
  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute("href"));
      if (target) target.scrollIntoView({ behavior: "smooth" });
    });
  });

  console.log("Nav links:", navLinks.length, "Sections:", sections.length);
});



// Skill
const skills = [
  {
    title: "Design Thinking",
    category: "UI/UX Designer"
  },
  {
    title: "User Research",
    category: "UI/UX Designer"
  },
  {
    title: "Responsive Wireframing",
    category: "UI/UX Designer"
  },
  {
    title: "Prototyping",
    category: "UI/UX Designer"
  },
  {
    title: "Usability Testing",
    category: "UI/UX Designer"
  },
  {
    title: "HTML",
    category: "Web Developer"
  },
  {
    title: "CSS",
    category: "Web Developer"
  },
  {
    title: "Laravel",
    category: "Web Developer"
  },
  {
    title: "Bootsrap / Tailwind",
    category: "Web Developer"
  },
  {
    title: "SEO",
    category: "Digital Marketing"
  },
  {
    title: "Social Media Management",
    category: "Digital Marketing"
  },
  {
    title: "CRM",
    category: "Digital Marketing"
  },
  {
    title: "Ads",
    category: "Digital Marketing"
  },
]

const softwares = [
  {
    label: "Figma",
    src: "./image/logo/tools/figma.png", 
    alt: "Figma",
    category: "UI/UX Designer"
  },
  {
    label: "Adobe XD",
    src: "image/logo/tools/adobe xd.png", 
    alt: "Adobe XD",
    category: "UI/UX Designer"
  },
  {
    label: "Github",
    src: "image/logo/tools/gitHub.png", 
    alt: "Github",
    category: "Web Developer"
  },
  {
    label: "Wodpress",
    src: "image/logo/tools/wordpress.png", 
    alt: "Wodpress",
    category: "Web Developer"
  },
  {
    label: "Shopify",
    src: "image/logo/tools/Shopify.png", 
    alt: "Shopify",
    category: "Web Developer"
  },
  {
    label: "Wix",
    src: "image/logo/tools/Wix.png", 
    alt: "Wix",
    category: "Web Developer"
  },
  {
    label: "Google Ads",
    src: "image/logo/tools/GoogleAds.png", 
    alt: "Google Ads",
    category: "Digital Marketing"
  },
  {
    label: "Google Analytic",
    src: "image/logo/tools/GoogleAnalytic.png", 
    alt: "Google Analytic",
    category: "Digital Marketing"
  },
  // {
  //   label: "Google Search Console",
  //   src: "image/logo/tools/GoogleSearchConsole.png", 
  //   alt: "Google Search Console",
  //   category: "Digital Marketing"
  // },
  {
    label: "MailChimp",
    src: "image/logo/tools/Mailchimp.png", 
    alt: "MailChimp",
    category: "Digital Marketing"
  },
   {
    label: "Canva",
    src: "image/logo/tools/Canva.png", 
    alt: "Canva",
    category: "Digital Marketing"
  },
]

const UIUXhardSkill=document.getElementById("UIUXhardSkill");
const uiuxSkills = skills.filter(skill => skill.category === "UI/UX Designer");
uiuxSkills.forEach(skill=>{
  const li = document.createElement("li");
  li.textContent = skill.title;
  li.classList.add("fs-6", "fs-md-5");
  UIUXhardSkill.appendChild(li);
})

const UIUXsoftwareUsed=document.getElementById("UIUXsoftwareUsed");
const uiuxSoftwares= softwares.filter(software => software.category === "UI/UX Designer");

uiuxSoftwares.forEach(software=>{
  const img = document.createElement("img");
  img.src = software.src;
  img.alt = software.label;
  img.style.height = "30px";
  UIUXsoftwareUsed.appendChild(img);
})

const WebDevHardSkillEl = document.getElementById("WebDevHardSkill");
const WebDevSkills = skills.filter(skill=> skill.category === "Web Developer");

WebDevSkills.forEach(skill=>{
  const li = document.createElement("li");
  li.textContent= skill.title;
  li.classList.add("fs-6", "fs-md-5");
  WebDevHardSkillEl.appendChild(li);
})

const WebDevSoftwareUsedEl = document.getElementById("WebDevSoftwareUsed");
const WebDevSoftwares =  softwares.filter(software=>software.category==="Web Developer");
WebDevSoftwares.forEach(software=>{
  const img = document.createElement("img");
  img.src=software.src;
  img.alt=software.alt;
  img.style.height = "30px";
  WebDevSoftwareUsedEl.appendChild(img);
})

const DigMarHardSkill = document.getElementById("DigMarHardSkill");
const DigMarSkills = skills.filter(skill=> skill.category==="Digital Marketing");
DigMarSkills.forEach(skill=>{
  const li = document.createElement("li");
  li.textContent= skill.title;
  li.classList.add("fs-6", "fs-md-5");
  DigMarHardSkill.appendChild(li);
})

const DigMarSoftwareUsedEl = document.getElementById("DigMarSoftwareUsed");
const DigMarSoftwares =  softwares.filter(software=>software.category==="Digital Marketing");
DigMarSoftwares.forEach(software=>{
  const img = document.createElement("img");
  img.src=software.src;
  img.alt=software.alt;
  img.style.height = "30px";
  DigMarSoftwareUsedEl.appendChild(img);
})

// animation
let currentIndex = 0;
      const texts = ["Digital Marketer", "UI/UX Designer", "Web Developer"];
      const elements = ["#text1", "#text2", "#text3"];

      function changeText() {
        // Sembunyikan teks yang aktif
        const currentElement = document.querySelector(elements[currentIndex]);
        currentElement.style.display = "none";

        // Hapus class animasi agar dapat di-trigger kembali
        currentElement.classList.remove("animate__fadeInDown");

        // Pindah ke teks berikutnya
        currentIndex = (currentIndex + 1) % texts.length;

        // Tampilkan teks baru
        const nextElement = document.querySelector(elements[currentIndex]);
        nextElement.style.display = "block";

        // Tambahkan kembali class animasi
        nextElement.classList.add("animate__fadeInDown");
      }

      // Mulai rotasi teks setiap 2 detik
      setInterval(changeText, 2000);

      $(function () {
        var owl = $(".owl-carousel");
        owl.owlCarousel({
          items: 1,
          loop: true,
          margin: 10,
          autoplay: true,
          autoplayTimeout: 2000,
        });
        $(".play").on("click", function () {
          owl.trigger("play.owl.autoplay", [1000]);
        });
        $(".stop").on("click", function () {
          owl.trigger("stop.owl.autoplay");
        });
      });

      // mail
      document.getElementById("sendEmailBtn").addEventListener("click", function () {
        const email = document.querySelector('input[type="email"]').value;
        this.href = `mailto:${email}`;
      });