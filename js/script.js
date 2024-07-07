//slider

const prevButton = document.querySelector(".slider__button--previous");
const nextButton = document.querySelector(".slider__button--next");

const productFeatures = document.querySelectorAll(".products__feature");
const productImages = document.querySelectorAll(".products__image");

let currentIndex = 0;
const countFeatures = 5;
const countElements = 3;

prevButton.addEventListener("click", () => {
  if (currentIndex - 1 !== -1) {
    currentIndex -= 1;
  } else return;

  productImages.item(currentIndex).classList.add("products__feature--active");
  productImages
    .item(currentIndex + 1)
    .classList.remove("products__feature--active");

  for (let index = 0; index < countFeatures * countElements; index++) {
    productFeatures.item(index).classList.remove("products__feature--active");
    if (
      index >= currentIndex * countFeatures &&
      index < (currentIndex + 1) * countFeatures
    )
      productFeatures.item(index).classList.add("products__feature--active");
  }
});

nextButton.addEventListener("click", () => {
  if (currentIndex + 1 !== countElements) currentIndex += 1;
  else return;
  productImages.item(currentIndex).classList.add("products__feature--active");
  productImages
    .item(currentIndex - 1)
    .classList.remove("products__feature--active");
  for (
    let index = 0;
    index < currentIndex * countFeatures + countFeatures;
    index++
  ) {
    if (
      index >= currentIndex * countFeatures &&
      index < currentIndex * countFeatures * 2
    )
      productFeatures.item(index).classList.add("products__feature--active");
    else
      productFeatures.item(index).classList.remove("products__feature--active");
  }
});

const intersectionCallbackFadeLeft = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("fade-left-animation");
      observer.unobserve(entry.target);
    }
  });
};

const observerFadeLeft = new IntersectionObserver(
  intersectionCallbackFadeLeft,
  {
    threshold: 1,
  }
);

const fadeLeftElements = document.querySelectorAll(".adventages__icon");

fadeLeftElements.forEach((el) => {
  observerFadeLeft.observe(el);
});

//
const intersectionCallbackPopup = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("popup-animation");
      observer.unobserve(entry.target);
    }
  });
};

const observerPopup = new IntersectionObserver(intersectionCallbackPopup, {
  threshold: 1,
});

const productPopupElement = document.querySelector(".products__title");
const differenceEl = document.querySelector(".difference__item-image--popup");

const popupElements = [productPopupElement, differenceEl];

popupElements.forEach((el) => {
  observerPopup.observe(el);
});

const intersectionCallbackSVG = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      svgEl.forEach((el, idx) => {
        el.classList.add(`document-${idx + 1}`);
      });

      differenceNumbers.forEach((el, idx) => {
        if (idx === 0) el.classList.add("fade-left-animation");
        else el.classList.add("fade-right-animation");
      });
      differenceCycle.classList.add("rotate-animation");
    }
  });
};

const observerSVG = new IntersectionObserver(intersectionCallbackSVG, {
  threshold: 1,
});

const svgEl = document.querySelectorAll(".st0");
const differenceItem = document.querySelector(".difference-svg");
const differenceNumbers = document.querySelectorAll(".difference__number");
const differenceCycle = document.querySelector(
  ".difference__item-image--rotate"
);

observerSVG.observe(differenceItem);
