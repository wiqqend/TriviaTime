// ─── CARDS — loaded inline (no fetch needed) ─────────────────
// Edit cards.json to change challenges, then paste the arrays back here.
const EASY_CARDS = [
  { text: 'Do 1 push up' },
  { text: 'Give everyone a compliment' },
  { text: 'Give your best celebrity impression', timer: 15 },
  { text: 'Say a tongue twister 3 times', timer: 20 },
  { text: 'Sing', timer: 30 },
  { text: 'Do 1 sit up' },
  { text: '5 jumping jacks', timer: 30 },
  { text: 'Solve a math equation in 5 seconds', timer: 5 },
  { text: 'Draw a tree', timer: 30 },
  { text: 'Delete a random app' },
  { text: 'Name 5 vegetables', timer: 20 },
  { text: 'Name 5 fruits', timer: 20 },
  { text: '1 minute karaoke', timer: 60 },
  { text: 'Name all continents', timer: 20 },
  { text: 'Name 5 clothing brands', timer: 20 },
  { text: 'Name the rainbow colors', timer: 15 },
  { text: 'Name a soccer team', timer: 10 },
  { text: 'Name an NBA team', timer: 10 },
  { text: 'Name an NFL team', timer: 10 },
  { text: 'Name 5 social media platforms', timer: 15 },
  { text: 'Name 3 board games', timer: 15 },
  { text: 'Name 3 brands of deodorant', timer: 15 },
  { text: 'Name 5 fast food restaurants', timer: 20 },
  { text: 'Name 5 artists in 10 seconds', timer: 10 },
  { text: 'Name 5 planets in 15 seconds', timer: 15 },
  { text: 'Name 3 programming languages', timer: 15 },
  { text: 'Change your wallpaper', timer: 30 },
  { text: 'Balance a book on your head', timer: 20 },
  { text: 'Name 10 Disney princesses', timer: 30 },
  { text: 'Rank Disney movies', timer: 20 },
  { text: 'Name 5 cartoon shows in 20 seconds', timer: 20 },
  { text: 'Name 10 TV shows in 30 seconds', timer: 30 },
  { text: 'Name 10 movies', timer: 30 },
  { text: 'Rank class subjects in 10 seconds', timer: 10 },
  { text: 'Name 5 beverages in 10 seconds', timer: 10 },
  { text: 'Do your best villain laugh for 5 seconds', timer: 5 },
  { text: 'Hop on 1 foot for 15 seconds', timer: 15 },
  { text: 'Pretend you won the lottery', timer: 20 },
  { text: 'Let someone draw on your hand', timer: 30 },
  { text: 'Do a TikTok dance', timer: 30 },
  { text: 'Pretend you are arguing with a wall', timer: 20 },
  { text: "Pretend you're arguing with your sibling", timer: 20 },
  { text: 'Do the worm', timer: 15 },
  { text: 'Do the floss', timer: 15 },
  { text: "Pretend you're stuck in a box", timer: 15 },
  { text: 'Act like you just saw a ghost', timer: 10 },
  { text: 'Do a runway walk', timer: 15 },
  { text: "Pretend you're a teacher yelling at your class for 15 seconds", timer: 15 },
  { text: 'Name 10 sports in 30 seconds', timer: 30 },
  { text: 'Name your top 10 favorite male celebrities', timer: 30 },
  { text: 'Name your top 10 favorite female celebrities', timer: 30 },
  { text: 'Name 5 video games', timer: 20 },
];

const HARD_CARDS = [
  { text: 'Hold a plank for 1 minute', timer: 60 },
  { text: 'Text your crush' },
  { text: 'Call a random contact' },
  { text: "Let the person you're playing with go through your camera roll for 30 seconds", timer: 30 },
  { text: 'Act like an animal for 30 seconds', timer: 30 },
  { text: 'Freestyle for a minute', timer: 60 },
  { text: 'Name 10 reptiles in 30 seconds', timer: 30 },
  { text: 'Name 10 mammals in 30 seconds', timer: 30 },
  { text: 'Name 3 countries in the Middle East', timer: 20 },
  { text: 'Name all seas', timer: 30 },
  { text: 'Name 10 languages', timer: 30 },
  { text: 'Name 10 car brands', timer: 30 },
  { text: 'Narrate everything you do for 2 rounds' },
  { text: 'Dance to no music for 15 seconds', timer: 15 },
  { text: 'Name 5 elements on the periodic table', timer: 30 },
  { text: 'Name 5 book series in 30 seconds', timer: 30 },
  { text: 'Sing the national anthem perfectly', timer: 60 },
  { text: 'Rank Wake Tech teachers', timer: 30 },
  { text: 'Rank WECIB teachers', timer: 30 },
  { text: 'Tell your most embarrassing story', timer: 60 },
  { text: 'Tell your deepest secret' },
  { text: 'Tell your saddest story' },
  { text: 'Lick your elbow', timer: 10 },
  { text: 'Touch your tongue to your chin', timer: 10 },
  { text: 'Call a random number and say you miss them' },
  { text: 'Call a random number without speaking' },
  { text: 'Let someone post on your story' },
  { text: 'Send a random emoji to a contact chosen by game members' },
  { text: 'Use a pickup line' },
  { text: 'Call your ex' },
  { text: 'Confess to one person' },
  { text: 'Read your last text conversation', timer: 30 },
  { text: 'Name all the zodiac signs', timer: 30 },
  { text: 'Compliment someone you absolutely hate' },
  { text: 'Trash talk someone you absolutely love' },
  { text: 'Name the person you hate the most in school' },
  { text: 'Name 10 AP classes', timer: 30 },
  { text: 'Allow the person in last place to text your last message' },
  { text: "Text 'we need to talk' and never follow up" },
  { text: 'Start laughing in a quiet room', timer: 30 },
  { text: "Do 20 jumping jacks while yelling 'I AM A CHAMPION'", timer: 60 },
  { text: 'Make a joke and if no one laughs, move back a space' },
  { text: 'Wear socks on your hands until the next round' },
  { text: 'Follow a Zumba class for 1 minute', timer: 60 },
  { text: 'Mimic someone you hate', timer: 20 },
  { text: 'Rage bait the person you talk to the most' },
  { text: 'Spin 10 times and try to walk straight', timer: 20 },
  { text: 'Rank the top 10 best-looking people in the school', timer: 30 },
];

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
  state.cardPool = [];
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

// ─── CARD GRID ───────────────────────────────────────────────
const GRID_COUNT = 8;

function dealCard() {
  const { hardChance } = ROUTES[state.route];

  // Pre-draw 8 cards (content hidden until picked)
  state.cardPool = Array.from({ length: GRID_COUNT }, () => {
    const isHard = Math.random() < hardChance;
    const deck = isHard ? HARD_CARDS : EASY_CARDS;
    const card = deck[Math.floor(Math.random() * deck.length)];
    return { ...card, isHard };
  });

  // Build the grid
  const grid = document.getElementById('cardGrid');
  grid.innerHTML = '';
  state.cardPool.forEach((card, i) => {
    const mini = document.createElement('div');
    mini.className = 'mini-card';
    mini.dataset.idx = i;
    mini.innerHTML = `
      <div class="mini-card-inner">
        <div class="mini-face mini-back"><img src="Back.jpg" alt="Card back"></div>
        <div class="mini-face mini-front ${card.isHard ? 'hard-mini' : ''}">
          <span class="mini-front-label">${card.isHard ? 'Hard' : 'Easy'}</span>
        </div>
      </div>`;
    mini.addEventListener('click', () => pickCard(i));
    grid.appendChild(mini);
  });

  // Show grid, hide revealed card and panels
  document.getElementById('cardPickLabel').style.display = 'block';
  document.getElementById('cardGrid').style.display = 'grid';
  document.getElementById('cardRevealWrap').style.display = 'none';

  resetTimer();
  document.getElementById('rollCardBtn').style.display = 'none';
  document.getElementById('dicePanel').classList.remove('show');
  document.getElementById('outcomePanel').classList.remove('show');
  document.getElementById('nextTurnBtn').classList.remove('show');
  document.getElementById('diceResults').innerHTML = '';
  document.getElementById('diceResultText').textContent = '';

  state.phase = 'waiting-flip';
  state.pendingOutcome = null;
  state.cardCount++;
}

function pickCard(idx) {
  if (state.phase !== 'waiting-flip') return;
  state.phase = 'ready';

  const card = state.cardPool[idx];
  state.currentCard = card;

  // Flip chosen mini card, lock and fade all others
  const minis = document.querySelectorAll('.mini-card');
  minis.forEach((m, i) => {
    if (i === idx) {
      m.classList.add('flipped', 'picked');
    } else {
      m.classList.add('locked');
    }
  });

  // After mini flip, show the big revealed card
  setTimeout(() => {
    // Populate revealed card
    const cardEl = document.getElementById('cardEl');
    cardEl.className = `card-face card-front ${card.isHard ? 'hard-card' : 'easy-card'}`;
    document.getElementById('cardTypeLabel').textContent = card.isHard ? 'Hard Card' : 'Easy Card';
    document.getElementById('cardNum').textContent = `#${String(state.cardCount).padStart(3, '0')}`;
    document.getElementById('cardText').textContent = card.text;
    document.getElementById('cardFooter').textContent =
      'Complete the challenge to move forward — fail and move backward';

    // Hide grid, show big card (already flipped to front via CSS class)
    document.getElementById('cardPickLabel').style.display = 'none';
    document.getElementById('cardGrid').style.display = 'none';
    document.getElementById('cardRevealWrap').style.display = 'block';

    // Show timer + pass/fail
    if (card.timer) showTimerPanel(card.timer);
    document.getElementById('outcomePanel').classList.add('show');
  }, 700);
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
initSetup();
