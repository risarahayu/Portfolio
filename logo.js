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
