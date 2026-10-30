/* ════════════════════════════════════
   POETRY — builds one row per poem from POEMS, each with its own inline audio player
   (no popup). Read expands the poem text under the row.
════════════════════════════════════ */
function renderPoemList() {
  document.getElementById('poetryComingSoon').hidden = POEMS.length > 0;
  document.getElementById('poemList').innerHTML = POEMS.map(p => `
    <div class="poem-row" data-id="${p.id}">
      <div class="poem-row-icon">${p.icon}</div>
      <div class="poem-row-info">
        <h3 class="poem-row-title">${p.title}</h3>
      </div>
      <div class="poem-row-tags">${p.tags.map(t => `<span class="poem-tag">${t}</span>`).join('')}</div>
      ${p.audio ? `
      <div class="player">
        <button class="player-skip" onclick="skipPoemAudio('${p.id}', -10)" aria-label="Back 10 seconds"><i class="fas fa-rotate-left"></i><span>10</span></button>
        <button class="player-btn" onclick="togglePoemAudio('${p.id}')" aria-label="Play"><i class="fas fa-play"></i></button>
        <button class="player-skip" onclick="skipPoemAudio('${p.id}', 10)" aria-label="Forward 10 seconds"><i class="fas fa-rotate-right"></i><span>10</span></button>
        <span class="player-time player-current">0:00</span>
        <input type="range" class="player-seek" min="0" max="100" step="0.1" value="0" aria-label="Seek" oninput="seekPoemAudio('${p.id}', this.value)" />
        <span class="player-time player-duration">0:00</span>
        <audio src="${p.audio}" preload="metadata"></audio>
      </div>` : `<p class="player-soon">Recording coming soon</p>`}
    </div>`).join('');
}

// ── Helpers ──
function poemRow(id) { return document.querySelector(`.poem-row[data-id="${id}"]`); }
function poemAudioEl(id) { return poemRow(id).querySelector('audio'); }

function formatTime(seconds) {
  if (!isFinite(seconds)) return '0:00';
  const m = Math.floor(seconds / 60);
  const s = String(Math.floor(seconds % 60)).padStart(2, '0');
  return `${m}:${s}`;
}

// ── Controls ──
function togglePoemAudio(id) {
  const audio = poemAudioEl(id);
  if (audio.paused) {
    // only one poem plays at a time
    document.querySelectorAll('.poem-row audio').forEach(a => { if (a !== audio) a.pause(); });
    audio.play().catch(() => {});
  } else {
    audio.pause();
  }
}

function skipPoemAudio(id, seconds) {
  const audio = poemAudioEl(id);
  if (!audio.duration) return;
  audio.currentTime = Math.min(Math.max(audio.currentTime + seconds, 0), audio.duration);
}

function seekPoemAudio(id, percent) {
  const audio = poemAudioEl(id);
  if (audio.duration) audio.currentTime = (percent / 100) * audio.duration;
}

// ── Keep each row's button, time and seek bar in sync with its audio ──
function wirePoemPlayers() {
  document.querySelectorAll('.poem-row').forEach(row => {
    const audio = row.querySelector('audio');
    if (!audio) return;
    const btn = row.querySelector('.player-btn');
    const current = row.querySelector('.player-current');
    const duration = row.querySelector('.player-duration');
    const seek = row.querySelector('.player-seek');

    const setIcon = playing => {
      btn.innerHTML = playing ? '<i class="fas fa-pause"></i>' : '<i class="fas fa-play"></i>';
      btn.setAttribute('aria-label', playing ? 'Pause' : 'Play');
    };

    audio.addEventListener('loadedmetadata', () => { duration.textContent = formatTime(audio.duration); });
    audio.addEventListener('timeupdate', () => {
      current.textContent = formatTime(audio.currentTime);
      if (audio.duration) seek.value = (audio.currentTime / audio.duration) * 100;
    });
    audio.addEventListener('play', () => setIcon(true));
    audio.addEventListener('pause', () => setIcon(false));
    audio.addEventListener('ended', () => setIcon(false));
  });
}

renderPoemList();
wirePoemPlayers();