/* ==========================================================================
   PREMIUM PORTFOLIO INTERACTIVE CORE ENGINE (신현경)
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {
  
  // Verify configuration availability
  if (typeof PORTFOLIO_CONFIG === "undefined") {
    console.error("Configuration system config.js is missing!");
    return;
  }

  // --- 1. VECTOR GRAPHIC ASSET ENGINE (DYNAMIC SHARP SVGs) ---
  // Generates unique glowing vector SVGs on-the-fly for flawless mock visuals with 0kb weight.
  function generateDynamicSVG(title, category, index = 1) {
    const primaryColors = ["#3B82F6", "#00FF94", "#A855F7", "#FF6B35", "#EC4899"];
    const secondaryColors = ["#1E3A8A", "#064E3B", "#581C87", "#7C2D12", "#701A75"];
    
    const colorA = primaryColors[index % primaryColors.length];
    const colorB = secondaryColors[(index + 1) % secondaryColors.length];
    const colorC = primaryColors[(index + 2) % primaryColors.length];

    let shapes = "";
    if (category === "web") {
      // Laptop/Mobile responsive mock outline
      shapes = `
        <rect x="25" y="30" width="150" height="90" rx="6" fill="#14141C" stroke="${colorA}" stroke-width="2" />
        <rect x="35" y="40" width="130" height="70" fill="#0A0A0F" />
        <rect x="20" y="120" width="160" height="8" rx="2" fill="${colorA}" />
        <rect x="140" y="60" width="30" height="55" rx="3" fill="#14141C" stroke="${colorB}" stroke-dasharray="2 2" stroke-width="1.5" />
        <circle cx="100" cy="75" r="16" fill="url(#grad-${index})" opacity="0.8" />
        <line x1="45" y1="50" x2="95" y2="50" stroke="${colorC}" stroke-width="2" />
        <line x1="45" y1="62" x2="80" y2="62" stroke="#6B7280" stroke-width="1.5" />
        <rect x="45" y="74" width="40" height="18" rx="2" fill="rgba(59, 130, 246, 0.1)" stroke="${colorA}" stroke-width="0.5" />
      `;
    } else if (category === "cardnews") {
      // Instagram 1:1 stack view
      shapes = `
        <rect x="30" y="30" width="140" height="140" rx="10" fill="#14141C" stroke="${colorA}" stroke-width="1.5" />
        <rect x="42" y="42" width="116" height="116" rx="6" fill="#0A0A0F" />
        <circle cx="100" cy="90" r="30" fill="none" stroke="url(#grad-${index})" stroke-width="2" stroke-dasharray="8 4" />
        <text x="100" y="102" font-family="sans-serif" font-weight="900" font-size="36" fill="${colorC}" text-anchor="middle" opacity="0.9">#</text>
        <line x1="52" y1="140" x2="148" y2="140" stroke="${colorA}" stroke-width="2" />
        <rect x="52" y="52" width="28" height="10" rx="2" fill="${colorB}" />
      `;
    } else if (category === "video") {
      // Cinematic 16:9 player frame
      shapes = `
        <rect x="10" y="20" width="180" height="160" rx="8" fill="#111119" stroke="${colorA}" stroke-width="1" />
        <rect x="18" y="28" width="164" height="120" rx="4" fill="#050508" />
        <!-- Glowing focus grid lines -->
        <line x1="18" y1="88" x2="182" y2="88" stroke="rgba(255,255,255,0.06)" stroke-width="1" />
        <line x1="100" y1="28" x2="100" y2="148" stroke="rgba(255,255,255,0.06)" stroke-width="1" />
        <polygon points="90,73 120,88 90,103" fill="url(#grad-${index})" />
        <rect x="25" y="156" width="150" height="4" rx="2" fill="#222" />
        <rect x="25" y="156" width="85" height="4" rx="2" fill="${colorC}" />
        <circle cx="110" cy="158" r="4" fill="#fff" />
      `;
    } else if (category === "music") {
      // Waveform bars representation
      shapes = `
        <rect x="15" y="15" width="170" height="170" rx="20" fill="#14141C" stroke="${colorA}" stroke-width="2" />
        <circle cx="100" cy="100" r="55" fill="#0A0A0F" stroke="${colorB}" stroke-width="1" />
        <!-- Wave lines -->
        <path d="M 60,100 Q 80,40 100,100 T 140,100" fill="none" stroke="url(#grad-${index})" stroke-width="3.5" />
        <path d="M 60,100 Q 80,140 100,100 T 140,100" fill="none" stroke="${colorC}" stroke-width="1.5" opacity="0.5" />
        <circle cx="100" cy="100" r="10" fill="#fff" />
      `;
    } else {
      // Cubism abstract geometry for graphics/images
      shapes = `
        <rect width="200" height="200" rx="16" fill="#0F0F15" />
        <defs>
          <pattern id="pattern-${index}" width="20" height="20" patternUnits="userSpaceOnUse">
            <line x1="0" y1="20" x2="20" y2="0" stroke="rgba(255,255,255,0.04)" stroke-width="1" />
          </pattern>
        </defs>
        <rect width="200" height="200" rx="16" fill="url(#pattern-${index})" />
        <circle cx="70" cy="70" r="50" fill="url(#grad-${index})" opacity="0.3" filter="blur(8px)" />
        <circle cx="140" cy="130" r="40" fill="${colorC}" opacity="0.25" filter="blur(12px)" />
        <!-- Floating abstract shapes -->
        <polygon points="50,45 130,70 90,130" fill="none" stroke="${colorA}" stroke-width="2.5" />
        <rect x="110" y="80" width="45" height="45" transform="rotate(45 132.5 102.5)" fill="none" stroke="${colorB}" stroke-width="1.5" stroke-dasharray="4 2" />
        <circle cx="100" cy="100" r="15" fill="none" stroke="#F5F5F7" stroke-width="2" />
      `;
    }

    const svgString = `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width="100%" height="100%">
        <defs>
          <linearGradient id="grad-${index}" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="${colorA}" />
            <stop offset="100%" stop-color="${colorB}" />
          </linearGradient>
        </defs>
        ${shapes}
      </svg>
    `;

    return "data:image/svg+xml;utf8," + encodeURIComponent(svgString);
  }

  // Set visual dynamic graphics for thumbnail wrappers
  function setThumbnails(elements, category) {
    elements.forEach((el, i) => {
      const title = el.getAttribute("data-title") || "Untitled";
      el.src = generateDynamicSVG(title, category, i + 1);
    });
  }

  // --- 2. CONFIG DATA INJECTION (DYNAMIC RENDERING) ---
  const config = PORTFOLIO_CONFIG;
  
  // A. Profile Section
  document.getElementById("hero-status-text").innerText = config.profile.statusBadge;
  document.getElementById("hero-bio-short").innerText = config.profile.subTitle;
  document.getElementById("about-name-en").innerText = config.profile.englishName;
  document.getElementById("about-role-title").innerText = config.profile.title;
  document.getElementById("about-bio-text").innerText = config.profile.bio;
  document.getElementById("footer-author").innerText = config.profile.name;

  // Render Education Timelines
  const eduContainer = document.getElementById("education-list");
  eduContainer.innerHTML = config.profile.education.map(edu => `
    <div class="edu-item">
      <div class="edu-school">${edu.school}</div>
      <div class="edu-major">${edu.major} (${edu.period})</div>
    </div>
  `).join("");

  // Render Focus Tags
  const tagsContainer = document.getElementById("profile-tags");
  tagsContainer.innerHTML = config.profile.tags.map(tag => `<span class="tag">${tag}</span>`).join("");

  // Render Soft Skills
  const softSkillsContainer = document.getElementById("soft-skills-list");
  softSkillsContainer.innerHTML = config.skills.soft.map(s => `<span class="soft-skill-tag">${s}</span>`).join("");

  // Render Skill Bars (Design, Video, Audio, Web)
  function renderSkillBars(containerId, skillList) {
    const container = document.getElementById(containerId);
    container.innerHTML = skillList.map(skill => `
      <div class="skill-bar-item">
        <div class="skill-info">
          <span class="skill-name">${skill.name}</span>
          <span class="skill-duration outfit-font">${skill.status}</span>
        </div>
        <div class="skill-progress-bg">
          <div class="skill-progress-bar" data-level="${skill.level}"></div>
        </div>
      </div>
    `).join("");
  }
  renderSkillBars("skills-design", config.skills.design);
  renderSkillBars("skills-video", config.skills.video);
  renderSkillBars("skills-audio", config.skills.audio);
  renderSkillBars("skills-web", config.skills.web);

  // Render Contact channels links
  document.getElementById("contact-email").href = `mailto:${config.profile.contact.email}`;
  document.getElementById("contact-github").href = config.profile.contact.github;
  document.getElementById("contact-instagram").href = config.profile.contact.instagram;
  document.getElementById("contact-behance").href = config.profile.contact.behance;
  document.getElementById("contact-linkedin").href = config.profile.contact.linkedin;

  // Render Works (Filterable gallery grid)
  const worksGrid = document.getElementById("works-grid");

  function renderWorks(filter = "all") {
    worksGrid.classList.remove("masonry-view");
    worksGrid.style.opacity = 0;
    
    setTimeout(() => {
      let filteredProjects = [];
      
      if (filter === "all") {
        // Display web, cardnews, video, music, and first 4 graphics
        filteredProjects = [
          ...config.projects,
          ...config.graphics.slice(0, 4).map(g => ({
            slug: `graphic-${g.id}`,
            title: g.title,
            category: "image",
            thumbnail: g.img,
            description: g.desc,
            role: "Graphic Artwork Designer (100%)",
            tools: [g.tool],
            year: g.year
          }))
        ];
      } else if (filter === "image") {
        worksGrid.classList.add("masonry-view");
        filteredProjects = config.graphics.map(g => ({
          slug: `graphic-${g.id}`,
          title: g.title,
          category: "image",
          thumbnail: g.img,
          description: g.desc,
          role: "Graphic Design",
          tools: [g.tool],
          year: g.year
        }));
      } else {
        filteredProjects = config.projects.filter(p => p.category === filter);
      }

      worksGrid.innerHTML = filteredProjects.map((p, idx) => `
        <article class="work-card reveal" data-category="${p.category}" data-slug="${p.slug}">
          <div class="work-thumbnail">
            <span class="work-category-badge">${p.category}</span>
            <img class="work-thumbnail-svg" data-title="${p.title}" data-category="${p.category}" data-idx="${idx}" alt="${p.title}">
          </div>
          <div class="work-info-box">
            <span class="work-year">${p.year}</span>
            <h3 class="work-card-title">${p.title}</h3>
            <p class="work-card-desc">${p.description}</p>
            <div class="work-tools-tags">
              ${p.tools.slice(0, 3).map(tool => `<span class="work-tool-badge">${tool}</span>`).join("")}
            </div>
          </div>
        </article>
      `).join("");

      // Generate sharp SVG source thumbnails dynamically to avoid missing paths
      worksGrid.querySelectorAll(".work-thumbnail-svg").forEach(img => {
        const title = img.getAttribute("data-title");
        const cat = img.getAttribute("data-category");
        const idx = parseInt(img.getAttribute("data-idx"));
        img.src = generateDynamicSVG(title, cat, idx + 1);
      });

      worksGrid.style.opacity = 1;
      
      // Bind click triggers for filtered elements
      bindWorkCardsClick();
      initScrollReveal();
    }, 300);
  }
  renderWorks("all");

  // Render Awards vertical timeline
  const awardsTimeline = document.getElementById("awards-timeline");
  awardsTimeline.innerHTML = config.awards.map((award, idx) => `
    <div class="timeline-item reveal">
      <div class="timeline-dot"></div>
      <div class="timeline-card" data-idx="${idx}">
        <div class="timeline-header">
          <span class="award-year">${award.year}</span>
          <span class="award-badge">${award.result}</span>
        </div>
        <h3 class="award-title">${award.name}</h3>
        <div class="award-work"><i data-lucide="award"></i> ${award.work}</div>
        <div class="award-organizer">${award.organizer}</div>
        <p class="award-desc">${award.description}</p>
      </div>
    </div>
  `).join("");
  lucide.createIcons(); // refresh newly rendered vector icons

  // Render Lab learning notes cards grid
  const labGrid = document.getElementById("lab-grid");
  labGrid.innerHTML = config.lab.map(note => `
    <article class="lab-card reveal" data-slug="${note.slug}">
      <div class="lab-card-header">
        <span class="lab-card-category outfit-font">${note.category.replace("-", " ")}</span>
        <span class="lab-card-readtime mono-font"><i data-lucide="clock"></i> ${note.readingTime} min</span>
      </div>
      <h3 class="lab-card-title">${note.title}</h3>
      <p class="lab-card-summary">${note.summary}</p>
      <div class="lab-card-footer">
        <span class="lab-card-date">${note.date}</span>
        <span class="lab-read-link">Read Note <i data-lucide="arrow-right"></i></span>
      </div>
    </article>
  `).join("");
  lucide.createIcons();

  // --- 3. THEME TOGGLING ENGINE ---
  const themeToggle = document.getElementById("theme-toggle");
  const htmlEl = document.documentElement;

  // Initialize theme from local storage or matching system preferences
  const cachedTheme = localStorage.getItem("theme");
  if (cachedTheme) {
    htmlEl.className = cachedTheme;
  } else if (window.matchMedia("(prefers-color-scheme: light)").matches) {
    htmlEl.className = "light";
  } else {
    htmlEl.className = "dark";
  }

  themeToggle.addEventListener("click", () => {
    const isDark = htmlEl.classList.contains("dark");
    const nextTheme = isDark ? "light" : "dark";
    htmlEl.className = nextTheme;
    localStorage.setItem("theme", nextTheme);
  });

  // --- 4. NAVIGATION DECK SCROLL COMPACTING & LINK TRACKING ---
  const navbar = document.getElementById("navbar");
  const navLinks = document.querySelectorAll(".nav-link");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
    highlightActiveLink();
  });

  function highlightActiveLink() {
    let scrollPosition = window.scrollY + 100;
    
    document.querySelectorAll("section").forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      const id = section.getAttribute("id");

      if (scrollPosition >= top && scrollPosition < top + height) {
        navLinks.forEach(link => {
          link.classList.remove("active");
          if (link.getAttribute("href") === `#${id}`) {
            link.classList.add("active");
          }
        });
      }
    });
  }

  // Hamburger Drawer Trigger
  const mobileToggle = document.getElementById("mobile-toggle");
  const mobileMenu = document.getElementById("mobile-menu-overlay");
  const mobileLinks = document.querySelectorAll(".mobile-link");

  mobileToggle.addEventListener("click", () => {
    const isOpen = mobileMenu.classList.contains("open");
    if (isOpen) {
      mobileMenu.classList.remove("open");
      mobileToggle.querySelector(".open-icon").style.display = "block";
      mobileToggle.querySelector(".close-icon").style.display = "none";
    } else {
      mobileMenu.classList.add("open");
      mobileToggle.querySelector(".open-icon").style.display = "none";
      mobileToggle.querySelector(".close-icon").style.display = "block";
    }
  });

  mobileLinks.forEach(link => {
    link.addEventListener("click", () => {
      mobileMenu.classList.remove("open");
      mobileToggle.querySelector(".open-icon").style.display = "block";
      mobileToggle.querySelector(".close-icon").style.display = "none";
    });
  });

  // --- 5. CATEGORY FILTER NAVIGATION GLIDER ---
  const filterTabs = document.querySelectorAll(".filter-tab");
  const glider = document.getElementById("tab-glider");

  function updateGlider(activeTab) {
    const tabRect = activeTab.getBoundingClientRect();
    const parentRect = activeTab.parentElement.getBoundingClientRect();
    
    glider.style.width = `${tabRect.width}px`;
    glider.style.left = `${tabRect.left - parentRect.left}px`;
  }
  
  // Set initial glider position
  const initialActive = document.querySelector(".filter-tab.active");
  if (initialActive) updateGlider(initialActive);

  filterTabs.forEach(tab => {
    tab.addEventListener("click", (e) => {
      filterTabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");
      updateGlider(tab);
      
      const filterValue = tab.getAttribute("data-filter");
      renderWorks(filterValue);
    });
  });

  window.addEventListener("resize", () => {
    const active = document.querySelector(".filter-tab.active");
    if (active) updateGlider(active);
  });

  // --- 6. SCROLL REVEALS & SKILL BARS FILL TRIGGER ---
  function initScrollReveal() {
    const revealElements = document.querySelectorAll(".reveal");
    
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
          // If skill bars card is revealed, trigger progressive filling
          if (entry.target.classList.contains("skill-card")) {
            entry.target.querySelectorAll(".skill-progress-bar").forEach(bar => {
              const level = bar.getAttribute("data-level");
              bar.style.width = `${level}%`;
            });
          }
        }
      });
    }, { threshold: 0.15 });

    revealElements.forEach(el => revealObserver.observe(el));
  }
  initScrollReveal();

  // --- 7. AWWWARDS-STYLE MOUSE CURSOR ENGINE ---
  const cursor = document.getElementById("custom-cursor");
  const cursorDot = document.getElementById("custom-cursor-dot");

  document.addEventListener("mousemove", (e) => {
    const x = e.clientX;
    const y = e.clientY;
    
    // Dot moves instantly
    cursorDot.style.left = `${x}px`;
    cursorDot.style.top = `${y}px`;
    
    // Large circle smooth delay animation
    cursor.animate({
      left: `${x}px`,
      top: `${y}px`
    }, { duration: 500, fill: "forwards" });
  });

  function bindHoverSelectors() {
    const clickables = document.querySelectorAll("a, button, .work-card, .timeline-card, .lab-card, .filter-tab");
    
    clickables.forEach(el => {
      el.addEventListener("mouseenter", () => cursor.classList.add("hovered"));
      el.addEventListener("mouseleave", () => cursor.classList.remove("hovered"));
    });
  }
  bindHoverSelectors();

  // --- 8. HERO PARTICLES SYSTEM CANVAS ---
  const heroCanvas = document.getElementById("hero-particles");
  if (heroCanvas) {
    const ctx = heroCanvas.getContext("2d");
    let particlesArray = [];
    let width = heroCanvas.width = heroCanvas.offsetWidth;
    let height = heroCanvas.height = heroCanvas.offsetHeight;

    window.addEventListener("resize", () => {
      width = heroCanvas.width = heroCanvas.offsetWidth;
      height = heroCanvas.height = heroCanvas.offsetHeight;
    });

    const mouse = { x: null, y: null, radius: 100 };
    document.addEventListener("mousemove", (e) => {
      const rect = heroCanvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    });
    document.addEventListener("mouseleave", () => {
      mouse.x = null;
      mouse.y = null;
    });

    class Particle {
      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.size = Math.random() * 2 + 1;
        this.vx = Math.random() * 0.4 - 0.2;
        this.vy = Math.random() * 0.4 - 0.2;
      }
      update() {
        this.x += this.vx;
        this.y += this.vy;
        
        // Bounce on boundary
        if (this.x < 0 || this.x > width) this.vx *= -1;
        if (this.y < 0 || this.y > height) this.vy *= -1;

        // Mouse hover push effect
        if (mouse.x !== null && mouse.y !== null) {
          const dx = this.x - mouse.x;
          const dy = this.y - mouse.y;
          const dist = Math.hypot(dx, dy);
          if (dist < mouse.radius) {
            const force = (mouse.radius - dist) / mouse.radius;
            this.x += (dx / dist) * force * 3;
            this.y += (dy / dist) * force * 3;
          }
        }
      }
      draw() {
        ctx.fillStyle = "rgba(59, 130, 246, 0.4)";
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    function initParticles() {
      particlesArray = [];
      const particleNum = Math.floor((width * height) / 9000);
      for (let i = 0; i < particleNum; i++) {
        particlesArray.push(new Particle());
      }
    }
    initParticles();

    function animateParticles() {
      ctx.clearRect(0, 0, width, height);
      particlesArray.forEach(p => {
        p.update();
        p.draw();
      });
      requestAnimationFrame(animateParticles);
    }
    animateParticles();
  }

  // --- 9. MODALS DIALOG MANAGEMENT SYSTEM ---
  const backdrop = document.getElementById("modal-backdrop");
  const modalWrappers = document.querySelectorAll(".modal-content-wrapper");
  const closeButtons = document.querySelectorAll(".modal-close");

  function openModal(modalId) {
    backdrop.classList.add("active");
    modalWrappers.forEach(wrap => wrap.style.display = "none");
    const targetModal = document.getElementById(modalId);
    if (targetModal) {
      targetModal.style.display = "block";
      // Force scroll reset
      targetModal.scrollTop = 0;
    }
    // Block parent page scrolling
    document.body.style.overflow = "hidden";
  }

  function closeModal() {
    backdrop.classList.remove("active");
    modalWrappers.forEach(wrap => {
      wrap.style.display = "none";
    });
    document.body.style.overflow = "auto";
    
    // Stop sound synthesizers or simulated playheads
    stopSynthesisMelody();
    stopSimulatedVideo();
  }

  closeButtons.forEach(btn => btn.addEventListener("click", closeModal));
  backdrop.addEventListener("click", (e) => {
    if (e.target === backdrop) closeModal();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeModal();
  });

  // Bind click event trigger handlers on Works card items
  function bindWorkCardsClick() {
    const cards = worksGrid.querySelectorAll(".work-card");
    cards.forEach(card => {
      card.addEventListener("click", () => {
        const slug = card.getAttribute("data-slug");
        const category = card.getAttribute("data-category");

        if (category === "web") {
          loadWebCaseStudy(slug);
        } else if (category === "cardnews") {
          loadCardNewsCarousel(slug);
        } else if (category === "video") {
          loadVideoPlayer(slug);
        } else if (category === "music") {
          loadMusicSynthPlayer(slug);
        } else if (category === "image") {
          const graphicIdx = parseInt(slug.replace("graphic-", "")) - 1;
          loadGraphicLightbox(graphicIdx);
        }
      });
    });
    bindHoverSelectors(); // refresh cursors hovers
  }

  // --- 10. SPECIFIC MODAL CONROLLERS ---

  // 10-1. CASE STUDY MODAL (WEB PROJECTS)
  function loadWebCaseStudy(slug) {
    const proj = config.projects.find(p => p.slug === slug);
    if (!proj) return;

    document.getElementById("case-web-title").innerText = proj.title;
    document.getElementById("case-web-role").innerText = proj.role;
    document.getElementById("case-web-duration").innerText = proj.duration || "N/A";
    document.getElementById("case-web-tech").innerText = proj.tools.join(", ");
    
    // Inject Live & Code buttons
    const linksContainer = document.getElementById("case-web-links");
    linksContainer.innerHTML = `
      <a href="${proj.links.live}" class="btn btn-primary" target="_blank">Live Demo <i data-lucide="external-link"></i></a>
      <a href="${proj.links.github}" class="btn btn-secondary" target="_blank"><i data-lucide="github"></i> Code</a>
    `;

    document.getElementById("case-web-problem").innerText = proj.caseStudy.problem;
    document.getElementById("case-web-process").innerText = proj.caseStudy.process;
    document.getElementById("case-web-result").innerText = proj.caseStudy.result;
    document.getElementById("case-web-retrospective").innerText = proj.caseStudy.retrospective;

    lucide.createIcons();
    openModal("modal-web-case");
  }

  // 10-2. CARD NEWS CAROUSEL SYSTEM (SWIPER MOCK)
  let activeSlideIdx = 0;
  let activeSlidesList = [];

  function loadCardNewsCarousel(slug) {
    const proj = config.projects.find(p => p.slug === slug);
    if (!proj || !proj.slides) return;

    document.getElementById("cardnews-title").innerText = proj.title;
    document.getElementById("cardnews-tools").innerText = proj.tools.join(", ");
    document.getElementById("cardnews-desc-bg").innerText = proj.details.background;
    document.getElementById("cardnews-desc-concept").innerText = proj.details.concept;
    document.getElementById("cardnews-desc-outcome").innerText = proj.details.outcome;

    // Load slide viewport with glowing vector SVGs dynamically
    activeSlidesList = proj.slides;
    activeSlideIdx = 0;
    
    const viewport = document.getElementById("cardnews-viewport");
    viewport.innerHTML = activeSlidesList.map((slide, idx) => `
      <div class="cardnews-slide ${idx === 0 ? 'active' : ''}">
        <img class="carousel-slide-svg" data-title="${proj.title} - Card ${idx + 1}" data-cat="cardnews" data-idx="${idx}" alt="slide ${idx + 1}">
      </div>
    `).join("");

    viewport.querySelectorAll(".carousel-slide-svg").forEach(img => {
      const t = img.getAttribute("data-title");
      const c = img.getAttribute("data-cat");
      const i = parseInt(img.getAttribute("data-idx"));
      img.src = generateDynamicSVG(t, c, i + 3);
    });

    renderCarouselDots();
    openModal("modal-cardnews");
  }

  function renderCarouselDots() {
    const dotsContainer = document.getElementById("carousel-dots");
    dotsContainer.innerHTML = activeSlidesList.map((_, idx) => `
      <span class="carousel-dot ${idx === activeSlideIdx ? 'active' : ''}" data-idx="${idx}"></span>
    `).join("");

    dotsContainer.querySelectorAll(".carousel-dot").forEach(dot => {
      dot.addEventListener("click", () => {
        const targetIdx = parseInt(dot.getAttribute("data-idx"));
        changeSlide(targetIdx);
      });
    });
  }

  function changeSlide(targetIdx) {
    if (targetIdx < 0 || targetIdx >= activeSlidesList.length) return;
    
    const slides = document.querySelectorAll(".cardnews-slide");
    slides[activeSlideIdx].classList.remove("active");
    
    activeSlideIdx = targetIdx;
    slides[activeSlideIdx].classList.add("active");
    
    renderCarouselDots();
  }

  document.getElementById("carousel-prev").addEventListener("click", () => changeSlide(activeSlideIdx - 1));
  document.getElementById("carousel-next").addEventListener("click", () => changeSlide(activeSlideIdx + 1));
  
  // Arrow keyboard controls inside carousel swiper
  document.addEventListener("keydown", (e) => {
    const isCarouselActive = document.getElementById("modal-cardnews").style.display === "block";
    if (!isCarouselActive) return;
    
    if (e.key === "ArrowLeft") {
      changeSlide(activeSlideIdx - 1);
    } else if (e.key === "ArrowRight") {
      changeSlide(activeSlideIdx + 1);
    }
  });

  // Mock download slides button trigger action
  document.getElementById("btn-download-slides").addEventListener("click", () => {
    alert("🚀 카드뉴스 원본 PDF 포맷 고화질 파일이 브라우저 다운로드 큐에 추가되었습니다. (데모)");
  });

  // 10-3. AD VIDEO PLAYER (HUD MOCK SIMULATOR)
  let videoSimInterval = null;

  function loadVideoPlayer(slug) {
    const proj = config.projects.find(p => p.slug === slug);
    if (!proj) return;

    document.getElementById("video-title").innerText = proj.title;
    document.getElementById("video-desc-client").innerText = proj.details.client;
    document.getElementById("video-desc-concept").innerText = proj.details.concept;
    document.getElementById("video-desc-story").innerText = proj.details.story;
    document.getElementById("video-desc-audio").innerText = proj.details.audio;

    // Reset simulator UI elements
    const overlay = document.getElementById("video-canvas-overlay");
    const sim = document.getElementById("video-sim");
    const progress = sim.querySelector(".video-sim-progress");
    const timeTag = sim.querySelector(".hud-time");
    
    overlay.style.display = "flex";
    sim.style.display = "none";
    progress.style.width = "0%";
    timeTag.innerText = "0:00";
    
    overlay.onclick = () => {
      overlay.style.display = "none";
      sim.style.display = "block";
      startSimulatedVideo();
    };

    openModal("modal-video");
  }

  function startSimulatedVideo() {
    stopSimulatedVideo();
    
    const sim = document.getElementById("video-sim");
    const progress = sim.querySelector(".video-sim-progress");
    const timeTag = sim.querySelector(".hud-time");
    
    let seconds = 0;
    videoSimInterval = setInterval(() => {
      seconds += 0.5;
      const pct = (seconds / 45) * 100;
      progress.style.width = `${pct}%`;
      
      const min = Math.floor(seconds / 60);
      const sec = Math.floor(seconds % 60);
      timeTag.innerText = `${min}:${sec < 10 ? '0' : ''}${sec}`;
      
      if (seconds >= 45) {
        clearInterval(videoSimInterval);
        alert("🎬 브랜드 비디오 프리뷰 재생이 성공적으로 완료되었습니다.");
        closeModal();
      }
    }, 500);
  }

  function stopSimulatedVideo() {
    if (videoSimInterval) {
      clearInterval(videoSimInterval);
      videoSimInterval = null;
    }
  }

  // 10-4. INTERACTIVE WEB SYNTHESIZER MUSIC PLAYER (WEB AUDIO API)
  let synthContext = null;
  let synthClock = null;
  let isSynthPlaying = false;
  let synthTimelinePercent = 0;
  let synthTimelineInterval = null;

  const notesList = [261.63, 293.66, 329.63, 392.00, 440.00, 523.25]; // C4, D4, E4, G4, A4, C5 (C Major Pentatonic)

  function loadMusicSynthPlayer(slug) {
    const proj = config.projects.find(p => p.slug === slug);
    if (!proj) return;

    document.getElementById("music-title").innerText = proj.title;
    document.getElementById("music-description").innerText = proj.description;
    document.getElementById("music-genre").innerText = proj.genre;
    document.getElementById("music-bpm").innerText = proj.bpm;
    document.getElementById("music-daw").innerText = proj.daw;
    document.getElementById("music-sound-detail").innerText = proj.details;

    // Reset visual elements
    resetSynthPlayerUI();

    openModal("modal-music");
  }

  function resetSynthPlayerUI() {
    const playBtn = document.getElementById("synth-play-btn");
    playBtn.querySelector(".play-icon").style.display = "block";
    playBtn.querySelector(".pause-icon").style.display = "none";
    playBtn.querySelector(".play-text").innerText = "실시간 신스 음악 연주";
    
    document.getElementById("vinyl-disc").classList.remove("spinning");
    document.getElementById("audio-equalizer").classList.remove("active");
    document.getElementById("synth-status").innerText = "오실레이터 대기 중";
    document.getElementById("synth-timeline-fill").style.width = "0%";
    document.querySelector(".synth-timeline-pin").style.left = "0%";
    document.getElementById("synth-current-time").innerText = "0:00";
    
    stopSynthesisMelody();
  }

  function toggleSynthesisMelody() {
    if (isSynthPlaying) {
      stopSynthesisMelody();
    } else {
      startSynthesisMelody();
    }
  }

  function startSynthesisMelody() {
    isSynthPlaying = true;
    
    // Initialize standard Web Audio context
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    synthContext = new AudioContextClass();
    
    // Start dynamic looping clock
    let beatCount = 0;
    const tempoInterval = 250; // Milliseconds per note (BPM equivalent)
    
    synthClock = setInterval(() => {
      if (beatCount % 2 === 0) {
        // Play deep space low root note
        playSynthNote(notesList[0] / 2, 1.2, "triangle");
      }
      
      // Random high melody note from C Major Pentatonic
      const noteFreq = notesList[Math.floor(Math.random() * notesList.length)];
      playSynthNote(noteFreq, 0.6, "sine");
      
      beatCount++;
    }, tempoInterval);

    // Update Player UI elements
    const playBtn = document.getElementById("synth-play-btn");
    playBtn.querySelector(".play-icon").style.display = "none";
    playBtn.querySelector(".pause-icon").style.display = "block";
    playBtn.querySelector(".play-text").innerText = "음악 일시 중지";

    document.getElementById("vinyl-disc").classList.add("spinning");
    document.getElementById("audio-equalizer").classList.add("active");
    document.getElementById("synth-status").innerText = "🟢 실시간 합성 연주 중";

    // Playback timeline progress tracker
    let curSec = 0;
    const totalSec = 90;
    document.getElementById("synth-total-time").innerText = "1:30";

    synthTimelineInterval = setInterval(() => {
      curSec++;
      const percent = (curSec / totalSec) * 100;
      
      document.getElementById("synth-timeline-fill").style.width = `${percent}%`;
      document.querySelector(".synth-timeline-pin").style.left = `${percent}%`;
      
      const m = Math.floor(curSec / 60);
      const s = curSec % 60;
      document.getElementById("synth-current-time").innerText = `${m}:${s < 10 ? '0' : ''}${s}`;
      
      if (curSec >= totalSec) {
        stopSynthesisMelody();
        resetSynthPlayerUI();
      }
    }, 1000);
  }

  function playSynthNote(frequency, duration, type = "sine") {
    if (!synthContext) return;
    
    const osc = synthContext.createOscillator();
    const gainNode = synthContext.createGain();
    const filter = synthContext.createBiquadFilter();

    osc.type = type;
    osc.frequency.setValueAtTime(frequency, synthContext.currentTime);

    // Space filter configuration (simulating Serum parameters)
    filter.type = "lowpass";
    filter.frequency.setValueAtTime(800, synthContext.currentTime);
    filter.Q.setValueAtTime(1, synthContext.currentTime);

    // Dynamic ADSR Volume envelope
    gainNode.gain.setValueAtTime(0, synthContext.currentTime);
    gainNode.gain.linearRampToValueAtTime(0.15, synthContext.currentTime + 0.05); // Attack
    gainNode.gain.exponentialRampToValueAtTime(0.001, synthContext.currentTime + duration); // Decay / Release

    osc.connect(filter);
    filter.connect(gainNode);
    gainNode.connect(synthContext.destination);

    osc.start();
    osc.stop(synthContext.currentTime + duration);
  }

  function stopSynthesisMelody() {
    isSynthPlaying = false;
    
    if (synthClock) {
      clearInterval(synthClock);
      synthClock = null;
    }
    if (synthTimelineInterval) {
      clearInterval(synthTimelineInterval);
      synthTimelineInterval = null;
    }
    if (synthContext) {
      if (synthContext.state !== "closed") {
        synthContext.close();
      }
      synthContext = null;
    }

    // Toggle button icons back
    const playBtn = document.getElementById("synth-play-btn");
    if (playBtn) {
      playBtn.querySelector(".play-icon").style.display = "block";
      playBtn.querySelector(".pause-icon").style.display = "none";
      playBtn.querySelector(".play-text").innerText = "실시간 신스 음악 연주";
    }

    const disc = document.getElementById("vinyl-disc");
    if (disc) disc.classList.remove("spinning");
    
    const eq = document.getElementById("audio-equalizer");
    if (eq) eq.classList.remove("active");
    
    const status = document.getElementById("synth-status");
    if (status) status.innerText = "연주 중단됨";
  }

  document.getElementById("synth-play-btn").addEventListener("click", toggleSynthesisMelody);
  
  // Custom Timeline seek handler
  document.getElementById("synth-timeline-bar").addEventListener("click", (e) => {
    alert("🎹 실시간 신디사이저 합성은 시킹 대신 실시간 즉흥 연주로 트리거됩니다.");
  });

  // 10-5. GRAPHIC GALLERY LIGHTBOX SYSTEM
  let activeGraphicIdx = 0;

  function loadGraphicLightbox(idx) {
    if (idx < 0 || idx >= config.graphics.length) return;
    activeGraphicIdx = idx;
    
    const item = config.graphics[activeGraphicIdx];
    
    document.getElementById("lightbox-title").innerText = item.title;
    document.getElementById("lightbox-tool").innerText = item.tool;
    document.getElementById("lightbox-year").innerText = item.year;
    document.getElementById("lightbox-desc").innerText = item.desc;

    const viewer = document.getElementById("lightbox-svg-viewer");
    viewer.innerHTML = `<img class="lightbox-svg" style="width:100%;height:100%;object-fit:cover;" alt="${item.title}">`;
    
    viewer.querySelector(".lightbox-svg").src = generateDynamicSVG(item.title, "image", activeGraphicIdx + 2);
    
    openModal("modal-lightbox");
  }

  document.getElementById("lightbox-prev").addEventListener("click", () => {
    loadGraphicLightbox(activeGraphicIdx - 1);
  });
  document.getElementById("lightbox-next").addEventListener("click", () => {
    loadGraphicLightbox(activeGraphicIdx + 1);
  });

  // Lightbox key controls
  document.addEventListener("keydown", (e) => {
    const isLightboxActive = document.getElementById("modal-lightbox").style.display === "block";
    if (!isLightboxActive) return;
    
    if (e.key === "ArrowLeft") {
      loadGraphicLightbox(activeGraphicIdx - 1);
    } else if (e.key === "ArrowRight") {
      loadGraphicLightbox(activeGraphicIdx + 1);
    }
  });

  // 10-6. LAB NOTE MDX READER (MARKDOWN INTERPRETER)
  function loadLabNoteReader(slug) {
    const note = config.lab.find(n => n.slug === slug);
    if (!note) return;

    document.getElementById("art-category").innerText = note.category.replace("-", " ");
    document.getElementById("art-date").innerText = note.date;
    document.getElementById("art-read-time").innerText = `${note.readingTime} min read`;
    document.getElementById("art-title").innerText = note.title;
    
    document.getElementById("art-tags").innerHTML = note.tags.map(t => `<span class="article-tag">${t}</span>`).join("");

    // Beautifully parse basic Markdown features inside content string into styled HTML markup
    const parsedHTML = parseSimpleMarkdown(note.content);
    document.getElementById("art-content").innerHTML = parsedHTML;

    openModal("modal-lab-reader");
  }

  // Basic lightweight Markdown parser to avoid external parsing libraries
  function parseSimpleMarkdown(mdText) {
    let html = mdText;

    // Parse block code snippets
    html = html.replace(/```javascript([\s\S]*?)```/g, '<pre><code class="language-javascript">$1</code></pre>');
    html = html.replace(/```([\s\S]*?)```/g, '<pre><code>$1</code></pre>');

    // Parse tables
    html = html.replace(/\|([\s\S]*?)\|\r?\n\|[ :-|]*?\|\r?\n([\s\S]*?)(?=\r?\n\r?\n|\r?\n[^|]|$)/g, (match, header, body) => {
      const parseRow = (row) => row.split("|").slice(1, -1).map(cell => cell.trim());
      const ths = parseRow(header).map(h => `<th>${h}</th>`).join("");
      const trs = body.trim().split("\n").map(row => {
        const tds = parseRow(row).map(d => `<td>${d}</td>`).join("");
        return `<tr>${tds}</tr>`;
      }).join("");
      return `<table><thead><tr>${ths}</tr></thead><tbody>${trs}</tbody></table>`;
    });

    // Parse subheaders
    html = html.replace(/####\s+(.*)/g, '<h4>$1</h4>');
    html = html.replace(/###\s+(.*)/g, '<h3>$1</h3>');
    html = html.replace(/##\s+(.*)/g, '<h2>$1</h2>');

    // Parse lists
    html = html.replace(/-\s+\*\*(.*?)\*\*:\s*(.*)/g, '<li><strong>$1</strong>: $2</li>');
    html = html.replace(/-\s+(.*)/g, '<li>$1</li>');
    
    // Wrap lists in ul
    html = html.replace(/(<li>.*<\/li>)+/g, '<ul>$&</ul>');

    // Parse inline code
    html = html.replace(/`([^`\n]+)`/g, '<code>$1</code>');

    // Parse double breaks as paragraphs
    html = html.split(/\n\s*\n/).map(p => {
      if (p.trim().startsWith("<h") || p.trim().startsWith("<pre") || p.trim().startsWith("<table") || p.trim().startsWith("<ul")) {
        return p;
      }
      return `<p>${p.replace(/\n/g, "<br>")}</p>`;
    }).join("\n");

    return html;
  }

  // Bind Lab Notes card click event triggers
  const labCards = document.querySelectorAll(".lab-card");
  labCards.forEach(card => {
    card.addEventListener("click", () => {
      const slug = card.getAttribute("data-slug");
      loadLabNoteReader(slug);
    });
  });

  // Bind Awards timeline card click triggers (launches graphic lightbox equivalent or project context)
  const awardCards = document.querySelectorAll(".timeline-card");
  awardCards.forEach(card => {
    card.addEventListener("click", () => {
      const idx = parseInt(card.getAttribute("data-idx"));
      const award = config.awards[idx];
      alert(`🏆 ${award.name} - ${award.result}\n\n출품작: ${award.work}\n\n"${award.description}"`);
    });
  });

  // --- 11. PRINT / DOWNLOAD RESUME BUTTON EVENT HANDLER ---
  const downloadBtn = document.getElementById("btn-download-resume");
  downloadBtn.addEventListener("click", () => {
    // Open system browser print overlay
    window.print();
  });

  // --- 12. CONTACT FORM SUBMIT HANDLER ---
  const contactForm = document.getElementById("contact-form");
  const successAlert = document.getElementById("form-success-alert");

  contactForm.addEventListener("submit", (e) => {
    e.preventDefault(); // Stop default form redirect
    
    const btn = contactForm.querySelector(".btn-submit");
    const name = document.getElementById("form-name").value;
    
    btn.disabled = true;
    btn.querySelector("span").innerText = "전송 중...";
    
    setTimeout(() => {
      btn.disabled = false;
      btn.querySelector("span").innerText = "메시지 보내기";
      
      // Clear form inputs
      contactForm.reset();
      
      // Trigger glow alert
      successAlert.style.display = "flex";
      
      setTimeout(() => {
        successAlert.style.display = "none";
      }, 5000);
      
    }, 1500);
  });

});
