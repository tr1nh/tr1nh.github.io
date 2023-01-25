window.onload = (event) => {
  let style = localStorage.getItem("themeColor");

  let buttons = document.querySelectorAll(".header__button");
  for (let i = 0; i < buttons.length; i++) {
    let selector = buttons[i];
    selector.classList.remove("bg-[var(--primary)]");
    selector.classList.remove("bg-[var(--secondary)]");

    let attr = selector.getAttribute("onclick");
    let onClickValue = attr.split(", ")[1].replace(/'/g, "").replace(/\)/g, "");

    if (onClickValue == style) {
      selector.click();
      return;
    }
  }

  document.querySelector(".header__button").click();
};

function updateThemeColor(event, style) {
  localStorage.setItem("themeColor", style);

  let fgColor =
    style == "red"
      ? "#f70673"
      : style == "green"
      ? "#19f647"
      : style == "blue"
      ? "#03d1eb"
      : "blue";
  let bgColor =
    style == "red"
      ? "#0d0007"
      : style == "green"
      ? "#000a06"
      : style == "blue"
      ? "#01050d"
      : "white";

  let root = document.documentElement;
  root.style.setProperty("--secondary", bgColor);
  root.style.setProperty("--primary", fgColor);

  let headerButtons = document.querySelectorAll(".header__button");

  headerButtons.forEach((element) =>
    element.classList.remove("bg-[var(--primary)]")
  );
  headerButtons.forEach((element) =>
    element.classList.remove("text-[var(--secondary)]")
  );
  event.currentTarget.classList.add("bg-[var(--primary)]");
  event.currentTarget.classList.add("text-[var(--secondary)]");

  let imageUrl = `./images/avatar-${style}.png`;
  document.querySelector("img#avatar").src = imageUrl;
}
