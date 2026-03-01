const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");
const year = document.getElementById("year");

if (year) {
  year.textContent = new Date().getFullYear();
}

if (menuBtn && nav) {
  const setMenuState = (isOpen) => {
    nav.classList.toggle("open", isOpen);
    menuBtn.setAttribute("aria-expanded", String(isOpen));
  };

  menuBtn.addEventListener("click", () => {
    setMenuState(!nav.classList.contains("open"));
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => setMenuState(false));
  });

  document.addEventListener("click", (event) => {
    if (!nav.classList.contains("open")) return;
    if (nav.contains(event.target) || menuBtn.contains(event.target)) return;
    setMenuState(false);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") setMenuState(false);
  });
}

const youtubeVideos = [
  "l123QxZveZU",
  "qokkXLRpZB0",
  "JxcLVEQT5qo",
  "Fe6_G5cW_ds",
  "FeKNtzpxPoI",
  "BfjNWj-2YAY",
  "NGSiqFWB_Jw",
  "GknlQiUsC24",
  "IiTNj0B8rsU",
  "MnIyxUZ4fdo",
  "3vR3ZPY2TRs",
  "4pmRAiArBkM",
  "tbUCDLzwA4Y",
  "p5s75eNvxSY",
  "-_qbI5ClmMU"
];

const instagramReelIds = [
  "DU_B9STk_Wg",
  "DUddpUDE6Ps",
  "DUdbz3yk1XC",
  "DUOWYI4Ez0t",
  "DTgFdq2E8ZV",
  "DTbLF-9kwzG"
];

const blogPosts = [
  { title: "Starting Cypress Automation From Zero", url: "https://aigen023.blogspot.com/2025/12/starting-cypress-automation-from-zero.html" },
  { title: "Selenium Automation With Python", url: "https://aigen023.blogspot.com/2025/12/selenium-automation-with-python.html" },
  { title: "Getting Started With Python", url: "https://aigen023.blogspot.com/2025/07/getting-started-with-python-for.html" },
  { title: "What Is Automation Testing?", url: "https://aigen023.blogspot.com/2025/07/blog-1-what-is-automation-testing-why.html" },
  { title: "JavaScript For Web Development", url: "https://aigen023.blogspot.com/2025/04/javascript-for-web-development-your.html" },
  { title: "Introduction to Neural Networks", url: "https://aigen023.blogspot.com/2024/10/introduction-to-neural-networks.html" }
];

function getRandomItem(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function updatePublicContent() {
  const youtubeFrame = document.getElementById("youtubeFrame");
  const youtubeLink = document.getElementById("youtubeLink");
  const instaFrame = document.getElementById("instaFrame");
  const instaLink = document.getElementById("instaLink");
  const blogFrame = document.getElementById("blogFrame");
  const blogLink = document.getElementById("blogLink");

  if (!youtubeFrame || !youtubeLink || !instaFrame || !instaLink || !blogFrame || !blogLink) return;

  const yt = getRandomItem(youtubeVideos);
  youtubeFrame.src = `https://www.youtube.com/embed/${yt}`;
  youtubeLink.href = `https://www.youtube.com/shorts/${yt}`;

  const reelId = getRandomItem(instagramReelIds);
  instaFrame.src = `https://www.instagram.com/reel/${reelId}/embed`;
  instaLink.href = `https://www.instagram.com/reel/${reelId}/`;

  const blog = getRandomItem(blogPosts);
  blogFrame.src = blog.url;
  blogLink.href = blog.url;
}

document.addEventListener("DOMContentLoaded", updatePublicContent);
