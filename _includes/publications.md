<style>
  :root{
    --thumb-w:110px;   
    --thumb-h:80px;   
  }
  .publications{ margin:0; padding:0; }

  .pub-row{
    margin:6px 0;      
    display:flex;
    align-items:flex-start;
  }

  .pub-row .abbr{
    width:calc(var(--thumb-w) + 8px);
    flex:0 0 calc(var(--thumb-w) + 8px);
    padding:0 4px;
    position:relative;
  }
  .pub-row img.teaser{
    width:var(--thumb-w) !important;
    height:var(--thumb-h) !important;
    object-fit:cover;
  }

  .pub-row .col-sm-9{ padding:0 14px; }

  .pub-row .title{ font-size:15px; margin:0; }
  .pub-row .author,
  .pub-row .periodical{ font-size:12px; }
  .pub-row .links a{ font-size:12px !important; }

  .abbr > .badge{
    position: absolute;
    top: 4px;
    left: 4px;
    padding: 2px 4px;
    background: #17a2b8;  
    color: #fff;
    font-size: 10px;
    border-radius: 2px;
    line-height: 1;
    z-index: 1;       
  }
</style>


<h2 id="publications" style="margin:12px 0 12px;">Selected Papers</h2>

<div class="publications">

  <div class="pub-row">
    <div class="col-sm-3 abbr">
      <img src="assets/img/iclr25.jpg" class="teaser img-fluid z-depth-1">
      <abbr class="badge">ICLR</abbr>
    </div>
    <div class="col-sm-9">
      <div class="title">
        <a href="https://arxiv.org/abs/2504.16855" target="_blank">
          Monte Carlo Planning with Large Language Models for Text‑based Game Agents
        </a>
      </div>
      <div class="author"><strong>Zijing Shi</strong>, Meng Fang, Ling Chen</div>
      <div class="periodical"><em><strong>ICLR</strong> 2025.</em></div>
      <div class="links">
        <a href="https://arxiv.org/abs/2504.16855" class="btn btn-sm z-depth-0" target="_blank">PDF</a>
        <a href="https://textgamer.github.io/mc-dml" class="btn btn-sm z-depth-0" target="_blank">Code</a>
      </div>
    </div>
  </div>

  <div class="pub-row">
    <div class="col-sm-3 abbr">
      <img src="assets/img/aaai24_1.png" class="teaser img-fluid z-depth-1">
      <abbr class="badge">AAAI</abbr>
    </div>
    <div class="col-sm-9">
      <div class="title"><a target="_blank">Large Language Models are Neurosymbolic Reasoners</a></div>
      <div class="author">Meng Fang*, Shilong Deng*, Yudi Zhang*, <strong>Zijing Shi</strong>, Ling Chen, Mykola Pechenizkiy, Jun Wang</div>
      <div class="periodical"><em><strong>AAAI</strong> 2024.</em></div>
      <div class="links">
        <a href="https://arxiv.org/abs/2401.09334" class="btn btn-sm z-depth-0" target="_blank">PDF</a>
        <a href="https://github.com/hyintell/LLMSymbolic" class="btn btn-sm z-depth-0" target="_blank">Code</a>
      </div>
    </div>
  </div>

  <div class="pub-row">
    <div class="col-sm-3 abbr">
      <img src="assets/img/aaai24_2.png" class="teaser img-fluid z-depth-1">
      <abbr class="badge">AAAI</abbr>
    </div>
    <div class="col-sm-9">
      <div class="title"><a target="_blank">Human‑Guided Moral Decision Making in Text‑based Games</a></div>
      <div class="author"><strong>Zijing Shi</strong>, Meng Fang, Ling Chen, Yali Du, Jun Wang</div>
      <div class="periodical"><em><strong>AAAI (Oral)</strong> 2024.</em></div>
      <div class="links">
        <a href="https://kclpure.kcl.ac.uk/ws/portalfiles/portal/241855945/AAAI_humal_3_.pdf" class="btn btn-sm z-depth-0" target="_blank">PDF</a>
        <a href="https://winni18.github.io/" class="btn btn-sm z-depth-0" target="_blank">Code</a>
      </div>
    </div>
  </div>

  <div class="pub-row">
    <div class="col-sm-3 abbr">
      <img src="assets/img/acl2023.png" class="teaser img-fluid z-depth-1">
      <abbr class="badge">ACL</abbr>
    </div>
    <div class="col-sm-9">
      <div class="title">
        <a href="https://arxiv.org/abs/2305.11262" target="_blank">
          CHBias: Bias Evaluation and Mitigation of Chinese Conversational Language Models
        </a>
      </div>
      <div class="author">Jiaxu Zhao*, Meng Fang*, <strong>Zijing Shi</strong>, Yitong Li, Ling Chen, Mykola Pechenizkiy</div>
      <div class="periodical"><em><strong>ACL</strong> 2023.</em></div>
      <div class="links">
        <a href="https://arxiv.org/abs/2305.11262" class="btn btn-sm z-depth-0" target="_blank">PDF</a>
        <a href="https://github.com/hyintell/CHBias" class="btn btn-sm z-depth-0" target="_blank">Code</a>
      </div>
    </div>
  </div>

  <div class="pub-row">
    <div class="col-sm-3 abbr">
      <img src="assets/img/iclr2023.png" class="teaser img-fluid z-depth-1">
      <abbr class="badge">ICLR</abbr>
    </div>
    <div class="col-sm-9">
      <div class="title">
        <a href="https://openreview.net/pdf?id=CtS2Rs_aYk" target="_blank">
          Stay Moral and Explore: Learn to Behave Morally in Text‑based Games
        </a>
      </div>
      <div class="author"><strong>Zijing Shi*</strong>, Meng Fang*, Yunqiu Xu, Ling Chen, Yali Du</div>
      <div class="periodical"><em><strong>ICLR</strong> 2023.</em></div>
      <div class="links">
        <a href="https://openreview.net/pdf?id=CtS2Rs_aYk" class="btn btn-sm z-depth-0" target="_blank">PDF</a>
        <a href="https://github.com/winni18/MorAL" class="btn btn-sm z-depth-0" target="_blank">Code</a>
      </div>
    </div>
  </div>

  <div class="pub-row">
    <div class="col-sm-3 abbr">
      <img src="assets/img/eacl2023.png" class="teaser img-fluid z-depth-1">
      <abbr class="badge">EACL</abbr>
    </div>
    <div class="col-sm-9">
      <div class="title">
        <a href="https://aclanthology.org/2023.eacl-main.50.pdf" target="_blank">
          Self‑imitation Learning for Action Generation in Text‑based Games
        </a>
      </div>
      <div class="author"><strong>Zijing Shi</strong>, Yunqiu Xu, Meng Fang, Ling Chen</div>
      <div class="periodical"><em><strong>EACL</strong> 2023.</em></div>
      <div class="links">
        <a href="https://aclanthology.org/2023.eacl-main.50.pdf" class="btn btn-sm z-depth-0" target="_blank">PDF</a>
        <a href="https://github.com/winni18/CSM" class="btn btn-sm z-depth-0" target="_blank">Code</a>
      </div>
    </div>
  </div>

</div>
