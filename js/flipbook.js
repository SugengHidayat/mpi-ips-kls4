const Flipbook = {

  init() {
    const fb = document.getElementById("flipbook");
    fb.classList.remove("hidden");

    fb.innerHTML = `
      <div id="book">
        <div class="page">Cover</div>
        <div class="page">Materi 1</div>
        <div class="page">Materi 2</div>
        <div class="page">
          <button onclick="App.goQuiz()">Mulai AKM</button>
        </div>
      </div>
    `;

    $('#book').turn({
      width: 800,
      height: 500,
      autoCenter: true,
      gradients: true
    });

    Audio.playFlip();
  },

  hide() {
    document.getElementById("flipbook").classList.add("hidden");
  }

};
