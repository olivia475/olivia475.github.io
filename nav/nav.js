class SiteNav extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <nav class="navbar">
        <a href="index.html" class="nav-link nav-logo">
          <span class="nav-logo-dot">▪</span> Olivia Blackmore<span class="nav-logo-subtitle"> [ Visual Designer ]</span>
        </a>
        <ul class="nav-links">
          <li><a href="index.html" class="nav-link">Work</a></li>
          <li><a href="play.html" class="nav-link">Play</a></li>
          <li><a href="about.html" class="nav-link">About</a></li>
          <li class="highlight" style="padding-top: 2px;">Resume</li>
        </ul>
      </nav>
    `;

    this.querySelectorAll('.nav-links a').forEach(link => {
      if (link.href === window.location.href) {
        link.classList.add('active');
      }
    });
  }
}

customElements.define('site-nav', SiteNav);