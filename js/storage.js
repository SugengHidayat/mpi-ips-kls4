const Storage = {

  saveScore(score) {
    localStorage.setItem("score", score);
  },

  getScore() {
    return localStorage.getItem("score");
  }

};
