/* JOKER RKS // TOOLS MODULE
   Future Tools changes: edit ONLY this file.
*/
(function () {
  "use strict";

  const area = document.querySelector("#tools .tools");
  if (!area) return;

  area.innerHTML = `
    <div class="tool"><b>01</b><h3>TEXT LAB</h3><p>Useful text utilities.</p><button class="jr-tool-btn" data-tool="text">OPEN TOOL →</button></div>
    <div class="tool"><b>02</b><h3>QR LAB</h3><p>Create a QR code from text or a link.</p><button class="jr-tool-btn" data-tool="qr">OPEN TOOL →</button></div>
    <div class="tool"><b>03</b><h3>DEV LAB</h3><p>Simple developer utilities.</p><button class="jr-tool-btn" data-tool="dev">OPEN TOOL →</button></div>
  `;

  const css = document.createElement("style");
  css.textContent = `
    #tools .jr-tool-btn{margin-top:14px;padding:9px 13px;background:transparent;color:inherit;border:1px solid currentColor;cursor:pointer;font:inherit;font-size:11px;letter-spacing:1px}
    #tools .jr-tool-btn:hover{background:#fff;color:#000}
    .jr-modal{display:none;position:fixed;inset:0;z-index:9999;align-items:center;justify-content:center;padding:18px;background:rgba(0,0,0,.82)}
    .jr-modal.show{display:flex}.jr-box{position:relative;width:min(520px,100%);max-height:90vh;overflow:auto;padding:28px;background:#080808;color:#eee;border:1px solid #444}
    .jr-close{position:absolute;right:12px;top:7px;background:none;border:0;color:#aaa;font-size:28px;cursor:pointer}
    .jr-box h3{margin:0 0 8px;letter-spacing:2px}.jr-box p{color:#888;font-size:12px}
    .jr-box input,.jr-box textarea{box-sizing:border-box;width:100%;margin:8px 0;padding:12px;background:#050505;color:#eee;border:1px solid #333;outline:none;font:13px monospace}
    .jr-box textarea{min-height:110px;resize:vertical}.jr-action{margin:4px 4px 4px 0;padding:9px 13px;background:#fff;color:#000;border:1px solid #fff;cursor:pointer;font-size:10px;letter-spacing:1px}
    .jr-result{margin-top:10px;padding:12px;min-height:42px;border:1px solid #333;color:#bbb;white-space:pre-wrap;word-break:break-word;font:12px monospace}
    .jr-qr{text-align:center;margin-top:14px}.jr-qr img{background:#fff;padding:7px;max-width:190px}
  `;
  document.head.appendChild(css);

  const modal = document.createElement("div");
  modal.className = "jr-modal";
  modal.innerHTML = `<div class="jr-box"><button class="jr-close">×</button><div id="jrContent"></div></div>`;
  document.body.appendChild(modal);

  const content = modal.querySelector("#jrContent");
  const close = () => { modal.classList.remove("show"); content.innerHTML = ""; };
  modal.querySelector(".jr-close").onclick = close;
  modal.onclick = e => { if (e.target === modal) close(); };
  document.addEventListener("keydown", e => { if (e.key === "Escape") close(); });

  function open(type) {
    modal.classList.add("show");

    if (type === "text") {
      content.innerHTML = `
        <h3>01 // TEXT LAB</h3><p>Quick text utilities.</p>
        <textarea id="jrText" placeholder="Write or paste text..."></textarea>
        <button class="jr-action" id="upper">UPPERCASE</button>
        <button class="jr-action" id="lower">LOWERCASE</button>
        <button class="jr-action" id="spaces">REMOVE EXTRA SPACES</button>
        <button class="jr-action" id="copy">COPY</button>
        <div class="jr-result" id="info">Characters: 0 | Words: 0</div>`;
      const t=content.querySelector("#jrText"), i=content.querySelector("#info");
      const update=()=>{const v=t.value,w=v.trim()?v.trim().split(/\s+/).length:0;i.textContent=`Characters: ${v.length} | Words: ${w}`};
      t.oninput=update;
      content.querySelector("#upper").onclick=()=>{t.value=t.value.toUpperCase();update()};
      content.querySelector("#lower").onclick=()=>{t.value=t.value.toLowerCase();update()};
      content.querySelector("#spaces").onclick=()=>{t.value=t.value.replace(/\s+/g," ").trim();update()};
      content.querySelector("#copy").onclick=async()=>{try{await navigator.clipboard.writeText(t.value);i.textContent+=" | COPIED"}catch(e){}};
    }

    if (type === "qr") {
      content.innerHTML = `
        <h3>02 // QR LAB</h3><p>Enter text or a link and generate a QR code.</p>
        <input id="qrInput" placeholder="https://example.com">
        <button class="jr-action" id="makeQR">GENERATE QR</button>
        <button class="jr-action" id="clearQR">CLEAR</button><div class="jr-qr" id="qrOut"></div>`;
      content.querySelector("#makeQR").onclick=()=>{
        const v=content.querySelector("#qrInput").value.trim(),o=content.querySelector("#qrOut");
        o.innerHTML=v?`<img alt="QR code" src="https://api.qrserver.com/v1/create-qr-code/?size=190x190&data=${encodeURIComponent(v)}">`:"Enter text or a link first.";
      };
      content.querySelector("#clearQR").onclick=()=>{content.querySelector("#qrInput").value="";content.querySelector("#qrOut").innerHTML=""};
    }

    if (type === "dev") {
      content.innerHTML = `
        <h3>03 // DEV LAB</h3><p>Developer utilities.</p>
        <textarea id="devInput" placeholder="Paste JSON or text here..."></textarea>
        <button class="jr-action" id="json">FORMAT JSON</button>
        <button class="jr-action" id="enc">BASE64 ENCODE</button>
        <button class="jr-action" id="dec">BASE64 DECODE</button>
        <button class="jr-action" id="copyDev">COPY RESULT</button>
        <div class="jr-result" id="devOut">Result...</div>`;
      const inp=content.querySelector("#devInput"),out=content.querySelector("#devOut");
      content.querySelector("#json").onclick=()=>{try{out.textContent=JSON.stringify(JSON.parse(inp.value),null,2)}catch(e){out.textContent="Invalid JSON."}};
      content.querySelector("#enc").onclick=()=>{try{out.textContent=btoa(unescape(encodeURIComponent(inp.value)))}catch(e){out.textContent="Could not encode."}};
      content.querySelector("#dec").onclick=()=>{try{out.textContent=decodeURIComponent(escape(atob(inp.value)))}catch(e){out.textContent="Invalid Base64."}};
      content.querySelector("#copyDev").onclick=async()=>{try{await navigator.clipboard.writeText(out.textContent)}catch(e){}};
    }
  }

  area.onclick = e => {
    const btn=e.target.closest(".jr-tool-btn");
    if(btn) open(btn.dataset.tool);
  };
})();
