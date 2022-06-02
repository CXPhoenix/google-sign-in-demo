import "./style.css";

const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
});

const p = document.querySelector("#email-text");
form["googleAddr"].addEventListener("input", (e) => {
  if (e.target.value === "") {
    p.classList.remove(
      "left-[0.4rem]",
      "-translate-y-[1.45rem]",
      "bg-[#222]",
      "px-[6px]",
      "text-xs",
      "text-blue-700"
    );
    return;
  }
  p.classList.add(
    "left-[0.4rem]",
    "-translate-y-[1.45rem]",
    "bg-[#222]",
    "px-[6px]",
    "text-xs",
    "text-blue-700"
  );
});

const red = "#ea4335";
const yellow = "#fbbc05";
