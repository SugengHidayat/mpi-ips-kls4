const Flipbook = {

  init() {
    console.log("Flipbook aktif ✅");

    const el = document.getElementById("flipbook");

    el.innerHTML = `
      <div id="book">

        <div class="page">
          <h2>Halaman 1</h2>
          <p>Flipbook berhasil tampil ✅</p>
        </div>

        <div class="page">
          <h2>Halaman 2</h2>
          <p>Silakan lanjut pengembangan 🚀</p>
        </div>

      </div>
    `;

    if (typeof $ === "undefined") {
      alert("❌ jQuery tidak terbaca");
      return;
    }

    $('#book').turn({
      width: 900,
      height: 550,
      autoCenter: true
    });
  }

};
