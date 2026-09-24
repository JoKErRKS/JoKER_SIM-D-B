/* =========================================================
   JOKER RKS // PREMIUM TOOLS HUB v4.2
   ========================================================= */

(function () {
  "use strict";

  function initJokerTools() {

    const area = document.querySelector("#tools .tools");

    if (!area) {
      console.warn("JOKER RKS: #tools .tools not found");
      return;
    }

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

    /* =========================
       CSS
       ========================= */

    const style = document.createElement("style");

    style.id = "jokerToolsV42Style";

    style.textContent = `

      .jr-tools-wrapper-v42 {
        width: 100%;
      }

      .jr-tools-controls-v42 {
        display: flex;
        gap: 10px;
        flex-wrap: wrap;
        margin-bottom: 22px;
      }

      .jr-tools-search-v42 {
        flex: 1;
        min-width: 190px;
        padding: 13px 15px;
        box-sizing: border-box;
        background: rgba(0,0,0,.35);
        color: #fff;
        border: 1px solid rgba(255,255,255,.18);
        outline: none;
        font: 12px monospace;
        border-radius: 10px;
      }

      .jr-filter-v42 {
        padding: 11px 14px;
        background: rgba(0,0,0,.35);
        color: #fff;
        border: 1px solid rgba(255,255,255,.18);
        cursor: pointer;
        border-radius: 10px;
        font-size: 10px;
        letter-spacing: 1px;
      }

      .jr-filter-v42:hover,
      .jr-filter-v42.active {
        background: #fff;
        color: #000;
      }

      #tools .jr-tool-card-v42 {
        position: relative;
        overflow: hidden;
        transition: .25s ease;
      }

      #tools .jr-tool-card-v42:hover {
        transform: translateY(-5px);
      }

      .jr-tool-top-v42 {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 16px;
      }

      .jr-tool-number-v42 {
        font-size: 11px;
        opacity: .5;
        letter-spacing: 2px;
      }

      .jr-tool-icon-v42 {
        font-size: 22px;
        opacity: .75;
      }

      .jr-tool-category-v42 {
        font-size: 8px;
        letter-spacing: 2px;
        opacity: .5;
        margin-bottom: 8px;
      }

      .jr-tool-btn-v42 {
        margin-top: 15px;
        padding: 10px 14px;
        background: transparent;
        color: inherit;
        border: 1px solid currentColor;
        cursor: pointer;
        font: inherit;
        font-size: 10px;
        letter-spacing: 1.5px;
        border-radius: 8px;
      }

      .jr-tool-btn-v42:hover {
        background: #fff;
        color: #000;
      }

      .jr-modal-v42 {
        display: none;
        position: fixed;
        inset: 0;
        z-index: 999999;
        align-items: center;
        justify-content: center;
        padding: 16px;
        box-sizing: border-box;
        background: rgba(0,0,0,.88);
        backdrop-filter: blur(10px);
      }

      .jr-modal-v42.show {
        display: flex;
      }

      .jr-box-v42 {
        width: min(680px, 100%);
        max-height: 90vh;
        overflow: auto;
        padding: 25px;
        box-sizing: border-box;
        background: #080808;
        color: #eee;
        border: 1px solid rgba(255,255,255,.2);
        border-radius: 16px;
        box-shadow: 0 0 70px rgba(0,0,0,.8);
      }

      .jr-modal-head-v42 {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 15px;
        margin-bottom: 18px;
      }

      .jr-modal-head-v42 h3 {
        margin: 0;
        letter-spacing: 2px;
      }

      .jr-close-v42 {
        width: 40px;
        height: 40px;
        border: 1px solid #444;
        background: transparent;
        color: #fff;
        border-radius: 10px;
        cursor: pointer;
        font-size: 22px;
      }

      .jr-input-v42,
      .jr-textarea-v42 {
        width: 100%;
        box-sizing: border-box;
        margin: 7px 0 12px;
        padding: 12px;
        background: #050505;
        color: #eee;
        border: 1px solid #333;
        outline: none;
        font: 13px monospace;
        border-radius: 9px;
      }

      .jr-textarea-v42 {
        min-height: 170px;
        resize: vertical;
      }

      .jr-actions-v42 {
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
        margin: 8px 0 15px;
      }

      .jr-action-v42 {
        padding: 10px 13px;
        background: #151515;
        color: #fff;
        border: 1px solid #444;
        cursor: pointer;
        border-radius: 9px;
        font-size: 10px;
      }

      .jr-action-v42:hover {
        background: #fff;
        color: #000;
      }

      .jr-result-v42 {
        padding: 13px;
        min-height: 42px;
        box-sizing: border-box;
        border: 1px solid #333;
        background: #0b0b0b;
        color: #bbb;
        white-space: pre-wrap;
        word-break: break-word;
        font: 12px monospace;
        border-radius: 9px;
      }

      .jr-stats-v42 {
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
        margin: 10px 0;
      }

      .jr-stat-v42 {
        flex: 1 1 90px;
        padding: 10px;
        border: 1px solid #292929;
        background: #0b0b0b;
        text-align: center;
        font: 11px monospace;
        color: #aaa;
        border-radius: 8px;
      }

      .jr-stat-v42 strong {
        display: block;
        color: #fff;
        font-size: 17px;
        margin-bottom: 3px;
      }

      .jr-qr-v42 {
        text-align: center;
        margin-top: 15px;
      }

      .jr-qr-v42 img {
        background: #fff;
        padding: 7px;
        max-width: 200px;
        border-radius: 8px;
      }

      #jrMusicToggleV42 {
        position: fixed;
        right: 18px;
        bottom: 18px;
        z-index: 999998;
        width: 48px;
        height: 48px;
        border-radius: 50%;
        border: 1px solid rgba(255,255,255,.3);
        background: rgba(0,0,0,.82);
        color: #fff;
        font-size: 20px;
        cursor: pointer;
        backdrop-filter: blur(10px);
        box-shadow: 0 0 25px rgba(255,255,255,.15);
      }

      @media(max-width:600px) {

        .jr-tools-controls-v42 {
          display: block;
        }

        .jr-tools-search-v42 {
          width: 100%;
          margin-bottom: 10px;
        }

        .jr-filter-v42 {
          margin: 3px;
        }

        .jr-box-v42 {
          padding: 20px 15px;
        }
      }

    `;

    document.head.appendChild(style);

    /* =========================
       TOOL CARDS
       ========================= */

    function renderTools(list) {

      area.innerHTML = list.map(function(tool) {

        return `
          <article
            class="tool jr-tool-card-v42"
            data-tool="${tool.id}"
            data-category="${tool.category}"
          >

            <div class="jr-tool-top-v42">

              <span class="jr-tool-number-v42">
                ${tool.number}
              </span>

              <span class="jr-tool-icon-v42">
                ${tool.icon}
              </span>

            </div>

            <div class="jr-tool-category-v42">
              ${tool.category}
            </div>

            <h3>${tool.title}</h3>

            <p>${tool.desc}</p>

            <button
              type="button"
              class="jr-tool-btn-v42"
              data-tool="${tool.id}"
            >
              OPEN TOOL →
            </button>

          </article>
        `;

      }).join("");

    }

    renderTools(tools);

    /* =========================
       SEARCH + FILTER
       ========================= */

    const controls = document.createElement("div");

    controls.className = "jr-tools-controls-v42";

    controls.innerHTML = `

      <input
        id="jrToolSearchV42"
        class="jr-tools-search-v42"
        type="search"
        placeholder="SEARCH TOOLS..."
        autocomplete="off"
      >

      <button
        type="button"
        class="jr-filter-v42 active"
        data-filter="ALL"
      >
        ALL
      </button>

      <button
        type="button"
        class="jr-filter-v42"
        data-filter="TEXT"
      >
        TEXT
      </button>

      <button
        type="button"
        class="jr-filter-v42"
        data-filter="UTILITY"
      >
        UTILITY
      </button>

      <button
        type="button"
        class="jr-filter-v42"
        data-filter="DEVELOPER"
      >
        DEVELOPER
      </button>

      <button
        type="button"
        class="jr-filter-v42"
        data-filter="MATH"
      >
        MATH
      </button>

    `;

    area.parentNode.insertBefore(controls, area);

    let activeFilter = "ALL";

    function filterTools() {

      const input =
        document.getElementById("jrToolSearchV42");

      const query =
        input
          ? input.value.toLowerCase().trim()
          : "";

      area
        .querySelectorAll(".jr-tool-card-v42")
        .forEach(function(card) {

          const category =
            card.dataset.category;

          const text =
            card.textContent.toLowerCase();

          const searchOK =
            !query || text.includes(query);

          const filterOK =
            activeFilter === "ALL" ||
            category === activeFilter;

          card.style.display =
            searchOK && filterOK
              ? ""
              : "none";

        });

    }

    controls.addEventListener(
      "input",
      filterTools
    );

    controls.addEventListener(
      "click",
      function(e) {

        const button =
          e.target.closest(".jr-filter-v42");

        if (!button) return;

        controls
          .querySelectorAll(".jr-filter-v42")
          .forEach(function(btn) {
            btn.classList.remove("active");
          });

        button.classList.add("active");

        activeFilter =
          button.dataset.filter;

        filterTools();

      }
    );
        /* =========================
       MODAL
       ========================= */

    const modal =
      document.createElement("div");

    modal.id = "jrModalV42";
    modal.className = "jr-modal-v42";

    modal.innerHTML = `

      <div class="jr-box-v42">

        <div class="jr-modal-head-v42">

          <h3 id="jrModalTitleV42">
            JOKER RKS TOOL
          </h3>

          <button
            type="button"
            class="jr-close-v42"
            id="jrCloseV42"
          >
            ×
          </button>

        </div>

        <div id="jrContentV42"></div>

      </div>

    `;

    document.body.appendChild(modal);

    const content =
      document.getElementById("jrContentV42");

    const modalTitle =
      document.getElementById("jrModalTitleV42");

    function closeTool() {

      modal.classList.remove("show");

      content.innerHTML = "";

      document.body.style.overflow = "";

    }

    function showTool() {

      modal.classList.add("show");

      document.body.style.overflow = "hidden";

    }

    document
      .getElementById("jrCloseV42")
      .addEventListener(
        "click",
        closeTool
      );

    modal.addEventListener(
      "click",
      function(e) {

        if (e.target === modal) {
          closeTool();
        }

      }
    );

    document.addEventListener(
      "keydown",
      function(e) {

        if (e.key === "Escape") {
          closeTool();
        }

      }
    );

    function inputField(
      label,
      id,
      placeholder,
      textarea
    ) {

      return `

        <label>${label}</label>

        ${
          textarea

          ? `
            <textarea
              id="${id}"
              class="jr-textarea-v42"
              placeholder="${placeholder || ""}"
            ></textarea>
          `

          : `
            <input
              id="${id}"
              class="jr-input-v42"
              placeholder="${placeholder || ""}"
            >
          `
        }

      `;

    }

    /* =========================
       OPEN TOOL
       ========================= */

    function openTool(type) {

      showTool();

      /* TEXT LAB */

      if (type === "text") {

        modalTitle.textContent =
          "01 // TEXT LAB";

        content.innerHTML = `

          <p>
            Fast text editing, cleanup and statistics.
          </p>

          ${inputField(
            "TEXT",
            "jrTextV42",
            "Write or paste your text here...",
            true
          )}

          <div class="jr-stats-v42">

            <div class="jr-stat-v42">
              <strong id="jrCharsV42">0</strong>
              CHARACTERS
            </div>

            <div class="jr-stat-v42">
              <strong id="jrWordsV42">0</strong>
              WORDS
            </div>

            <div class="jr-stat-v42">
              <strong id="jrLinesV42">0</strong>
              LINES
            </div>

          </div>

          <div class="jr-actions-v42">

            <button
              type="button"
              class="jr-action-v42"
              id="jrUpperV42"
            >
              UPPERCASE
            </button>

            <button
              type="button"
              class="jr-action-v42"
              id="jrLowerV42"
            >
              LOWERCASE
            </button>

            <button
              type="button"
              class="jr-action-v42"
              id="jrTitleV42"
            >
              TITLE CASE
            </button>

            <button
              type="button"
              class="jr-action-v42"
              id="jrCleanV42"
            >
              CLEAN SPACES
            </button>

          </div>

          <div class="jr-actions-v42">

            <button
              type="button"
              class="jr-action-v42"
              id="jrCopyV42"
            >
              COPY
            </button>

            <button
              type="button"
              class="jr-action-v42"
              id="jrClearV42"
            >
              CLEAR
            </button>

          </div>

          <div
            class="jr-result-v42"
            id="jrTextStatusV42"
          >
            READY
          </div>

        `;

        const text =
          document.getElementById("jrTextV42");

        function stats() {

          const value = text.value;

          const words =
            value.trim()
              ? value.trim().split(/\s+/).length
              : 0;

          const lines =
            value
              ? value.split(/\r?\n/).length
              : 0;

          document.getElementById(
            "jrCharsV42"
          ).textContent = value.length;

          document.getElementById(
            "jrWordsV42"
          ).textContent = words;

          document.getElementById(
            "jrLinesV42"
          ).textContent = lines;

        }

        text.addEventListener(
          "input",
          stats
        );

        document
          .getElementById("jrUpperV42")
          .onclick = function() {

            text.value =
              text.value.toUpperCase();

            stats();

          };

        document
          .getElementById("jrLowerV42")
          .onclick = function() {

            text.value =
              text.value.toLowerCase();

            stats();

          };

        document
          .getElementById("jrTitleV42")
          .onclick = function() {

            text.value =
              text.value
                .toLowerCase()
                .replace(
                  /\b\w/g,
                  function(x) {
                    return x.toUpperCase();
                  }
                );

            stats();

          };

        document
          .getElementById("jrCleanV42")
          .onclick = function() {

            text.value =
              text.value
                .replace(/[ \t]+/g, " ")
                .replace(/ *\n */g, "\n")
                .trim();

            stats();

          };

        document
          .getElementById("jrCopyV42")
          .onclick = function() {

            const status =
              document.getElementById(
                "jrTextStatusV42"
              );

            if (
              navigator.clipboard &&
              window.isSecureContext
            ) {

              navigator.clipboard
                .writeText(text.value)
                .then(function() {
                  status.textContent =
                    "COPIED ✓";
                });

            } else {

              const temp =
                document.createElement("textarea");

              temp.value = text.value;

              document.body.appendChild(temp);

              temp.select();

              try {
                document.execCommand("copy");
              } catch(e) {}

              temp.remove();

              status.textContent =
                "COPIED ✓";

            }

          };

        document
          .getElementById("jrClearV42")
          .onclick = function() {

            text.value = "";

            stats();

            document.getElementById(
              "jrTextStatusV42"
            ).textContent = "CLEARED";

          };

        return;

      }

      /* QR LAB */

      if (type === "qr") {

        modalTitle.textContent =
          "02 // QR LAB";

        content.innerHTML = `

          <p>
            Generate a QR code from text or a URL.
          </p>

          ${inputField(
            "TEXT / URL",
            "jrQRV42",
            "https://example.com"
          )}

          <div class="jr-actions-v42">

            <button
              type="button"
              class="jr-action-v42"
              id="jrMakeQRV42"
            >
              GENERATE QR
            </button>

          </div>

          <div
            class="jr-qr-v42"
            id="jrQROutV42"
          ></div>

        `;

        document
          .getElementById("jrMakeQRV42")
          .onclick = function() {

            const value =
              document
                .getElementById("jrQRV42")
                .value
                .trim();

            if (!value) return;

            document.getElementById(
              "jrQROutV42"
            ).innerHTML = `

              <img
                src="https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${encodeURIComponent(value)}"
                alt="QR Code"
              >

            `;

          };

        return;

      }

      /* DEV LAB */

      if (type === "dev") {

        modalTitle.textContent =
          "03 // DEV LAB";

        content.innerHTML = `

          <p>
            JSON formatter, minifier and Base64 tools.
          </p>

          ${inputField(
            "JSON",
            "jrJSONV42",
            '{"name":"JOKER RKS"}',
            true
          )}

          <div class="jr-actions-v42">

            <button
              type="button"
              class="jr-action-v42"
              id="jrFormatV42"
            >
              FORMAT JSON
            </button>

            <button
              type="button"
              class="jr-action-v42"
              id="jrMinifyV42"
            >
              MINIFY JSON
            </button>

          </div>

          ${inputField(
            "BASE64 TEXT",
            "jrBaseV42",
            "Hello JOKER RKS"
          )}

          <div class="jr-actions-v42">

            <button
              type="button"
              class="jr-action-v42"
              id="jrEncodeV42"
            >
              ENCODE
            </button>

            <button
              type="button"
              class="jr-action-v42"
              id="jrDecodeV42"
            >
              DECODE
            </button>

          </div>

          <div
            class="jr-result-v42"
            id="jrDevResultV42"
          >
            READY
          </div>

        `;

        const json =
          document.getElementById(
            "jrJSONV42"
          );

        const result =
          document.getElementById(
            "jrDevResultV42"
          );

        document
          .getElementById("jrFormatV42")
          .onclick = function() {

            try {

              json.value =
                JSON.stringify(
                  JSON.parse(json.value),
                  null,
                  2
                );

              result.textContent =
                "JSON FORMATTED ✓";

            } catch(e) {

              result.textContent =
                "INVALID JSON";

            }

          };

        document
          .getElementById("jrMinifyV42")
          .onclick = function() {

            try {

              json.value =
                JSON.stringify(
                  JSON.parse(json.value)
                );

              result.textContent =
                "JSON MINIFIED ✓";

            } catch(e) {

              result.textContent =
                "INVALID JSON";

            }

          };

        document
          .getElementById("jrEncodeV42")
          .onclick = function() {

            try {

              result.textContent =
                btoa(
                  unescape(
                    encodeURIComponent(
                      document
                        .getElementById("jrBaseV42")
                        .value
                    )
                  )
                );

            } catch(e) {

              result.textContent =
                "ENCODE FAILED";

            }

          };

        document
          .getElementById("jrDecodeV42")
          .onclick = function() {

            try {

              result.textContent =
                decodeURIComponent(
                  escape(
                    atob(
                      document
                        .getElementById("jrBaseV42")
                        .value
                    )
                  )
                );

            } catch(e) {

              result.textContent =
                "INVALID BASE64";

            }

          };

        return;

      }

      /* URL LAB */

      if (type === "url") {

        modalTitle.textContent =
          "04 // URL LAB";

        content.innerHTML = `

          <p>
            Encode and decode URL text.
          </p>

          ${inputField(
            "URL / TEXT",
            "jrURLV42",
            "https://example.com/hello world"
          )}

          <div class="jr-actions-v42">

            <button
              type="button"
              class="jr-action-v42"
              id="jrURLEncodeV42"
            >
              ENCODE
            </button>

            <button
              type="button"
              class="jr-action-v42"
              id="jrURLDecodeV42"
            >
              DECODE
            </button>

          </div>

          <div
            class="jr-result-v42"
            id="jrURLResultV42"
          ></div>

        `;

        const input =
          document.getElementById(
            "jrURLV42"
          );

        const result =
          document.getElementById(
            "jrURLResultV42"
          );

        document
          .getElementById("jrURLEncodeV42")
          .onclick = function() {

            result.textContent =
              encodeURIComponent(
                input.value
              );

          };

        document
          .getElementById("jrURLDecodeV42")
          .onclick = function() {

            try {

              result.textContent =
                decodeURIComponent(
                  input.value
                );

            } catch(e) {

              result.textContent =
                "INVALID ENCODED URL";

            }

          };

        return;

                                        }
             /* TIME LAB */

      if (type === "time") {

        modalTitle.textContent =
          "05 // TIME LAB";

        content.innerHTML = `

          <p>
            Current browser time and Unix timestamp.
          </p>

          <div
            class="jr-result-v42"
            id="jrTimeResultV42"
          ></div>

          <div class="jr-actions-v42">

            <button
              type="button"
              class="jr-action-v42"
              id="jrTimeRefreshV42"
            >
              REFRESH
            </button>

          </div>

        `;

        function updateTime() {

          const now =
            new Date();

          document.getElementById(
            "jrTimeResultV42"
          ).textContent =

            "LOCAL:\n" +
            now.toString() +

            "\n\nISO:\n" +
            now.toISOString() +

            "\n\nUNIX:\n" +
            Math.floor(
              now.getTime() / 1000
            );

        }

        updateTime();

        document
          .getElementById("jrTimeRefreshV42")
          .onclick = updateTime;

        return;

      }

      /* CALC LAB */

      if (type === "calc") {

        modalTitle.textContent =
          "06 // CALC LAB";

        content.innerHTML = `

          <p>
            Basic calculator.
          </p>

          ${inputField(
            "EXPRESSION",
            "jrCalcV42",
            "12 * 8 + 5"
          )}

          <div class="jr-actions-v42">

            <button
              type="button"
              class="jr-action-v42"
              id="jrCalcRunV42"
            >
              CALCULATE
            </button>

          </div>

          <div
            class="jr-result-v42"
            id="jrCalcResultV42"
          ></div>

        `;

        document
          .getElementById("jrCalcRunV42")
          .onclick = function() {

            const expression =
              document
                .getElementById("jrCalcV42")
                .value
                .trim();

            const result =
              document.getElementById(
                "jrCalcResultV42"
              );

            if (
              !/^[0-9+\-*/().%\s]+$/.test(
                expression
              )
            ) {

              result.textContent =
                "ONLY BASIC MATH IS ALLOWED";

              return;

            }

            try {

              result.textContent =
                String(
                  Function(
                    '"use strict"; return (' +
                    expression +
                    ')'
                  )()
                );

            } catch(e) {

              result.textContent =
                "INVALID CALCULATION";

            }

          };

        return;

      }

      /* CASE LAB */

      if (type === "case") {

        modalTitle.textContent =
          "07 // CASE LAB";

        content.innerHTML = `

          <p>
            Convert text into different cases.
          </p>

          ${inputField(
            "TEXT",
            "jrCaseV42",
            "hello joker rks",
            true
          )}

          <div class="jr-actions-v42">

            <button
              type="button"
              class="jr-action-v42"
              data-case-v42="upper"
            >
              UPPER
            </button>

            <button
              type="button"
              class="jr-action-v42"
              data-case-v42="lower"
            >
              LOWER
            </button>

            <button
              type="button"
              class="jr-action-v42"
              data-case-v42="title"
            >
              TITLE
            </button>

          </div>

        `;

        content.addEventListener(
          "click",
          function(e) {

            const button =
              e.target.closest(
                "[data-case-v42]"
              );

            if (!button) return;

            const text =
              document.getElementById(
                "jrCaseV42"
              );

            if (
              button.dataset.caseV42 ===
              "upper"
            ) {

              text.value =
                text.value.toUpperCase();

            }

            if (
              button.dataset.caseV42 ===
              "lower"
            ) {

              text.value =
                text.value.toLowerCase();

            }

            if (
              button.dataset.caseV42 ===
              "title"
            ) {

              text.value =
                text.value
                  .toLowerCase()
                  .replace(
                    /\b\w/g,
                    function(x) {
                      return x.toUpperCase();
                    }
                  );

            }

          }
        );

        return;

      }

      /* IMAGE LAB */

      if (type === "image") {

        modalTitle.textContent =
          "08 // IMAGE LAB";

        content.innerHTML = `

          <p>
            Preview an image from a direct URL.
          </p>

          ${inputField(
            "IMAGE URL",
            "jrImageV42",
            "https://example.com/image.jpg"
          )}

          <div class="jr-actions-v42">

            <button
              type="button"
              class="jr-action-v42"
              id="jrImagePreviewV42"
            >
              PREVIEW IMAGE
            </button>

          </div>

          <div
            id="jrImageOutputV42"
          ></div>

        `;

        document
          .getElementById(
            "jrImagePreviewV42"
          )
          .onclick = function() {

            const url =
              document
                .getElementById(
                  "jrImageV42"
                )
                .value
                .trim();

            const output =
              document.getElementById(
                "jrImageOutputV42"
              );

            if (!url) {

              output.innerHTML =
                "<p>ENTER IMAGE URL</p>";

              return;

            }

            const image =
              document.createElement("img");

            image.src = url;
            image.alt = "Image Preview";

            image.style.maxWidth = "100%";
            image.style.maxHeight = "400px";
            image.style.borderRadius = "10px";

            image.onerror = function() {

              output.innerHTML =
                "<p>IMAGE COULD NOT BE LOADED.</p>";

            };

            output.innerHTML = "";

            output.appendChild(image);

          };

        return;

      }

    }

    /* =========================
       TOOL BUTTON CLICK
       ========================= */

    area.addEventListener(
      "click",
      function(e) {

        const button =
          e.target.closest(
            ".jr-tool-btn-v42"
          );

        if (!button) return;

        e.preventDefault();
        e.stopPropagation();

        openTool(
          button.dataset.tool
        );

      }
    );

    /* =========================
       MUSIC BUTTON
       ========================= */

    function setupMusicButton() {

      if (
        document.getElementById(
          "jrMusicToggleV42"
        )
      ) {
        return;
      }

      const music =
        document.getElementById(
          "welcomeMusic"
        );

      if (!music) {

        console.warn(
          "JOKER RKS: welcomeMusic not found"
        );

        return;

      }

      const button =
        document.createElement("button");

      button.id =
        "jrMusicToggleV42";

      button.type =
        "button";

      button.setAttribute(
        "aria-label",
        "Toggle music"
      );

      function updateMusicIcon() {

        button.textContent =
          music.paused
            ? "🔇"
            : "🔊";

        button.title =
          music.paused
            ? "Music OFF — tap to play"
            : "Music ON — tap to mute";

      }

      button.addEventListener(
        "click",
        function() {

          if (music.paused) {

            const playPromise =
              music.play();

            if (
              playPromise &&
              typeof playPromise.catch ===
              "function"
            ) {

              playPromise.catch(
                function() {}
              );

            }

          } else {

            music.pause();

          }

        }
      );

      music.addEventListener(
        "play",
        updateMusicIcon
      );

      music.addEventListener(
        "pause",
        updateMusicIcon
      );

      document.body.appendChild(
        button
      );

      updateMusicIcon();

    }

    setupMusicButton();

    console.log(
      "JOKER RKS TOOLS v4.2 LOADED ✓"
    );

  }

  /* =========================
     START SAFELY
     ========================= */

  if (
    document.readyState ===
    "loading"
  ) {

    document.addEventListener(
      "DOMContentLoaded",
      initJokerTools,
      { once: true }
    );

  } else {

    initJokerTools();

  }

})();
