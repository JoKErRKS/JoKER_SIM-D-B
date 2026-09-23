/* =================================
   JOKER RKS // PREMIUM TOOLS HUB v3
   ================================= */

(function () {
  "use strict";

  const area = document.querySelector("#tools .tools");
  if (!area) return;

  /* =================================
     TOOL DATA
     ================================= */

  const tools = [
    {
      id: "text",
      number: "01",
      category: "TEXT",
      icon: "✦",
      title: "TEXT LAB",
      desc: "Write, clean, transform and analyze text."
    },
    {
      id: "qr",
      number: "02",
      category: "UTILITY",
      icon: "▦",
      title: "QR LAB",
      desc: "Generate QR codes from links or text."
    },
    {
      id: "dev",
      number: "03",
      category: "DEVELOPER",
      icon: "</>",
      title: "DEV LAB",
      desc: "JSON formatter and Base64 utilities."
    },
    {
      id: "url",
      number: "04",
      category: "UTILITY",
      icon: "↗",
      title: "URL LAB",
      desc: "Encode, decode and inspect URLs."
    },
    {
      id: "time",
      number: "05",
      category: "UTILITY",
      icon: "◷",
      title: "TIME LAB",
      desc: "Check current time and Unix timestamp."
    },
    {
      id: "calc",
      number: "06",
      category: "MATH",
      icon: "＋",
      title: "CALC LAB",
      desc: "Quick calculator for everyday calculations."
    },
    {
      id: "case",
      number: "07",
      category: "TEXT",
      icon: "Aa",
      title: "CASE LAB",
      desc: "Convert text between different cases."
    },
    {
      id: "image",
      number: "08",
      category: "UTILITY",
      icon: "▧",
      title: "IMAGE LAB",
      desc: "Preview an image from a direct URL."
    }
  ];


  /* =================================
     TOOL CARDS
     ================================= */

  function renderCards(list) {

    if (!list.length) {

      area.innerHTML = `
        <div class="jr-empty">
          NO TOOLS FOUND
        </div>
      `;

      return;
    }

    area.innerHTML = list.map(function (tool) {

      return `
        <article class="tool jr-tool-card">

          <div class="jr-tool-top">
            <span class="jr-tool-number">
              ${tool.number}
            </span>

            <span class="jr-tool-icon">
              ${tool.icon}
            </span>
          </div>

          <div class="jr-tool-category">
            ${tool.category}
          </div>

          <h3>
            ${tool.title}
          </h3>

          <p>
            ${tool.desc}
          </p>

          <button
            class="jr-tool-btn"
            data-tool="${tool.id}"
          >
            OPEN TOOL →
          </button>

        </article>
      `;

    }).join("");

  }


  /* =================================
     TOOL HUB HEADER
     ================================= */

  const wrapper = document.createElement("div");

  wrapper.className = "jr-tools-wrapper";

  wrapper.innerHTML = `

    <div class="jr-tools-head">

      <div>
        <div class="jr-tools-mini">
          JOKER RKS // TOOL SYSTEM
        </div>

        <h3 class="jr-tools-title">
          PREMIUM <span>TOOLS</span>
        </h3>

        <p class="jr-tools-subtitle">
          Useful utilities built directly into the
          JOKER RKS Digital World.
        </p>
      </div>

      <div class="jr-tool-count">
        <strong>08</strong>
        TOOLS ONLINE
      </div>

    </div>


    <div class="jr-tools-controls">

      <input
        id="jrToolSearch"
        class="jr-tool-search"
        type="search"
        placeholder="SEARCH TOOLS..."
        autocomplete="off"
      >

      <div class="jr-tool-filters">

        <button
          class="jr-filter active"
          data-filter="ALL"
        >
          ALL
        </button>

        <button
          class="jr-filter"
          data-filter="TEXT"
        >
          TEXT
        </button>

        <button
          class="jr-filter"
          data-filter="UTILITY"
        >
          UTILITY
        </button>

        <button
          class="jr-filter"
          data-filter="DEVELOPER"
        >
          DEVELOPER
        </button>

        <button
          class="jr-filter"
          data-filter="MATH"
        >
          MATH
        </button>

      </div>

    </div>

  `;

  area.parentNode.insertBefore(wrapper, area);

  wrapper.appendChild(area);


  /* =================================
     CSS
     ================================= */

  const css = document.createElement("style");

  css.textContent = `

    .jr-tools-wrapper {
      width:100%;
    }

    .jr-tools-head {
      display:flex;
      justify-content:space-between;
      align-items:flex-end;
      gap:20px;
      margin-bottom:25px;
    }

    .jr-tools-mini {
      font-size:10px;
      letter-spacing:3px;
      opacity:.55;
      margin-bottom:8px;
    }

    .jr-tools-title {
      margin:0;
      font-size:22px;
      letter-spacing:2px;
    }

    .jr-tools-title span {
      opacity:.55;
    }

    .jr-tools-subtitle {
      margin:8px 0 0;
      opacity:.65;
      font-size:12px;
      line-height:1.6;
    }

    .jr-tool-count {
      min-width:90px;
      padding:12px;
      border:1px solid rgba(255,255,255,.15);
      text-align:center;
      font-size:8px;
      letter-spacing:2px;
      opacity:.7;
    }

    .jr-tool-count strong {
      display:block;
      font-size:22px;
      letter-spacing:0;
      margin-bottom:4px;
    }


    /* SEARCH */

    .jr-tools-controls {
      display:flex;
      gap:12px;
      align-items:center;
      margin-bottom:22px;
      flex-wrap:wrap;
    }

    .jr-tool-search {
      flex:1;
      min-width:180px;
      box-sizing:border-box;
      padding:13px 15px;
      background:rgba(0,0,0,.35);
      color:#fff;
      border:1px solid rgba(255,255,255,.15);
      outline:none;
      font:11px monospace;
      letter-spacing:1px;
    }

    .jr-tool-search:focus {
      border-color:rgba(255,255,255,.55);
    }


    /* FILTERS */

    .jr-tool-filters {
      display:flex;
      gap:6px;
      flex-wrap:wrap;
    }

    .jr-filter {
      padding:10px 12px;
      background:transparent;
      color:inherit;
      border:1px solid rgba(255,255,255,.15);
      cursor:pointer;
      font-size:9px;
      letter-spacing:1px;
      transition:.2s;
    }

    .jr-filter:hover,
    .jr-filter.active {
      background:#fff;
      color:#000;
    }


    /* CARDS */

    #tools .jr-tool-card {
      position:relative;
      overflow:hidden;
      transition:
        transform .25s ease,
        border-color .25s ease,
        box-shadow .25s ease;
    }

    #tools .jr-tool-card:hover {
      transform:translateY(-6px);
      border-color:rgba(255,255,255,.35);
      box-shadow:
        0 15px 45px rgba(0,0,0,.25);
    }

    .jr-tool-top {
      display:flex;
      justify-content:space-between;
      align-items:center;
      margin-bottom:18px;
    }

    .jr-tool-number {
      font-size:11px;
      letter-spacing:2px;
      opacity:.45;
    }

    .jr-tool-icon {
      font-size:22px;
      opacity:.7;
    }

    .jr-tool-category {
      display:inline-block;
      font-size:8px;
      letter-spacing:2px;
      opacity:.5;
      margin-bottom:8px;
    }

    #tools .jr-tool-card h3 {
      margin-top:0;
    }

    .jr-tool-btn {
      margin-top:16px;
      padding:10px 14px;
      background:transparent;
      color:inherit;
      border:1px solid currentColor;
      cursor:pointer;
      font:inherit;
      font-size:10px;
      letter-spacing:1.5px;
      transition:.2s;
    }

    .jr-tool-btn:hover {
      background:#fff;
      color:#000;
    }

    .jr-empty {
      grid-column:1/-1;
      padding:40px 20px;
      text-align:center;
      border:1px solid rgba(255,255,255,.12);
      opacity:.6;
      letter-spacing:2px;
      font-size:11px;
    }


    /* =================================
       MODAL
       ================================= */

    .jr-modal {
      display:none;
      position:fixed;
      inset:0;
      z-index:999999;
      align-items:center;
      justify-content:center;
      padding:16px;
      background:rgba(0,0,0,.88);
      backdrop-filter:blur(10px);
    }

    .jr-modal.show {
      display:flex;
    }

    .jr-box {
      position:relative;
      width:min(650px,100%);
      max-height:90vh;
      overflow:auto;
      padding:28px;
      box-sizing:border-box;
      background:#080808;
      color:#eee;
      border:1px solid rgba(255,255,255,.2);
      box-shadow:
        0 0 70px rgba(0,0,0,.8);
    }

    .jr-close {
      position:absolute;
      right:12px;
      top:6px;
      background:none;
      border:0;
      color:#aaa;
      font-size:28px;
      cursor:pointer;
    }

    .jr-box h3 {
      margin:0 40px 8px 0;
      letter-spacing:2px;
    }

    .jr-box p {
      color:#888;
      font-size:12px;
      line-height:1.6;
      margin-bottom:12px;
    }

    .jr-box textarea,
    .jr-box input {
      box-sizing:border-box;
      width:100%;
      margin:7px 0;
      padding:12px;
      background:#050505;
      color:#eee;
      border:1px solid #333;
      outline:none;
      font:13px monospace;
    }

    .jr-box textarea {
      min-height:180px;
      resize:vertical;
    }

    .jr-box textarea:focus,
    .jr-box input:focus {
      border-color:#777;
    }

    .jr-actions {
      display:flex;
      flex-wrap:wrap;
      gap:6px;
      margin-top:8px;
    }

    .jr-action {
      padding:9px 12px;
      background:#fff;
      color:#000;
      border:1px solid #fff;
      cursor:pointer;
      font-size:10px;
      letter-spacing:1px;
    }

    .jr-action.alt {
      background:transparent;
      color:#eee;
      border-color:#444;
    }

    .jr-result {
      margin-top:10px;
      padding:12px;
      min-height:42px;
      border:1px solid #333;
      color:#bbb;
      white-space:pre-wrap;
      word-break:break-word;
      font:12px monospace;
    }

    .jr-stats {
      display:flex;
      flex-wrap:wrap;
      gap:8px;
      margin:10px 0;
    }

    .jr-stat {
      flex:1 1 90px;
      padding:9px;
      border:1px solid #292929;
      background:#0b0b0b;
      text-align:center;
      font:11px monospace;
      color:#aaa;
    }

    .jr-stat strong {
      display:block;
      color:#fff;
      font-size:16px;
      margin-bottom:3px;
    }

    .jr-qr {
      text-align:center;
      margin-top:14px;
    }

    .jr-qr img {
      background:#fff;
      padding:7px;
      max-width:190px;
    }

    .jr-preview {
      text-align:center;
      margin-top:15px;
    }

    .jr-preview img {
      max-width:100%;
      max-height:350px;
      border:1px solid #333;
    }


    @media(max-width:600px) {

      .jr-tools-head {
        align-items:flex-start;
        flex-direction:column;
      }

      .jr-tool-count {
        width:100%;
        box-sizing:border-box;
      }

      .jr-tools-controls {
        display:block;
      }

      .jr-tool-search {
        width:100%;
        margin-bottom:10px;
      }

      .jr-tool-filters {
        width:100%;
      }

      .jr-filter {
        flex:1;
      }

      .jr-box {
        padding:22px 16px;
      }

      .jr-action {
        flex:1 1 auto;
      }

    }

  `;

  document.head.appendChild(css);


  /* =================================
     RENDER
     ================================= */

  renderCards(tools);


  /* =================================
     SEARCH + FILTER
     ================================= */

  const search =
    document.getElementById("jrToolSearch");

  let activeFilter = "ALL";

  function updateTools() {

    const query =
      (search ? search.value : "")
        .toLowerCase()
        .trim();

    const filtered =
      tools.filter(function (tool) {

        const matchesFilter =
          activeFilter === "ALL" ||
          tool.category === activeFilter;

        const matchesSearch =
          !query ||
          tool.title.toLowerCase().includes(query) ||
          tool.desc.toLowerCase().includes(query) ||
          tool.category.toLowerCase().includes(query);

        return matchesFilter && matchesSearch;

      });

    renderCards(filtered);

  }


  if (search) {

    search.addEventListener(
      "input",
      updateTools
    );

  }


  wrapper
    .querySelectorAll(".jr-filter")
    .forEach(function (button) {

      button.addEventListener(
        "click",
        function () {

          wrapper
            .querySelectorAll(".jr-filter")
            .forEach(function (btn) {
              btn.classList.remove("active");
            });

          button.classList.add("active");

          activeFilter =
            button.dataset.filter;

          updateTools();

        }
      );

    });


  /* =================================
     MODAL
     ================================= */

  const modal =
    document.createElement("div");

  modal.className = "jr-modal";

  modal.innerHTML = `

    <div class="jr-box">

      <button
        class="jr-close"
        aria-label="Close"
      >
        ×
      </button>

      <div id="jrContent"></div>

    </div>

  `;

  document.body.appendChild(modal);

  const content =
    modal.querySelector("#jrContent");


  function close() {

    modal.classList.remove("show");

    content.innerHTML = "";

    document.body.style.overflow = "";

  }


  function show() {

    modal.classList.add("show");

    document.body.style.overflow = "hidden";

  }


  modal.querySelector(".jr-close").onclick =
    close;


  modal.onclick = function (e) {

    if (e.target === modal) {
      close();
    }

  };


  document.addEventListener(
    "keydown",
    function (e) {

      if (e.key === "Escape") {
        close();
      }

    }
  );


  /* =================================
     COPY
     ================================= */

  function copyText(value, status) {

    if (!value) return;

    if (
      navigator.clipboard &&
      window.isSecureContext
    ) {

      navigator.clipboard
        .writeText(value)
        .then(function () {

          if (status) {
            status.textContent =
              "COPIED ✓";
          }

        })
        .catch(function () {});

    } else {

      const area =
        document.createElement("textarea");

      area.value = value;

      document.body.appendChild(area);

      area.select();

      try {
        document.execCommand("copy");
      } catch (e) {}

      area.remove();

      if (status) {
        status.textContent =
          "COPIED ✓";
      }

    }

  }


  /* =================================
     TEXT HELPERS
     ================================= */

  function titleCase(value) {

    return value
      .toLowerCase()
      .replace(
        /(^|\s)(\S)/g,
        function (m, space, char) {
          return space +
            char.toUpperCase();
        }
      );

  }


  function updateStats(text) {

    const words =
      text.trim()
        ? text.trim().split(/\s+/).length
        : 0;

    const lines =
      text
        ? text.split(/\r?\n/).length
        : 0;

    const chars =
      content.querySelector("#jrChars");

    const wordsEl =
      content.querySelector("#jrWords");

    const linesEl =
      content.querySelector("#jrLines");

    if (chars) {
      chars.textContent =
        text.length;
    }

    if (wordsEl) {
      wordsEl.textContent =
        words;
    }

    if (linesEl) {
      linesEl.textContent =
        lines;
    }

  }


  /* =================================
     OPEN TOOL
     ================================= */

  function open(type) {

    show();


    /* =================================
       TEXT LAB
       ================================= */

    if (type === "text") {

      content.innerHTML = `

        <h3>
          01 // TEXT LAB
        </h3>

        <p>
          Fast text editing, cleanup and live statistics.
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

        <div
          class="jr-result"
          id="textStatus"
        >
          READY
        </div>

      `;


      const text =
        content.querySelector("#jrText");

      const status =
        content.querySelector("#textStatus");


      function refresh() {
        updateStats(text.value);
      }


      text.addEventListener(
        "input",
        refresh
      );


      content.querySelector("#upper").onclick =
        function () {

          text.value =
            text.value.toUpperCase();

          refresh();

        };


      content.querySelector("#lower").onclick =
        function () {

          text.value =
            text.value.toLowerCase();

          refresh();

        };


      content.querySelector("#title").onclick =
        function () {

          text.value =
            titleCase(text.value);

          refresh();

        };


      content.querySelector("#spaces").onclick =
        function () {

          text.value =
            text.value
              .replace(/[ \t]+/g, " ")
              .replace(/ *\n */g, "\n")
              .trim();

          refresh();

        };


      content.querySelector("#copy").onclick =
        function () {

          copyText(
            text.value,
            status
          );

        };


      content.querySelector("#clear").onclick =
        function () {

          text.value = "";

          refresh();

          status.textContent =
            "CLEARED";

          text.focus();

        };


      content.querySelector("#download").onclick =
        function () {

          const blob =
            new Blob(
              [text.value],
              {
                type:
                  "text/plain;charset=utf-8"
              }
            );

          const url =
            URL.createObjectURL(blob);

          const a =
            document.createElement("a");

          a.href = url;

          a.download =
            "joker-rks-text.txt";

          a.click();

          URL.revokeObjectURL(url);

          status.textContent =
            "TXT DOWNLOADED ✓";

        };


      text.focus();

    }


    /* =================================
       QR LAB
       ================================= */

    if (type === "qr") {

      content.innerHTML = `

        <h3>
          02 // QR LAB
        </h3>

        <p>
          Enter text or a link and generate a QR code.
        </p>

        <input
          id="qrInput"
          placeholder="https://example.com"
        >

        <div class="jr-actions">

          <button
            class="jr-action"
            id="makeQR"
          >
            GENERATE QR
          </button>

          <button
            class="jr-action alt"
      id="clearQR">
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
          >
          <div class="jr-actions" style="justify-content:center">
            <button class="jr-action alt" id="qrCopy">
              COPY SOURCE
            </button>
          </div>
        `;


        const copyButton =
          output.querySelector("#qrCopy");

        if (copyButton) {

          copyButton.onclick = function () {

            copyText(value, copyButton);

            copyButton.textContent = "COPIED ✓";

          };

        }

      };


      content.querySelector("#clearQR").onclick = function () {

        content.querySelector("#qrInput").value = "";
        content.querySelector("#qrOut").innerHTML = "";
         };

    }


    /* =======================================
       DEV LAB
       ======================================= */

    if (type === "dev") {

      content.innerHTML = `

        <h3>03 // DEV LAB</h3>

        <p>
          JSON formatter and Base64 developer utilities.
        </p>

        <textarea
          id="devInput"
          placeholder='Paste JSON or text here...'
        ></textarea>

        <div class="jr-actions">

          <button class="jr-action" id="json">
            FORMAT JSON
          </button>

          <button class="jr-action" id="enc">
            BASE64 ENCODE
          </button>

          <button class="jr-action" id="dec">
            BASE64 DECODE
          </button>

          <button class="jr-action alt" id="copyDev">
            COPY RESULT
          </button>

        </div>

        <div class="jr-result" id="devOut">
          RESULT...
        </div>

      `;


      const input =
        content.querySelector("#devInput");

      const output =
        content.querySelector("#devOut");


      content.querySelector("#json").onclick = function () {

        try {

          output.textContent =
            JSON.stringify(
              JSON.parse(input.value),
              null,
              2
            );

        } catch (error) {

          output.textContent = "INVALID JSON.";

        }

      };


      content.querySelector("#enc").onclick = function () {

        try {

          output.textContent =
            btoa(
              unescape(
                encodeURIComponent(input.value)
              )
            );

        } catch (error) {

          output.textContent =
            "COULD NOT ENCODE.";

        }

      };


      content.querySelector("#dec").onclick = function () {

        try {

          output.textContent =
            decodeURIComponent(
              escape(
                atob(input.value)
              )
            );

        } catch (error) {

          output.textContent =
            "INVALID BASE64.";

        }

      };


      content.querySelector("#copyDev").onclick = function () {

        copyText(output.textContent);

      };
}


    /* =======================================
       URL LAB
       ======================================= */

    if (type === "url") {

      content.innerHTML = `

        <h3>04 // URL LAB</h3>

        <p>
          Encode, decode and inspect URL text.
        </p>

        <input
          id="urlInput"
          placeholder="https://example.com/hello world"
        >

        <div class="jr-actions">

          <button class="jr-action" id="urlEncode">
            ENCODE
          </button>

          <button class="jr-action" id="urlDecode">
            DECODE
          </button>

          <button class="jr-action alt" id="urlCopy">
            COPY RESULT
          </button>

        </div>

        <div class="jr-result" id="urlOut">
          RESULT...
        </div>

      `;


      const input =
        content.querySelector("#urlInput");

      const output =
        content.querySelector("#urlOut");


      content.querySelector("#urlEncode").onclick =
        function () {

          try {

            output.textContent =
              encodeURIComponent(input.value);

          } catch (error) {

            output.textContent =
              "COULD NOT ENCODE.";

          }

        };


      content.querySelector("#urlDecode").onclick =
        function () {

          try {

            output.textContent =
              decodeURIComponent(input.value);

          } catch (error) {

            output.textContent =
              "INVALID URL ENCODING.";

          }

        };


      content.querySelector("#urlCopy").onclick =
        function () {

          copyText(output.textContent);

           
        };

    }


    /* =======================================
       TIME LAB
       ======================================= */

    if (type === "time") {

      content.innerHTML = `

        <h3>05 // TIME LAB</h3>

        <p>
          Generate the current Unix timestamp or convert one.
        </p>

        <div class="jr-result" id="currentUnix">
          Loading...
        </div>

        <div class="jr-actions">

          <button class="jr-action" id="refreshUnix">
            CURRENT TIMESTAMP
          </button>

          <button class="jr-action alt" id="copyUnix">
            COPY
          </button>

        </div>

        <input
          id="timestampInput"
          placeholder="Enter Unix timestamp..."
        >

        <div class="jr-actions">

          <button class="jr-action" id="convertUnix">
            CONVERT TO DATE
          </button>

        </div>

        <div class="jr-result" id="dateOut">
          RESULT...
        </div>

      `;


      const current =
        content.querySelector("#currentUnix");

      const input =
        content.querySelector("#timestampInput");

      const dateOut =
        content.querySelector("#dateOut");


      function updateUnix() {

        current.textContent =
          Math.floor(Date.now() / 1000);

      }


      updateUnix();


      content.querySelector("#refreshUnix").onclick =
        updateUnix;


      content.querySelector("#copyUnix").onclick =
        function () {

          copyText(current.textContent);

        };


      content.querySelector("#convertUnix").onclick =
        function () {

          const value =
            Number(input.value);

          if (!Number.isFinite(value)) {

            dateOut.textContent =
              "INVALID TIMESTAMP.";

            return;

          }

          const date =
            new Date(
              value < 10000000000
                ? value * 1000
                : value
            );

          dateOut.textContent =
            date.toString();
           
        };

    }


    /* =======================================
       CALCULATOR LAB
       ======================================= */

    if (type === "calc") {

      content.innerHTML = `

        <h3>06 // CALC LAB</h3>

        <p>
          Quick mathematical calculations.
        </p>

        <input
          id="calcInput"
          placeholder="Example: 25 * 4 + 10"
          inputmode="decimal"
        >

        <div class="jr-actions">

          <button class="jr-action" id="calculate">
            CALCULATE
          </button>

          <button class="jr-action alt" id="copyCalc">
            COPY RESULT
          </button>

        </div>

        <div class="jr-result" id="calcOut">
          RESULT...
        </div>

      `;


      const input =
        content.querySelector("#calcInput");

      const output =
        content.querySelector("#calcOut");


      content.querySelector("#calculate").onclick =
        function () {

          const expression =
            input.value.trim();

          if (!expression) {

            output.textContent =
              "ENTER A CALCULATION.";

            return;

          }

          /*
           * Only basic mathematical characters
           * are accepted.
           */

          if (!/^[0-9+\\-*/().%\\s]+$/.test(expression)) {

            output.textContent =
              "ONLY BASIC MATH OPERATORS ARE ALLOWED.";

            return;

          }

          try {

            const result =
              Function(
                '"use strict"; return (' +
                expression +
                ')'
              )();

            if (
              typeof result !== "number" ||
              !Number.isFinite(result)
            ) {

              output.textContent =
                "INVALID CALCULATION.";

              return;

            }

            output.textContent =
              String(result);

          } catch (error) {

            output.textContent =
              "INVALID CALCULATION.";

          }

        };


      content.querySelector("#copyCalc").onclick =
        function () {

          copyText(output.textContent);
           
        };

    }


    /* =======================================
       CASE LAB
       ======================================= */

    if (type === "case") {

      content.innerHTML = `

        <h3>07 // CASE LAB</h3>

        <p>
          Convert text into different letter cases.
        </p>

        <textarea
          id="caseInput"
          placeholder="Type your text..."
        ></textarea>

        <div class="jr-actions">

          <button class="jr-action" id="caseUpper">
            UPPERCASE
          </button>

          <button class="jr-action" id="caseLower">
            lowercase
          </button>

          <button class="jr-action" id="caseTitle">
            Title Case
          </button>

          <button class="jr-action alt" id="caseCopy">
            COPY
          </button>

        </div>

        <div class="jr-result" id="caseOut">
          RESULT...
        </div>

      `;


      const input =
        content.querySelector("#caseInput");

      const output =
        content.querySelector("#caseOut");


      content.querySelector("#caseUpper").onclick =
        function () {

          output.textContent =
            input.value.toUpperCase();

        };


      content.querySelector("#caseLower").onclick =
        function () {

          output.textContent =
            input.value.toLowerCase();

        };


      content.querySelector("#caseTitle").onclick =
        function () {

          output.textContent =
            titleCase(input.value);

        };


      content.querySelector("#caseCopy").onclick =
        function () {

          copyText(output.textContent);
           
        };

    }


    /* =======================================
       IMAGE LAB
       ======================================= */

    if (type === "image") {

      content.innerHTML = `

        <h3>08 // IMAGE LAB</h3>

        <p>
          Preview an image using a direct image URL.
        </p>

        <input
          id="imageInput"
          placeholder="https://example.com/image.jpg"
        >

        <div class="jr-actions">

          <button class="jr-action" id="previewImage">
            PREVIEW IMAGE
          </button>

          <button class="jr-action alt" id="clearImage">
            CLEAR
          </button>

        </div>

        <div class="jr-preview" id="imageOut"></div>

      `;


      const input =
        content.querySelector("#imageInput");

      const output =
        content.querySelector("#imageOut");


      content.querySelector("#previewImage").onclick =
        function () {

          const value =
            input.value.trim();

          if (!value) {

            output.textContent =
              "ENTER AN IMAGE URL.";

            return;

          }

          output.innerHTML = `
            <img
              src="${value.replace(/"/g, "&quot;")}"
              alt="Image preview"
              onerror="this.style.display='none';this.parentElement.innerHTML='IMAGE COULD NOT BE LOADED.';"
            >
          `;

        };


      content.querySelector("#clearImage").onclick =
        function () {

          input.value = "";
          output.innerHTML = "";
           
        };

    }

  }


  /* =========================================
     TOOL BUTTON EVENTS
     ========================================= */

  area.addEventListener("click", function (e) {

    const button =
      e.target.closest(".jr-tool-btn");

    if (!button) return;

    openTool(button.dataset.tool);

  });


  /* =========================================
     SEARCH
     ========================================= */

  const search =
    document.querySelector("#jrToolSearch");

  const cards =
    Array.from(
      area.querySelectorAll(".jr-tool-card")
    );

  const noTools =
    document.querySelector("#jrNoTools");


  function filterTools() {

    const query =
      search.value
        .trim()
        .toLowerCase();

    const activeFilter =
      area.querySelector(
        ".jr-filter.active"
      )?.dataset.filter || "all";

    let visible = 0;


    cards.forEach(function (card) {

      const category =
        card.dataset.category;

      const searchable =
        (
          card.dataset.search +
          " " +
          card.textContent
        ).toLowerCase();

      const matchesSearch =
        !query ||
        searchable.includes(query);

      const matchesCategory =
        activeFilter === "all" ||
        category === activeFilter;

      const show =
        matchesSearch &&
        matchesCategory;

      card.style.display =
        show ? "" : "none";

      if (show) visible++;

    });


    if (noTools) {

      noTools.style.display =
        visible ? "none" : "block";

    }

  }


  if (search) {

    search.addEventListener(
      "input",
      filterTools
);

  }


  /* =========================================
     CATEGORY FILTERS
     ========================================= */

  area.addEventListener("click", function (e) {

    const filter =
      e.target.closest(".jr-filter");

    if (!filter) return;


    area
      .querySelectorAll(".jr-filter")
      .forEach(function (button) {

        button.classList.remove("active");

      });


    filter.classList.add("active");

    filterTools();

  });


})();
