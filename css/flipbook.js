/* ===========================
   FLIPBOOK MODULE - FULL PRO
=========================== */

const Flipbook = {

  init() {
    const container = document.getElementById("flipbook");
    container.classList.remove("hidden");

    container.innerHTML = `
      <div id="book">

        <!-- COVER -->
        <div class="page cover">
          <h1>Aku Cerdas Mengelola Kebutuhan</h1>
          <h3>IPS Kelas 4 SD</h3>
          <p>Sugeng Hidayat, S.Pd.</p>
          <img src="img/guru.png" style="width:120px;margin-top:10px;">
        </div>

        <!-- HALAMAN 1 -->
        <div class="page">
