const Certificate = {

  generate(score) {
    const el = document.getElementById("certificatePage");
    document.getElementById("quizPage").classList.add("hidden");

    el.classList.remove("hidden");

    el.innerHTML = `
      <h1>SERTIFIKAT</h1>
      <p>Sugeng Hidayat, S.Pd.</p>
      <p>Skor: ${score}</p>
      <div id="qrcode"></div>
    `;

    new QRCode(document.getElementById("qrcode"), {
      text: `Skor: ${score}`,
      width: 100,
      height: 100
    });
  }

};
