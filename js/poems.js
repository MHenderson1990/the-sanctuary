/* ════════════════════════════════════
   POEMS — Coco's poetry list
   To add a poem: copy a { ... } block, edit it, keep a comma between blocks.
   text:  the full poem between backticks ` ` — line breaks show exactly as typed
   audio: 'audio/file-name.mp3' (MP3 goes in the audio/ folder), or null if no recording yet
   The Poetry page shows "Coming Soon" until this list has at least one poem.
════════════════════════════════════ */
const POEMS = [
  {
    id: 'test',
    title: 'Test Poem',
    icon: '🌙',
    tags: ['Healing', 'Strength'],
    text: `Line one
Line two
Line three`,
    audio: 'audio/test.mp3'
  }
];