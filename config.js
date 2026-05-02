// ╔══════════════════════════════════════════════════════════════╗
// ║              LETTERS FOR PRAKRITI — CONFIG                   ║
// ║  Edit this file only. Don't touch index.html or letter.html  ║
// ╚══════════════════════════════════════════════════════════════╝

const CONFIG = {

  // ── WHO IS THIS FOR ─────────────────────────────────────────
  recipientName: "Prakriti",
  senderName:    "Vinamra",

  // ── DAYS ─────────────────────────────────────────────────────
  // Each entry = one card.
  //
  // unlocksAt  → date + time she can open it. Format: "YYYY-MM-DDTHH:MM:SS"
  //              She can always open PAST days (before today).
  //
  // teaserMsg  → shown when she taps a FUTURE locked card.
  //              Write in Hinglish, make it sweet / teasing.
  //
  // images     → filenames inside assets/dayXX/ folder.
  //              Can be photos of handwritten notes, polaroids, anything.
  //              Add as many as you want. Swipeable gallery.
  //
  // voices     → mp3/m4a filenames inside assets/dayXX/ folder.
  //              Can be empty [] if no voice note that day.
  //              Each gets its own play button.

  days: [
    {
      day:        1,
      unlocksAt:  "2026-05-03T00:03:00",
      teaserMsg:  "Jaan, abhi nhi kholte, wait kr lijiye 💗",
      images:     ["0101.jpg"],
      voices:     ["voice.mp3"],
    },
    {
      day:        2,
      unlocksAt:  "2026-05-05T00:00:00",
      teaserMsg:  "Hii Babu, Abhi time nahi hua hai na open krne ka, Have Patience my baby. 🌸",
      images:     ["note.jpg", "memory.jpg"],
      voices:     [],
    },
    {
      day:        3,
      unlocksAt:  "2026-05-06T00:00:00",
      teaserMsg:  "Wait kr rhe ho na mera 💫",
      images:     ["note.jpg"],
      voices:     ["morning.mp3", "night.mp3"],
    },
    {
      day:        4,
      unlocksAt:  "2026-05-07T00:00:00",
      teaserMsg:  "Bhule to nahi na mjhe, I love u Babu✨",
      images:     ["note.jpg"],
    },
    {
      day:        5,
      unlocksAt:  "2026-05-08T00:00:00",
      teaserMsg:  "Bas last day, Kal se to I am back. 💙",
      images:     ["note.jpg", "pic2.jpg"],
      voices:     [],
    },
  ],

};
