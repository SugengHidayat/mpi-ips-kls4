const App = {

  start() {
    console.log("✅ App.start() jalan");

    const cover = document.getElementById("cover");
    const flipbook = document.getElementById("flipbook");

    if (!cover || !flipbook) {
      alert("Elemen tidak ditemukan!");
      return;
    }

    cover.style.display = "none";

    try {
      Flipbook.init();
    } catch (e) {
      console.error("ERROR:", e);
      alert("Terjadi error: " + e.message);
    }
  },

  goQuiz() {
    document.getElementById("flipbook").classList.add("hidden");
    document.getElementById("quizPage").classList.remove("hidden");
    Quiz.start();
  }

};
