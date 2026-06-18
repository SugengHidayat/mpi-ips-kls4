const App = {
  start() {
    console.log("App start");

    if (typeof Flipbook === "undefined") {
      alert("❌ Flipbook.js belum terbaca!");
      return;
    }

    const cover = document.getElementById("cover");
    const flipbook = document.getElementById("flipbook");

    cover.style.display = "none";
    flipbook.classList.remove("hidden");

    Flipbook.init();
  }
};
