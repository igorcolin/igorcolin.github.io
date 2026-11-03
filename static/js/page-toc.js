// Navigation menu of the markdown blocks with `design: toc: true`
// (layouts/partials/blox/markdown.html, static/css/page-toc.css).
//
// - builds the menu from the `##` and `###` headings of the block, highlights the
//   section in view, and adds a copyable anchor to each heading;
// - in a table (columns Session, Date, Room, Topic, ...) whose rows hold <time datetime="YYYY-MM-DD..."> elements,
//   marks the rows as past, next or upcoming, and writes the next row into the
//   elements with the attribute data-next-session.
(function () {
  const content = document.querySelector(".page-toc-content");
  const nav = document.querySelector(".page-toc");
  if (!content || !nav) return;

  const header = document.querySelector(".page-header") || document.getElementById("site-header");
  const setTop = () => {
    const h = header ? header.getBoundingClientRect().height : 64;
    document.documentElement.style.setProperty("--toc-top", `${Math.round(h) + 8}px`);
  };
  setTop();
  window.addEventListener("resize", setTop);

  const list = nav.querySelector("ul");
  const headings = [...content.querySelectorAll("h2[id], h3[id]")];
  const links = new Map();
  for (const h of headings) {
    const li = document.createElement("li");
    li.className = h.tagName === "H3" ? "toc-h3" : "toc-h2";
    const a = document.createElement("a");
    a.href = `#${h.id}`;
    a.textContent = h.textContent.trim();
    li.appendChild(a);
    list.appendChild(li);
    links.set(h.id, a);

    const anchor = document.createElement("a");
    anchor.className = "heading-anchor";
    anchor.href = `#${h.id}`;
    anchor.setAttribute("aria-label", "Link to this section");
    anchor.textContent = "#";
    h.appendChild(anchor);
  }

  // The section in view is the last heading above a line at 30% of the viewport.
  let current = null;
  const update = () => {
    const line = window.innerHeight * 0.3;
    let id = headings.length ? headings[0].id : null;
    for (const h of headings) if (h.getBoundingClientRect().top <= line) id = h.id;
    if (id === current) return;
    if (current && links.get(current)) links.get(current).classList.remove("active");
    current = id;
    const a = links.get(id);
    if (!a) return;
    a.classList.add("active");
    // In the horizontal bar of small screens, keep the active link visible.
    if (list.scrollWidth > list.clientWidth) {
      list.scrollTo({ left: a.offsetLeft - list.clientWidth / 3, behavior: "smooth" });
    }
  };
  window.addEventListener("scroll", update, { passive: true });
  update();

  // Sessions: past, next, upcoming.
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  for (const table of content.querySelectorAll("table")) {
    const rows = [...table.querySelectorAll("tbody tr")].filter((r) => r.querySelector("td time[datetime]"));
    if (!rows.length) continue;
    let next = null;
    for (const r of rows) {
      const d = new Date(r.querySelector("time").getAttribute("datetime").slice(0, 10) + "T00:00:00");
      if (d < today) r.classList.add("session-past");
      else if (!next) { next = r; r.classList.add("session-next"); }
      else r.classList.add("session-upcoming");
    }
    for (const el of content.querySelectorAll("[data-next-session]")) {
      if (next) {
        const cells = next.querySelectorAll("td");
        const c = (i) => cells[i].textContent.trim();
        el.textContent = `session ${c(0)}, ${c(1)}, room ${c(2)}: ${c(3)}`;
      } else {
        el.textContent = "the course is over";
      }
    }
  }
})();
