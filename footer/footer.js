class SiteFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <footer class="footer">
        <div class="footer-left">
          <p>Vibe coded w/ help from Claude :)</p>
          <p class="footer-muted">Last Updated May 2026</p>
        </div>
        <div class="footer-right">
          <a href="https://www.linkedin.com/in/olivia--blackmore" class="footer-link" target="_blank">LinkedIn ›</a>
          <a href="mailto:omb5@sfu.ca" class="footer-link">Email ›</a>
          <a href="resume.html" class="footer-link">Resume ›</a>
        </div>
      </footer>
    `;
  }
}

customElements.define('site-footer', SiteFooter);