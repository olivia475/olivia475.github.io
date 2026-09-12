class SiteFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <footer class="footer">
        <div class="footer-left">
          <p>Olivia Blackmore :) <br> <span class="highlight">Built with time, learning, and some fun.</span> </p>
        </div>
        <div class="footer-right">
          <a href="https://www.linkedin.com/in/olivia--blackmore" class="footer-link" target="_blank">LinkedIn</a>
          <a href="Resume2026OB.pdf" class="footer-link" target="_blank">Resume</a>
          <a href="mailto:omb5@sfu.ca" class="footer-link">omblackmore@gmail.com</a>
        </div>
      </footer>
    `;
  }
}

customElements.define('site-footer', SiteFooter);