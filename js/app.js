const App = {

  start() {
    document.getElementById("cover").style.display = "none";
    Flipbook.init();
  },

  goQuiz() {
    Flipbook.hide();
    Quiz.start();
  },

  finish(score) {
    Storage.saveScore(score);
    Certificate.generate(score);
  }

};
