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
      unlocksAt:  "2025-05-03T00:00:00",
      teaserMsg:  "Pehla din hai babu, thoda aur wait karo. Worth it hoga, promise. 💗",
      images:     ["note.jpg"],
      voices:     ["voice.mp3"],
    },
    {
      day:        2,
      unlocksAt:  "2025-05-04T00:00:00",
      teaserMsg:  "Kal tak patience rakho. Kuch bohot special prepare kar rha hu. 🌸",
      images:     ["note.jpg", "memory.jpg"],
      voices:     [],
    },
    {
      day:        3,
      unlocksAt:  "2025-05-05T00:00:00",
      teaserMsg:  "Teen din ka wait, teen guna reward. Bas thoda aur... 💫",
      images:     ["note.jpg"],
      voices:     ["morning.mp3", "night.mp3"],
    },
    {
      day:        4,
      unlocksAt:  "2025-05-06T00:00:00",
      teaserMsg:  "Babu patience hai toh reward bhi bohot bada hai. Bas ek aur din... ✨",
      images:     ["note.jpg"],
      voices:     ["voice.mp3"],
    },
    {
      day:        5,
      unlocksAt:  "2025-05-07T00:00:00",
      teaserMsg:  "Paanchwa din! Almost there. Ruk jao bas thodi der aur. 💙",
      images:     ["note.jpg", "pic2.jpg"],
      voices:     [],
    },
    {
      day:        6,
      unlocksAt:  "2025-05-08T00:00:00",
      teaserMsg:  "Last wala. Sabse special. Iska wait karna bilkul sahi tha. 💗",
      images:     ["note.jpg"],
      voices:     ["special.mp3"],
    },
  ],

};
