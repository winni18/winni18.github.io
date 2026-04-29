function toggleNews() {
  const moreItems = document.querySelectorAll(".extra-news");
  const btn = document.getElementById("toggle-news");
  if (!btn || moreItems.length === 0) return;
  const isHidden = moreItems[0].style.display === "none" || !moreItems[0].style.display;
  moreItems.forEach(item => {
    item.style.display = isHidden ? "flex" : "none";
  });
  btn.innerText = isHidden ? "Show Less" : "Show More";
}

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".extra-news").forEach(item => {
    item.style.display = "none";
  });
});
