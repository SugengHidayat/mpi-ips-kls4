const Flipbook = {

  init() {
    console.log("✅ Flipbook init jalan");

    const container = document.getElementById("flipbook");
    container.classList.remove("hidden");

    container.innerHTML = `
      <div id="book">

        <div class="page cover">
          <h1>Aku Cerdas Mengelola Kebutuhan</h1>
          <p>IPS Kelas 4 SD</p>
          <img src="img/guru.png">
        </div>

        <div class="page">
          <h2>Apa itu Kebutuhan?</h2>
          <p>Kebutuhan adalah sesuatu yang harus dipenuhi agar hidup nyaman.</p>
        </div>

        <div class="page">
          <h2>Jenis Kebutuhan</h2>
          <ul>
            <li>Primer</li>
            <li>Sekunder</li>
            <li>Tersier</li>
          </ul>
        </div>

        <div class="page">
          <h2>Piktogram</h2>
          <canvas id="chart1"></canvas>
        </div>

        <div class="page">
          <h2>Latihan</h2>
          <p>Uang 20000 - 15000 = ?</p>
          <button onclick="Flipbook.cek(5000)">5000</button>
          <button onclick="Flipbook.cek(3000)">3000</button>
          <p id="hasil"></p>
        </div>

        <div class="page">
          <h2>Siap Quiz?</h2>
          <button onclick="App.goQuiz()">Mulai Quiz</button>
        </div>

      </div>
    `;

    this.initTurn();
    this.initChart();
  },


  initTurn() {
    console.log("✅ Init Turn.js");

    if (typeof $ === "undefined") {
      alert("jQuery belum loaded!");
      return;
    }

    if (!$('#book').turn) {
      alert("turn.js gagal load!");
      return;
    }

    $('#book').turn({
      width: 900,
      height: 550,
      autoCenter: true
    });
  },


  initChart() {
    console.log("✅ Init Chart");

    const ctx = document.getElementById("chart1");

    if (!ctx) return;

    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Makan', 'Main', 'Belajar'],
        datasets: [{
          data: [5, 3, 4],
          backgroundColor: ['orange', 'blue', 'gray']
        }]
      }
    });
  },


  cek(jawaban) {
    const hasil = document.getElementById("hasil");

    if (jawaban === 5000) {
      hasil.innerHTML = "✅ Benar!";
      hasil.style.color = "green";
    } else {
      hasil.innerHTML = "❌ Salah!";
      hasil.style.color = "red";
    }
  }

};
