const Flipbook = {

  init() {
    console.log("✅ Flipbook aktif");

    const el = document.getElementById("flipbook");

    el.innerHTML = `
      <div id="book">

        <!-- COVER -->
        <div class="page cover">
          <h1>Aku Cerdas Mengelola Kebutuhan</h1>
          <p>IPS Kelas 4 SD</p>
          <img src="img/guru.png" width="120">
        </div>

        <!-- HALAMAN 1 -->
        <div class="page">
          <h2>Apa itu Kebutuhan?</h2>
          <p>Kebutuhan adalah sesuatu yang harus dipenuhi agar manusia dapat hidup dengan baik.</p>
          <ul>
            <li>Makan</li>
            <li>Pakaian</li>
            <li>Tempat tinggal</li>
          </ul>
        </div>

        <!-- HALAMAN 2 -->
        <div class="page">
          <h2>Jenis Kebutuhan</h2>
          <ul>
            <li>Primer</li>
            <li>Sekunder</li>
            <li>Tersier</li>
          </ul>
        </div>

        <!-- HALAMAN 3 (PIKTOGRAM 1) -->
        <div class="page">
          <h2>Piktogram Kebutuhan</h2>
          <canvas id="chart1"></canvas>
        </div>

        <!-- HALAMAN 4 (PIKTOGRAM 2) -->
        <div class="page">
          <h2>Pengeluaran Siswa</h2>
          <canvas id="chart2"></canvas>
        </div>

        <!-- HALAMAN 5 -->
        <div class="page">
          <h2>Latihan</h2>
          <p>Uang Andi Rp20.000</p>
          <p>Beli buku Rp10.000 dan snack Rp5.000</p>
          <p>Sisa uang berapa?</p>

          <button onclick="Flipbook.cek(5000)">Rp5.000</button>
          <button onclick="Flipbook.cek(3000)">Rp3.000</button>

          <p id="hasil"></p>
        </div>

        <!-- HALAMAN 6 -->
        <div class="page">
          <h2>Kesimpulan</h2>
          <ul>
            <li>Dahulukan kebutuhan utama</li>
            <li>Hemat uang</li>
            <li>Jangan boros</li>
          </ul>
        </div>

      </div>
    `;

    this.initTurn();
    this.renderCharts();
  },


  initTurn() {
    $('#book').turn({
      width: 900,
      height: 550,
      autoCenter: true
    });
  },


  renderCharts() {

    // Chart 1
    const ctx1 = document.getElementById("chart1");
    new Chart(ctx1, {
      type: 'bar',
      data: {
        labels: ['Makan', 'Buku', 'Mainan'],
        datasets: [{
          data: [5,3,2],
          backgroundColor: ['orange','blue','gray']
        }]
      }
    });

    // Chart 2
    const ctx2 = document.getElementById("chart2");
    new Chart(ctx2, {
      type: 'bar',
      data: {
        labels: ['Makan','Transport','Main'],
        datasets: [{
          data: [10,5,3],
          backgroundColor: ['orange','blue','gray']
        }]
      }
    });
  },


  cek(j) {
    const hasil = document.getElementById("hasil");

    if(j === 5000){
      hasil.innerHTML = "✅ Benar!";
      hasil.style.color = "green";
    } else {
      hasil.innerHTML = "❌ Salah!";
      hasil.style.color = "red";
    }
  }

};
