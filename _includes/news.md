<h2>News</h2>
<ul id="news-list" class="news-list">
  <li><strong>[Dec. 2025]</strong> Received the UTS AAII Student Best Paper Award in the category of AI Theory and Algorithms.</li>
  <li><strong>[Jan. 2025]</strong> One paper on <strong>planning capabilities of game agents</strong> has been accepted at ICLR conference. <a href="https://arxiv.org/abs/2504.16855" target="_blank">[Paper]</a></li>
  <li class="extra-news"><strong>[Dec. 2023]</strong> One paper has been accepted at AAAI 2024 (Oral, SRRAI Track).</li>
  <li class="extra-news"><strong>[Dec. 2023]</strong> Achieved HDR WiEIT (Women in Engineering and IT) Award.</li>
  <li class="extra-news"><strong>[Oct. 2023]</strong> Achieved 1st place in School of Computer Science Research Showcase.</li>
  <li class="extra-news"><strong>[Jan. 2023]</strong> One paper has been accepted at the EACL 2023 conference.</li>
  <li class="extra-news"><strong>[Jan. 2023]</strong> One paper has been accepted at the ICLR 2023 conference.</li>
</ul>

<button id="toggle-news" class="toggle-btn" onclick="toggleNews()">Show More</button>

<style>
  .news-list {
    list-style: none;
    padding-left: 0;
    margin: 0 0 8px;
  }
  .news-list li {
    position: relative;
    padding-left: 14px;
    margin-bottom: 4px;
    line-height: 1.45;
  }
  .news-list li::before {
    content: "";
    position: absolute;
    left: 2px;
    top: 0.65em;
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background: #043361;
    opacity: 0.55;
  }
  @media (prefers-color-scheme: dark) {
    .news-list li::before { background: #3eb7f0; }
  }

  .toggle-btn {
    display: inline-block;
    padding: 2px 10px;
    margin-left: -4px;
    background-color: transparent;
    border: none;
    border-radius: 4px;
    font-size: 12px;
    color: #0969da;
    cursor: pointer;
    transition: background-color 0.2s ease;
  }
  .toggle-btn:hover {
    background-color: rgba(9, 105, 218, 0.08);
  }
  @media (prefers-color-scheme: dark) {
    .toggle-btn { color: #3eb7f0; }
    .toggle-btn:hover { background-color: rgba(62, 183, 240, 0.12); }
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
