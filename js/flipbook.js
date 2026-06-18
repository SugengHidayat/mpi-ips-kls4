// TEST GLOBAL
console.log("✅ flipbook.js TERLOAD");

const Flipbook = {
  init() {
    console.log("✅ Flipbook.init dipanggil");

    const el = document.getElementById("flipbook");

    el.innerHTML = `
      <div id="book">
        <div class="page">
          <h2>Flipbook Berhasil ✅</h2>
        </div>
        <div class="page">
          <h2>Halaman 2 ✅</h2>
        </div>
      </div>
    `;

    $('#book').turn({
      width: 800,
      height: 500,
      autoCenter: true
    });
  }
};
