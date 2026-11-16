const DEFAULT_STATE = {
  user: { id: 1, username: "darma_cs2", nama: "Darma Nugraha", role: "Pemain" },
  maps: [
    { id: 1, kode: "de_mirage", nama: "Mirage", skala: 1.0 },
    { id: 2, kode: "de_inferno", nama: "Inferno", skala: 1.0 },
    { id: 3, kode: "de_dust2", nama: "Dust 2", skala: 1.1 },
  ],
  scenarios: [
    {
      id: 1,
      mapId: 1,
      nama: "Retake A Site (3v2 Default Plant)",
      site: "A",
      timer: 40,
      diff: "Menengah",
      bomb: { x: 430, y: 265 },
      enemies: [
        { name: "T1 (Tetris/Ramp)", x: 265, y: 310, aim: { x: 480, y: 260 } },
        { name: "T2 (Palace/Balcony)", x: 245, y: 145, aim: { x: 520, y: 215 } },
      ],
      callouts: [
        { x: 640, y: 420, text: "CT SPAWN" },
        { x: 615, y: 155, text: "JUNGLE" },
        { x: 545, y: 115, text: "STAIRS" },
        { x: 430, y: 245, text: "DEFAULT C4" },
        { x: 260, y: 345, text: "A RAMP" },
        { x: 235, y: 120, text: "PALACE" },
        { x: 550, y: 380, text: "TICKET BOOTH" },
      ],
      walls: [
        { x: 40, y: 40, w: 680, h: 440, type: "border" },
        { x: 110, y: 175, w: 180, h: 28 }, // Palace bottom wall
        { x: 110, y: 245, w: 110, h: 100 }, // Ramp wall block
        { x: 385, y: 220, w: 40, h: 45 }, // Triple box
        { x: 445, y: 280, w: 42, h: 42 }, // Firebox
        { x: 560, y: 175, w: 95, h: 28 }, // Jungle divider
        { x: 520, y: 345, w: 60, h: 50 }, // Ticket
      ],
      preset: {
        cts: [
          { x: 635, y: 400 },
          { x: 615, y: 145 },
          { x: 530, y: 425 },
        ],
        paths: [
          [
            { x: 635, y: 400 },
            { x: 545, y: 315 },
            { x: 455, y: 270 },
          ],
          [
            { x: 615, y: 145 },
            { x: 495, y: 185 },
            { x: 435, y: 255 },
          ],
          [
            { x: 530, y: 425 },
            { x: 400, y: 365 },
            { x: 425, y: 280 },
          ],
        ],
        utils: [
          { type: "smoke", x: 315, y: 295 },
          { type: "smoke", x: 315, y: 165 },
          { type: "flash", x: 375, y: 230 },
          { type: "molotov", x: 255, y: 310 },
        ],
      },
    },
    {
      id: 2,
      mapId: 2,
      nama: "Retake B Site (3v2 Banana Control)",
      site: "B",
      timer: 35,
      diff: "Kompetitif",
      bomb: { x: 390, y: 225 },
      enemies: [
        { name: "T1 (Newbox)", x: 270, y: 155, aim: { x: 550, y: 230 } },
        { name: "T2 (Dark / Coffin)", x: 455, y: 120, aim: { x: 530, y: 320 } },
      ],
      callouts: [
        { x: 615, y: 265, text: "CT BOOST" },
        { x: 575, y: 150, text: "COFFINS" },
        { x: 540, y: 375, text: "RUINS" },
        { x: 275, y: 130, text: "NEWBOX" },
        { x: 180, y: 395, text: "BANANA" },
        { x: 390, y: 205, text: "B SITE C4" },
      ],
      walls: [
        { x: 40, y: 40, w: 680, h: 440, type: "border" },
        { x: 230, y: 235, w: 65, h: 95 }, // First/second oranges
        { x: 340, y: 195, w: 42, h: 48 }, // Fountain/pillar
        { x: 495, y: 170, w: 48, h: 75 }, // Spools/Coffin divider
        { x: 150, y: 110, w: 80, h: 120 }, // Banana wall
      ],
      preset: {
        cts: [
          { x: 625, y: 260 },
          { x: 560, y: 385 },
          { x: 610, y: 330 },
        ],
        paths: [
          [
            { x: 625, y: 260 },
            { x: 500, y: 265 },
            { x: 405, y: 230 },
          ],
          [
            { x: 560, y: 385 },
            { x: 420, y: 345 },
            { x: 390, y: 245 },
          ],
          [
            { x: 610, y: 330 },
            { x: 495, y: 295 },
            { x: 410, y: 240 },
          ],
        ],
        utils: [
          { type: "smoke", x: 510, y: 200 },
          { type: "molotov", x: 275, y: 155 },
          { type: "flash", x: 430, y: 255 },
        ],
      },
    },
    {
      id: 3,
      mapId: 3,
      nama: "Retake A Site (2v2 Short & Long)",
      site: "A",
      timer: 40,
      diff: "Pemula",
      bomb: { x: 420, y: 235 },
      enemies: [
        { name: "T1 (Goose)", x: 325, y: 115, aim: { x: 520, y: 330 } },
        { name: "T2 (A Ramp / Pit)", x: 540, y: 370, aim: { x: 440, y: 250 } },
      ],
      callouts: [
        { x: 240, y: 365, text: "CT / ELEVATOR" },
        { x: 225, y: 190, text: "CATWALK / SHORT" },
        { x: 565, y: 405, text: "A LONG" },
        { x: 325, y: 95, text: "GOOSE" },
        { x: 420, y: 215, text: "A SITE C4" },
      ],
      walls: [
        { x: 40, y: 40, w: 680, h: 440, type: "border" },
        { x: 365, y: 205, w: 46, h: 46 }, // Site boxes
        { x: 165, y: 235, w: 120, h: 70 }, // Short stairs block
        { x: 485, y: 135, w: 130, h: 80 }, // Long corner block
      ],
      preset: {
        cts: [
          { x: 235, y: 375 },
          { x: 220, y: 185 },
        ],
        paths: [
          [
            { x: 235, y: 375 },
            { x: 345, y: 315 },
            { x: 415, y: 245 },
          ],
          [
            { x: 220, y: 185 },
            { x: 335, y: 195 },
            { x: 410, y: 230 },
          ],
        ],
        utils: [
          { type: "smoke", x: 475, y: 315 },
          { type: "flash", x: 375, y: 175 },
          { type: "he", x: 325, y: 120 },
        ],
      },
    },
  ],
  criteria: { util: 40, cross: 35, time: 25 },
  users: [
    { id: 1, username: "darma_cs2", nama: "Darma Nugraha", role: "Pemain", aktif: true },
    { id: 2, username: "admin_lab", nama: "Asisten Lab RPL", role: "Admin", aktif: true },
    { id: 3, username: "bima_igl", nama: "Bima Pratama", role: "Pemain", aktif: true },
  ],
  history: [
    {
      id: 101,
      tanggal: "2026-11-15 18:10",
      scenLabel: "Mirage — Retake A Site",
      util: 92,
      cross: 90,
      time: 90,
      total: 91,
      grade: "A",
      recs: ["Eksekusi sangat solid. Pertahankan timing flash bersama masuknya CT."],
    },
    {
      id: 102,
      tanggal: "2026-11-15 16:40",
      scenLabel: "Inferno — Retake B Site",
      util: 78,
      cross: 80,
      time: 76,
      total: 78,
      grade: "B",
      recs: ["Tambahkan Molotov ke arah Newbox untuk memaksa musuh keluar dari cover."],
    },
    { id: 103, tanggal: "2026-11-14 21:15", scenLabel: "Dust 2 — Retake A Site", util: 65, cross: 70, time: 82, total: 71, grade: "B", recs: ["Smoke A Long masih meleset dari jalur pandang T2."] },
    {
      id: 104,
      tanggal: "2026-11-14 19:05",
      scenLabel: "Mirage — Retake A Site",
      util: 50,
      cross: 55,
      time: 72,
      total: 57,
      grade: "C",
      recs: ["CT masuk dari 1 jalur yang sama sehingga mudah ditahan crossfire musuh."],
    },
  ],
};

let state = loadState();
let activeScenarioId = 1;
let activeTool = "ct";
let draft = { cts: [], paths: [], utils: [] }; // current tactical layout
let simTime = 0;
let simPlaying = false;
let simRaf = null;
let lastEval = null;

function loadState() {
  try {
    const raw = localStorage.getItem("cs_retake_state_v1");
    return raw ? JSON.parse(raw) : structuredClone(DEFAULT_STATE);
  } catch {
    return structuredClone(DEFAULT_STATE);
  }
}
function saveState() {
  localStorage.setItem("cs_retake_state_v1", JSON.stringify(state));
}

function toast(msg) {
  const el = document.getElementById("toast");
  el.textContent = msg;
  el.classList.remove("hidden");
  clearTimeout(toast._t);
  toast._t = setTimeout(() => el.classList.add("hidden"), 2600);
}

/* ==================== NAVIGATION ==================== */
const PAGE_META = {
  dashboard: ["Dashboard Pemain", "Ringkasan latihan simulasi retake 2D Counter-Strike 2"],
  scenarios: ["Pilih Map & Skenario Retake", "Tentukan peta CS2 dan situasi bomb site yang ingin dilatih"],
  simulator: ["Simulasi Taktik Retake 2D", "Susun unit CT, utility, serta jalur masuk di radar 2D"],
  evaluation: ["Hasil Evaluasi Taktik", "Analisis skor efektivitas berbasis aturan & rekomendasi taktis"],
  history: ["Riwayat & Perbandingan Evaluasi", "Evaluasi progres dan bandingkan dua skema taktik"],
  admin: ["Panel Kelola Admin", "Manajemen Map CS2, Skenario Retake, Kriteria, dan Pengguna"],
};

function switchView(viewName) {
  if (viewName === "admin" && state.user.role !== "Admin") {
    toast("Akses ditolak: Silakan login sebagai Admin untuk membuka Panel Admin.");
    return;
  }
  document.querySelectorAll(".view").forEach((v) => v.classList.remove("active"));
  document.getElementById(`view-${viewName}`).classList.add("active");
  document.querySelectorAll(".nav-item").forEach((b) => {
    b.classList.toggle("active", b.dataset.view === viewName);
  });
  const [title, sub] = PAGE_META[viewName] || ["CS RETAKE", ""];
  document.getElementById("pageTitle").textContent = title;
  document.getElementById("pageSubtitle").textContent = sub;

  if (viewName === "simulator") drawCanvas();
  if (viewName === "dashboard") renderDashboard();
  if (viewName === "scenarios") renderScenarios();
  if (viewName === "history") renderHistory();
  if (viewName === "admin") renderAdmin();
}

document.querySelectorAll(".nav-item").forEach((btn) => {
  btn.addEventListener("click", () => switchView(btn.dataset.view));
});
document.querySelectorAll("[data-goto]").forEach((btn) => {
  btn.addEventListener("click", () => switchView(btn.dataset.goto));
});
document.getElementById("btnQuickSim").addEventListener("click", () => switchView("simulator"));
document.getElementById("btnBackToSim").addEventListener("click", () => switchView("simulator"));

/* ==================== AUTH & ROLE ==================== */
function syncAuthUI() {
  document.getElementById("currentUserName").textContent = state.user.nama;
  const pill = document.getElementById("currentUserRole");
  pill.textContent = state.user.role;
  pill.classList.toggle("admin", state.user.role === "Admin");
  document.querySelectorAll(".admin-only").forEach((el) => {
    el.classList.toggle("hidden", state.user.role !== "Admin");
  });
}

document.getElementById("btnOpenAuth").addEventListener("click", () => {
  document.getElementById("authModal").classList.remove("hidden");
});
document.getElementById("btnCloseAuth").addEventListener("click", () => {
  document.getElementById("authModal").classList.add("hidden");
});
document.getElementById("btnDemoPlayer").addEventListener("click", () => {
  state.user = { id: 1, username: "darma_cs2", nama: "Darma Nugraha", role: "Pemain" };
  saveState();
  syncAuthUI();
  document.getElementById("authModal").classList.add("hidden");
  switchView("dashboard");
  toast("Login berhasil sebagai Pemain (Darma Nugraha)");
});
document.getElementById("btnDemoAdmin").addEventListener("click", () => {
  state.user = { id: 2, username: "admin_lab", nama: "Asisten Lab RPL", role: "Admin" };
  saveState();
  syncAuthUI();
  document.getElementById("authModal").classList.add("hidden");
  switchView("admin");
  toast("Login berhasil sebagai Admin");
});
document.getElementById("formLogin").addEventListener("submit", (e) => {
  e.preventDefault();
  const u = document.getElementById("loginUser").value.trim();
  const found = state.users.find((x) => x.username === u && x.aktif);
  if (!found) {
    toast("Login tidak valid atau akun dinonaktifkan! Coba: darma_cs2 atau admin_lab");
    return;
  }
  state.user = { id: found.id, username: found.username, nama: found.nama, role: found.role };
  saveState();
  syncAuthUI();
  document.getElementById("authModal").classList.add("hidden");
  toast(`Selamat datang, ${found.nama} (${found.role})`);
});
document.getElementById("btnLogout").addEventListener("click", () => {
  document.getElementById("authModal").classList.remove("hidden");
  toast("Sesi diakhiri (Logout). Silakan login kembali.");
});

/* ==================== DASHBOARD & CATALOG ==================== */
function getActiveScenario() {
  return state.scenarios.find((s) => s.id === activeScenarioId) || state.scenarios[0];
}
function getMapName(mapId) {
  return (state.maps.find((m) => m.id === mapId) || { nama: "Unknown" }).nama;
}

function renderDashboard() {
  const total = state.history.length;
  const avg = total ? (state.history.reduce((a, b) => a + b.total, 0) / total).toFixed(1) : "0";
  const best = total ? Math.max(...state.history.map((h) => h.total)) : 0;
  document.getElementById("kpiTotalSim").textContent = total;
  document.getElementById("kpiAvgScore").textContent = avg;
  document.getElementById("kpiBestScore").textContent = best;
  document.getElementById("kpiMapCount").textContent = state.maps.length;

  const scenWrap = document.getElementById("dashScenarioList");
  scenWrap.innerHTML = state.scenarios
    .slice(0, 3)
    .map(
      (s) => `
    <div class="list-card">
      <div>
        <strong>${getMapName(s.mapId)} — ${s.nama}</strong>
        <div class="muted">Site ${s.site} • Timer ${s.timer}s • ${s.diff}</div>
      </div>
      <button class="btn-mini" onclick="selectScenario(${s.id})">Simulasi &rarr;</button>
    </div>
  `,
    )
    .join("");

  const recWrap = document.getElementById("dashRecentList");
  recWrap.innerHTML = state.history
    .slice(0, 3)
    .map(
      (h) => `
    <div class="list-card">
      <div>
        <strong>${h.scenLabel}</strong>
        <div class="muted">${h.tanggal}</div>
      </div>
      <span class="badge ${h.grade === "A" ? "green" : "amber"}">Skor ${h.total} (${h.grade})</span>
    </div>
  `,
    )
    .join("");
}

function renderScenarios() {
  const mapSel = document.getElementById("filterMap");
  const prev = mapSel.value;
  mapSel.innerHTML = '<option value="ALL">Semua Map</option>' + state.maps.map((m) => `<option value="${m.id}">${m.nama} (${m.kode})</option>`).join("");
  if ([...mapSel.options].some((o) => o.value === prev)) mapSel.value = prev;

  const fMap = mapSel.value;
  const fDiff = document.getElementById("filterDiff").value;
  const list = state.scenarios.filter((s) => (fMap === "ALL" || String(s.mapId) === fMap) && (fDiff === "ALL" || s.diff === fDiff));

  document.getElementById("scenarioCatalog").innerHTML = list
    .map(
      (s) => `
    <div class="scen-card">
      <div class="scen-badges">
        <span class="badge">${getMapName(s.mapId)}</span>
        <span class="badge amber">Site ${s.site}</span>
        <span class="badge green">${s.diff}</span>
      </div>
      <h3>${s.nama}</h3>
      <p class="muted">Bomb Timer: ${s.timer} detik • Posisi Musuh: ${s.enemies.length} Teroris terdeteksi</p>
      <button class="btn-primary full-w" onclick="selectScenario(${s.id})">Buka di Kanvas Simulasi 2D &rarr;</button>
    </div>
  `,
    )
    .join("");
}

document.getElementById("filterMap").addEventListener("change", renderScenarios);
document.getElementById("filterDiff").addEventListener("change", renderScenarios);

window.selectScenario = function (id) {
  activeScenarioId = id;
  const s = getActiveScenario();
  document.getElementById("activeScenarioChip").textContent = `Skenario: ${getMapName(s.mapId)} — ${s.nama}`;
  document.getElementById("simScenTitle").textContent = `${getMapName(s.mapId)} — ${s.nama}`;
  document.getElementById("simScenMeta").textContent = `Bomb Timer: ${s.timer}s | Kesulitan: ${s.diff}`;
  resetCanvasDraft();
  switchView("simulator");
};

/* ==================== 2D TACTICAL CANVAS ==================== */
const canvas = document.getElementById("tacticalCanvas");
const ctx = canvas.getContext("2d");

document.querySelectorAll(".tool-btn").forEach((b) => {
  b.addEventListener("click", () => {
    document.querySelectorAll(".tool-btn").forEach((x) => x.classList.remove("active"));
    b.classList.add("active");
    activeTool = b.dataset.tool;
  });
});

function updateCtCounter() {
  document.getElementById("ctCountLabel").textContent = draft.cts.length;
}

function resetCanvasDraft() {
  stopSim();
  draft = { cts: [], paths: [], utils: [] };
  updateCtCounter();
  drawCanvas();
}

document.getElementById("btnResetCanvas").addEventListener("click", () => {
  resetCanvasDraft();
  toast("Kanvas simulasi direset.");
});

document.getElementById("btnUndoTool").addEventListener("click", () => {
  if (activeTool === "ct" && draft.cts.length) draft.cts.pop();
  else if (activeTool === "path" && draft.paths.length) draft.paths.pop();
  else if (draft.utils.length) draft.utils.pop();
  updateCtCounter();
  drawCanvas();
});

document.getElementById("btnLoadPreset").addEventListener("click", () => {
  const s = getActiveScenario();
  if (!s.preset) {
    draft = {
      cts: [
        { x: 610, y: 380 },
        { x: 585, y: 175 },
      ],
      paths: [
        [{ x: 610, y: 380 }, s.bomb],
        [{ x: 585, y: 175 }, s.bomb],
      ],
      utils: [
        { type: "smoke", x: s.enemies[0].x + 35, y: s.enemies[0].y },
        { type: "flash", x: s.bomb.x - 30, y: s.bomb.y },
      ],
    };
  } else {
    draft = structuredClone(s.preset);
  }
  updateCtCounter();
  simTime = 0;
  document.getElementById("simScrubber").value = 0;
  document.getElementById("simTimeReadout").textContent = "0.0s";
  drawCanvas();
  toast("Preset taktik pro berhasil dimuat! Klik Jalankan Simulasi.");
});

canvas.addEventListener("click", (e) => {
  const rect = canvas.getBoundingClientRect();
  const x = Math.round(((e.clientX - rect.left) / rect.width) * canvas.width);
  const y = Math.round(((e.clientY - rect.top) / rect.height) * canvas.height);

  if (activeTool === "ct") {
    if (draft.cts.length >= 3) {
      toast("Maksimal 3 unit CT untuk skenario ini.");
      return;
    }
    draft.cts.push({ x, y });
    draft.paths.push([{ x, y }]);
    updateCtCounter();
  } else if (activeTool === "path") {
    if (!draft.cts.length) {
      toast("Tempatkan minimal 1 unit CT terlebih dahulu!");
      return;
    }
    // Attach waypoint to nearest CT's path end
    let bestIdx = 0,
      bestDist = Infinity;
    draft.paths.forEach((p, i) => {
      const last = p[p.length - 1];
      const d = Math.hypot(last.x - x, last.y - y);
      if (d < bestDist) {
        bestDist = d;
        bestIdx = i;
      }
    });
    draft.paths[bestIdx].push({ x, y });
  } else {
    draft.utils.push({ type: activeTool, x, y });
  }
  drawCanvas();
});

function segCircleIntersect(x1, y1, x2, y2, cx, cy, r) {
  const dx = x2 - x1,
    dy = y2 - y1;
  const len2 = dx * dx + dy * dy;
  if (len2 === 0) return Math.hypot(cx - x1, cy - y1) <= r;
  let t = ((cx - x1) * dx + (cy - y1) * dy) / len2;
  t = Math.max(0, Math.min(1, t));
  const px = x1 + t * dx,
    py = y1 + t * dy;
  return Math.hypot(cx - px, cy - py) <= r;
}

function pointAlongPath(pts, progress) {
  if (!pts || pts.length === 0) return null;
  if (pts.length === 1) return pts[0];
  let total = 0;
  const segs = [];
  for (let i = 0; i < pts.length - 1; i++) {
    const d = Math.hypot(pts[i + 1].x - pts[i].x, pts[i + 1].y - pts[i].y);
    segs.push(d);
    total += d;
  }
  if (total === 0) return pts[0];
  let target = progress * total;
  for (let i = 0; i < segs.length; i++) {
    if (target <= segs[i] || i === segs.length - 1) {
      const f = segs[i] ? target / segs[i] : 0;
      return {
        x: pts[i].x + (pts[i + 1].x - pts[i].x) * f,
        y: pts[i].y + (pts[i + 1].y - pts[i].y) * f,
      };
    }
    target -= segs[i];
  }
  return pts[pts.length - 1];
}

function drawCanvas() {
  const s = getActiveScenario();
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Radar Grid Background
  ctx.fillStyle = "#090e17";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.strokeStyle = "rgba(56, 189, 248, 0.06)";
  ctx.lineWidth = 1;
  for (let gx = 40; gx < canvas.width; gx += 40) {
    ctx.beginPath();
    ctx.moveTo(gx, 0);
    ctx.lineTo(gx, canvas.height);
    ctx.stroke();
  }
  for (let gy = 40; gy < canvas.height; gy += 40) {
    ctx.beginPath();
    ctx.moveTo(0, gy);
    ctx.lineTo(canvas.width, gy);
    ctx.stroke();
  }

  // Architecture Walls & Cover
  s.walls.forEach((w) => {
    if (w.type === "border") {
      ctx.strokeStyle = "#334155";
      ctx.lineWidth = 3;
      ctx.strokeRect(w.x, w.y, w.w, w.h);
    } else {
      ctx.fillStyle = "#1e293b";
      ctx.strokeStyle = "#475569";
      ctx.lineWidth = 1.5;
      ctx.fillRect(w.x, w.y, w.w, w.h);
      ctx.strokeRect(w.x, w.y, w.w, w.h);
    }
  });

  // Callout labels
  ctx.font = "700 11px Segoe UI, sans-serif";
  ctx.fillStyle = "rgba(148, 163, 184, 0.55)";
  ctx.textAlign = "center";
  s.callouts.forEach((c) => ctx.fillText(c.text, c.x, c.y));

  // Bomb Site Marker
  const pulse = 10 + Math.sin(simTime * 4) * 3;
  ctx.beginPath();
  ctx.arc(s.bomb.x, s.bomb.y, pulse + 8, 0, Math.PI * 2);
  ctx.fillStyle = "rgba(239, 68, 68, 0.16)";
  ctx.fill();
  ctx.fillStyle = "#ef4444";
  ctx.fillRect(s.bomb.x - 9, s.bomb.y - 7, 18, 14);
  ctx.fillStyle = "#fff";
  ctx.font = "bold 9px Segoe UI";
  ctx.fillText("C4", s.bomb.x, s.bomb.y + 3);

  // Utilities (rendered with active simulation expansion)
  const activeSmokes = [];
  draft.utils.forEach((u) => {
    const utilActive = simTime === 0 || simTime >= 1.2;
    if (!utilActive) return;
    if (u.type === "smoke") {
      const r = 46;
      activeSmokes.push({ x: u.x, y: u.y, r });
      ctx.beginPath();
      ctx.arc(u.x, u.y, r, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(148, 163, 184, 0.52)";
      ctx.fill();
      ctx.strokeStyle = "#e2e8f0";
      ctx.lineWidth = 1.5;
      ctx.stroke();
      ctx.fillStyle = "#f8fafc";
      ctx.font = "bold 10px Segoe UI";
      ctx.fillText("SMOKE", u.x, u.y + 4);
    } else if (u.type === "flash") {
      ctx.beginPath();
      ctx.arc(u.x, u.y, 34, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(254, 240, 138, 0.28)";
      ctx.fill();
      ctx.strokeStyle = "#fde047";
      ctx.lineWidth = 1.4;
      ctx.setLineDash([4, 3]);
      ctx.stroke();
      ctx.setLineDash([]);
      ctx.fillStyle = "#fef08a";
      ctx.font = "bold 10px Segoe UI";
      ctx.fillText("FLASH", u.x, u.y + 4);
    } else if (u.type === "molotov") {
      ctx.beginPath();
      ctx.arc(u.x, u.y, 38, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(249, 115, 22, 0.34)";
      ctx.fill();
      ctx.strokeStyle = "#fb923c";
      ctx.lineWidth = 1.6;
      ctx.stroke();
      ctx.fillStyle = "#fed7aa";
      ctx.font = "bold 10px Segoe UI";
      ctx.fillText("MOLLY", u.x, u.y + 4);
    } else if (u.type === "he") {
      ctx.beginPath();
      ctx.arc(u.x, u.y, 32, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(239, 68, 68, 0.25)";
      ctx.fill();
      ctx.strokeStyle = "#f87171";
      ctx.lineWidth = 1.5;
      ctx.stroke();
      ctx.fillStyle = "#fecaca";
      ctx.font = "bold 10px Segoe UI";
      ctx.fillText("HE", u.x, u.y + 4);
    }
  });

  // Enemies (T-side) & Sightlines
  s.enemies.forEach((en, idx) => {
    const blocked = activeSmokes.some((sm) => segCircleIntersect(en.x, en.y, en.aim.x, en.aim.y, sm.x, sm.y, sm.r));
    ctx.beginPath();
    ctx.moveTo(en.x, en.y);
    ctx.lineTo(en.aim.x, en.aim.y);
    ctx.strokeStyle = blocked ? "rgba(34, 197, 94, 0.55)" : "rgba(245, 158, 11, 0.5)";
    ctx.lineWidth = 2;
    ctx.setLineDash([6, 5]);
    ctx.stroke();
    ctx.setLineDash([]);

    if (blocked) {
      ctx.fillStyle = "#22c55e";
      ctx.font = "bold 10px Segoe UI";
      ctx.fillText("BLOCKED", (en.x + en.aim.x) / 2, (en.y + en.aim.y) / 2 - 6);
    }

    ctx.beginPath();
    ctx.arc(en.x, en.y, 13, 0, Math.PI * 2);
    ctx.fillStyle = "#f59e0b";
    ctx.fill();
    ctx.strokeStyle = "#fff";
    ctx.lineWidth = 2;
    ctx.stroke();
    ctx.fillStyle = "#0b0f17";
    ctx.font = "bold 10px Segoe UI";
    ctx.fillText(`T${idx + 1}`, en.x, en.y + 3);
  });

  // CT Paths & Animated CT Agents
  const moveProgress = Math.min(1, Math.max(0, (simTime - 1.5) / 10.5));
  draft.cts.forEach((ct, i) => {
    const pathPts = draft.paths[i] || [ct];
    if (pathPts.length > 1) {
      ctx.beginPath();
      ctx.moveTo(pathPts[0].x, pathPts[0].y);
      pathPts.slice(1).forEach((pt) => ctx.lineTo(pt.x, pt.y));
      ctx.strokeStyle = "#a855f7";
      ctx.lineWidth = 2.4;
      ctx.stroke();
    }
    const pos = simTime > 0 ? pointAlongPath(pathPts, moveProgress) : ct;
    ctx.beginPath();
    ctx.arc(pos.x, pos.y, 13, 0, Math.PI * 2);
    ctx.fillStyle = "#38bdf8";
    ctx.fill();
    ctx.strokeStyle = "#fff";
    ctx.lineWidth = 2;
    ctx.stroke();
    ctx.fillStyle = "#0b0f17";
    ctx.font = "bold 10px Segoe UI";
    ctx.fillText(`CT${i + 1}`, pos.x, pos.y + 3);
  });
}

/* ==================== SIMULATION PLAYBACK ==================== */
function stopSim() {
  simPlaying = false;
  cancelAnimationFrame(simRaf);
  simTime = 0;
  document.getElementById("simScrubber").value = 0;
  document.getElementById("simTimeReadout").textContent = "0.0s";
  drawCanvas();
}

function tickSim() {
  if (!simPlaying) return;
  simTime = Math.min(15, simTime + 0.06);
  document.getElementById("simScrubber").value = simTime.toFixed(1);
  document.getElementById("simTimeReadout").textContent = `${simTime.toFixed(1)}s`;
  drawCanvas();
  if (simTime < 15) simRaf = requestAnimationFrame(tickSim);
  else {
    simPlaying = false;
    toast('Simulasi 2D selesai! Klik "Evaluasi Taktik →" untuk melihat skor.');
  }
}

document.getElementById("btnPlaySim").addEventListener("click", () => {
  if (!draft.cts.length) {
    toast("Tempatkan minimal 1 unit CT terlebih dahulu (atau klik Muat Preset Taktik Pro).");
    return;
  }
  if (simTime >= 15) simTime = 0;
  simPlaying = true;
  tickSim();
});
document.getElementById("btnPauseSim").addEventListener("click", () => {
  simPlaying = false;
  cancelAnimationFrame(simRaf);
});
document.getElementById("btnStopSim").addEventListener("click", stopSim);
document.getElementById("simScrubber").addEventListener("input", (e) => {
  simPlaying = false;
  simTime = parseFloat(e.target.value);
  document.getElementById("simTimeReadout").textContent = `${simTime.toFixed(1)}s`;
  drawCanvas();
});

/* ==================== RULE-BASED TACTICAL EVALUATION ==================== */
function evaluateTactic() {
  if (!draft.cts.length) {
    toast("Tempatkan minimal 1 unit CT di kanvas sebelum evaluasi!");
    return;
  }
  const s = getActiveScenario();
  const recs = [];

  // 1. Utility Coverage (smoke blocking enemy sightline + flash/molotov near enemies)
  const smokes = draft.utils.filter((u) => u.type === "smoke");
  let blockedCount = 0;
  s.enemies.forEach((en) => {
    if (smokes.some((sm) => segCircleIntersect(en.x, en.y, en.aim.x, en.aim.y, sm.x, sm.y, 48))) {
      blockedCount++;
    }
  });
  const offensiveUtils = draft.utils.filter((u) => u.type === "flash" || u.type === "molotov" || u.type === "he");
  const nearEnemyOffense = offensiveUtils.filter((u) => s.enemies.some((en) => Math.hypot(u.x - en.x, u.y - en.y) < 130)).length;

  let skorUtil = Math.round((blockedCount / Math.max(1, s.enemies.length)) * 65 + Math.min(35, nearEnemyOffense * 18));
  skorUtil = Math.min(100, Math.max(20, skorUtil));
  if (blockedCount < s.enemies.length) {
    recs.push(`Tambahkan Smoke untuk menutup garis pandang musuh (${blockedCount}/${s.enemies.length} sudut tertutup).`);
  }
  if (nearEnemyOffense === 0) {
    recs.push("Gunakan Flashbang atau Molotov di sekitar posisi anchor musuh sebelum entry.");
  }

  // 2. Crossfire & Entry Angle
  let spreadScore = 40;
  if (draft.cts.length >= 2) {
    let maxDist = 0;
    for (let i = 0; i < draft.cts.length; i++) {
      for (let j = i + 1; j < draft.cts.length; j++) {
        maxDist = Math.max(maxDist, Math.hypot(draft.cts[i].x - draft.cts[j].x, draft.cts[i].y - draft.cts[j].y));
      }
    }
    spreadScore = maxDist > 160 ? 94 : maxDist > 90 ? 76 : 52;
    if (maxDist <= 120) {
      recs.push("Posisi awal unit CT terlalu berdekatan; sebarkan serangan dari minimal 2 arah (flank/crossfire).");
    }
  } else {
    recs.push("Retake hanya dengan 1 unit CT berisiko tinggi; tambahkan unit pendukung.");
  }

  // 3. Timing Margin (path reaches near bomb within safe window)
  let pathsToBomb = 0;
  draft.paths.forEach((p) => {
    const end = p[p.length - 1];
    if (p.length > 1 && Math.hypot(end.x - s.bomb.x, end.y - s.bomb.y) < 95) pathsToBomb++;
  });
  let skorTime = pathsToBomb > 0 ? Math.min(96, 65 + pathsToBomb * 12 + (s.timer >= 35 ? 10 : 0)) : 50;
  if (pathsToBomb === 0) {
    recs.push("Gambar jalur gerak (Waypoint) menuju area C4 agar tim CT memiliki rute defuse yang jelas.");
  }
  if (recs.length === 0) {
    recs.push("Eksekusi taktik sangat optimal: sightline musuh tertutup smoke, serangan multi-arah, dan rute defuse aman.");
  }

  const w = state.criteria;
  const total = Math.round((skorUtil * w.util + spreadScore * w.cross + skorTime * w.time) / 100);
  const grade = total >= 85 ? "A" : total >= 70 ? "B" : total >= 55 ? "C" : "D";
  const status = total >= 70 ? "Retake Optimal / Layak" : "Berisiko Tinggi";

  lastEval = {
    id: Date.now(),
    tanggal: new Date().toISOString().slice(0, 16).replace("T", " "),
    scenLabel: `${getMapName(s.mapId)} — ${s.nama}`,
    util: skorUtil,
    cross: spreadScore,
    time: skorTime,
    total,
    grade,
    status,
    recs,
  };

  document.getElementById("evalTotalScore").textContent = total;
  document.getElementById("evalGradeBadge").textContent = `Grade ${grade}`;
  document.getElementById("evalStatusBadge").textContent = status;
  document.getElementById("evalScenarioName").textContent = lastEval.scenLabel;

  document.getElementById("mUtilVal").textContent = `${skorUtil} / 100`;
  document.getElementById("mUtilBar").style.width = `${skorUtil}%`;
  document.getElementById("mCrossVal").textContent = `${spreadScore} / 100`;
  document.getElementById("mCrossBar").style.width = `${spreadScore}%`;
  document.getElementById("mTimeVal").textContent = `${skorTime} / 100`;
  document.getElementById("mTimeBar").style.width = `${skorTime}%`;

  document.getElementById("evalRecList").innerHTML = recs.map((r) => `<li>${r}</li>`).join("");
  switchView("evaluation");
}

document.getElementById("btnEvaluateNow").addEventListener("click", evaluateTactic);
document.getElementById("btnSaveEval").addEventListener("click", () => {
  if (!lastEval) {
    toast("Belum ada hasil evaluasi untuk disimpan.");
    return;
  }
  state.history.unshift(lastEval);
  saveState();
  toast("Hasil evaluasi berhasil disimpan ke Riwayat!");
  switchView("history");
});

/* ==================== HISTORY & COMPARE ==================== */
function renderHistory() {
  const tbody = document.getElementById("historyTableBody");
  tbody.innerHTML = state.history
    .map(
      (h) => `
    <tr>
      <td><input type="checkbox" class="cmp-chk" value="${h.id}" /></td>
      <td>${h.tanggal}</td>
      <td><strong>${h.scenLabel}</strong></td>
      <td>${h.util}</td>
      <td>${h.cross}</td>
      <td>${h.time}</td>
      <td><strong>${h.total}</strong></td>
      <td><span class="badge ${h.grade === "A" ? "green" : "amber"}">${h.grade}</span></td>
      <td><button class="btn-outline-danger" style="padding:4px 9px;" onclick="deleteHistory(${h.id})">Hapus</button></td>
    </tr>
  `,
    )
    .join("");
}

window.deleteHistory = function (id) {
  if (!confirm("Apakah Anda yakin ingin menghapus riwayat evaluasi ini?")) return;
  state.history = state.history.filter((h) => h.id !== id);
  saveState();
  renderHistory();
  toast("Riwayat evaluasi dihapus.");
};

document.getElementById("btnCompareSelected").addEventListener("click", () => {
  const checked = [...document.querySelectorAll(".cmp-chk:checked")].map((c) => Number(c.value));
  if (checked.length !== 2) {
    toast("Pilih tepat 2 riwayat evaluasi untuk dibandingkan.");
    return;
  }
  const [a, b] = checked.map((id) => state.history.find((h) => h.id === id));
  const diff = a.total - b.total;
  document.getElementById("comparePanel").classList.remove("hidden");
  document.getElementById("compareGrid").innerHTML =
    [a, b]
      .map(
        (x, idx) => `
    <div class="list-card" style="flex-direction:column; align-items:flex-start;">
      <div class="scen-badges">
        <span class="badge">Taktik ${idx + 1}</span>
        <span class="badge green">Skor ${x.total} (${x.grade})</span>
      </div>
      <strong>${x.scenLabel}</strong>
      <div class="muted">${x.tanggal}</div>
      <div style="margin-top:6px;">Utility: <b>${x.util}</b> • Crossfire: <b>${x.cross}</b> • Timing: <b>${x.time}</b></div>
      <div class="muted">${x.recs[0] || ""}</div>
    </div>
  `,
      )
      .join("") +
    `<div class="muted" style="grid-column:1/-1;">Selisih Skor Total: <b>${diff >= 0 ? "+" + diff : diff} poin</b> (${diff >= 0 ? "Taktik 1 lebih unggul" : "Taktik 2 lebih unggul"}).</div>`;
});
document.getElementById("btnCloseCompare").addEventListener("click", () => {
  document.getElementById("comparePanel").classList.add("hidden");
});

/* ==================== PANEL ADMIN ==================== */
document.querySelectorAll(".tab-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".tab-btn").forEach((b) => b.classList.remove("active"));
    document.querySelectorAll(".admin-tab").forEach((t) => t.classList.remove("active"));
    btn.classList.add("active");
    document.getElementById(`tab-${btn.dataset.tab}`).classList.add("active");
  });
});

function renderAdmin() {
  document.getElementById("adminMapBody").innerHTML = state.maps
    .map(
      (m) => `
    <tr>
      <td>${m.id}</td><td>${m.kode}</td><td><strong>${m.nama}</strong></td><td>${m.skala}</td>
      <td><button class="btn-outline-danger" style="padding:4px 9px;" onclick="delMap(${m.id})">Hapus</button></td>
    </tr>
  `,
    )
    .join("");

  document.getElementById("inScenMap").innerHTML = state.maps.map((m) => `<option value="${m.id}">${m.nama}</option>`).join("");
  document.getElementById("adminScenBody").innerHTML = state.scenarios
    .map(
      (s) => `
    <tr>
      <td>${s.id}</td><td>${getMapName(s.mapId)}</td><td><strong>${s.nama}</strong></td>
      <td>Site ${s.site}</td><td>${s.timer}s</td><td>${s.diff}</td>
      <td><button class="btn-outline-danger" style="padding:4px 9px;" onclick="delScen(${s.id})">Hapus</button></td>
    </tr>
  `,
    )
    .join("");

  document.getElementById("wUtil").value = state.criteria.util;
  document.getElementById("wCross").value = state.criteria.cross;
  document.getElementById("wTime").value = state.criteria.time;

  document.getElementById("adminUserBody").innerHTML = state.users
    .map(
      (u) => `
    <tr>
      <td>${u.id}</td><td>${u.username}</td><td>${u.nama}</td><td>${u.role}</td>
      <td><span class="badge ${u.aktif ? "green" : "amber"}">${u.aktif ? "Aktif" : "Nonaktif"}</span></td>
      <td><button class="btn-mini" onclick="toggleUser(${u.id})">${u.aktif ? "Nonaktifkan" : "Aktifkan"}</button></td>
    </tr>
  `,
    )
    .join("");
}

document.getElementById("formAddMap").addEventListener("submit", (e) => {
  e.preventDefault();
  const kode = document.getElementById("inMapKode").value.trim();
  const nama = document.getElementById("inMapNama").value.trim();
  const skala = parseFloat(document.getElementById("inMapSkala").value) || 1.0;
  state.maps.push({ id: Date.now() % 10000, kode, nama, skala });
  saveState();
  renderAdmin();
  e.target.reset();
  toast(`Map "${nama}" berhasil ditambahkan.`);
});
window.delMap = function (id) {
  state.maps = state.maps.filter((m) => m.id !== id);
  saveState();
  renderAdmin();
  toast("Data map dihapus.");
};

document.getElementById("formAddScenario").addEventListener("submit", (e) => {
  e.preventDefault();
  const mapId = Number(document.getElementById("inScenMap").value);
  const nama = document.getElementById("inScenNama").value.trim();
  const site = document.getElementById("inScenSite").value;
  const timer = Number(document.getElementById("inScenTimer").value);
  const diff = document.getElementById("inScenDiff").value;
  const base = state.scenarios[0];
  state.scenarios.push({
    id: Date.now() % 10000,
    mapId,
    nama,
    site,
    timer,
    diff,
    bomb: base.bomb,
    enemies: base.enemies,
    callouts: base.callouts,
    walls: base.walls,
    preset: base.preset,
  });
  saveState();
  renderAdmin();
  e.target.reset();
  toast(`Skenario "${nama}" berhasil disimpan.`);
});
window.delScen = function (id) {
  if (state.scenarios.length <= 1) {
    toast("Minimal sisakan 1 skenario.");
    return;
  }
  state.scenarios = state.scenarios.filter((s) => s.id !== id);
  saveState();
  renderAdmin();
  toast("Skenario dihapus.");
};

document.getElementById("formUpdateCriteria").addEventListener("submit", (e) => {
  e.preventDefault();
  const util = Number(document.getElementById("wUtil").value);
  const cross = Number(document.getElementById("wCross").value);
  const time = Number(document.getElementById("wTime").value);
  if (util + cross + time !== 100) {
    toast(`Total bobot harus 100% (saat ini: ${util + cross + time}%).`);
    return;
  }
  state.criteria = { util, cross, time };
  saveState();
  toast("Bobot kriteria evaluasi berhasil diperbarui!");
});

window.toggleUser = function (id) {
  const u = state.users.find((x) => x.id === id);
  if (u) u.aktif = !u.aktif;
  saveState();
  renderAdmin();
};

/* ==================== INIT ==================== */
syncAuthUI();
renderDashboard();
renderScenarios();
drawCanvas();
