(function () {
  var root = document.documentElement,
    btn = document.getElementById("theme");
  try {
    var s = localStorage.getItem("theme");
    if (s) root.setAttribute("data-theme", s);
  } catch (e) {}
  btn.addEventListener("click", function () {
    var dark = root.getAttribute("data-theme")
      ? root.getAttribute("data-theme") === "dark"
      : matchMedia("(prefers-color-scheme:dark)").matches;
    var n = dark ? "light" : "dark";
    root.setAttribute("data-theme", n);
    try {
      localStorage.setItem("theme", n);
    } catch (e) {}
  });

  var tests = [
    ["Login works in Chromium, Firefox and WebKit", "1.2s"],
    ["Checkout total matches the API response", "0.8s"],
    ["GET /orders returns the documented schema", "0.3s"],
    ["Assistant answer stays on topic across 5 prompts", "2.1s"],
    ["Retry on flaky network does not double-submit", "1.4s"],
  ];
  var run = document.getElementById("run"),
    i = 0;
  function line(t) {
    var d = document.createElement("div");
    d.innerHTML =
      '<span class="ok">✓</span> ' +
      t[0] +
      ' <span class="ms">' +
      t[1] +
      "</span>";
    run.appendChild(d);
  }
  function sum() {
    var d = document.createElement("div");
    d.className = "sum";
    d.textContent = "5 passed, 0 flaky";
    run.appendChild(d);
  }
  if (matchMedia("(prefers-reduced-motion:reduce)").matches) {
    tests.forEach(line);
    sum();
  } else {
    (function step() {
      if (i < tests.length) {
        line(tests[i++]);
        setTimeout(step, 650);
      } else sum();
    })();
  }

  var info = {
    serenity: [
      "Serenity BDD framework",
      [
        ["Problem", "Teams needed readable, repeatable automated tests."],
        [
          "What I built",
          "A Serenity BDD framework from scratch at Broadridge, with AI tools used to speed up automation work.",
        ],
        ["Tools", "Serenity BDD, Java, Selenium"],
        [
          "Result",
          "[Add a number: tests covered, hours saved, defects caught]",
        ],
      ],
    ],
    pw: [
      "Playwright test suite",
      [
        ["Problem", "UI tests that fail at random erode trust."],
        [
          "What I built",
          "A Playwright suite in JavaScript and TypeScript. [Describe your structure and how you find and fix flaky tests]",
        ],
        ["Tools", "Playwright, TypeScript, CI"],
        ["Result", "[Add a number]"],
      ],
    ],
    ai: [
      "Testing AI and GenAI features",
      [
        ["Problem", "AI answers can change between runs or be wrong."],
        [
          "Approach",
          "Test prompts, look for hallucinations, check consistency, and use LLMs to help generate test cases. [Add a concrete example]",
        ],
        ["Tools", "Python, LLM tools"],
        ["Result", "[Add a number or a lesson learned]"],
      ],
    ],
    api: [
      "API and load testing",
      [
        ["Problem", "Backend changes can break clients without any UI change."],
        [
          "Approach",
          "REST API checks in Postman and load tests in JMeter. [Add what you tested and what you found]",
        ],
        ["Tools", "Postman, JMeter, SQL"],
        ["Result", "[Add a number]"],
      ],
    ],
  };
  var dlg = document.getElementById("dlg");
  document.querySelectorAll(".proj").forEach(function (b) {
    b.addEventListener("click", function () {
      var p = info[b.dataset.k];
      document.getElementById("dt").textContent = p[0];
      document.getElementById("dd").innerHTML = p[1]
        .map(function (r) {
          return "<dt>" + r[0] + "</dt><dd>" + r[1] + "</dd>";
        })
        .join("");
      if (dlg.showModal) dlg.showModal();
      else dlg.setAttribute("open", "");
    });
  });

  document.getElementById("q").addEventListener("input", function (e) {
    var v = e.target.value.trim().toLowerCase();
    document.querySelectorAll("#skills .tags li").forEach(function (li) {
      li.classList.toggle(
        "hit",
        v && li.textContent.toLowerCase().indexOf(v) > -1,
      );
    });
  });
})();
