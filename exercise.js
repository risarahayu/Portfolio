export const galleryData = [
  { title: "Gallery", file: "/exercise/Gallery.png", type: "png" },
  { title: "Slide 16:9", file: "/exercise/Slide 16_9 - 3 (1).png", type: "png" },
  { title: "Project Image 1", file: "/exercise/original-0a2caec86c46efd03d36ccd653a87027.webp", type: "webp" },
  { title: "Project Image 2", file: "/exercise/original-4b6a5ce8f607e40bd31292829ff35904.webp", type: "webp" },
  { title: "Project Image 3", file: "/exercise/original-4d36391788814a88816dc1e76210b1b6.webp", type: "webp" },
  { title: "Project Image 4", file: "/exercise/original-4fccf5de7fb9a3d8f1220a297f29fed9.webp", type: "webp" },
  { title: "Project Image 5", file: "/exercise/original-9ac663639b25c61aa9f9f51dc004ddad.webp", type: "webp" },
  { title: "Project Image 6", file: "/exercise/original-87ecb912dc3b9281e655367189f19f5f.webp", type: "webp" },
  { title: "Project Image 7", file: "/exercise/original-092aa9641a2c8b0112d7baf138c9f6d2.webp", type: "webp" },
  { title: "Project Image 8", file: "/exercise/original-904ce801489f1a2b3aa85bcf46f60a38.webp", type: "webp" },
  { title: "Project Image 9", file: "/exercise/original-566f48155b5dd18d53b541bfaa74ecd5.webp", type: "webp" },
  { title: "Project Image 10", file: "/exercise/original-904ce801489f1a2b3aa85bcf46f60a38.webp", type: "webp" },
  { title: "Project Image 11", file: "/exercise/original-a8db4e486aeca3eb67b5f627717964d6.webp", type: "webp" },
  { title: "Project Image 12", file: "/exercise/original-abe12e8789404610354de0ff10b4858d.webp", type: "webp" },
  { title: "Project Image 13", file: "/exercise/original-b6a3e4eadb8e354a7f584d8a33f2aaea.webp", type: "webp" },
  { title: "Project Image 14", file: "/exercise/original-cfe17b6d2a4b4f06523c02281ee85015.webp", type: "webp" },
  { title: "Project Image 15", file: "/exercise/original-d02ca24609a67476af889b53c27533aa.webp", type: "webp" },
  { title: "Project Image 16", file: "/exercise/original-d48b1d812cfd6d074bfa5159d96a10c7.webp", type: "webp" },
  { title: "Project Image 17", file: "/exercise/original-e09c75419d7068beece0f071c5300577.webp", type: "webp" },
  { title: "Project Image 18", file: "/exercise/original-f4093581fad58a211a52000d92ddf981.webp", type: "webp" },
  { title: "Project Image 19", file: "/exercise/original-fcea8ecef8cbd25c938937bfd66420a8.webp", type: "webp" },
  { title: "Project Image 20", file: "/exercise/original-fdd434673abac008645cffd3b9a600aa.webp", type: "webp" }
];

export function loadGallery() {
  const tracks = document.querySelectorAll(".track");

  if (!tracks.length) {
    console.error("Track tidak ditemukan. Cek class .track di HTML");
    return;
  }

  // Bagi data rata ke jumlah kolom
  const splitData = (data, parts) => {
    const result = Array.from({ length: parts }, () => []);

    data.forEach((item, i) => {
      result[i % parts].push(item);
    });

    return result;
  };

  const split = splitData(galleryData, tracks.length);

  split.forEach((colData, index) => {
    const track = tracks[index];
    if (!track) return;

    // kosongkan track dulu
    track.innerHTML = "";

    // duplicate supaya loop smooth
    const loopData = [...colData, ...colData];

    loopData.forEach((item) => {
      const card = document.createElement("div");
      card.className = "card-custom-dribble";

      const img = document.createElement("img");
      img.src = `./image/${item.file}`;
      img.alt = item.title;
      img.loading = "lazy";

      card.appendChild(img);
      track.appendChild(card);
    });
  });
}