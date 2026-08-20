/* JOKER RKS // TOOLS MODULE v2 */

(function () {
  "use strict";

  const area = document.querySelector("#tools .tools");
  if (!area) return;

  area.innerHTML = `
    <div class="tool">
      <b>01</b>
      <h3>TEXT LAB</h3>
      <p>Professional text utilities and live statistics.</p>
      <button class="jr-tool-btn" data-tool="text">OPEN TOOL →</button>
    </div>

    <div class="tool">
      <b>02</b>
      <h3>QR LAB</h3>
      <p>Create a QR code from text or a link.</p>
      <button class="jr-tool-btn" data-tool="qr">OPEN TOOL →</button>
    </div>

    <div class="tool">
      <b>03</b>
      <h3>DEV LAB</h3>
      <p>JSON formatter and Base64 utilities.</p>
      <button class="jr-tool-btn" data-tool="dev">OPEN TOOL →</button>
    </div>
  `;

  const css = document.createElement("style");

  css.textContent = `
    #tools .jr-tool-btn {
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

    #tools .jr-tool-btn:hover {
      background:#fff;
      color:#000;
    }

    .jr-modal {
      display:none;
      position:fixed;
      inset:0;
      z-index:9999;
      align-items:center;
      justify-content:center;
      padding:16px;
      background:rgba(0,0,0,.84);
      backdrop-filter:blur(6px);
    }

    .jr-modal.show {
      display:flex;
    }

    .jr-box {
      position:relative;
      width:min(600px,100%);
      max-height:90vh;
      overflow:auto;
      padding:28px;
      background:#080808;
      color:#eee;
      border:1px solid #444;
      box-shadow:0 0 45px rgba(0,255,157,.08);
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
      margin-top:5px;
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

    .jr-qr {
      text-align:center;
      margin-top:14px;
    }

    .jr-qr img {
      background:#fff;
      padding:7px;
      max-width:190px;
    }

    @media(max-width:500px) {
      .jr-box {
        padding:22px 16px;
      }

      .jr-action {
        flex:1 1 auto;
      }
    }
  `;

  document.head.appendChild(css);

  const modal = document.createElement("div");

  modal.className = "jr-modal";

  modal.innerHTML = `
    <div class="jr-box">

      <button class="jr-close" aria-label="Close">×</button>

      <div id="jrContent"></div>

    </div>
  `;

  document.body.appendChild(modal);

  const content = modal.querySelector("#jrContent");

  function close() {
    modal.classList.remove("show");
    content.innerHTML = "";
  }

  modal.querySelector(".jr-close").onclick = close;

  modal.onclick = function (e) {
    if (e.target === modal) {
      close();
    }
  };

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      close();
    }
  });

  function copyText(value, status) {

    if (!value) return;

    if (navigator.clipboard) {

      navigator.clipboard.writeText(value)
        .then(function () {

          if (status) {
            status.textContent = "COPIED ✓";
          }

        })
        .catch(function () {});

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

    const words =
      text.trim()
        ? text.trim().split(/\s+/).length
        : 0;

    const lines =
      text
        ? text.split(/\r?\n/).length
        : 0;

    const chars =
      document.querySelector("#jrChars");

    const wordsEl =
      document.querySelector("#jrWords");

    const linesEl =
      document.querySelector("#jrLines");

    if (chars) {
      chars.textContent = text.length;
    }

    if (wordsEl) {
      wordsEl.textContent = words;
    }

    if (linesEl) {
      linesEl.textContent = lines;
    }

  }

  function open(type) {

    modal.classList.add("show");

    /* =========================
       TEXT LAB
       ========================= */

    if (type === "text") {

      content.innerHTML = `

        <h3>01 // TEXT LAB v2</h3>

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

      const refresh = function () {
        updateStats(text.value);
      };

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

    /* =========================
       QR LAB
       ========================= */

    if (type === "qr") {

      content.innerHTML = `

        <h3>02 // QR LAB</h3>

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
            id="clearQR"
          >
            CLEAR
          </button>

        </div>

        <div
          class="jr-qr"
          id="qrOut"
        ></div>

      `;

      content.querySelector("#makeQR").onclick =
        function () {

          const value =
            content
              .querySelector("#qrInput")
              .value
              .trim();

          const output =
            content.querySelector("#qrOut");

          if (!value) {

            output.textContent =
              "Enter text or a link first.";

            return;

          }

          output.innerHTML =
            `<img
              alt="QR code"
              src="https://api.qrserver.com/v1/create-qr-code/?size=190x190&data=${encodeURIComponent(value)}"
            >`;

        };

      content.querySelector("#clearQR").onclick =
        function () {

          content.querySelector(
            "#qrInput"
          ).value = "";

          content.querySelector(
            "#qrOut"
          ).innerHTML = "";

        };

    }

    /* =========================
       DEV LAB
       ========================= */

    if (type === "dev") {

      content.innerHTML = `

        <h3>03 // DEV LAB</h3>

        <p>
          Simple developer utilities.
        </p>

        <textarea
          id="devInput"
          placeholder="Paste JSON or text here..."
        ></textarea>

        <div class="jr-actions">

          <button
            class="jr-action"
            id="json"
          >
            FORMAT JSON
          </button>

          <button
            class="jr-action"
            id="enc"
          >
            BASE64 ENCODE
          </button>

          <button
            class="jr-action"
            id="dec"
          >
            BASE64 DECODE
          </button>

          <button
            class="jr-action alt"
            id="copyDev"
          >
            COPY RESULT
          </button>

        </div>

        <div
          class="jr-result"
          id="devOut"
        >
          Result...
        </div>

      `;

      const input =
        content.querySelector(
          "#devInput"
        );

      const output =
        content.querySelector(
          "#devOut"
        );

      content.querySelector("#json").onclick =
        function () {

          try {

            output.textContent =
              JSON.stringify(
                JSON.parse(input.value),
                null,
                2
              );

          } catch {

            output.textContent =
              "Invalid JSON.";

          }

        };

      content.querySelector("#enc").onclick =
        function () {

          try {

            output.textContent =
              btoa(
                unescape(
                  encodeURIComponent(
                    input.value
                  )
                )
              );

          } catch {

            output.textContent =
              "Could not encode.";

          }

        };

      content.querySelector("#dec").onclick =
        function () {

          try {

            output.textContent =
              decodeURIComponent(
                escape(
                  atob(input.value)
                )
              );

          } catch {

            output.textContent =
              "Invalid Base64.";

          }

        };

      content.querySelector("#copyDev").onclick =
        function () {

          copyText(
            output.textContent
          );

        };

    }

  }

  area.onclick = function (e) {

    const button =
      e.target.closest(
        ".jr-tool-btn"
      );

    if (button) {

      open(
        button.dataset.tool
      );

    }

  };

})();
