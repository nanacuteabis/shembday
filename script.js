document.addEventListener("DOMContentLoaded", function() {

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

    const questions = [
        { q: "Siapa nama pet TikTok kita?", a: "SHIKA" },
        { q: "Makanan favorit kamu?", a: "SUSHI" },
        { q: "Warna favorit kamu?", a: "KUNING" },
        { q: "Baju kesukaanmu?", a: "KEMEJA" },
        { q: "Siapa penguasa Solo?", a: "JOKOWI" }
    ];

    let currentQuestion = 0;

    // Ready -> Warning
    startBtn.addEventListener("click", ()=>{
        readyPage.classList.add("hidden");
        warningPage.classList.remove("hidden");
    });

    // Warning -> Make a Wish
    warningContinue.addEventListener("click", ()=>{
        warningPage.classList.add("hidden");
        wishPage.classList.remove("hidden");
    });

    // Tiup lilin
    wishBtn.addEventListener("click", ()=>{
        if(wishInput.value.toUpperCase()==="PUFF"){
            wishFeedback.textContent="🎉 Lilin padam! Yuk mulai game!";
            setTimeout(()=>{
                wishPage.classList.add("hidden");
                gamePage.classList.remove("hidden");
                loadQuestion();
            },1000);
        } else {
            wishFeedback.textContent="Coba lagi, ketik PUFF ya 🕯";
        }
    });

    // Load pertanyaan
    function loadQuestion(){
        answerInput.value="";
        feedback.textContent="";
        emojiFeedback.textContent="";
        questionEl.textContent=questions[currentQuestion].q;
    }

    // Submit jawaban
    submitBtn.addEventListener("click", ()=>{
        const answer=answerInput.value.toUpperCase();
        if(answer===questions[currentQuestion].a){
            feedback.textContent="xixi selamat yeaaa😎";
            emojiFeedback.textContent="😊";
            currentQuestion++;
            if(currentQuestion<questions.length){
                setTimeout(loadQuestion,1000);
            } else {
                setTimeout(()=>{
                    gamePage.classList.add("hidden");
                    endPage.classList.remove("hidden");
                    launchConfetti();
                },1000);
            }
        } else {
            feedback.textContent="Coba lagi ya😉";
            emojiFeedback.textContent="😢";
        }
    });

    // Confetti
    function launchConfetti(){
        const duration=3000;
        const colors=["#FFD700","#FF69B4","#00FFFF","#FF4500","#ADFF2F","#FF6347"];
        const end=Date.now()+duration;
        (function frame(){
            const confetti=document.createElement("div");
            confetti.classList.add("confetti");
            confetti.style.left=Math.random()*100+"vw";
            confetti.style.backgroundColor=colors[Math.floor(Math.random()*colors.length)];
            document.body.appendChild(confetti);
            setTimeout(()=>confetti.remove(),3000);
            if(Date.now()<end) requestAnimationFrame(frame);
        }());
    }

    // Tombol kembali awal
    stopGameBtn.addEventListener("click", ()=>{
        endPage.classList.add("hidden");
        readyPage.classList.remove("hidden");
        currentQuestion=0;
        wishInput.value="";
        wishFeedback.textContent="";
    });

});
