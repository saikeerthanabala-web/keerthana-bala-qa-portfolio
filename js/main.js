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

  /* HERO SAMPLE TEST RUN: edit these lines [test name, time] */
  var tests = [
    ["Login works in Chromium, Firefox and WebKit", "1.2s"],
    ["AI-generated locators replaced with stable selectors", "0.9s"],
    ["API response matches the documented schema", "0.3s"],
    ["Backend row matches what the UI shows (SQL check)", "0.6s"],
    ["Regression suite passes in Jenkins", "2.1s"],
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
    d.textContent = tests.length + " passed, 0 flaky";
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

  /* PROJECT POP-UPS: edit text here. Each row is [label, text]. Keys match data-k in index.html. */
  var info = {
    agentic: [
      "Agentic AI test workflows",
      [
        [
          "Problem",
          "Writing, checking and fixing tests by hand is repetitive and slow.",
        ],
        [
          "What I built",
          "Agentic workflows from scratch at Broadridge that generate tests, validate them, analyze failures and suggest automation fixes, using reusable prompts, agents and application context.",
        ],
        [
          "How I kept it reliable",
          "I reviewed AI output for wrong business logic, locators, assertions and waits, and fixed recurring issues at the source.",
        ],
        [
          "Tools",
          "ChatGPT, Claude, Gemini, Kimi, PostQode AI, prompt engineering",
        ],
      ],
    ],
    serenity: [
      "Serenity BDD and Cucumber automation",
      [
        [
          "Problem",
          "AI-generated scripts worked on the surface but were hard to maintain.",
        ],
        [
          "What I built",
          "Reusable page objects, step definitions and framework utilities that turn generated Serenity BDD and Cucumber code into maintainable tests.",
        ],
        [
          "Also",
          "Replaced unstable or duplicate XPath and CSS selectors to cut flaky failures.",
        ],
        [
          "Tools",
          "Serenity BDD, Cucumber, Selenium, Java, JavaScript, TypeScript",
        ],
      ],
    ],
    pw: [
      "Playwright post-production validation",
      [
        [
          "Problem",
          "Large healthcare applications need fast checks after every release.",
        ],
        [
          "What I built",
          "Playwright UI automation for post-production validation, regression and workflow coverage for California DHCS applications at IBM.",
        ],
        [
          "Also",
          "Backend validation with SQL, impact analysis on code changes, and running suites in CI/CD pipelines.",
        ],
        ["Tools", "Playwright, Selenium, JavaScript, TypeScript, SQL"],
      ],
    ],
    cypress: [
      "Cypress framework from scratch",
      [
        [
          "Problem",
          "Enterprise UI testing needed a scalable, reusable framework.",
        ],
        [
          "What I built",
          "A Cypress framework in JavaScript and TypeScript at Creditsafe, alongside Selenium frameworks using Java, TestNG/JUnit and Page Object Model.",
        ],
        [
          "Also",
          "Data-driven, keyword-driven and hybrid designs, run in Jenkins with cross-browser and parallel execution.",
        ],
        ["Tools", "Cypress, Selenium Grid, Sauce Labs, Jenkins, Git"],
      ],
    ],
    mobile: [
      "Mobile, POS and performance testing",
      [
        [
          "Scope",
          "Mobile app testing with Appium across devices, POS testing across transaction and end-to-end workflows, and load and stress testing.",
        ],
        [
          "What I checked",
          "Response times, system behavior and scalability under different workloads.",
        ],
        ["Tools", "Appium, JMeter, LoadRunner"],
      ],
    ],
    api: [
      "API and backend validation",
      [
        [
          "Scope",
          "Automated and manual checks of REST and SOAP services, plus SQL queries to confirm data integrity behind the UI.",
        ],
        [
          "Tools",
          "Postman, REST Assured, SOAP UI, SQL, Oracle, MySQL, SQL Server",
        ],
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
