// Nav highlighting on click
document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    document
      .querySelectorAll(".nav-link")
      .forEach((l) => l.classList.remove("active"));
    link.classList.add("active");
  });
});

// Skill tabs – swap left card content
const skillContent = {
  dribbling: {
    title: "Dribbling — Pace, Control & Deception",
    subtitle: "Ball-Handling Package",
    intro:
      "Blend Curry’s pace changes, Murray’s hesitation, Nash’s probes, Jason Williams’ creativity, Trae’s shield dribble, and Wojo’s low stance to build a complete handle.",
    chips: [
      "Steph Curry – Float Dribble",
      "Jamal Murray – Hang Hesitation",
      "Jason Williams – Creative Handles",
      "Steve Nash – Continuous Probe",
      "Trae Young – Trailing Dribble",
      "Wojo – Low Stance Control",
    ],
    teaching: [
      "Float dribble (Curry): small hang to read the defender before changing speed.",
      "Hang hesitation to attack (Murray): sell the pause, then explode into a long stride.",
      "Live-dribble passing (Jason Williams): every dribble is a threat to deliver a pass.",
      "Continuous probe (Nash): keep the dribble alive under the rim, never panic pick-ups.",
      "Shield & trailing dribble (Trae): keep the ball behind your body vs pressure.",
      "Low stance (Wojo): hips low, chest up, ball below the knee in traffic.",
    ],
    drills: [
      "Two-Ball Pound + Float – one ball low & hard, the other floats at hip height.",
      "Hang Hesitation Cone Series – at each cone, sell a pause then attack downhill.",
      "Continuous Paint Dribble – circle the lane 8–10 seconds without picking up.",
      "Shield Dribble vs Pad – have a partner bump you while you protect the ball.",
      "Mirror Low-Stance Dribble – partner moves laterally, you mirror while dribbling.",
    ],
  },
  shooting: {
    title: "Shooting — Range, Balance & Game Shots",
    subtitle: "Shot-Making Package",
    intro:
      "Take elements from Curry’s quick release, Murray’s stop-balance midrange, Trae’s floater and deep range, and Nash’s off-balance finishes.",
    chips: [
      "Steph Curry – Quick Release",
      "Jamal Murray – Midrange Stops",
      "Trae Young – Floaters & Deep 3s",
      "Steve Nash – Runners & Scoops",
    ],
    teaching: [
      "Foot prep (Curry): be ready to shoot before you catch the ball.",
      "Hard stops (Murray): use 2-foot or stride stops to get balanced in tight spaces.",
      "Touch floaters (Trae): soft release and high arc from different distances.",
      "One-motion form (Curry): smooth rise from pocket to release.",
      "Wrong-foot finishes (Nash): finish before help arrives by stepping off the 'wrong' foot.",
    ],
    drills: [
      "Relocation Series – pass, relocate to corner or wing, catch & shoot.",
      "Pacer Drill – vary speed (slow-fast-slow) into each jumper.",
      "5-Spot Floater Ladder – short, mid, and long floaters from each elbow and hash.",
      "Range Extension – shoot deep 3s with the same form you use at the line.",
      "Runner / Nash Finish Series – 10 reps each side, wrong-foot and high glass.",
    ],
  },
  passing: {
    title: "Passing — Vision, Angles & Creativity",
    subtitle: "Playmaking Package",
    intro:
      "Blend Nash’s vision, Jason Williams’ creativity, Trae’s lob timing, and Curry’s gravity skip passes.",
    chips: [
      "Steve Nash – Angles & Vision",
      "Jason Williams – Flair & Deception",
      "Trae Young – Lob Passing",
      "Steph Curry – Skip Passes vs Help",
    ],
    teaching: [
      "See two passes ahead (Nash): read both the roller and the weak-side shooter.",
      "Deception (Jason Williams): use your eyes and body to mislead defenders.",
      "Lob timing (Trae): throw it where only your big can get it, just as they jump.",
      "Skip vs pocket (Curry): choose between hitting the roller or skipping to the weak side based on help.",
    ],
    drills: [
      "Look-Off Passing – stare at one target while hitting another.",
      "Moving Target Passing – partner jogs; you hit them in stride with chest and bounce passes.",
      "Lob Window Drill – partner jumps from the dotted line; you must float the ball above help.",
      "PnR Pocket Pass – use chairs or cones to rep threading the needle to the roller.",
    ],
  },
  movement: {
    title: "Movement Without the Ball — Cuts, Screens & Relocation",
    subtitle: "Off-Ball Package",
    intro:
      "Move like Curry, Nash, and Jason Williams: constant relocation, smart cuts, and spacing.",
    chips: [
      "Steph Curry – Relocation",
      "Steve Nash – Cut-After-Pass",
      "Jason Williams – Random Movement",
    ],
    teaching: [
      "Pass & relocate (Curry): never stand after you pass. Fill a new window.",
      "Cut-after-pass (Nash): sprint into space, don’t drift.",
      "Timing with drivers (Jason Williams): cut behind defenders who turn their head.",
      "Use screens away from the ball: flare, curl, and back screen options.",
    ],
    drills: [
      "3-Player Movement Wheel – pass, cut, fill an open spot.",
      "Relocate After Every Shot – no standing on makes or misses.",
      "Read-the-Tagger Drill – if help drops, cut behind their head for a layup.",
      "Screen & Slip – set a screen then slip out when defenders overplay.",
    ],
  },
  defense: {
    title: "Defense — Pressure, Stance & IQ",
    subtitle: "Two-Way Guard Package",
    intro:
      "Take Gary Payton’s pressure, Wojo’s stance and charge-taking, and Curry’s off-ball IQ.",
    chips: [
      "Gary Payton – On-Ball Pressure",
      "Wojo – Stance & Charges",
      "Steph Curry – Off-Ball Anticipation",
      "Trae Young – Passing Lanes",
    ],
    teaching: [
      "Force to the weak hand (Payton) and cut off angles instead of reaching.",
      "Low, strong base (Wojo): chest up, hands active, no straight legs.",
      "Jump to the ball early (Curry): be in help before the pass is thrown.",
      "Read passing lanes (Trae): anticipate when ball-handlers stare down passes.",
    ],
    drills: [
      "Shadow Slide Drill – mirror a partner without crossing your feet.",
      "Closeout-Slide-Recover Circuit – contest, slide, then sprint to next spot.",
      "Screen Navigation with Chairs – practice going under, over, and through screens.",
      "Deflection Game – 30-second bursts trying to tip as many passes as possible.",
    ],
  },
  pnr: {
    title: "Pick & Roll Mastery — Reads & Counters",
    subtitle: "Game Control Package",
    intro:
      "Run PnR like Curry, Murray, Nash, and Trae: pace changes, snake dribbles, and layered reads.",
    chips: [
      "Jamal Murray – Snake Dribble",
      "Trae Young – Floater & Lob",
      "Steve Nash – Pocket Pass",
      "Steph Curry – Pull-Up Threat",
    ],
    teaching: [
      "Use pace (Curry/Murray): slow to the screen, fast off of it.",
      "Snake dribble (Murray): cross back over the screen to keep defenders on your back.",
      "Manipulate the big (Nash): make them choose between you and the roller.",
      "Read the tag defender (Trae): if tag steps in, skip to the corner.",
    ],
    drills: [
      "PnR Reads with 3 Defenders – on-ball, big, and tagger.",
      "Snake Ladder – weave around cones after the screen to keep your defender behind.",
      "Floater or Lob Drill – choose between short floater and lob to roller.",
      "Pull-Up or Pocket – take a 3 if the big drops, hit the pocket if they step up.",
    ],
  },
};
// 1. Data: one array of video cards per skill tab
const SKILL_VIDEOS = {
  handle: [
    {
      title: "Float Dribble – Space & Reads",
      focus: "Use the float dribble to create space and read defenders out of the pick & roll.",
      url: "https://www.youtube.com/watch?v=AJ_zjrHiuLQ", // 4 Reads Off the Float Dribble :contentReference[oaicite:0]{index=0}
      thumb: "https://img.youtube.com/vi/AJ_zjrHiuLQ/hqdefault.jpg"
    },
    {
      title: "Hesitation Dribble",
      focus: "Sell your drive, pause, and explode past defenders with a controlled hesi.",
      url: "https://www.youtube.com/watch?v=Da9tVOWJ08U", // Master the Hesitation Move :contentReference[oaicite:1]{index=1}
      thumb: "https://img.youtube.com/vi/Da9tVOWJ08U/hqdefault.jpg"
    },
    {
      title: "Nash Dribble",
      focus: "Keep your dribble alive under the rim and turn the paint into your office.",
      url: "https://www.youtube.com/watch?v=V1rH7qdO1LQ", // Master the Nash Dribble :contentReference[oaicite:2]{index=2}
      thumb: "https://img.youtube.com/vi/V1rH7qdO1LQ/hqdefault.jpg"
    },
    {
      title: "Escape Dribbles vs Traps",
      focus: "Use retreat and escape dribbles to handle pressure and traps.",
      url: "https://www.youtube.com/watch?v=FToePTmI9tA", // Escape Dribble Basketball :contentReference[oaicite:3]{index=3}
      thumb: "https://img.youtube.com/vi/FToePTmI9tA/hqdefault.jpg"
    }
  ],

  shooting: [
    {
      title: "Shot Preparation & Footwork",
      focus: "Footwork, balance, and habits every great shooter shares.",
      url: "https://www.youtube.com/watch?v=YWUtAaCzTeM", // What Every Great Shooter Has in Common :contentReference[oaicite:4]{index=4}
      thumb: "https://img.youtube.com/vi/YWUtAaCzTeM/hqdefault.jpg"
    },
    {
      title: "Pull-Up Jumper Series",
      focus: "Build a smooth pull-up off 1–2 dribbles at game speed.",
      url: "https://www.youtube.com/watch?v=eN9ySpzDt0E", // Shooting Drills to Master the Pull Up Jumper :contentReference[oaicite:5]{index=5}
      thumb: "https://img.youtube.com/vi/eN9ySpzDt0E/hqdefault.jpg"
    },
    {
      title: "Deep Range with Balance",
      focus: "Extend your range without losing balance or form.",
      url: "https://www.youtube.com/watch?v=oOCofAy4SYY", // This Workout Unlocks Deep Shooting Range :contentReference[oaicite:6]{index=6}
      thumb: "https://img.youtube.com/vi/oOCofAy4SYY/hqdefault.jpg"
    }
  ],

  passing: [
    {
      title: "Passing Fundamentals",
      focus: "One-hand passing series to build touch and accuracy.",
      url: "https://www.youtube.com/watch?v=y9UtZEY6maE", // Passing Series, IMG Academy :contentReference[oaicite:7]{index=7}
      thumb: "https://img.youtube.com/vi/y9UtZEY6maE/hqdefault.jpg"
    },
    {
      title: "4-Spot Passing",
      focus: "Game-like ball movement and extra-pass habits.",
      url: "https://www.youtube.com/watch?v=dmXPryj71Eg", // 4 Spot Passing Drill :contentReference[oaicite:8]{index=8}
      thumb: "https://img.youtube.com/vi/dmXPryj71Eg/hqdefault.jpg"
    },
    {
      title: "Drive & Kick Passing",
      focus: "Jump stop, read help, and hit shooters on time.",
      url: "https://www.youtube.com/watch?v=DkuG1yg7mm8", // Drive & Kick Drill :contentReference[oaicite:9]{index=9}
      thumb: "https://img.youtube.com/vi/DkuG1yg7mm8/hqdefault.jpg"
    }
  ],

  offball: [
    {
      title: "Off-Ball Movement Basics",
      focus: "Why moving without the ball is basketball’s most overlooked skill.",
      url: "https://www.youtube.com/watch?v=aQdfHAlyPKI", // Ultimate Guide to Off Ball Movement :contentReference[oaicite:10]{index=10}
      thumb: "https://img.youtube.com/vi/aQdfHAlyPKI/hqdefault.jpg"
    },
    {
      title: "Cuts for Easy Buckets",
      focus: "Backdoor, L-cuts, and other reads to get open.",
      url: "https://www.youtube.com/watch?v=1SWJeVXte_8", // 5 Cuts for Easy Open Shots :contentReference[oaicite:11]{index=11}
      thumb: "https://img.youtube.com/vi/1SWJeVXte_8/hqdefault.jpg"
    },
    {
      title: "Using Off-Ball Screens",
      focus: "Use screens like Steph to free yourself for shots.",
      url: "https://www.youtube.com/watch?v=P4BMzfhkAjQ", // Get Open Using Off Ball Screens :contentReference[oaicite:12]{index=12}
      thumb: "https://img.youtube.com/vi/P4BMzfhkAjQ/hqdefault.jpg"
    }
  ],

  defense: [
    {
      title: "Defensive Stance",
      focus: "Build a strong, balanced stance that you can hold.",
      url: "https://www.youtube.com/watch?v=4A6KqSJX8Ek", // Fundamentals of a Defensive Stance :contentReference[oaicite:13]{index=13}
      thumb: "https://img.youtube.com/vi/4A6KqSJX8Ek/hqdefault.jpg"
    },
    {
      title: "On-Ball Defense Drills",
      focus: "Footwork and habits for staying in front of your man.",
      url: "https://www.youtube.com/watch?v=sIxe6cBk0qY", // 5 Top On-Ball Defensive Drills :contentReference[oaicite:14]{index=14}
      thumb: "https://img.youtube.com/vi/sIxe6cBk0qY/hqdefault.jpg"
    },
    {
      title: "Stance & Slides",
      focus: "Slide, recover, and contest without fouling.",
      url: "https://www.youtube.com/watch?v=QaYwcS00vSA", // Defense: Stance and Slides :contentReference[oaicite:15]{index=15}
      thumb: "https://img.youtube.com/vi/QaYwcS00vSA/hqdefault.jpg"
    }
  ],

  pnr: [
    {
      title: "Pick & Roll Overview",
      focus: "How to actually read the defense out of ball screens.",
      url: "https://www.youtube.com/watch?v=0DFKpyRNVGc", // PnR Ultimate Guide :contentReference[oaicite:16]{index=16}
      thumb: "https://img.youtube.com/vi/0DFKpyRNVGc/hqdefault.jpg"
    },
    {
      title: "Pick & Roll Reads",
      focus: "Key reads every guard needs vs different coverages.",
      url: "https://www.youtube.com/watch?v=Rktjg7UUNBg", // Read & React to PnR :contentReference[oaicite:17]{index=17}
      thumb: "https://img.youtube.com/vi/Rktjg7UUNBg/hqdefault.jpg"
    },
    {
      title: "4 Must-Know PnR Reads",
      focus: "Simple framework for making the right decision.",
      url: "https://www.youtube.com/watch?v=PenIeuxqx3U", // 4 PnR Reads You MUST Know :contentReference[oaicite:18]{index=18}
      thumb: "https://img.youtube.com/vi/PenIeuxqx3U/hqdefault.jpg"
    }
  ]
};

// 2. Render cards into the grid
function renderSkill(skillKey) {
  const container = document.getElementById("skill-videos");
  const videos = SKILL_VIDEOS[skillKey] || [];

  container.innerHTML = videos.map(video => `
    <article class="skill-video-card">
      <a href="${video.url}" target="_blank" rel="noopener">
        <div class="skill-video-thumb">
          <img src="${video.thumb}" alt="${video.title}">
        </div>
        <div class="skill-video-info">
          <h4>${video.title}</h4>
          <p>${video.focus}</p>
        </div>
      </a>
    </article>
  `).join("");
}

// 3. Tab click behavior – no page navigation, just swapping content
document.querySelectorAll(".skill-tab").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".skill-tab").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    const skillKey = btn.dataset.skill;
    renderSkill(skillKey);
  });
});

// 4. Default state: Handles / Dribbling
renderSkill("handle");

function renderSkill(skillKey) {
  const data = skillContent[skillKey];
  const container = document.getElementById("skillDetail");
  if (!data || !container) return;

  const chipsHtml = data.chips.map((c) => `<div class="chip">${c}</div>`).join("");
  const teachingHtml = data.teaching.map((t) => `<li>${t}</li>`).join("");
  const drillsHtml = data.drills.map((d) => `<li>${d}</li>`).join("");

  container.innerHTML = `
    <small>${data.subtitle}</small>
    <h3>${data.title}</h3>
    <p>${data.intro}</p>
    <div class="chip-row">${chipsHtml}</div>
    <h4 style="font-size:0.85rem;margin:0.4rem 0;">Key Teaching Points</h4>
    <ul>${teachingHtml}</ul>
    <h4 style="font-size:0.85rem;margin:0.6rem 0 0.2rem;">Drill Menu</h4>
    <ul>${drillsHtml}</ul>
  `;
}

document.querySelectorAll(".skill-tab").forEach((tab) => {
  tab.addEventListener("click", () => {
    document
      .querySelectorAll(".skill-tab")
      .forEach((t) => t.classList.remove("active"));
    tab.classList.add("active");
    const key = tab.getAttribute("data-skill");
    renderSkill(key);
  });
});
