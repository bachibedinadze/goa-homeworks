<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>indexOf Demo: banana & Hello world</title>
  <style>
    :root { font-family: system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, Arial, "Apple Color Emoji", "Segoe UI Emoji"; }
    body { margin: 0; padding: 24px; background: #f7f7f8; color: #111; }
    .card { background: #fff; border-radius: 16px; padding: 20px; box-shadow: 0 6px 24px rgba(0,0,0,.06); max-width: 760px; margin: 0 auto 16px; }
    h1 { font-size: 20px; margin: 0 0 12px; }
    code { background: #f0f1f3; padding: 2px 6px; border-radius: 6px; }
    .row { display: grid; grid-template-columns: 1fr 2fr; gap: 12px; align-items: center; margin: 8px 0; }
    input[type="text"] { width: 100%; padding: 10px 12px; border: 1px solid #ddd; border-radius: 10px; font-size: 14px; }
    button { padding: 10px 14px; border: 0; border-radius: 12px; background: #111; color: white; cursor: pointer; }
    button:active { transform: translateY(1px); }
    .muted { color: #555; }
    .result { font-weight: 600; }
  </style>
</head>
<body>
  <div class="card">
    <h1>Part 1 – Find the 1st and 2nd <code>"a"</code> in <code>"banana"</code></h1>
    <p class="muted">Using <code>String.prototype.indexOf</code>.</p>
    <div class="row"><div>String</div><div><code id="s1">banana</code></div></div>
    <div class="row"><div>First <code>"a"</code> index</div><div class="result" id="firstIndex">(calculating…)</div></div>
    <div class="row"><div>Second <code>"a"</code> index</div><div class="result" id="secondIndex">(calculating…)</div></div>
  </div>

  <div class="card">
    <h1>Part 2 – Does <code>"world"</code> exist in <code>"Hello world"</code>?</h1>
    <p class="muted">Also using <code>indexOf</code> (exists if result <code>&gt;= 0</code>).</p>
    <div class="row"><div>String</div><div><code id="s2">Hello world</code></div></div>
    <div class="row"><div>Substring</div><div><code id="sub">world</code></div></div>
    <div class="row"><div>Result index</div><div class="result" id="worldIndex">(checking…)</div></div>
  </div>

  <div class="card">
    <h1>Try it yourself</h1>
    <div class="row">
      <label for="inputStr">String</label>
      <input id="inputStr" type="text" value="banana" />
    </div>
    <div class="row">
      <label for="char">Character / Substring</label>
      <input id="char" type="text" value="a" />
    </div>
    <div class="row">
      <div></div>
      <button id="run">Run indexOf</button>
    </div>
    <div class="row"><div>First index</div><div class="result" id="outFirst">–</div></div>
    <div class="row"><div>Second index</div><div class="result" id="outSecond">–</div></div>
  </div>

  <script>
    // Part 1
    const str1 = "banana";
    const firstIndex = str1.indexOf("a");
    const secondIndex = str1.indexOf("a", firstIndex + 1);
    document.getElementById("firstIndex").textContent = String(firstIndex);
    document.getElementById("secondIndex").textContent = String(secondIndex);

    // Part 2
    const text = "Hello world";
    const idx = text.indexOf("world");
    document.getElementById("worldIndex").textContent = idx >= 0
      ? `${idx} (exists)`
      : "-1 (not found)";

    // Interactive demo
    document.getElementById("run").addEventListener("click", () => {
      const s = document.getElementById("inputStr").value;
      const q = document.getElementById("char").value;
      const i1 = s.indexOf(q);
      const i2 = s.indexOf(q, i1 >= 0 ? i1 + 1 : 0);
      document.getElementById("outFirst").textContent = String(i1);
      document.getElementById("outSecond").textContent = String(i2);
      // Also log to console
      console.log({ firstIndex: i1, secondIndex: i2 });
    });
  </script>
</body>
</html>