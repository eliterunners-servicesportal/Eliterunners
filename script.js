window.onload = () => {
  const e = document.getElementById("letter-e");
  const r = document.getElementById("letter-r");
  const title = document.getElementById("full-title");
  const slogan = document.getElementById("slogan");
  const logo = document.getElementById("floating-logo");

  /* Step 1 — Bring in letters */
  setTimeout(() => {
    e.style.transition = "1.8s";
    r.style.transition = "1.8s";

    e.style.opacity = 1;
    r.style.opacity = 1;

    e.style.top = "0px";
    e.style.left = "0px";

    r.style.bottom = "0px";
    r.style.right = "0px";
  }, 300);

  /* Step 2 — Show full title */
  setTimeout(() => {
    title.style.transition = "1s";
    title.style.opacity = 1;
  }, 2500);

  /* Step 3 — Show slogan */
  setTimeout(() => {
    slogan.style.transition = "1s";
    slogan.style.opacity = 1;
  }, 3500);

  /* Step 4 — Show floating logo */
  setTimeout(() => {
    logo.style.transition = "1s";
    logo.style.opacity = 1;
  }, 4500);

  /* Step 5 — Redirect to homepage */
  setTimeout(() => {
    window.location.href = "index.html";
  }, 6500);
};