<h2>News</h2>

<ul id="news-list" class="news-list">
  <li><time>Dec 2025</time><span>Received the UTS AAII Student Best Paper Award in the category of AI Theory and Algorithms.</span></li>
  <li><time>Jan 2025</time><span>One paper on <strong>planning capabilities of game agents</strong> has been accepted at ICLR conference. <a href="https://arxiv.org/abs/2504.16855" target="_blank">[Paper]</a></span></li>
  <li class="extra-news"><time>Dec 2023</time><span>One paper has been accepted at AAAI 2024 (Oral, SRRAI Track).</span></li>
  <li class="extra-news"><time>Dec 2023</time><span>Achieved HDR WiEIT (Women in Engineering and IT) Award.</span></li>
  <li class="extra-news"><time>Oct 2023</time><span>Achieved 1st place in School of Computer Science Research Showcase.</span></li>
  <li class="extra-news"><time>Jan 2023</time><span>One paper has been accepted at the EACL 2023 conference.</span></li>
  <li class="extra-news"><time>Jan 2023</time><span>One paper has been accepted at the ICLR 2023 conference.</span></li>
</ul>

<button id="toggle-news" class="toggle-btn" onclick="toggleNews()">Show More</button>

<style>
  .news-list {
    list-style: none;
    padding-left: 0;
    margin: 0 0 6px;
  }

  .news-list li {
    display: flex;
    align-items: baseline;
    gap: 14px;
    padding: 4px 0;
    line-height: 1.5;
    border-bottom: 1px dashed transparent;
  }

  .news-list li:hover {
    border-bottom-color: rgba(4, 51, 97, 0.12);
  }

  .news-list li time {
    flex: 0 0 86px;
    font-size: 12.5px;
    font-weight: 600;
    letter-spacing: 0.3px;
    color: #fff;
    background: #043361;
    padding: 1px 6px;
    border-radius: 3px;
    text-align: center;
    align-self: flex-start;
    margin-top: 4px;
  }

  .news-list li span {
    flex: 1 1 auto;
  }

  @media (prefers-color-scheme: dark) {
    .news-list li time {
      background: #3eb7f0;
      color: #20212b;
    }
    .news-list li:hover {
      border-bottom-color: rgba(62, 183, 240, 0.2);
    }
  }

  .toggle-btn {
    display: inline-block;
    padding: 3px 12px;
    margin: 4px 0 0;
    background-color: transparent;
    border: 1px solid rgba(9, 105, 218, 0.4);
    border-radius: 4px;
    font-size: 12px;
    color: #0969da;
    cursor: pointer;
    transition: background-color 0.2s ease, color 0.2s ease;
  }
  .toggle-btn:hover {
    background-color: #0969da;
    color: #fff;
  }
  @media (prefers-color-scheme: dark) {
    .toggle-btn {
      color: #3eb7f0;
      border-color: rgba(62, 183, 240, 0.4);
    }
    .toggle-btn:hover {
      background-color: #3eb7f0;
      color: #20212b;
    }
  }

  @media (max-width: 480px) {
    .news-list li { flex-direction: column; gap: 4px; }
    .news-list li time { flex: 0 0 auto; align-self: flex-start; }
  }
</style>


<script>
  function toggleNews() {
    const moreItems = document.querySelectorAll(".extra-news");
    const btn = document.getElementById("toggle-news");
    const isHidden = moreItems[0].style.display === "none" || !moreItems[0].style.display;
    moreItems.forEach(item => {
      item.style.display = isHidden ? "flex" : "none";
    });
    btn.innerText = isHidden ? "Show Less" : "Show More";
  }

  document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".extra-news").forEach(item => item.style.display = "none");
  });
</script>
