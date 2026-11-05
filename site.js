"use strict";

document.documentElement.classList.add("js");

const themeButton = document.querySelector("#theme-toggle");
const themeColor = document.querySelector('meta[name="theme-color"]');

function storedTheme() {
  try {
    const saved = localStorage.getItem("soykot-theme");
    return saved === "light" || saved === "dark" ? saved : null;
  } catch {
    return null;
  }
}

function setTheme(theme) {
  const isDark = theme === "dark";
  document.documentElement.dataset.theme = theme;
  themeButton.setAttribute("aria-pressed", String(isDark));
  themeButton.setAttribute("aria-label", isDark ? "Switch to light theme" : "Switch to dark theme");
  themeColor.content = isDark ? "#07091d" : "#f6f8ff";
}

setTheme(storedTheme() || "dark");
themeButton.hidden = false;
themeButton.addEventListener("click", () => {
  const chosenTheme = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
  setTheme(chosenTheme);
  try {
    localStorage.setItem("soykot-theme", chosenTheme);
  } catch {
    // Theme switching still works when storage is unavailable.
  }
});

const menuButton = document.querySelector("#menu-toggle");
const navigation = document.querySelector("#site-navigation");
menuButton.hidden = false;

function setMenu(isOpen) {
  menuButton.setAttribute("aria-expanded", String(isOpen));
  menuButton.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
  navigation.classList.toggle("is-open", isOpen);
}

menuButton.addEventListener("click", () => setMenu(menuButton.getAttribute("aria-expanded") !== "true"));
navigation.addEventListener("click", event => {
  if (event.target.closest("a")) setMenu(false);
});
document.addEventListener("keydown", event => {
  if (event.key === "Escape" && menuButton.getAttribute("aria-expanded") === "true") {
    setMenu(false);
    menuButton.focus();
  }
});
window.matchMedia("(max-width: 640px)").addEventListener("change", () => setMenu(false));

const filters = document.querySelector(".filters");
const projects = [...document.querySelectorAll(".project")];
const projectStatus = document.querySelector("#project-status");
filters.hidden = false;
filters.addEventListener("click", event => {
  const active = event.target.closest("button[data-filter]");
  if (!active) return;
  const category = active.dataset.filter;
  filters.querySelectorAll("button").forEach(button => {
    button.setAttribute("aria-pressed", String(button === active));
  });
  let visible = 0;
  projects.forEach(project => {
    project.hidden = category !== "all" && project.dataset.category !== category;
    if (!project.hidden) visible++;
  });
  projectStatus.textContent = `${visible} ${visible === 1 ? "project" : "projects"} shown.`;
});

const contactForm = document.querySelector("#contact-form");
contactForm.hidden = false;
contactForm.addEventListener("submit", event => {
  event.preventDefault();
  const data = new FormData(contactForm);
  const name = data.get("name").trim();
  const message = data.get("message").trim();
  if (!name || !message) return;
  const subject = encodeURIComponent(`Portfolio inquiry from ${name}`);
  const body = encodeURIComponent(`Hi Soykot,\n\n${message}\n\n${name}`);
  window.location.href = `mailto:shariyersoykot2000@gmail.com?subject=${subject}&body=${body}`;
});
