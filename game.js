// ─── CARDS — loaded from cards.json ─────────────────────────
let EASY_CARDS = [];
let HARD_CARDS = [];

async function loadCards() {
  try {
    const res = await fetch('cards.json');
    const data = await res.json();
    EASY_CARDS = data.easy;
    HARD_CARDS = data.hard;
  } catch (err) {
    console.error('Failed to load cards.json:', err);
  }
  initSetup();
}

// ─── ROUTE CONFIG ────────────────────────────────────────────
const ROUTES = {
  easy: { length: 30, hardChance: 0.25, label: 'Easy Route' },
  hard: { length: 20, hardChance: 1.00, label: 'Hard Route' },
};

const SWATCH_COLORS = ['#2d6a4f','#c1440e','#1d6fa4','#7b3fa0','#b06000','#1a6060','#8b3a62','#3a5fa0'];

// ─── STATE ───────────────────────────────────────────────────
let state = {
  players: [],
  route: 'easy',
  currentIdx: 0,
  phase: 'ready',
  pendingOutcome: null,
  cardCount: 0,
};

// ─── SETUP ──────────────────────────────────────────────────
const DEFAULT_NAMES = ['Alex', 'Blake', 'Casey', 'Drew', 'Emery', 'Finley', 'Gray', 'Harper'];
let playerCount = 2;

function initSetup() {
  playerCount = 2;
  document.getElementById('playerList').innerHTML = '';
  for (let i = 0; i < playerCount; i++) appendPlayerRow(i, DEFAULT_NAMES[i]);
}

function appendPlayerRow(i, name) {
  const list = document.getElementById('playerList');
  const row = document.createElement('div');
  row.className = 'player-row';
  row.dataset.idx = i;
  row.innerHTML = `
    <div class="player-swatch" style="background:${SWATCH_COLORS[i % SWATCH_COLORS.length]}"></div>
    <input type="text" value="${name}" placeholder="Player name" maxlength="14">
    <button class="remove-btn" onclick="removePlayer(this)" title="Remove">x</button>
  `;
  list.appendChild(row);
}

function addPlayer() {
  if (playerCount >= 8) return;
  appendPlayerRow(playerCount, DEFAULT_NAMES[playerCount] || `Player ${playerCount + 1}`);
  playerCount++;
}

function removePlayer(btn) {
  const rows = document.querySelectorAll('#playerList .player-row');
  if (rows.length <= 2) return;
  btn.closest('.player-row').remove();
  playerCount = document.querySelectorAll('#playerList .player-row').length;
}

function selectRoute(r) {
  state.route = r;
  document.getElementById('easyRouteOpt').classList.toggle('selected', r === 'easy');
  document.getElementById('hardRouteOpt').classList.toggle('selected', r === 'hard');
}

function startGame() {
  const inputs = document.querySelectorAll('#playerList input');
  state.players = Array.from(inputs).map((inp, i) => ({
    name: inp.value.trim() || `Player ${i + 1}`,
    pos: 0,
    color: SWATCH_COLORS[i % SWATCH_COLORS.length],
  }));
  if (state.players.length < 2) { alert('Add at least 2 players.'); return; }

  state.currentIdx = 0;
  state.cardCount = 0;
  state.pendingOutcome = null;
  state.phase = 'ready';

  buildBoard();
  buildScoreboard();
  dealCard();
  updateHeader();

  showScreen('game');
}

// ─── BOARD ──────────────────────────────────────────────────
function buildBoard() {
  const { length, hardChance } = ROUTES[state.route];
  const track = document.getElementById('track');
  track.innerHTML = '';

  for (let i = 0; i <= length; i++) {
    const tile = document.createElement('div');
    tile.id = `tile-${i}`;
    tile.className = 'tile';

    if (i === 0) {
      tile.classList.add('start-tile');
      tile.textContent = 'GO';
    } else if (i === length) {
      tile.classList.add('finish-tile');
      tile.textContent = 'END';
    } else {
      tile.classList.add(Math.random() < hardChance ? 'hard-tile' : 'easy-tile');
      tile.textContent = i;
    }

    const pips = document.createElement('div');
    pips.className = 'tile-pips';
    tile.appendChild(pips);
    track.appendChild(tile);
  }
  updateBoard();
}

function updateBoard() {
  document.querySelectorAll('.tile-pips').forEach(el => el.innerHTML = '');
  state.players.forEach(p => {
    const tile = document.getElementById(`tile-${p.pos}`);
    if (!tile) return;
    const pips = tile.querySelector('.tile-pips');
    const pip = document.createElement('div');
    pip.className = 'pip';
    pip.style.background = p.color;
    pip.title = p.name;
    pips.appendChild(pip);
  });
}

// ─── SCOREBOARD ─────────────────────────────────────────────
function buildScoreboard() {
  const el = document.getElementById('playerEntries');
  el.innerHTML = '';
  state.players.forEach((p, i) => {
    const entry = document.createElement('div');
    entry.className = 'player-entry';
    entry.id = `pe-${i}`;
    entry.innerHTML = `
      <div class="pe-dot" style="background:${p.color}"></div>
      <div class="pe-name">${p.name}</div>
      <div class="pe-pos" id="pe-pos-${i}">Tile 0</div>
      <div class="active-indicator" id="pe-active-${i}" style="display:none">Turn</div>
    `;
    el.appendChild(entry);
  });
  updateScoreboard();
}

function updateScoreboard() {
  state.players.forEach((p, i) => {
    const entry = document.getElementById(`pe-${i}`);
    const pos = document.getElementById(`pe-pos-${i}`);
    const act = document.getElementById(`pe-active-${i}`);
    if (!entry) return;
    entry.classList.toggle('active-player', i === state.currentIdx);
    pos.textContent = `Tile ${p.pos}`;
    act.style.display = i === state.currentIdx ? 'inline-block' : 'none';
  });
}

// ─── HEADER ─────────────────────────────────────────────────
function updateHeader() {
  const p = state.players[state.currentIdx];
  document.getElementById('currentPlayerName').textContent = p.name;
  const tag = document.getElementById('routeTag');
  tag.textContent = ROUTES[state.route].label;
  tag.className = `route-tag ${state.route}`;
}

// ─── TIMER ──────────────────────────────────────────────────
let timerInterval = null;
let timerRemaining = 0;
let timerTotal = 0;
const CIRCUMFERENCE = 238.76;

function showTimerPanel(seconds) {
  timerTotal = seconds;
  timerRemaining = seconds;
  clearInterval(timerInterval);
  timerInterval = null;

  document.getElementById('timerLabel').textContent = `${seconds}s`;
  document.getElementById('timerNumber').textContent = seconds;
  document.getElementById('timerNumber').className = 'timer-number';
  document.getElementById('timerArc').style.strokeDashoffset = '0';
  document.getElementById('timerArc').className = 'fg-circle';
  document.getElementById('timerStartBtn').disabled = false;
  document.getElementById('timerStartBtn').textContent = 'Start Timer';
  document.getElementById('timerPanel').classList.add('show');
}

function startTimer() {
  const startBtn = document.getElementById('timerStartBtn');
  startBtn.disabled = true;
  startBtn.textContent = 'Running...';

  clearInterval(timerInterval);
  timerInterval = setInterval(() => {
    timerRemaining--;

    const number = document.getElementById('timerNumber');
    const arc = document.getElementById('timerArc');

    number.textContent = timerRemaining;
    arc.style.strokeDashoffset = CIRCUMFERENCE * (1 - timerRemaining / timerTotal);

    if (timerRemaining <= 5) {
      number.className = 'timer-number danger';
      arc.className = 'fg-circle danger';
    } else if (timerRemaining <= Math.ceil(timerTotal * 0.4)) {
      number.className = 'timer-number warning';
      arc.className = 'fg-circle warning';
    }

    if (timerRemaining <= 0) {
      clearInterval(timerInterval);
      timerInterval = null;
      number.textContent = '0';
      startBtn.textContent = "Time's Up";
    }
  }, 1000);
}

function resetTimer() {
  clearInterval(timerInterval);
  timerInterval = null;
  document.getElementById('timerPanel').classList.remove('show');
}

// ─── CARD ───────────────────────────────────────────────────
function dealCard() {
  const { hardChance } = ROUTES[state.route];
  const isHard = Math.random() < hardChance;
  const deck = isHard ? HARD_CARDS : EASY_CARDS;
  const card = deck[Math.floor(Math.random() * deck.length)];
  state.currentCard = { ...card, isHard };
  state.cardCount++;

  const cardEl = document.getElementById('cardEl');
  cardEl.className = `card ${isHard ? 'hard-card' : 'easy-card'}`;
  cardEl.style.animation = 'none';
  cardEl.offsetHeight;
  cardEl.style.animation = '';

  document.getElementById('cardTypeLabel').textContent = isHard ? 'Hard Card' : 'Easy Card';
  document.getElementById('cardNum').textContent = `#${String(state.cardCount).padStart(3, '0')}`;
  document.getElementById('cardText').textContent = card.text;
  document.getElementById('cardFooter').textContent =
    'Complete the challenge to move forward — fail and move backward';

  // Reset UI
  resetTimer();
  document.getElementById('rollCardBtn').style.display = 'none';
  document.getElementById('rollCardBtn').disabled = false;
  document.getElementById('dicePanel').classList.remove('show');
  document.getElementById('outcomePanel').classList.remove('show');
  document.getElementById('nextTurnBtn').classList.remove('show');
  document.getElementById('diceResults').innerHTML = '';
  document.getElementById('diceResultText').textContent = '';

  state.phase = 'ready';
  state.pendingOutcome = null;

  if (card.timer) showTimerPanel(card.timer);
  document.getElementById('outcomePanel').classList.add('show');
}

// ─── OUTCOME — chosen BEFORE rolling ────────────────────────
function resolveOutcome(result) {
  state.pendingOutcome = result;
  document.getElementById('outcomePanel').classList.remove('show');

  const rollBtn = document.getElementById('rollCardBtn');
  rollBtn.style.display = 'block';
  rollBtn.disabled = false;

  if (result === 'passed') {
    rollBtn.textContent = 'Roll — Move Forward';
    rollBtn.style.background = 'var(--easy)';
  } else {
    rollBtn.textContent = 'Roll — Move Backward';
    rollBtn.style.background = 'var(--hard)';
  }

  state.phase = 'rolling';
}

// ─── ROLL — direction set by pass/fail ───────────────────────
function rollForCard() {
  const { length } = ROUTES[state.route];
  const passed = state.pendingOutcome === 'passed';
  const numDice = (!passed && state.route === 'hard') ? 2 : 1;

  const rolls = Array.from({ length: numDice }, () => Math.ceil(Math.random() * 6));
  const total = rolls.reduce((a, b) => a + b, 0);

  const resultsEl = document.getElementById('diceResults');
  resultsEl.innerHTML = '';
  rolls.forEach((r, i) => {
    const die = document.createElement('div');
    die.className = 'die-face';
    if (!passed) die.style.background = 'var(--hard)';
    die.style.animationDelay = `${i * 0.1}s`;
    die.textContent = r;
    resultsEl.appendChild(die);
  });

  const player = state.players[state.currentIdx];
  if (passed) {
    player.pos = Math.min(player.pos + total, length);
  } else {
    player.pos = Math.max(player.pos - total, 0);
  }

  const resultEl = document.getElementById('diceResultText');
  if (passed) {
    resultEl.textContent = `Challenge passed — moved forward ${total} to tile ${player.pos}`;
    resultEl.className = 'dice-result-text fwd';
  } else {
    resultEl.textContent = `Challenge failed — moved back ${total} to tile ${player.pos}`;
    resultEl.className = 'dice-result-text bwd';
  }

  document.getElementById('rollCardBtn').style.display = 'none';
  document.getElementById('dicePanel').classList.add('show');

  updateBoard();
  updateScoreboard();

  if (player.pos >= length) {
    setTimeout(() => {
      document.getElementById('winnerName').textContent = player.name;
      showScreen('win');
    }, 700);
    return;
  }

  document.getElementById('nextTurnBtn').classList.add('show');
  state.phase = 'done';
}

// ─── NEXT TURN ───────────────────────────────────────────────
function nextTurn() {
  state.currentIdx = (state.currentIdx + 1) % state.players.length;
  updateHeader();
  updateScoreboard();
  dealCard();
}

// ─── SCREENS ─────────────────────────────────────────────────
function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}

function goHome() {
  initSetup();
  selectRoute('easy');
  showScreen('setup');
}

// ─── INIT ────────────────────────────────────────────────────
loadCards();
