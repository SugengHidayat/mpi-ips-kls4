const PiktogramData = [

  {
    id: "chart1",
    judul: "Kebutuhan Harian",
    labels: ["Makan", "Minum", "Belajar"],
    data: [5, 3, 4]
  },
  {
    id: "chart2",
    judul: "Pengeluaran Andi",
    labels: ["Makan", "Transport", "Jajan"],
    data: [10, 5, 3]
  },
  {
    id: "chart3",
    judul: "Tabungan Mingguan",
    labels: ["Senin", "Rabu", "Jumat"],
    data: [2000, 3000, 5000]
  },
  {
    id: "chart4",
    judul: "Hobi Siswa",
    labels: ["Membaca", "Main", "Olahraga"],
    data: [4, 6, 3]
  },
  {
    id: "chart5",
    judul: "Kebutuhan Sekolah",
    labels: ["Buku", "Pensil", "Tas"],
    data: [5, 8, 2]
  },
  {
    id: "chart6",
    judul: "Waktu Belajar",
    labels: ["Pagi", "Siang", "Malam"],
    data: [2, 3, 1]
  },
  {
    id: "chart7",
    judul: "Uang Saku Siswa",
    labels: ["Ani", "Budi", "Cici"],
    data: [10000, 8000, 12000]
  },
  {
    id: "chart8",
    judul: "Pengeluaran Keluarga",
    labels: ["Makan", "Listrik", "Transport"],
    data: [50, 20, 15]
  },
  {
    id: "chart9",
    judul: "Jumlah Barang",
    labels: ["Pensil", "Buku", "Penghapus"],
    data: [10, 5, 7]
  },
  {
    id: "chart10",
    judul: "Kebutuhan Mingguan",
    labels: ["Makan", "Minum", "Snack"],
    data: [7, 7, 4]
  },
  {
    id: "chart11",
    judul: "Kegiatan Harian",
    labels: ["Belajar", "Main", "Istirahat"],
    data: [3, 4, 5]
  },
  {
    id: "chart12",
    judul: "Transportasi ke Sekolah",
    labels: ["Jalan", "Sepeda", "Motor"],
    data: [5, 3, 2]
  },
  {
    id: "chart13",
    judul: "Penggunaan Uang",
    labels: ["Tabung", "Jajan", "Belanja"],
    data: [5, 3, 4]
  },
  {
    id: "chart14",
    judul: "Kebutuhan Bulanan",
    labels: ["Beras", "Listrik", "Air"],
    data: [20, 10, 8]
  },
  {
    id: "chart15",
    judul: "Prioritas Kebutuhan",
    labels: ["Primer", "Sekunder", "Tersier"],
    data: [10, 5, 2]
  }

];

const Piktogram = {

  renderAll(containerId) {
    const container = document.getElementById(containerId);

    container.innerHTML = PiktogramData.map(p => `
      <div style="margin-bottom:40px;">
        <h3>${p.judul}</h3>
        <canvas id="${p.id}"></canvas>
      </div>
    `).join("");

    PiktogramData.forEach(p => {
      const ctx = document.getElementById(p.id);

      new Chart(ctx, {
        type: 'bar',
        data: {
          labels: p.labels,
          datasets: [{
            label: p.judul,
            data: p.data,
            backgroundColor: ["#ff8c00","#0077b6","#999"]
          }]
        },
        options: {
          responsive: true,
          plugins: {
            legend: { display: false }
          }
        }
      });
    });
  }

};
