<h2>News</h2>
<ul id="news-list">
  <li><strong>[Jan. 2025]</strong> One paper has been accepted at ICLR conference.</li>
  <li><strong>[Dec. 2024]</strong> One co-authored paper has been accepted at NAACL 2024 conference.</li>
  <li><strong>[Dec. 2024]</strong> One co-authored paper has been accepted at AAMAS 2025 (Short paper).</li>
  <li class="extra-news"><strong>[Jun. 2024]</strong> One co-authored paper has been accepted at ECAI conference.</li>
  <li class="extra-news"><strong>[May 2024]</strong> One co-authored paper has been accepted at ACL 2024 findings.</li>
  <li class="extra-news"><strong>[Dec. 2023]</strong> One co-authored paper has been accepted at AAAI 2024 (Main Track).</li>
  <li class="extra-news"><strong>[Dec. 2023]</strong> One paper has been accepted at AAAI 2024 (Oral, SRRAI Track).</li>
  <li class="extra-news"><strong>[Dec. 2023]</strong> Achieved HDR WiEIT (Women in Engineering and IT) Award.</li>
  <li class="extra-news"><strong>[Oct. 2023]</strong> Achieved 1st place in School of Computer Science Research Showcase.</li>
  <li class="extra-news"><strong>[Apr. 2023]</strong> One co-authored paper has been accepted at the ACL 2023 conference.</li>
  <li class="extra-news"><strong>[Jan. 2023]</strong> One paper has been accepted at the EACL 2023 conference.</li>
  <li class="extra-news"><strong>[Jan. 2023]</strong> One paper has been accepted at the ICLR 2023 conference.</li>
</ul>

<button id="toggle-news" onclick="toggleNews()" style="
  display: inline;
  padding: 2px 10px;
  background-color: transparent;
  border: none;
  border-radius: 4px;
  font-size: 12px;
  color: #0969da;
  cursor: pointer;
  transition: background-color 0.2s ease;
">
  Show More
</button>

<style>
  #toggle-news:hover {
    background-color: rgba(9, 105, 218, 0.08);
  }
</style>


<script>
  function toggleNews() {
    const moreItems = document.querySelectorAll(".extra-news");
    const btn = document.getElementById("toggle-news");
    const isHidden = moreItems[0].style.display === "none" || !moreItems[0].style.display;
    moreItems.forEach(item => {
      item.style.display = isHidden ? "list-item" : "none";
    });
    btn.innerText = isHidden ? "Show Less" : "Show More";
  }

  document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".extra-news").forEach(item => item.style.display = "none");
  });
</script>
