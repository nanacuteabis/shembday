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

    console.log("JS loaded! All elements:", startBtn, readyPage); // cek null

    // ... seluruh kode JS game tetap di sini
});    endPage.classList.add("hidden");
    readyPage.classList.remove("hidden");
    currentQuestion=0;
    wishInput.value="";
    wishFeedback.textContent="";
});    readyPage.classList.remove("hidden");
    currentQuestion=0;
    wishInput.value="";
    wishFeedback.textContent="";
});}

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
