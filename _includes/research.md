<h2>Research</h2>

<div class="research-list">

  <div class="research-row">
    <div class="research-thumb">
      <img src="assets/img/iclr25.jpg" alt="Agentic reasoning and planning">
    </div>
    <div class="research-body">
      <div class="research-title">Agentic Reasoning and Planning</div>
      <div class="research-tldr">
        <strong>TL;DR:</strong> Building language agents that can reason, plan, and act in interactive environments by combining LLMs with reinforcement learning and search.
      </div>
      <div class="research-tags">
        <span class="tag tag-active">Game agents</span>
        <span class="tag tag-ongoing">Web agents</span>
        <span class="tag tag-ongoing">Multi-agent simulation</span>
      </div>
    </div>
  </div>

  <div class="research-row">
    <div class="research-thumb">
      <img src="assets/img/aaai24_2.png" alt="Trustworthy and aligned agents">
    </div>
    <div class="research-body">
      <div class="research-title">Trustworthy and Aligned Agents</div>
      <div class="research-tldr">
        <strong>TL;DR:</strong> Studying value alignment and social bias to make language agents safer and more responsible in open-ended settings.
      </div>
      <div class="research-tags">
        <span class="tag tag-active">Value alignment</span>
        <span class="tag tag-active">Social bias in LLMs</span>
      </div>
    </div>
  </div>

</div>

<style>
  .research-list {
    margin: 0 0 12px;
  }

  .research-row {
    display: flex;
    align-items: flex-start;
    gap: 18px;
    padding: 14px 0;
    border-bottom: 1px solid #eee;
  }
  .research-row:last-child { border-bottom: none; }

  .research-thumb {
    flex: 0 0 170px;
  }
  .research-thumb img {
    width: 170px;
    height: 115px;
    object-fit: cover;
    border-radius: 6px;
    box-shadow: 0 1px 5px rgba(0, 0, 0, 0.14);
    transition: transform 0.2s ease;
  }
  .research-row:hover .research-thumb img {
    transform: scale(1.02);
  }

  .research-body {
    flex: 1 1 auto;
    min-width: 0;
  }

  .research-title {
    font-size: 17px;
    font-weight: 600;
    color: #043361;
    margin-bottom: 4px;
    line-height: 1.3;
  }

  .research-tldr {
    font-size: 14.5px;
    line-height: 1.5;
    margin-bottom: 8px;
    color: #444;
  }

  .research-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
  }

  .tag {
    display: inline-block;
    font-size: 12.5px;
    line-height: 1.3;
    padding: 2px 9px;
    border-radius: 10px;
    letter-spacing: 0.2px;
    white-space: nowrap;
  }

  .tag-active {
    background: #043361;
    color: #fff;
    border: 1px solid #043361;
  }

  .tag-ongoing {
    background: transparent;
    color: #5a7290;
    border: 1px dashed #9fb1c8;
  }

  @media (prefers-color-scheme: dark) {
    .research-row { border-bottom-color: #2f303a; }
    .research-title { color: rgb(62, 183, 240); }
    .research-tldr { color: #c8c9cf; }

    .tag-active {
      background: #3eb7f0;
      color: #20212b;
      border-color: #3eb7f0;
    }
    .tag-ongoing {
      color: #8ea7c2;
      border-color: #4a5b73;
    }
  }

  @media (max-width: 600px) {
    .research-row {
      flex-direction: column;
      gap: 10px;
    }
    .research-thumb {
      flex: 0 0 auto;
      width: 100%;
    }
    .research-thumb img {
      width: 100%;
      height: auto;
      max-height: 180px;
    }
  }
</style>
