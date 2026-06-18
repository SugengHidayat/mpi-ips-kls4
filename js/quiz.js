const Quiz = {

  data: [],
  index: 0,
  score: 0,

  async start() {
    document.getElementById("quizPage").classList.remove("hidden");

    const res = await fetch("data/soal.json");
    this.data = await res.json();

    this.show();
  },

  show() {
    const q = this.data[this.index];

    document.getElementById("quizPage").innerHTML = `
      <h3>${q.question}</h3>
      ${q.options.map((o,i) =>
        `<button onclick="Quiz.answer(${i})">${o}</button>`
      ).join("")}
    `;
  },

  answer(i) {
    if(i === this.data[this.index].answer) this.score++;

    this.index++;

    if(this.index < this.data.length) {
      this.show();
    } else {
      App.finish(this.score);
    }
  }

};
