//source
const imgElementsWebp = document.querySelectorAll("source[data-srcset]");

const lazyLoadingImageWebp = (entries, observer) => {
   entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.srcset = entry.target.dataset.srcset;
      entry.target.addEventListener("load", () => {
         observer.unobserve(entry.target);
         lazyLoadingImage();
      });
   });
};
const lazyLoadingObserverWebp = new IntersectionObserver(lazyLoadingImageWebp, {
   threshold: 0.8,
});
imgElementsWebp.forEach((source) => lazyLoadingObserverWebp.observe(source));

//img

const imgElements = document.querySelectorAll("img[data-src]");

const lazyLoadingImage = (entries, observer) => {
   entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.src = entry.target.dataset.src;
      entry.target.addEventListener("load", () => {
         entry.target.classList.remove("lazy-img");
         observer.unobserve(entry.target);
      });
   });
};

const lazyLoadingObserver = new IntersectionObserver(lazyLoadingImage, {
   threshold: 0.01,
});
imgElements.forEach((img) => lazyLoadingObserver.observe(img));

/*
html
 <picture class="section-lazy">
         <source class="image" srcset="images/cat-small.webp" data-srcset="images/cat.webp" type="image/webp">
         <img class="image lazy-img" src="images/listen-small.jpg" data-src="images/listen.jpg" />
      </picture>

Css
.section-lazy {
   display: flex;
}

.lazy-img {
   filter: blur(10px);
}
*/