const startBtn = document.getElementById("start-btn");
const readyPage = document.getElementById("ready-page");
const warningPage = document.getElementById("warning-page");
const warningContinue = document.getElementById("warning-continue");

const wishPage = document.getElementById("wish-page");
const wishInput = document.getElementById("wish-input");
const wishBtn = document.getElementById("wish-btn");
const wishFeedback = document.getElementById("wish-feedback");

const gamePage = document.getElementById("game-page");
const questionEl = document.getElementById("question");
const answerInput = document.getElementById("answer-input");
const submitBtn = document.getElementById("submit-answer");
const feedback = document.getElementById("feedback");
const emojiFeedback = document.getElementById("emoji-feedback");

const endPage = document.getElementById("end-page");
const stopGameBtn = document.getElementById("stop-game");

// Pertanyaan tebakan kata
const questions = [
    { q: "Siapa nama pet TikTok kita?", a: "SHIKA" },
    { q: "Makanan favorit kamu?", a: "SUSHI" },
    { q: "Warna favorit kamu?", a: "KUNING" },
    { q: "Minuman favorit yang ga bisa kamu tinggal?", a: "KOPI" },
    { q: "Siapa manusia paling lucu se galaksi bimasakti?", a: "NANA" }
];

let currentQuestion = 0;

// Flow: Ready -> Warning -> Make a Wish
startBtn.addEventListener("click", () => {
    readyPage.classList.add("hidden");
    warningPage.classList.remove("hidden");
});

warningContinue.addEventListener("click", () => {
    warningPage.classList.add("hidden");
    wishPage.classList.remove("hidden");
});

// Tiup lilin
wishBtn.addEventListener("click", () => {
    if(wishInput.value.toUpperCase() === "PUFF"){
        wishFeedback.textContent = "🎉 Lilin padam! Yuk main game!";
        setTimeout(() => {
            wishPage.classList.add("hidden");
            gamePage.classList.remove("hidden");
            loadQuestion();
        }, 1000);
    } else {
        wishFeedback.textContent = "Coba lagi, ketik PUFF ya 🕯";
    }
});

// Load pertanyaan
function loadQuestion(){
    answerInput.value = "";
    feedback.textContent = "";
    emojiFeedback.textContent = "";
    questionEl.textContent = questions[currentQuestion].q;
}

// Submit jawaban
submitBtn.addEventListener("click", () => {
    const answer = answerInput.value.toUpperCase();
    if(answer === questions[currentQuestion].a){
        feedback.textContent = "xixi selamat yeaaa😎";
        emojiFeedback.textContent = "🤩"; // animasi senyum
        currentQuestion++;
        if(currentQuestion < questions.length){
            setTimeout(loadQuestion, 1000);
        } else {
            setTimeout(() => {
                gamePage.classList.add("hidden");
                endPage.classList.remove("hidden");
                launchConfetti(); // konfeti muncul!
            }, 1000);
        }
    } else {
        feedback.textContent = "Coba lagi ya😉";
        emojiFeedback.textContent = "😢"; // animasi sedih
    }
});

// Confetti function
function launchConfetti() {
    const duration = 3000; // durasi 3 detik
    const colors = ["#FFD700","#FF69B4","#00FFFF","#FF4500","#ADFF2F","#FF6347"];
    const end = Date.now() + duration;

    (function frame() {
        const confetti = document.createElement("div");
        confetti.classList.add("confetti");
        confetti.style.left = Math.random() * 100 + "vw";
        confetti.style.backgroundColor = colors[Math.floor(Math.random()*colors.length)];
        document.body.appendChild(confetti);

        setTimeout(() => confetti.remove(), 3000);

        if(Date.now() < end){
            requestAnimationFrame(frame);
        }
    }());
}

// Tombol kembali ke halaman awal
stopGameBtn.addEventListener("click", () => {
    endPage.classList.add("hidden");
    readyPage.classList.remove("hidden");
    currentQuestion = 0;
    wishInput.value = "";
    wishFeedback.textContent = "";
});    currentQuestion = 0;
    wishInput.value = "";
    wishFeedback.textContent = "";
});
