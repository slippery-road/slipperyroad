
const members = [
  {
    "name": "Maddalena Nardi",
    "role": "Voce principale • Chitarra ritmica",
    "description": "Frontwoman della band, voce principale e chitarra ritmica. Presenza forte, linee dirette e sound compatto.",
    "photo": "assets/maddalena.jpg"
  },
  {
    "name": "Federico Pinciaroli",
    "role": "Chitarra solista",
    "description": "Chitarra solista delle Slippery Road: riff taglienti, parti melodiche e spinta live.",
    "photo": "assets/slipperyroad.jpg"
  },
  {
    "name": "Anna Costantini",
    "role": "Basso • Cori",
    "description": "Basso e cori: groove, sostegno ritmico e impatto sul palco.",
    "photo": "assets/anna.jpg"
  },
  {
    "name": "Matilde Bussotto",
    "role": "Batteria",
    "description": "Motore della band: batteria energica, dinamica e precisa.",
    "photo": "assets/matilde.jpg"
  }
];
const shows = [
  {
    "date": "2026-07-12",
    "time": "21:30",
    "city": "Ancona",
    "venue": "Summer Rock Stage",
    "address": "Ancona, AN",
    "poster": "assets/tour/poster-ancona.jpg",
    "tickets": "#contact",
    "info": "Live set punk-rock con brani originali e cover riarrangiate."
  },
  {
    "date": "2026-08-03",
    "time": "22:00",
    "city": "Osimo",
    "venue": "Garage Fest",
    "address": "Osimo, AN",
    "poster": "assets/tour/poster-osimo.jpg",
    "tickets": "#contact",
    "info": "Festival estivo, apertura cancelli alle 19:00 e merch desk presente."
  },
  {
    "date": "2026-09-18",
    "time": "21:00",
    "city": "Senigallia",
    "venue": "Roadhouse Club",
    "address": "Senigallia, AN",
    "poster": "assets/tour/poster-senigallia.jpg",
    "tickets": "#contact",
    "info": "Club night ad alto volume con set completo e atmosfera elettrica."
  }
];
const merch = [
  {
    "name": "T-shirt ufficiale",
    "price": "€20",
    "image": "assets/merch/shirt.jpg",
    "description": "Maglietta nera ufficiale SLIPPERY ROAD con logo frontale."
  },
  {
    "name": "Cappello",
    "price": "€18",
    "image": "assets/merch/cap.jpg",
    "description": "Cappello nero con grafica della band, perfetto per live e backstage."
  },
  {
    "name": "Portachiavi",
    "price": "€8",
    "image": "assets/merch/keychain.jpg",
    "description": "Portachiavi rigido con grafica Slippery Road, piccolo e resistente."
  }
];
const mediaItems = [
  {
    "file": "assets/media/media-01.jpg",
    "caption": "Live crowd energy"
  },
  {
    "file": "assets/media/media-02.jpg",
    "caption": "Bass, lights and groove"
  },
  {
    "file": "assets/media/media-03.jpg",
    "caption": "Drums in the smoke"
  },
  {
    "file": "assets/media/media-04.jpg",
    "caption": "Night set under the lights"
  },
  {
    "file": "assets/media/media-05.jpg",
    "caption": "Backstage smiles"
  },
  {
    "file": "assets/media/media-06.jpg",
    "caption": "On stage with the crowd"
  },
  {
    "file": "assets/media/media-07.jpg",
    "caption": "Drum break in red"
  },
  {
    "file": "assets/media/media-08.jpg",
    "caption": "Live setup ready to play"
  },
  {
    "file": "assets/media/media-09.jpg",
    "caption": "Merch in the audience"
  },
  {
    "file": "assets/media/media-10.jpg",
    "caption": "Festival stage moment"
  },
  {
    "file": "assets/media/media-11.jpg",
    "caption": "Premier kit, live rhythm"
  },
  {
    "file": "assets/media/media-12.jpg",
    "caption": "Stage corner by night"
  },
  {
    "file": "assets/media/media-13.jpg",
    "caption": "Triangle lights installation"
  },
  {
    "file": "assets/media/media-14.jpg",
    "caption": "Audience after the set"
  },
  {
    "file": "assets/media/media-15.jpg",
    "caption": "Vocals and bass in motion"
  },
  {
    "file": "assets/media/media-16.jpg",
    "caption": "Open air live set"
  },
  {
    "file": "assets/media/media-17.jpg",
    "caption": "Band portrait outdoors"
  }
];

const monthFormatter = new Intl.DateTimeFormat("it-IT", { month: "short" });
const fullDateFormatter = new Intl.DateTimeFormat("it-IT", { weekday: "long", day: "numeric", month: "long", year: "numeric" });

const membersGrid = document.querySelector("#membersGrid");
const tourList = document.querySelector("#tourList");
const nextShow = document.querySelector("#nextShow");
const merchGrid = document.querySelector("#merchGrid");
const mediaGrid = document.querySelector("#mediaGrid");
const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");
const lightbox = document.querySelector("#lightbox");
const lightboxImg = document.querySelector("#lightboxImage");
const lightboxCaption = document.querySelector("#lightboxCaption");
const lightboxClose = document.querySelector("#lightboxClose");

function parseShowDate(show) {
  return new Date(`${show.date}T${show.time}:00`);
}

function getDateParts(show) {
  const date = parseShowDate(show);
  return {
    day: String(date.getDate()).padStart(2, "0"),
    month: monthFormatter.format(date).replace(".", ""),
    full: fullDateFormatter.format(date)
  };
}

function createCalendarFile(show) {
  const start = parseShowDate(show);
  const end = new Date(start.getTime() + 90 * 60 * 1000);
  const formatICSDate = (date) => date.toISOString().replace(/[-:]/g, "").split(".")[0] + "Z";
  const uid = `${show.date}-${show.city.toLowerCase().replace(/\s+/g, "-")}@slippery-road`;
  const ics = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//SLIPPERY ROAD//Tour Calendar//IT",
    "BEGIN:VEVENT",
    `UID:${uid}`,
    `DTSTAMP:${formatICSDate(new Date())}`,
    `DTSTART:${formatICSDate(start)}`,
    `DTEND:${formatICSDate(end)}`,
    `SUMMARY:SLIPPERY ROAD live - ${show.city}`,
    `LOCATION:${show.venue}, ${show.address}`,
    `DESCRIPTION:${show.info}`,
    "END:VEVENT",
    "END:VCALENDAR"
  ].join("\r\n");

  const blob = new Blob([ics], { type: "text/calendar;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `slippery-road-${show.city.toLowerCase()}-${show.date}.ics`;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}

function renderMembers() {
  membersGrid.innerHTML = members.map((member) => `
    <article class="member-card reveal">
      <div class="member-image-wrap">
        <img class="member-image" src="${member.photo}" alt="${member.name} - ${member.role}" loading="lazy" />
      </div>
      <div class="member-body">
        <span class="role">${member.role}</span>
        <h3>${member.name}</h3>
        <p>${member.description}</p>
      </div>
    </article>
  `).join("");
}

function renderShows() {
  const sortedShows = [...shows].sort((a, b) => parseShowDate(a) - parseShowDate(b));
  const upcoming = sortedShows.find((show) => parseShowDate(show) >= new Date()) || sortedShows[0];
  const nextParts = getDateParts(upcoming);

  nextShow.innerHTML = `
    <div class="next-show-date" aria-hidden="true">
      <strong>${nextParts.day}</strong>
      <span>${nextParts.month}</span>
    </div>
    <h3>${upcoming.city}</h3>
    <p><strong>${upcoming.venue}</strong><br>${nextParts.full} • ${upcoming.time}<br>${upcoming.info}</p>
    <div class="stack-buttons">
      <a class="button primary full" href="${upcoming.tickets}">Info booking</a>
      <button class="button ghost full next-calendar" type="button">Aggiungi al calendario</button>
    </div>
  `;
  const nextBtn = nextShow.querySelector('.next-calendar');
  if (nextBtn) nextBtn.addEventListener('click', () => createCalendarFile(upcoming));

  tourList.innerHTML = sortedShows.map((show, index) => {
    const parts = getDateParts(show);
    return `
      <article class="tour-item reveal" data-show-index="${index}">
        <div class="poster-frame">
          <img src="${show.poster}" alt="Locandina concerto SLIPPERY ROAD a ${show.city}" loading="lazy" />
        </div>
        <div class="tour-content">
          <div class="tour-date" aria-label="${parts.full}">
            <strong>${parts.day}</strong>
            <span>${parts.month}</span>
          </div>
          <div class="tour-info">
            <div class="tour-meta">
              <span class="badge">${show.time}</span>
              <span class="badge">${show.city}</span>
            </div>
            <h3>${show.venue}</h3>
            <p>${show.address}<br>${show.info}</p>
          </div>
          <div class="tour-actions">
            <a class="small-button" href="${show.tickets}">Info</a>
            <button class="small-button calendar-button" type="button" data-index="${index}">Calendario</button>
          </div>
        </div>
      </article>
    `;
  }).join("");
}

function renderMerch() {
  merchGrid.innerHTML = merch.map((item) => `
    <article class="merch-card reveal">
      <div class="merch-image">
        <img src="${item.image}" alt="${item.name}" loading="lazy" />
      </div>
      <div class="merch-body">
        <h3>${item.name}</h3>
        <p>${item.description}</p>
        <div class="merch-footer">
          <span class="price">${item.price}</span>
          <a class="small-button" href="#contact">Richiedi</a>
        </div>
      </div>
    </article>
  `).join("");
}

function renderMedia() {
  mediaGrid.innerHTML = mediaItems.map((item, index) => `
    <button class="gallery-item reveal" type="button" data-index="${index}" aria-label="Apri foto: ${item.caption}">
      <img src="${item.file}" alt="${item.caption}" loading="lazy" />
      <span class="gallery-caption">${item.caption}</span>
    </button>
  `).join("");
}

function initMenu() {
  navToggle?.addEventListener("click", () => {
    const isOpen = navToggle.getAttribute("aria-expanded") === "true";
    navToggle.setAttribute("aria-expanded", String(!isOpen));
    navMenu.classList.toggle("open", !isOpen);
    document.body.classList.toggle("menu-open", !isOpen);
  });

  navMenu?.addEventListener("click", (event) => {
    if (event.target.matches("a")) {
      navToggle?.setAttribute("aria-expanded", "false");
      navMenu.classList.remove("open");
      document.body.classList.remove("menu-open");
    }
  });
}

function initCalendarButtons() {
  tourList.addEventListener("click", (event) => {
    const button = event.target.closest(".calendar-button");
    if (!button) return;
    const show = [...shows].sort((a, b) => parseShowDate(a) - parseShowDate(b))[Number(button.dataset.index)];
    createCalendarFile(show);
  });
}

function openLightbox(index) {
  const item = mediaItems[index];
  if (!item) return;
  lightboxImg.src = item.file;
  lightboxImg.alt = item.caption;
  lightboxCaption.textContent = item.caption;
  lightbox.classList.add("open");
  lightbox.setAttribute("aria-hidden", "false");
  document.body.classList.add("menu-open");
}

function closeLightbox() {
  lightbox.classList.remove("open");
  lightbox.setAttribute("aria-hidden", "true");
  lightboxImg.src = '';
  if (!navMenu.classList.contains("open")) {
    document.body.classList.remove("menu-open");
  }
}

function initGallery() {
  if (!mediaGrid || !lightbox || !lightboxImg || !lightboxCaption || !lightboxClose) return;
  mediaGrid.addEventListener('click', (event) => {
    const item = event.target.closest('.gallery-item');
    if (!item) return;
    openLightbox(Number(item.dataset.index));
  });
  lightboxClose.addEventListener('click', closeLightbox);
  lightbox.addEventListener('click', (event) => {
    if (event.target === lightbox) closeLightbox();
  });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && lightbox.classList.contains("open")) closeLightbox();
  });
}

function initRevealAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));
}

renderMembers();
renderShows();
renderMerch();
renderMedia();
initMenu();
initCalendarButtons();
initGallery();
initRevealAnimations();
document.querySelector("#year").textContent = new Date().getFullYear();
