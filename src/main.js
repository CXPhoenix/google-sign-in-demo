import "./style.css";

const theUrl = new URL(
  "https://script.google.com/macros/s/AKfycbyFEs4TQA75LMokHGhVFlmj7kweeifp9_CUJnChEHavI3R0gky9eQzmkc0dRMit5wGi/exec"
);

const token = "6YCZ5piv6Yej6a2a57ay56uZ5L2g5oeC5b6X";

window.addEventListener("DOMContentLoaded", function () {
  theUrl.searchParams.append("webUp", "1");
  theUrl.searchParams.append(
    "email",
    new URLSearchParams(window.location.search).get("email")
  );
  fetch(theUrl)
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
    })
    .then((doc) => {
      console.log(doc.state);
    })
    .catch((e) => console.log(e));
});

const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const headers = new Headers();
  headers.append("Content-Type", "text/plain");
  const fetchOptions = {
    headers,
    method: "POST",
  };

  fetch(theUrl, fetchOptions)
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
    })
    .then((doc) => {
      setTimeout(() => {
        window.location.href = "https://newtalk.tw/news/view/2022-06-01/763941";
      });
    })
    .catch((e) => console.log(e));
});

const p = document.querySelector("#email-text");
const pw = document.querySelector("#email-pwd");
if (p) {
  form["googleAddr"].addEventListener("input", (e) => {
    if (e.target.value === "") {
      p.classList.remove(
        "left-[0.4rem]",
        "-translate-y-[1.45rem]",
        "bg-white",
        "px-[6px]",
        "text-xs",
        "text-blue-700"
      );
      return;
    }
    p.classList.add(
      "left-[0.4rem]",
      "-translate-y-[1.45rem]",
      "bg-white",
      "px-[6px]",
      "text-xs",
      "text-blue-700"
    );
  });
}

if (pw) {
  form["googlePwd"].addEventListener("input", (e) => {
    if (e.target.value === "") {
      pw.classList.remove(
        "left-[0.4rem]",
        "-translate-y-[1.45rem]",
        "bg-white",
        "px-[6px]",
        "text-xs",
        "text-blue-700"
      );
      return;
    }
    pw.classList.add(
      "left-[0.4rem]",
      "-translate-y-[1.45rem]",
      "bg-white",
      "px-[6px]",
      "text-xs",
      "text-blue-700"
    );
  });
}

const red = "#ea4335";
const yellow = "#fbbc05";

if (new URLSearchParams(window.location.search).get("reverse") === "1") {
  document.querySelector("#first-o").setAttribute("fill", yellow);
  document.querySelector("#second-o").setAttribute("fill", red);
}
