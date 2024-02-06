const tabs = document.querySelectorAll(".trending-searches a");
const rightArrow = document.querySelector(
  ".trending-searches .right-arrow svg"
);
const LeftArrow = document.querySelector(".trending-searches .left-arrow svg");
const tabsList = document.querySelector(".trending-searches ul");
const leftArrowContainer = document.querySelector(
  ".trending-searches .left-arrow"
);
const rightArrowContainer = document.querySelector(
  ".trending-searches .right-arrow"
);

let counter = 0;

const removeAllActiveClass = () => {
  tabs.forEach((tab) => {
    tab.classList.remove("active");
  });
};

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    removeAllActiveClass();
    tab.classList.add("active");
  });
});

const manageIcon = () => {
  if (tabsList.scrollLeft >= 0) leftArrowContainer.classList.add("active");
  else leftArrowContainer.classList.remove("active");

  if (counter >= 0) leftArrowContainer.classList.remove("active");
};

rightArrow.addEventListener("click", () => {
  tabsList.scrollLeft += 200;
  counter--;
  manageIcon();
});

LeftArrow.addEventListener("click", () => {
  tabsList.scrollLeft -= 200;
  counter++;
  manageIcon();
});

tabsList.addEventListener("scroll", manageIcon);

let dragging = false;

const drag = (e) => {
  if (!dragging) return;
  tabsList.classList.add("dragging");
  tabsList.scrollLeft -= e.movementX;
};

tabsList.addEventListener("mousedown", () => {
  dragging = true;
});

tabsList.addEventListener("mousemove", drag);

document.addEventListener("mouseup", () => {
  dragging = false;
  tabsList.classList.remove("dragging");
});

function playVideo(url) {
  window.location.href = url;
}