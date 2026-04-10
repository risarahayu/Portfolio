

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
    badge:["Design", "Figma", "WordPress", "Elementor"],
    top: true
  },
  {
    title: "Bali Teak Company Page",
    link: "https://codepen.io/jh3y/pen/abzeaWJ",
    src: "image/portfolio img/UIUX/BalI Teak Company Website.png",
    description: "This website was built for a furniture company that chose not to fully implement e-commerce.",
    category: "UI/UX",
    badge:["Semi E-Commerce", "Figma"],
    top: true
  },
  {
    title: "Donor Dashboard Landing Page",
    link: "https://codepen.io/jh3y/pen/abzeaWJ",
    src: "image/portfolio img/UIUX/The Donor Dashoard Landing Page.png",
    description: "The Donor Dashboard Landing Page was designed to provide donors with a clear and engaging overview of their impact, featuring key metrics, project highlights, and a user-friendly interface.",
    category: "UI/UX",
    badge:["Design", "Figma"],

  },
  {
    title: "Stray Dog Adoption Website",
    link: "https://codepen.io/jh3y/pen/abzeaWJ",
    src: "image/portfolio img/UIUX/Dog Adoption Website.png",
    description: "A website dedicated to rescuing stray dogs and connecting them with loving adopters.",
    category: "UI/UX",
    badge:["Design", "Figma", "Bootsratp Frontend", "Laravel Backend"],
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
        icon: "bi-bar-chart",
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
        icon: "bi-bar-chart",
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
        icon: "bi-bar-chart",
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
        <p class="fs-5 fw-semibold mb-0">${exp.company}</p>

        <div class="d-flex align-items-center gap-2 mb-1">
          <i class="bi bi-geo-alt"></i>
          
        </div>

        <p class="fs-6 mb-1">${exp.title}</p>

        <p class="fs-6 text-muted mb-2">${exp.duration}</p>

        <div class="d-flex flex-column gap-2 text-start mt-2 flex-grow-1">
          ${impacts}
        </div>
      </div>

    </div>
  `;
});

// logo
const logos = [
  { src: "image/logo/tools/html.png", alt: "Logo 1" },
  { src: "image/logo/tools/css.png", alt: "Logo 2" },
  { src: "image/logo/tools/js.png", alt: "Logo 3" },
  { src: "image/logo/tools/figma.png", alt: "Logo 4" },
  { src: "image/logo/tools/bootstrap.png", alt: "Logo 5" },
  { src: "image/logo/tools/laravel.png", alt: "Logo 5" },
  { src: "image/logo/tools/adobe xd.png", alt: "Logo 6" },
];

const carouselInner = document.getElementById('carousel-inner');
console.log(carouselInner);
const logosPerSlide = 3;

for (let i = 0; i < logos.length; i += logosPerSlide){
  const slideLogos = logos.slice(i, i + logosPerSlide);


  const slideDiv = document.createElement('div');
  slideDiv.classList.add("carousel-item");
  if(i===0) slideDiv.classList.add("active");

  const logoContainer = document.createElement('div');
  logoContainer.classList.add("d-flex", "justify-content-center", "gap-3");

  slideLogos.forEach(logo => {
    const img = document.createElement('img');
    img.src = logo.src;
    img.alt = logo.alt;
    img.style.width = "100px";
    img.style.objectFit = "cover";
    logoContainer.appendChild(img);
  } );

  slideDiv.appendChild(logoContainer);
  carouselInner.appendChild(slideDiv);
} 

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