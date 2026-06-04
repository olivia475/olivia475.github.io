class SiteNav extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <nav class="navbar">
        <a href="index.html" class="nav-link nav-logo">
          <span class="nav-logo-dot">▪</span> Olivia Blackmore<span class="nav-logo-subtitle"> [ Designer & Creative ]</span>
        </a>
        <button class="nav-hamburger" aria-label="Toggle menu" aria-expanded="false">
          <span></span>
          <span></span>
          <span></span>
        </button>
        <ul class="nav-links">
          <li><a href="index.html" class="nav-link">Work</a></li>
          <li><a href="play.html" class="nav-link">Play</a></li>
          <li><a href="about.html" class="nav-link">About</a></li>
          <li><a href="resume.html" class="nav-link">Resume</a></li>
        </ul>
      </nav>
    `;

    this.querySelectorAll('.nav-links a').forEach(link => {
      if (link.href === window.location.href) {
        link.classList.add('active');
      }
    });

    const hamburger = this.querySelector('.nav-hamburger');
    const navLinks = this.querySelector('.nav-links');

    hamburger.addEventListener('click', () => {
      const isOpen = navLinks.classList.toggle('open');
      hamburger.classList.toggle('open');
      hamburger.setAttribute('aria-expanded', isOpen);
    });

    this.querySelectorAll('.nav-links a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('open');
        hamburger.classList.remove('open');
        hamburger.setAttribute('aria-expanded', false);
      });
    });
  }
}

customElements.define('site-nav', SiteNav);