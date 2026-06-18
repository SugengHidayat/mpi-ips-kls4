const Flipbook = {

  init() {
    console.log("✅ Flipbook FULL AKM aktif");

    const el = document.getElementById("flipbook");

    el.innerHTML = `
      <div id="book">

        <!-- COVER -->
        <div class="page cover">
          <h1>Aku Cerdas Mengelola Kebutuhan</h1>
          <p>IPS Kelas 4 SD</p>
          <img src="img/guru.png" width="120">
        </div>

        <!-- ================= MATERI ================= -->

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

        <!-- ================= PIKTOGRAM SET 1 ================= -->
        <div class="page"><h2>Data Kebutuhan</h2><canvas id="c1"></canvas><canvas id="c2"></canvas><canvas id="c3"></canvas></div>

        <!-- ================= SET 2 ================= -->
        <div class="page"><h2>Data Siswa</h2><canvas id="c4"></canvas><canvas id="c5"></canvas><canvas id="c6"></canvas></div>

        <!-- ================= SET 3 ================= -->
        <div class="page"><h2>Data Uang</h2><canvas id="c7"></canvas><canvas id="c8"></canvas><canvas id="c9"></canvas></div>

        <!-- ================= SET 4 ================= -->
        <div class="page"><h2>Data Aktivitas</h2><canvas id="c10"></canvas><canvas id="c11"></canvas><canvas id="c12"></canvas></div>

        <!-- ================= SET 5 ================= -->
        <div class="page"><h2>Skala Prioritas</h2><canvas id="c13"></canvas><canvas id="c14"></canvas><canvas id="c15"></canvas></div>

        <!-- ================= LATIHAN ================= -->
        <div class="page">
          <h2>Latihan AKM</h2>
          <p>Dari grafik, mana kebutuhan paling tinggi?</p>
          <button onclick="Flipbook.jawab(true)">Makan</button>
          <button onclick="Flipbook.jawab(false)">Mainan</button>
          <p id="hasil"></p>
        </div>

      </div>
    `;

    this.initTurn();
    this.renderCharts();
  },


  /* ================= TURN JS ================= */
  initTurn() {
    $('#book').turn({
      width: 900,
      height: 550,
      autoCenter: true,
      gradients: true,
      elevation: 50
    });
  },


  /* ================= CHART ENGINE ================= */
  makeChart(id, labels, data) {
    const ctx = document.getElementById(id);
    if (!ctx) return;

    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: labels,
        datasets: [{
          data: data,
          backgroundColor: ['#ff8c00', '#0077b6', '#999']
        }]
      },
      options: {
        responsive: true,
        plugins: { legend: { display: false } }
      }
    });
  },


  /* ================= RENDER 15 CHART ================= */
  renderCharts() {

    this.makeChart("c1", ["Makan","Minum","Belajar"], [5,3,4]);
    this.makeChart("c2", ["Buku","Tas","Pensil"], [4,2,6]);
    this.makeChart("c3", ["Sabun","Baju","Sepatu"], [3,5,2]);

    this.makeChart("c4", ["Ani","Budi","Cici"], [10,8,12]);
    this.makeChart("c5", ["Main","Belajar","Tidur"], [4,3,5]);
    this.makeChart("c6", ["Sepeda","Jalan","Motor"], [3,5,2]);

    this.makeChart("c7", ["Senin","Rabu","Jumat"], [2000,3000,5000]);
    this.makeChart("c8", ["Jajan","Tabung","Belanja"], [5,7,3]);
    this.makeChart("c9", ["Transport","Makan","Main"], [5,10,3]);

    this.makeChart("c10", ["Pagi","Siang","Malam"], [2,3,1]);
    this.makeChart("c11", ["Olah raga","Main","Belajar"], [3,4,5]);
