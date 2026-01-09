// --- 1. THE LETTER CONTENT ---
const letter = `My dearest Ponna 💗

From the moment you came into my life, everything felt softer, brighter, and sweeter.

Celebrating another year with you makes me realize that I wouldn’t be the person I am today without you. Through the hardest days of college, when I was struggling to finish my degree and felt like the weight of the world was too much, you were the only one who didn't let go. When things were at their absolute worst, you were my rock.

I love every part of you—even the storms. I know you carry a lot inside: the anger, the ego, the overthinking, and that fierce possessiveness. But what touches my soul the most is that, despite all of that, you continue to lay it all aside for me. You silence your own noise just to be my peace.

Thank you for never leaving my side. No matter what happens, no matter where life goes…

My love for you remains constant. Stronger. Forever.

💖 Happy Anniversary, My wife 💖`;

// --- 2. TYPING EFFECT ---
let i = 0;
const speed = 40; // Adjust typing speed here

function typeLetter() {
  const element = document.getElementById("letterText");
  if (i < letter.length) {
    // Handle line breaks specifically for HTML
    if (letter.charAt(i) === "\n") {
      element.innerHTML += "<br>";
    } else {
      element.innerHTML += letter.charAt(i);
    }
    i++;
    setTimeout(typeLetter, speed);
  }
}

// --- 3. MUSIC CONTROLS ---
function toggleMusic() {
  const audio = document.getElementById("bgm");
  const btn = document.getElementById("musicBtn");

  if (audio.paused) {
    audio.play().catch(e => console.log("User interaction needed first"));
    btn.innerHTML = "⏸ Pause Music";
  } else {
    audio.pause();
    btn.innerHTML = "🎵 Play Music";
  }
}

// --- 4. REVEAL & SURPRISE ---
function reveal() {
  document.getElementById("final").classList.remove("hidden");
  confetti();

  // Auto-play music if it's not already playing
  const audio = document.getElementById("bgm");
  if (audio.paused) {
    toggleMusic();
  }
}

function confetti() {
  for (let j = 0; j < 45; j++) {
    const h = document.createElement("div");
    h.className = "heart";
    h.style.left = Math.random() * 100 + "vw";
    h.style.animationDuration = (3 + Math.random() * 4) + "s";
    document.body.appendChild(h);
    setTimeout(() => h.remove(), 4000);
  }
}

// --- 5. PRINT FUNCTION ---
function printLetter() {
  const win = window.open('', '_blank');
  win.document.write(`
    <html>
      <head><title>For Ponna</title></head>
      <body style="font-family: 'Poppins', sans-serif; padding: 40px; line-height: 1.6;">
        <pre style="white-space: pre-wrap;">${letter}</pre>
      </body>
    </html>
  `);
  win.document.close();
  win.print();
}

// --- 6. FLOATING ELEMENTS & ANIMATIONS ---
const emojis = ["💖", "💘", "✨", "💞", "🌹", "💗", "💫", "💕"];

setInterval(() => {
  const span = document.createElement("span");
  span.className = "floating-emoji";
  span.innerText = emojis[Math.floor(Math.random() * emojis.length)];
  span.style.left = Math.random() * 100 + "vw";
  span.style.top = "100vh"; // Start from bottom
  document.body.appendChild(span);
  setTimeout(() => span.remove(), 6000);
}, 900);

// Heart rain animation
setInterval(() => {
  const heartContainer = document.getElementById("hearts");
  if (heartContainer) {
    let heart = document.createElement("span");
    heart.innerHTML = "❤️";
    heart.style.position = "absolute";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animation = "fall 5s linear"; // Ensure you have @keyframes fall in CSS
    heartContainer.appendChild(heart);
    setTimeout(() => heart.remove(), 5000);
  }
}, 400);

// --- 7. WISHES SYSTEM ---
function saveWish() {
  const input = document.getElementById("wish");
  const msg = input.value.trim();
  if (!msg) return;

  const list = document.getElementById("savedWishes");
  const li = document.createElement("li");
  li.textContent = msg;
  li.classList.add("fade-in");
  list.appendChild(li);

  localStorage.setItem("wishes", list.innerHTML);
  input.value = "";
}

// --- 8. IMAGE POPUP LOGIC ---
const popup = document.getElementById("imagePopup");
const popupImg = document.getElementById("popupImage");

document.querySelectorAll(".slide-img").forEach(img => {
  img.addEventListener("click", () => {
    popupImg.src = img.src;
    popup.classList.remove("hidden");
  });
});

function closePopup() {
  popup.classList.add("hidden");
}

// --- 9. INITIALIZATION (ONE ONLOAD TO RULE THEM ALL) ---
window.onload = () => {
  // 1. Start Typing Letter
  typeLetter();

  // 2. Load Saved Wishes
  const savedWishes = localStorage.getItem("wishes");
  if (savedWishes) {
    document.getElementById("savedWishes").innerHTML = savedWishes;
  }

  // 3. Add typing class to message if exists
  const message = document.getElementById("loveMessage");
  if (message) message.classList.add("typing");
};