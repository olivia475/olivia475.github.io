class ImageCarousel extends HTMLElement {
  connectedCallback() {
    const items = Array.from(this.querySelectorAll('.carousel-item'));
    const track = this.querySelector('.carousel-track');
    const caption = this.querySelector('.carousel-caption');
    const dotsContainer = this.querySelector('.carousel-dots');
    const wrapper = this.querySelector('.carousel-track-wrapper');

    items.forEach((_, i) => {
      const dot = document.createElement('button');
      dot.classList.add('carousel-dot');
      dot.setAttribute('aria-label', `Go to image ${i + 1}`);
      dot.addEventListener('click', () => this.select(i));
      dotsContainer.appendChild(dot);
    });

    this.items = items;
    this.track = track;
    this.caption = caption;
    this.wrapper = wrapper;
    this.dots = Array.from(dotsContainer.querySelectorAll('.carousel-dot'));
    this.currentIndex = null;

    items.forEach((item, i) => {
      item.addEventListener('click', () => this.select(i));
    });

    // recalculate position on resize
    window.addEventListener('resize', () => {
      if (this.currentIndex !== null) {
        this.reposition(this.currentIndex); // 👈 reposition without re-triggering animation
      }
    });

    const images = Array.from(this.querySelectorAll('img, video'));
    const allLoaded = images.map(img => {
      if (img.tagName === 'VIDEO') return Promise.resolve();
      return new Promise(resolve => {
        if (img.complete) resolve();
        else img.addEventListener('load', resolve);
      });
    });

    Promise.all(allLoaded).then(() => {
      this.select(4);
    });

  }

  // silent reposition — no animation reset, no caption flicker
  reposition(index) {
    const wrapperWidth = this.wrapper.offsetWidth;
    const item = this.items[index];
    const offset = Math.max(0, item.offsetLeft - (wrapperWidth / 2) + (item.offsetWidth / 2));
    this.track.style.transform = `translateX(-${offset}px)`;
  }

  select(index) {
    this.items.forEach(item => item.classList.remove('active'));
    this.dots.forEach(dot => dot.classList.remove('active'));

    this.caption.classList.remove('carousel-prompt');
    this.caption.classList.remove('visible');

    requestAnimationFrame(() => {
      this.reposition(index);

      setTimeout(() => {
        this.items[index].classList.add('active');
        this.dots[index].classList.add('active');
        this.caption.textContent = this.items[index].dataset.caption;
        this.caption.classList.add('visible');
      }, 500);
    });

    this.currentIndex = index;
  }
}

customElements.define('image-carousel', ImageCarousel);