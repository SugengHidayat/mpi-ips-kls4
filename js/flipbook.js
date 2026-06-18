const Flipbook = {

  isOpen: false,

  init() {
    console.log("✅ Mode buku tertutup");

    const el = document.getElementById("flipbook");

    el.innerHTML = `
      <div id="bookWrapper">

        <!-- COVER ONLY -->
        <div id="bookClosed" onclick="Flipbook.openBook()">
          <div class="coverFront">
            <h1>Aku Cerdas</h1>
            <p>Mengelola Kebutuhan</p>
            <small>Klik untuk membuka</small>
          </div>
        </div>

      </div>
    `;
  },


  /* ================= BUKA BUKU ================= */
  openBook() {
    console.log("📖 Buku dibuka");

    const wrapper = document.getElementById("bookWrapper");

    wrapper.innerHTML = `
      <div id="book">

        <div class="page cover">
          <h1>Aku Cerdas Mengelola Kebutuhan</h1>
          <p>IPS Kelas 4 SD</p>
          <img src="img/guru.png" width="120"/>
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

    setTimeout(() => {
      this.initChart();
    }, 300);
  },


  /* ================= TURN JS ================= */
  initTurn() {
    $('#book').turn({
      width: 900,
