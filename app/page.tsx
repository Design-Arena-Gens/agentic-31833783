const paragraphs: string[] = [
  "Transformasi digital layanan pembayaran nasional membuka peluang bagi UMKM kuliner di Kabupaten Polewali Mandar untuk meningkatkan efisiensi transaksi melalui pemanfaatan QRIS yang dinilai praktis dan mampu menurunkan hambatan kontak fisik dalam proses pembayaran (Setiawan & Mahyuni, 2020). Kondisi ini sejalan dengan tuntutan wisata kuliner lokal yang terus bertumbuh, sehingga pelaku usaha membutuhkan sistem kasir yang tidak hanya mendukung transaksi tunai, tetapi juga merangkum kanal digital terstandar demi mempercepat perputaran kas dan menjaga kepercayaan pelanggan.",
  "Meskipun regulasi dan infrastruktur QRIS telah tersedia, kesiapan SDM dan mitigasi risiko keamanan masih menjadi tantangan utama bagi UMKM daerah, sehingga diperlukan platform kasir digital yang menekankan kemudahan penggunaan, panduan alur kerja, dan kontrol keamanan terpadu (Fatimah et al., 2024). Integrasi fungsi kasir dengan QRIS penting untuk meminimalkan kesalahan input, memastikan pencatatan stok dan penjualan berlangsung sinkron, serta mendukung kebutuhan audit internal yang kerap menjadi kendala UMKM kuliner skala mikro.",
  "Kajian penerimaan teknologi menunjukkan bahwa keputusan UMKM menggunakan QRIS dipengaruhi oleh persepsi manfaat, dukungan pemangku kepentingan, dan kesesuaian proses bisnis, sehingga solusi kasir digital perlu dirancang adaptif terhadap pola operasional kios hingga kafe modern (Tanujaya & Lukman, 2024; Alfira & Susilo, 2023). Pendekatan ini menuntut prototipe interaktif yang mampu divalidasi langsung bersama pelaku UMKM Polewali Mandar agar fitur seperti katalog menu, penetapan harga dinamis, dan dashboard harian dapat disesuaikan dengan karakteristik kuliner lokal.",
  "Implementasi sistem kasir digital terintegrasi QRIS diharapkan memberi dampak pada peningkatan pendapatan dan efisiensi pencatatan keuangan, karena transparansi transaksi dan kecepatan layanan menjadi faktor vital dalam menjaga loyalitas pelanggan pada sektor kuliner (Alifia et al., 2024). Pengembangan dengan metode prototype memungkinkan iterasi cepat berdasarkan umpan balik lapangan, sehingga solusi akhir benar-benar menjawab kebutuhan pencatatan real-time, rekap transaksi multi-saluran, serta integrasi laporan yang siap digunakan dalam pengajuan pembiayaan usaha."
];

const references = [
  {
    id: "setiawan2020",
    text:
      "Setiawan, I. W. A., & Mahyuni, L. P. (2020). QRIS di mata UMKM: Eksplorasi persepsi dan intensi UMKM menggunakan QRIS. E-Jurnal Ekonomi dan Bisnis Universitas Udayana, 9(10), 921. https://doi.org/10.24843/eeb.2020.v09.i10.p01",
    url: "https://doi.org/10.24843/eeb.2020.v09.i10.p01"
  },
  {
    id: "fatimah2024",
    text:
      "Fatimah, D. A., Rahmahwaty, & Prastya, H. (2024). Analisa kemudahan, knowledge dan security terhadap Quick Response Indonesia Standard (QRIS) pada UMKM di Kota Bandar Lampung. Journal of Interdisciplinary Science and Education, 3(2), 55–64. https://doi.org/10.70371/jise.v3i2.106",
    url: "https://doi.org/10.70371/jise.v3i2.106"
  },
  {
    id: "tanujaya2024",
    text:
      "Tanujaya, M., & Lukman, H. (2024). Analisis penerimaan pembayaran menggunakan QRIS bagi UMKM. EKOMA: Jurnal Ekonomi, Manajemen, Akuntansi, 3(6), 1866–1875. https://doi.org/10.56799/ekoma.v3i6.4978",
    url: "https://doi.org/10.56799/ekoma.v3i6.4978"
  },
  {
    id: "alfira2023",
    text:
      "Alfira, M. T. B., & Susilo. (2023). Analisis faktor yang mempengaruhi keputusan UMKM menggunakan QRIS dan pengaruhnya terhadap penghasilan UMKM di pasar rakyat Kota Malang. Contemporary Studies in Economic, Finance and Banking, 2(4), 544–558. https://doi.org/10.21776/csefb.2023.02.4.1",
    url: "https://doi.org/10.21776/csefb.2023.02.4.1"
  },
  {
    id: "alifia2024",
    text:
      "Alifia, N., Permana, E., & Harnovinsah. (2024). Analisis penggunaan QRIS terhadap peningkatan pendapatan UMKM. Jurnal Riset Pendidikan Ekonomi, 9(1), 102–115. https://doi.org/10.21067/jrpe.v9i1.9940",
    url: "https://doi.org/10.21067/jrpe.v9i1.9940"
  }
];

export default function Page() {
  return (
    <>
      <header className="header">
        <h1 className="title">
          Implementasi Sistem Kasir Digital Terintegrasi QRIS pada UMKM Kuliner
          di Kabupaten Polewali Mandar dengan Metode Prototype
        </h1>
        <p className="subtitle">
          Latar belakang proposal berbasis kajian literatur ilmiah dan sitasi
          APA.
        </p>
      </header>

      <section className="section">
        <h2>Latar Belakang</h2>
        {paragraphs.map((paragraph, index) => (
          <p key={index} className="paragraph">
            {paragraph}
          </p>
        ))}
      </section>

      <section className="section">
        <h2>Referensi</h2>
        <ol className="reference-list">
          {references.map((reference) => (
            <li key={reference.id} className="reference-item">
              <a
                className="reference-link"
                href={reference.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {reference.text}
              </a>
            </li>
          ))}
        </ol>
      </section>
    </>
  );
}
