const Flipbook = {

  init() {
    console.log("✅ Flipbook aktif");

    const el = document.getElementById("flipbook");

    el.innerHTML = `
      <div id="book">

        <div class="page cover">
          <h1>Aku Cerdas Mengelola Kebutuhan</h1>
          <img src="img/guru.png" width="120">
        </div>

        <div class="page">
          <h2>Apa itu Kebutuhan?</h2>
          <p>Kebutuhan adalah sesuatu yang harus dipenuhi.</p>
        </div>

        <div class="page">
          <h2>Piktogram</h2>
          <canvas id="chart1"></canvas>
        </div>

      </div>
    `;

    this.initTurn();

    // ✅ PENTING: tunggu render selesai baru bikin chart
    setTimeout(() => {
      this.renderCharts();
    }, 300);
  },


  initTurn() {
    if (typeof $ === "undefined") {
      alert("❌ jQuery tidak ada");
      return;
    }

    if (!$('#book').turn) {
      alert("❌ turn.js tidak load");
      return;
    }

    $('#book').turn({
      width: 900,
      height: 550,
      autoCenter: true
    });
  },


  renderCharts() {
    try {
      const ctx = document.getElementById("chart1");

      if (!ctx) {
        console.warn("chart tidak ditemukan");
        return;
      }

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

    } catch (e) {
      console.error("Chart error:", e);
      alert("Chart error: " + e.message);
    }
  }

};
``
