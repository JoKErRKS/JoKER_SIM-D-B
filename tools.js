/* JOKER RKS // PREMIUM TOOL HUB v3 */

(function () {
  "use strict";

  const area = document.querySelector("#tools .tools");
  if (!area) return;

  /* =========================================
     TOOL HUB
     ========================================= */

  area.innerHTML = `
    <div class="jr-hub-head">
      <div>
        <span class="jr-mini-label">JOKER RKS // DIGITAL TOOL SYSTEM</span>
        <h3>TOOL <span>HUB</span></h3>
      </div>

      <div class="jr-tool-count">
        <strong>08</strong>
        <span>TOOLS ONLINE</span>
      </div>
    </div>

    <div class="jr-search-wrap">
      <span>⌕</span>
      <input
        id="jrToolSearch"
        type="search"
        placeholder="SEARCH TOOLS..."
        autocomplete="off"
      >
    </div>

    <div class="jr-filters">
      <button class="jr-filter active" data-filter="all">ALL</button>
      <button class="jr-filter" data-filter="text">TEXT</button>
      <button class="jr-filter" data-filter="dev">DEV</button>
      <button class="jr-filter" data-filter="utility">UTILITY</button>
      <button class="jr-filter" data-filter="media">MEDIA</button>
    </div>

    <div class="jr-tool-grid">

      <article class="jr-tool-card" data-category="text" data-search="text editor word character counter text lab">
        <div class="jr-card-top">
          <span>01</span>
          <i>TEXT</i>
        </div>
        <div class="jr-icon">T</div>
        <h3>TEXT LAB</h3>
        <p>Write, clean, transform and analyze text instantly.</p>
        <button class="jr-tool-btn" data-tool="text">OPEN TOOL <b>→</b></button>
      </article>

      <article class="jr-tool-card" data-category="utility" data-search="qr qr code generator link utility">
        <div class="jr-card-top">
          <span>02</span>
          <i>UTILITY</i>
        </div>
        <div class="jr-icon">▣</div>
        <h3>QR LAB</h3>
        <p>Generate a QR code from any text, number or link.</p>
        <button class="jr-tool-btn" data-tool="qr">OPEN TOOL <b>→</b></button>
      </article>

      <article class="jr-tool-card" data-category="dev" data-search="developer json base64 coding developer tools">
        <div class="jr-card-top">
          <span>03</span>
          <i>DEV</i>
        </div>
        <div class="jr-icon">{ }</div>
        <h3>DEV LAB</h3>
        <p>Format JSON and encode or decode Base64 data.</p>
        <button class="jr-tool-btn" data-tool="dev">OPEN TOOL <b>→</b></button>
      </article>

      <article class="jr-tool-card" data-category="utility" data-search="url link analyzer url lab utility">
        <div class="jr-card-top">
          <span>04</span>
          <i>UTILITY</i>
        </div>
        <div class="jr-icon">↗</div>
        <h3>URL LAB</h3>
        <p>Inspect, clean and encode URL components.</p>
        <button class="jr-tool-btn" data-tool="url">OPEN TOOL <b>→</b></button>
      </article>

      <article class="jr-tool-card" data-category="dev" data-search="timestamp unix time developer converter">
        <div class="jr-card-top">
          <span>05</span>
          <i>DEV</i>
        </div>
        <div class="jr-icon">⌁</div>
        <h3>TIME LAB</h3>
        <p>Generate Unix timestamps and convert timestamps.</p>
        <button class="jr-tool-btn" data-tool="time">OPEN TOOL <b>→</b></button>
      </article>

      <article class="jr-tool-card" data-category="utility" data-search="calculator math calculate utility">
        <div class="jr-card-top">
          <span>06</span>
          <i>UTILITY</i>
        </div>
        <div class="jr-icon">+</div>
        <h3>CALC LAB</h3>
        <p>Quick calculations directly inside the tool hub.</p>
        <button class="jr-tool-btn" data-tool="calc">OPEN TOOL <b>→</b></button>
      </article>

      <article class="jr-tool-card" data-category="text" data-search="case converter uppercase lowercase text">
        <div class="jr-card-top">
          <span>07</span>
          <i>TEXT</i>
        </div>
        <div class="jr-icon">Aa</div>
        <h3>CASE LAB</h3>
        <p>Convert text between uppercase, lowercase and title case.</p>
        <button class="jr-tool-btn" data-tool="case">OPEN TOOL <b>→</b></button>
      </article>

      <article class="jr-tool-card" data-category="media" data-search="image url image tools media">
        <div class="jr-card-top">
          <span>08</span>
          <i>MEDIA</i>
        </div>
        <div class="jr-icon">◈</div>
        <h3>IMAGE LAB</h3>
        <p>Preview an image from a direct image URL.</p>
        <button class="jr-tool-btn" data-tool="image">OPEN TOOL <b>→</b></button>
      </article>

    </div>

    <div id="jrNoTools" class="jr-no-tools">
      NO TOOLS FOUND
    </div>
  `;


  /* =========================================
     PREMIUM CSS
     ========================================= */

  const css = document.createElement("style");

  css.textContent = `

    #tools .tools {
      display:block;
    }

    #tools .jr-hub-head {
      display:flex;
      justify-content:space-between;
      align-items:flex-end;
      gap:20px;
      margin-bottom:22px;
    }

    #tools .jr-mini-label {
      display:block;
      margin-bottom:7px;
      color:#888;
      font-size:9px;
      letter-spacing:2px;
    }

    #tools .jr-hub-head h3 {
      margin:0;
      font-size:25px;
      letter-spacing:3px;
    }

    #tools .jr-hub-head h3 span {
      color:#00eaff;
    }

    #tools .jr-tool-count {
      min-width:115px;
      padding:10px 13px;
      border:1px solid rgba(255,255,255,.14);
      background:rgba(0,0,0,.25);
      text-align:right;
    }

    #tools .jr-tool-count strong {
      display:block;
      font-size:20px;
      color:#fff;
    }

    #tools .jr-tool-count span {
      color:#777;
      font-size:8px;
      letter-spacing:1.5px;
    }

    #tools .jr-search-wrap {
      display:flex;
      align-items:center;
      gap:10px;
      margin-bottom:12px;
      padding:0 14px;
      border:1px solid rgba(255,255,255,.16);
      background:rgba(0,0,0,.3);
    }

    #tools .jr-search-wrap span {
      color:#00eaff;
      font-size:22px;
    }

    #tools #jrToolSearch {
      width:100%;
      padding:14px 0;
      border:0;
      outline:0;
      background:transparent;
      color:#fff;
      font:11px monospace;
      letter-spacing:1px;
    }

    #tools #jrToolSearch::placeholder {
      color:#666;
    }

    #tools .jr-filters {
      display:flex;
      flex-wrap:wrap;
      gap:7px;
      margin-bottom:18px;
    }

    #tools .jr-filter {
      padding:8px 12px;
      border:1px solid #292929;
      background:rgba(0,0,0,.3);
      color:#888;
      cursor:pointer;
      font:9px monospace;
      letter-spacing:1.5px;
      transition:.2s;
    }

    #tools .jr-filter:hover,
    #tools .jr-filter.active {
      border-color:#00eaff;
      color:#fff;
      box-shadow:0 0 15px rgba(0,234,255,.12);
    }

    #tools .jr-tool-grid {
      display:grid;
      grid-template-columns:repeat(3,minmax(0,1fr));
      gap:12px;
    }

    #tools .jr-tool-card {
      position:relative;
      min-height:245px;
      padding:20px;
      overflow:hidden;
      border:1px solid rgba(255,255,255,.13);
      background:
        linear-gradient(
          145deg,
          rgba(255,255,255,.055),
          rgba(0,0,0,.35)
        );
      transition:
        transform .25s ease,
        border-color .25s ease,
        box-shadow .25s ease;
    }

    #tools .jr-tool-card::before {
      content:"";
      position:absolute;
      left:0;
      top:0;
      width:100%;
      height:2px;
      background:linear-gradient(
        90deg,
        #ff2da8,
        #00eaff,
        #00ff9d,
        #9b5cff
      );
      opacity:.7;
    }

    #tools .jr-tool-card:hover {
      transform:translateY(-5px);
      border-color:rgba(0,234,255,.5);
      box-shadow:
        0 15px 45px rgba(0,0,0,.35),
        0 0 25px rgba(0,234,255,.08);
    }

    #tools .jr-card-top {
      display:flex;
      justify-content:space-between;
      align-items:center;
      color:#777;
      font:9px monospace;
      letter-spacing:1.5px;
    }

    #tools .jr-card-top i {
      color:#555;
      font-style:normal;
    }

    #tools .jr-icon {
      display:flex;
      align-items:center;
      justify-content:center;
      width:48px;
      height:48px;
      margin:22px 0 14px;
      border:1px solid rgba(0,234,255,.25);
      color:#00eaff;
      background:rgba(0,234,255,.035);
      font:bold 16px monospace;
      box-shadow:inset 0 0 20px rgba(0,234,255,.035);
    }

    #tools .jr-tool-card h3 {
      margin:0 0 8px;
      color:#fff;
      font-size:14px;
      letter-spacing:1.5px;
    }

    #tools .jr-tool-card p {
      min-height:38px;
      margin:0;
      color:#888;
      font-size:11px;
      line-height:1.6;
    }

    #tools .jr-tool-btn {
      margin-top:16px;
      padding:10px 13px;
      border:1px solid rgba(255,255,255,.25);
      background:transparent;
      color:#eee;
      cursor:pointer;
      font:9px monospace;
      letter-spacing:1.5px;
      transition:.2s;
    }

    #tools .jr-tool-btn b {
      color:#00eaff;
    }

    #tools .jr-tool-btn:hover {
      border-color:#00eaff;
      background:rgba(0,234,255,.08);
      box-shadow:0 0 18px rgba(0,234,255,.12);
    }

    #tools .jr-no-tools {
      display:none;
      padding:35px 10px;
      text-align:center;
      color:#666;
      font:10px monospace;
      letter-spacing:2px;
    }

    .jr-modal {
      display:none;
      position:fixed;
      inset:0;
      z-index:99999;
      align-items:center;
      justify-content:center;
      padding:15px;
      background:rgba(0,0,0,.88);
      backdrop-filter:blur(10px);
    }

    .jr-modal.show {
      display:flex;
    }

    .jr-box {
      position:relative;
      width:min(680px,100%);
      max-height:90vh;
      overflow:auto;
      padding:28px;
      background:#070707;
      color:#eee;
      border:1px solid rgba(0,234,255,.28);
      box-shadow:
        0 0 70px rgba(0,0,0,.8),
        0 0 35px rgba(0,234,255,.08);
    }

    .jr-box::before {
      content:"JOKER RKS // TOOL SYSTEM";
      display:block;
      margin-bottom:14px;
      color:#00eaff;
      font:8px monospace;
      letter-spacing:2px;
    }

    .jr-close {
      position:absolute;
      right:13px;
      top:7px;
      width:34px;
      height:34px;
      border:0;
      background:transparent;
      color:#aaa;
      font-size:28px;
      cursor:pointer;
    }

    .jr-close:hover {
      color:#fff;
    }

    .jr-box h3 {
      margin:0 40px 8px 0;
      color:#fff;
      letter-spacing:2px;
    }

    .jr-box p {
      color:#888;
      font-size:12px;
      line-height:1.6;
      margin-bottom:12px;
    }

    .jr-box textarea,
    .jr-box input,
    .jr-box select {
      box-sizing:border-box;
      width:100%;
      margin:7px 0;
      padding:12px;
      background:#030303;
      color:#eee;
      border:1px solid #292929;
      outline:none;
      font:13px monospace;
    }

    .jr-box textarea {
      min-height:180px;
      resize:vertical;
    }

    .jr-box textarea:focus,
    .jr-box input:focus {
      border-color:#00eaff;
      box-shadow:0 0 15px rgba(0,234,255,.07);
    }

    .jr-actions {
      display:flex;
      flex-wrap:wrap;
      gap:7px;
      margin-top:7px;
    }

    .jr-action {
      padding:9px 12px;
      background:#fff;
      color:#000;
      border:1px solid #fff;
      cursor:pointer;
      font-size:9px;
      letter-spacing:1px;
    }

    .jr-action:hover {
      opacity:.85;
    }

    .jr-action.alt {
      background:transparent;
      color:#eee;
      border-color:#333;
    }

    .jr-stats {
      display:flex;
      flex-wrap:wrap;
      gap:8px;
      margin:10px 0;
    }

    .jr-stat {
      flex:1 1 90px;
      padding:10px;
      border:1px solid #222;
      background:#0a0a0a;
      text-align:center;
      font:10px monospace;
      color:#777;
    }

    .jr-stat strong {
      display:block;
      color:#fff;
      font-size:16px;
      margin-bottom:3px;
    }

    .jr-result {
      margin-top:10px;
      padding:12px;
      min-height:42px;
      border:1px solid #292929;
      color:#bbb;
      white-space:pre-wrap;
      word-break:break-word;
      font:12px monospace;
    }

    .jr-qr {
      text-align:center;
      margin-top:14px;
    }

    .jr-qr img {
      max-width:200px;
      background:#fff;
      padding:8px;
    }

    .jr-preview {
      margin-top:14px;
      text-align:center;
    }

    .jr-preview img {
      max-width:100%;
      max-height:300px;
      border:1px solid #292929;
    }

    @media(max-width:800px) {

      #tools .jr-tool-grid {
        grid-template-columns:repeat(2,minmax(0,1fr));
      }

    }

    @media(max-width:520px) {

      #tools .jr-hub-head {
        align-items:flex-start;
      }

      #tools .jr-tool-count {
        min-width:90px;
      }

      #tools .jr-tool-grid {
        grid-template-columns:1fr;
      }

      #tools .jr-tool-card {
        min-height:220px;
      }

      .jr-box {
        padding:24px 16px;
      }

      .jr-action {
        flex:1 1 auto;
      }

    }

  `;

  document.head.appendChild(css);


  /* =========================================
     MODAL
     ========================================= */

  const modal = document.createElement("div");

  modal.className = "jr-modal";

  modal.innerHTML = `
    <div class="jr-box">
      <button class="jr-close" aria-label="Close tool">×</button>
      <div id="jrContent"></div>
    </div>
  `;

  document.body.appendChild(modal);

  const content = modal.querySelector("#jrContent");


  function closeModal() {
    modal.classList.remove("show");
    content.innerHTML = "";
  }


  modal.querySelector(".jr-close").onclick = closeModal;


  modal.onclick = function (e) {
    if (e.target === modal) {
      closeModal();
    }
  };


  document.addEventListener("keydown", function (e) {

    if (e.key === "Escape") {
      closeModal();
    }

  });


  /* =========================================
     HELPERS
     ========================================= */

  function copyText(value, status) {

    if (!value) return;

    if (navigator.clipboard) {

      navigator.clipboard.writeText(value)
        .then(function () {

          if (status) {
            status.textContent = "COPIED ✓";
          }

        })
        .catch(function () {

          if (status) {
            status.textContent = "COPY FAILED";
          }

        });

    }

  }


  function titleCase(value) {

    return value
      .toLowerCase()
      .replace(
        /(^|\s)(\S)/g,
        function (m, space, char) {
          return space + char.toUpperCase();
        }
      );

  }


  function updateStats(text) {

    const words = text.trim()
      ? text.trim().split(/\s+/).length
      : 0;

    const lines = text
      ? text.split(/\r?\n/).length
      : 0;

    const chars = content.querySelector("#jrChars");
    const wordsEl = content.querySelector("#jrWords");
    const linesEl = content.querySelector("#jrLines");

    if (chars) chars.textContent = text.length;
    if (wordsEl) wordsEl.textContent = words;
    if (linesEl) linesEl.textContent = lines;

  }


  /* =========================================
     OPEN TOOL
     ========================================= */

  function openTool(type) {

    modal.classList.add("show");


    /* =======================================
       TEXT LAB
       ======================================= */

    if (type === "text") {

      content.innerHTML = `

        <h3>01 // TEXT LAB</h3>

        <p>
          Professional text editing, cleanup and live statistics.
        </p>

        <textarea
          id="jrText"
          placeholder="Write or paste your text here..."
        ></textarea>

        <div class="jr-stats">

          <div class="jr-stat">
            <strong id="jrChars">0</strong>
            CHARACTERS
          </div>

          <div class="jr-stat">
            <strong id="jrWords">0</strong>
            WORDS
          </div>

          <div class="jr-stat">
            <strong id="jrLines">0</strong>
            LINES
          </div>

        </div>

        <div class="jr-actions">

          <button class="jr-action" id="upper">
            UPPERCASE
          </button>

          <button class="jr-action" id="lower">
            LOWERCASE
          </button>

          <button class="jr-action" id="title">
            TITLE CASE
          </button>

          <button class="jr-action" id="spaces">
            CLEAN SPACES
          </button>

        </div>

        <div class="jr-actions">

          <button class="jr-action" id="copy">
            COPY TEXT
          </button>

          <button class="jr-action alt" id="download">
            DOWNLOAD TXT
          </button>

          <button class="jr-action alt" id="clear">
            CLEAR
          </button>

        </div>

        <div class="jr-result" id="textStatus">
          READY
        </div>

      `;


      const text = content.querySelector("#jrText");
      const status = content.querySelector("#textStatus");

      function refresh() {
        updateStats(text.value);
      }

      text.addEventListener("input", refresh);


      content.querySelector("#upper").onclick = function () {

        text.value = text.value.toUpperCase();
        refresh();

      };


      content.querySelector("#lower").onclick = function () {

        text.value = text.value.toLowerCase();
        refresh();

      };


      content.querySelector("#title").onclick = function () {

        text.value = titleCase(text.value);
        refresh();

      };


      content.querySelector("#spaces").onclick = function () {

        text.value = text.value
          .replace(/[ \t]+/g, " ")
          .replace(/ *\n */g, "\n")
          .trim();

        refresh();

      };


      content.querySelector("#copy").onclick = function () {

        copyText(text.value, status);

      };


      content.querySelector("#clear").onclick = function () {

        text.value = "";
        refresh();

        status.textContent = "CLEARED";

        text.focus();

      };


      content.querySelector("#download").onclick = function () {

        const blob = new Blob(
          [text.value],
          { type:"text/plain;charset=utf-8" }
        );

        const url = URL.createObjectURL(blob);

        const a = document.createElement("a");

        a.href = url;
        a.download = "joker-rks-text.txt";

        a.click();

        URL.revokeObjectURL(url);

        status.textContent = "TXT DOWNLOADED ✓";

      };


      text.focus();

    }


    /* =======================================
       QR LAB
       ======================================= */

    if (type === "qr") {

      content.innerHTML = `

        <h3>02 // QR LAB</h3>

        <p>
          Generate a QR code from any text, number or URL.
        </p>

        <input
          id="qrInput"
          placeholder="Enter text or link..."
        >

        <div class="jr-actions">

          <button class="jr-action" id="makeQR">
            GENERATE QR
          </button>

          <button class="jr-action alt" id="clearQR">
            CLEAR
          </button>

        </div>

        <div class="jr-qr" id="qrOut"></div>

      `;


      content.querySelector("#makeQR").onclick = function () {

        const value = content
          .querySelector("#qrInput")
          .value
          .trim();

        const output = content.querySelector("#qrOut");

        if (!value) {

          output.textContent =
            "ENTER TEXT OR LINK FIRST.";

          return;

        }

        output.innerHTML = `
          <img
            alt="Generated QR code"
            src="https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=${encodeURIComponent(value)}"
