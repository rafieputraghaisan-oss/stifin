/**
 * data.js — seluruh isi (soal + profil) dipisah dari logika aplikasi.
 * Ubah file ini kalau mau menambah soal atau memperkaya deskripsi.
 */

/* Lima mesin kecerdasan. Kode dipakai sebagai kunci di seluruh aplikasi. */
const MESIN = {
  S: {
    kode: "S",
    nama: "Sensing",
    letak: "Limbik kiri",
    ringkas: "Belajar lewat pengalaman, latihan, dan pengulangan.",
    kekuatan: [
      "Ingatan kuat untuk hal yang pernah dialami langsung",
      "Tekun mengerjakan hal berulang tanpa cepat bosan",
      "Nyaman dengan aturan, prosedur, dan target yang jelas",
    ],
    gayaBelajar:
      "Paling menempel kalau materi dipraktikkan, bukan dibayangkan. Contoh nyata dan latihan soal berulang lebih berguna daripada teori panjang.",
    tipsBelajar: [
      "Kerjakan soal latihan dulu, baru baca teorinya lagi",
      "Pakai jadwal tetap — jam belajar yang sama tiap hari",
      "Catat ulang dengan tangan, jangan hanya membaca",
    ],
    perananTim: "Eksekutor. Paling bisa diandalkan untuk menuntaskan pekerjaan teknis yang panjang.",
    jurusanSaran: [
      "Teknik (Mesin, Sipil, Elektro, Industri)",
      "Kedokteran, Keperawatan, atau bidang kesehatan lain yang banyak praktik langsung",
      "Vokasi / Politeknik / SMK lanjutan",
      "Olahraga atau tata boga",
    ],
    anak: {
      warnaSuka: "Merah",
      hewan: "Anjing — setia, rajin, senang diajak latihan",
      aktivitas: "Main kejar-kejaran, olahraga, atau bikin sesuatu pakai tangan",
      ceritaHasil:
        "Kamu paling jago kalau sudah sering latihan! Kamu suka tahu persis langkah-langkahnya, dan kamu tidak gampang menyerah kalau harus mengulang sampai bisa.",
      tipsOrangTua:
        "Beri instruksi yang jelas dan berurutan, serta kesempatan mengulang latihan yang sama beberapa kali — anak tipe ini belajar lewat pengulangan, bukan penjelasan panjang.",
    },
    warna: "#C2402B",
  },
  T: {
    kode: "T",
    nama: "Thinking",
    letak: "Neokorteks kiri",
    ringkas: "Belajar lewat logika, struktur, dan sebab-akibat.",
    kekuatan: [
      "Cepat melihat pola dan kesalahan penalaran",
      "Nyaman membandingkan pilihan secara objektif",
      "Bisa menjelaskan hal rumit jadi urutan yang rapi",
    ],
    gayaBelajar:
      "Butuh tahu 'kenapa' sebelum mau menghafal 'apa'. Bagan, rumus, dan alur berpikir lebih menolong daripada cerita.",
    tipsBelajar: [
      "Buat peta konsep sebelum menghafal detail",
      "Coba jelaskan materi ke orang lain — kalau macet, di situ bolongnya",
      "Cari satu prinsip induk yang menaungi banyak fakta",
    ],
    perananTim: "Perencana. Paling pas menyusun logika sistem dan mengambil keputusan berbasis data.",
    jurusanSaran: [
      "Teknik Informatika / Ilmu Komputer",
      "Matematika, Statistika, atau Fisika",
      "Ekonomi, Akuntansi, atau Manajemen Keuangan",
      "Hukum",
    ],
    anak: {
      warnaSuka: "Biru",
      hewan: "Burung hantu — pintar, teliti, suka memperhatikan",
      aktivitas: "Main puzzle, catur, atau teka-teki",
      ceritaHasil:
        "Kamu suka tahu 'kenapa'nya dulu sebelum ikut aturan. Otakmu senang menyusun sesuatu jadi masuk akal, dan kamu jago melihat kalau ada yang janggal.",
      tipsOrangTua:
        "Jelaskan alasan di balik aturan, bukan cuma perintahnya. Anak tipe ini lebih menurut kalau mengerti logikanya, bukan karena disuruh.",
    },
    warna: "#2B58B8",
  },
  I: {
    kode: "I",
    nama: "Intuiting",
    letak: "Neokorteks kanan",
    ringkas: "Belajar lewat gagasan, kemungkinan, dan gambaran besar.",
    kekuatan: [
      "Mudah memunculkan ide dan alternatif baru",
      "Betah dengan hal abstrak dan belum jelas bentuknya",
      "Menghubungkan hal-hal yang kelihatannya tak berkaitan",
    ],
    gayaBelajar:
      "Cepat bosan pada detail, tapi menyala kalau melihat gambaran utuh dulu. Perlu ruang untuk mengeksplorasi, bukan langkah baku.",
    tipsBelajar: [
      "Baca ringkasan atau daftar isi dulu sebelum masuk bab",
      "Ganti format belajar tiap 25–30 menit supaya tidak jenuh",
      "Tutup dengan satu ringkasan versi sendiri, bukan salinan",
    ],
    perananTim: "Pencetus. Paling kuat di tahap awal saat konsep produk masih dicari.",
    jurusanSaran: [
      "Desain Komunikasi Visual atau Arsitektur",
      "Seni Rupa, Film, atau Musik",
      "Sastra, Filsafat, atau Ilmu Komunikasi",
      "Product Design / Riset & Pengembangan",
    ],
    anak: {
      warnaSuka: "Ungu",
      hewan: "Kupu-kupu — unik, suka bebas, tidak suka dikekang",
      aktivitas: "Menggambar, berkhayal, atau bikin cerita sendiri",
      ceritaHasil:
        "Kepalamu penuh ide! Kamu suka membayangkan hal-hal yang belum ada, dan kamu paling semangat kalau boleh berkreasi dengan caramu sendiri.",
      tipsOrangTua:
        "Beri ruang bereksplorasi, jangan terlalu banyak aturan kaku. Anak tipe ini cepat bosan pada hal yang berulang dan monoton.",
    },
    warna: "#6B35A6",
  },
  F: {
    kode: "F",
    nama: "Feeling",
    letak: "Limbik kanan",
    ringkas: "Belajar lewat hubungan, suasana, dan makna.",
    kekuatan: [
      "Peka membaca suasana dan kebutuhan orang lain",
      "Mudah membangun kepercayaan dalam kelompok",
      "Bertahan lama kalau merasa apa yang dikerjakan berarti",
    ],
    gayaBelajar:
      "Sangat dipengaruhi siapa yang mengajar dan siapa teman belajarnya. Materi menempel kalau terasa relevan dengan kehidupan nyata.",
    tipsBelajar: [
      "Belajar berdua atau bertiga, jangan sendirian terus",
      "Kaitkan tiap materi dengan siapa yang terbantu olehnya",
      "Rapikan tempat belajar — suasana berpengaruh besar",
    ],
    perananTim: "Perekat. Menjaga tim tetap kompak dan komunikasi ke luar tetap hangat.",
    jurusanSaran: [
      "Psikologi",
      "Ilmu Komunikasi atau Hubungan Internasional",
      "Pendidikan / Keguruan",
      "Manajemen Sumber Daya Manusia",
    ],
    anak: {
      warnaSuka: "Kuning",
      hewan: "Lumba-lumba — ramah, suka berkelompok, peka sama teman",
      aktivitas: "Main bareng-bareng, ngobrol, atau bikin drama kecil sama teman",
      ceritaHasil:
        "Kamu paling semangat kalau belajar rame-rame. Kamu peka sama perasaan teman, dan suasana hati orang di sekitarmu sangat memengaruhi semangatmu.",
      tipsOrangTua:
        "Ajak belajar bersama teman atau keluarga, bukan sendirian terus. Suasana yang hangat jauh lebih penting buat anak tipe ini dibanding metode belajarnya.",
    },
    warna: "#B8761B",
  },
  In: {
    kode: "In",
    nama: "Insting",
    letak: "Otak tengah",
    ringkas: "Belajar lewat rasa cocok, serba bisa, dan penyesuaian cepat.",
    kekuatan: [
      "Gampang menyesuaikan diri di situasi dan peran apa pun",
      "Sering benar lewat firasat sebelum sempat dianalisis",
      "Rela mengalah demi kelancaran bersama",
    ],
    gayaBelajar:
      "Tidak terpaku satu cara. Bisa mengikuti metode apa pun, tapi perlu bantuan untuk memilih fokus karena semuanya terasa menarik.",
    tipsBelajar: [
      "Tetapkan satu prioritas per minggu supaya tidak melebar",
      "Minta orang lain menetapkan tenggat — itu yang menahan fokus",
      "Percaya kesan pertama saat mengerjakan soal pilihan ganda",
    ],
    perananTim: "Penyeimbang. Bisa mengisi posisi mana pun yang sedang kosong.",
    jurusanSaran: [
      "Cocok di banyak jurusan — kekuatanmu justru fleksibilitas, bukan satu bidang tetap",
      "Pilih berdasarkan minat yang paling kuat terasa sekarang, bukan yang 'aman'",
      "Coba magang atau ekskul lintas bidang dulu sebelum memutuskan",
    ],
    anak: {
      warnaSuka: "Hijau",
      hewan: "Bunglon — bisa menyesuaikan diri di mana saja",
      aktivitas: "Ikut aja permainan apa yang lagi rame dimainkan teman-teman",
      ceritaHasil:
        "Kamu jago menyesuaikan diri! Kamu bisa ikut mainan apa saja dan cepat akrab, jadi cara belajarmu paling pas kalau dicoba berganti-ganti dulu, sambil melihat mana yang paling kamu suka.",
      tipsOrangTua:
        "Kenalkan banyak jenis kegiatan dulu, jangan buru-buru dipatok ke satu arah. Anak tipe ini menemukan minatnya lewat mencoba, bukan lewat diarahkan sejak awal.",
    },
    warna: "#17806A",
  },
};

/* Dua arah kemudi: introvert (i) dan ekstrovert (e). Insting tidak punya arah. */
const DRIVE = {
  i: {
    kode: "i",
    nama: "introvert",
    ringkas: "Tenaga dipulihkan dari dalam diri — fokus, mendalam, satu per satu.",
    catatan:
      "Kamu butuh waktu sendiri untuk mencerna. Kualitas hasil naik kalau kerjanya sepi dan tidak diinterupsi.",
  },
  e: {
    kode: "e",
    nama: "ekstrovert",
    ringkas: "Tenaga dipulihkan dari luar diri — cepat, lebar, banyak interaksi.",
    catatan:
      "Kamu berpikir sambil bicara. Diskusi dan sesi presentasi justru mempercepat pemahamanmu.",
  },
};

/**
 * Soal bagian 1 — menebak mesin dominan.
 * Setiap opsi punya `m` = kode mesin yang mendapat poin.
 */
const SOAL_MESIN = [
  {
    t: "Saat dapat tugas baru yang belum pernah kamu kerjakan, hal pertama yang kamu lakukan:",
    o: [
      { m: "S", t: "Cari contoh pekerjaan serupa, lalu tiru langkahnya" },
      { m: "T", t: "Pecah tugasnya jadi bagian-bagian kecil yang logis" },
      { m: "I", t: "Bayangkan hasil akhirnya dulu, baru mundur ke langkahnya" },
      { m: "F", t: "Tanya orang yang pernah mengerjakannya" },
      { m: "In", t: "Langsung coba saja, nanti menyesuaikan di jalan" },
    ],
  },
  {
    t: "Pelajaran terasa paling nyangkut kalau gurunya:",
    o: [
      { m: "S", t: "Memberi banyak latihan soal" },
      { m: "T", t: "Menjelaskan alasan di balik setiap rumus" },
      { m: "I", t: "Mengaitkan materi dengan hal-hal besar di luar kelas" },
      { m: "F", t: "Dekat dengan murid dan enak diajak bicara" },
      { m: "In", t: "Bergantian metodenya, tidak itu-itu saja" },
    ],
  },
  {
    t: "Kalau kerja kelompok, kamu biasanya kebagian:",
    o: [
      { m: "S", t: "Mengerjakan bagian teknis sampai selesai" },
      { m: "T", t: "Menyusun kerangka dan membagi tugas" },
      { m: "I", t: "Melempar ide-ide awal" },
      { m: "F", t: "Menjaga komunikasi antaranggota" },
      { m: "In", t: "Menambal bagian mana pun yang belum ada yang pegang" },
    ],
  },
  {
    t: "Hal yang paling bikin kamu kesal saat belajar:",
    o: [
      { m: "S", t: "Instruksinya berubah-ubah" },
      { m: "T", t: "Disuruh menghafal tanpa dijelaskan alasannya" },
      { m: "I", t: "Terjebak di detail kecil yang tidak penting" },
      { m: "F", t: "Suasana kelas yang dingin atau ada yang dijutekin" },
      { m: "In", t: "Dipaksa memilih satu hal padahal semuanya menarik" },
    ],
  },
  {
    t: "Kamu paling percaya diri saat:",
    o: [
      { m: "S", t: "Sudah berlatih berkali-kali" },
      { m: "T", t: "Sudah paham logikanya sampai ke akar" },
      { m: "I", t: "Punya ide yang belum terpikir orang lain" },
      { m: "F", t: "Merasa didukung orang sekitar" },
      { m: "In", t: "Merasa 'kayaknya bakal aman' — dan biasanya betul" },
    ],
  },
  {
    t: "Cara kamu mencatat pelajaran:",
    o: [
      { m: "S", t: "Rapi, urut, mirip persis dengan papan tulis" },
      { m: "T", t: "Bagan, panah, dan hubungan sebab-akibat" },
      { m: "I", t: "Coretan acak, gambar, kata kunci berserakan" },
      { m: "F", t: "Warna-warni, dihias, enak dilihat" },
      { m: "In", t: "Seadanya, tergantung suasana hari itu" },
    ],
  },
  {
    t: "Pujian yang paling terasa berarti buat kamu:",
    o: [
      { m: "S", t: "\"Kerjamu rapi dan tidak pernah telat.\"" },
      { m: "T", t: "\"Analisismu tajam.\"" },
      { m: "I", t: "\"Idemu beda dari yang lain.\"" },
      { m: "F", t: "\"Kamu enak diajak kerja bareng.\"" },
      { m: "In", t: "\"Kamu bisa ditaruh di mana saja.\"" },
    ],
  },
  {
    t: "Saat mengambil keputusan penting, kamu paling mengandalkan:",
    o: [
      { m: "S", t: "Pengalaman yang sudah terbukti" },
      { m: "T", t: "Untung-rugi yang bisa dihitung" },
      { m: "I", t: "Kemungkinan jangka panjangnya" },
      { m: "F", t: "Perasaan dan dampaknya ke orang lain" },
      { m: "In", t: "Firasat yang tiba-tiba muncul" },
    ],
  },
  {
    t: "Kegiatan akhir pekan yang paling kamu nikmati:",
    o: [
      { m: "S", t: "Olahraga, masak, atau otak-atik barang" },
      { m: "T", t: "Main catur, teka-teki, atau baca hal teknis" },
      { m: "I", t: "Menggambar, menulis, atau merancang sesuatu" },
      { m: "F", t: "Kumpul dengan teman atau keluarga" },
      { m: "In", t: "Apa saja yang kebetulan sedang terjadi" },
    ],
  },
  {
    t: "Kalau rencana mendadak berantakan, reaksimu:",
    o: [
      { m: "S", t: "Kesal, karena sudah disiapkan matang" },
      { m: "T", t: "Langsung cari tahu di mana letak salahnya" },
      { m: "I", t: "Anggap peluang untuk mencoba cara lain" },
      { m: "F", t: "Cek dulu bagaimana perasaan orang-orang" },
      { m: "In", t: "Ya sudah, ikut saja ke mana arahnya" },
    ],
  },
  {
    t: "Pelajaran yang paling kamu nikmati:",
    o: [
      { m: "S", t: "Praktikum, olahraga, keterampilan" },
      { m: "T", t: "Matematika, fisika, ekonomi" },
      { m: "I", t: "Seni, desain, sastra" },
      { m: "F", t: "Bahasa, sosiologi, sejarah" },
      { m: "In", t: "Tidak ada yang menonjol, semua bisa dijalani" },
    ],
  },
  {
    t: "Saat menjelaskan sesuatu ke teman, kamu cenderung:",
    o: [
      { m: "S", t: "Memberi contoh konkret step-by-step" },
      { m: "T", t: "Mulai dari prinsip dasarnya" },
      { m: "I", t: "Pakai perumpamaan atau analogi" },
      { m: "F", t: "Menyesuaikan dengan kondisi orangnya" },
      { m: "In", t: "Pokoknya sampai dia ngerti, caranya bebas" },
    ],
  },
  {
    t: "Hal yang paling kamu hindari:",
    o: [
      { m: "S", t: "Situasi yang tidak jelas aturannya" },
      { m: "T", t: "Keputusan yang diambil asal-asalan" },
      { m: "I", t: "Pekerjaan berulang yang itu-itu terus" },
      { m: "F", t: "Konflik terbuka dengan orang lain" },
      { m: "In", t: "Harus menonjolkan diri sendirian" },
    ],
  },
  {
    t: "Kalau punya waktu sebulan untuk belajar hal baru, kamu pilih:",
    o: [
      { m: "S", t: "Keterampilan yang langsung bisa dipakai" },
      { m: "T", t: "Sesuatu yang menantang cara berpikir" },
      { m: "I", t: "Bidang yang belum banyak orang masuki" },
      { m: "F", t: "Hal yang bisa membantu orang di sekitarmu" },
      { m: "In", t: "Apa pun yang sedang ramai dan terasa cocok" },
    ],
  },
  {
    t: "Menurut teman-temanmu, kamu orang yang:",
    o: [
      { m: "S", t: "Bisa diandalkan" },
      { m: "T", t: "Kritis" },
      { m: "I", t: "Kreatif" },
      { m: "F", t: "Hangat" },
      { m: "In", t: "Gampang diajak apa saja" },
    ],
  },
];

/**
 * Soal bagian 2 — arah kemudi (introvert / ekstrovert).
 * `d` = kode drive yang mendapat poin.
 */
const SOAL_DRIVE = [
  {
    t: "Setelah seharian penuh kegiatan bersama orang banyak, kamu merasa:",
    o: [
      { d: "e", t: "Berenergi, ingin lanjut" },
      { d: "i", t: "Terkuras, butuh waktu sendiri" },
    ],
  },
  {
    t: "Saat menemukan ide bagus, kamu:",
    o: [
      { d: "e", t: "Langsung cerita ke orang lain" },
      { d: "i", t: "Simpan dulu, matangkan sendiri" },
    ],
  },
  {
    t: "Cara belajar yang paling efektif buatmu:",
    o: [
      { d: "e", t: "Diskusi kelompok atau menjelaskan ke orang" },
      { d: "i", t: "Sendiri, di ruang yang tenang" },
    ],
  },
  {
    t: "Dalam rapat atau diskusi kelas, kamu biasanya:",
    o: [
      { d: "e", t: "Bicara duluan, mikirnya sambil jalan" },
      { d: "i", t: "Menyimak dulu, bicara kalau sudah matang" },
    ],
  },
  {
    t: "Kamu lebih suka mengerjakan banyak hal:",
    o: [
      { d: "e", t: "Sekaligus, berpindah-pindah" },
      { d: "i", t: "Satu per satu sampai tuntas" },
    ],
  },
];

/* ================================================================
   JALUR ANAK KECIL — soal visual: warna, hewan, dan gambar/emoji.
   Tanpa jargon, tanpa bagian arah kemudi (terlalu abstrak untuk usia ini).
   Setiap opsi tetap punya `m` supaya mesin skor yang sama bisa dipakai.
   ================================================================ */

const SOAL_ANAK = [
  {
    t: "Kalau boleh milih satu warna buat baju favorit, kamu pilih:",
    tipe: "warna",
    o: [
      { m: "S", t: "Merah", warna: "#C2402B" },
      { m: "T", t: "Biru", warna: "#2B58B8" },
      { m: "I", t: "Ungu", warna: "#6B35A6" },
      { m: "F", t: "Kuning", warna: "#B8761B" },
      { m: "In", t: "Hijau", warna: "#17806A" },
    ],
  },
  {
    t: "Kalau kamu jadi hewan, kamu paling mau jadi:",
    tipe: "emoji",
    o: [
      { m: "S", t: "Anjing", e: "🐕" },
      { m: "T", t: "Burung hantu", e: "🦉" },
      { m: "I", t: "Kupu-kupu", e: "🦋" },
      { m: "F", t: "Lumba-lumba", e: "🐬" },
      { m: "In", t: "Bunglon", e: "🦎" },
    ],
  },
  {
    t: "Waktu main sama teman-teman, kamu paling suka:",
    tipe: "emoji",
    o: [
      { m: "S", t: "Kejar-kejaran", e: "🏃" },
      { m: "T", t: "Susun puzzle", e: "🧩" },
      { m: "I", t: "Menggambar", e: "🎨" },
      { m: "F", t: "Ngobrol rame-rame", e: "👭" },
      { m: "In", t: "Ikut aja apa yang lagi seru", e: "🎲" },
    ],
  },
  {
    t: "Dikasih mainan baru, hal pertama yang kamu lakukan:",
    tipe: "emoji",
    o: [
      { m: "S", t: "Langsung dicoba mainkan", e: "🎮" },
      { m: "T", t: "Diperhatikan dulu cara kerjanya", e: "🔍" },
      { m: "I", t: "Dibayangkan bisa dipakai main apa saja", e: "💭" },
      { m: "F", t: "Diajak main bareng teman", e: "🤝" },
      { m: "In", t: "Dicoba-coba sambil lihat serunya di mana", e: "✨" },
    ],
  },
  {
    t: "Kalau ada tugas menggambar bebas, kamu bakal gambar:",
    tipe: "emoji",
    o: [
      { m: "S", t: "Hal yang pernah kamu lihat langsung", e: "🏠" },
      { m: "T", t: "Bentuk-bentuk yang rapi dan simetris", e: "📐" },
      { m: "I", t: "Dunia khayalan yang belum pernah ada", e: "🌈" },
      { m: "F", t: "Kamu dan orang-orang yang kamu sayang", e: "👨‍👩‍👧" },
      { m: "In", t: "Apa saja yang kepikiran saat itu", e: "🖍️" },
    ],
  },
  {
    t: "Kamu paling senang dipuji karena:",
    tipe: "emoji",
    o: [
      { m: "S", t: "Rajin dan tidak gampang menyerah", e: "💪" },
      { m: "T", t: "Pintar dan jago mikir", e: "🧠" },
      { m: "I", t: "Ide-idenya seru dan beda", e: "💡" },
      { m: "F", t: "Baik dan enak diajak main", e: "💛" },
      { m: "In", t: "Bisa diajak main apa saja", e: "🌟" },
    ],
  },
  {
    t: "Kalau permainan tiba-tiba berubah aturan, kamu:",
    tipe: "emoji",
    o: [
      { m: "S", t: "Agak kesal, maunya sesuai rencana", e: "😤" },
      { m: "T", t: "Nanya kenapa aturannya berubah", e: "🤔" },
      { m: "I", t: "Malah jadi tambah seru buat dicoba", e: "🤩" },
      { m: "F", t: "Lihat dulu teman-teman gimana", e: "🥰" },
      { m: "In", t: "Ya sudah, ikut saja", e: "😊" },
    ],
  },
  {
    t: "Cerita yang paling kamu suka:",
    tipe: "emoji",
    o: [
      { m: "S", t: "Petualangan seru di alam", e: "🏕️" },
      { m: "T", t: "Detektif yang memecahkan misteri", e: "🕵️" },
      { m: "I", t: "Dongeng ajaib dan negeri khayalan", e: "🧚" },
      { m: "F", t: "Persahabatan dan keluarga", e: "❤️" },
      { m: "In", t: "Apa saja, asal ceritanya bagus", e: "📖" },
    ],
  },
  {
    t: "Kalau disuruh piket atau bantu-bantu di rumah, kamu:",
    tipe: "emoji",
    o: [
      { m: "S", t: "Langsung kerjakan sampai selesai", e: "🧹" },
      { m: "T", t: "Pikirkan cara paling cepat dulu", e: "⚡" },
      { m: "I", t: "Kerjakan sambil membayangkan hal lain", e: "🌤️" },
      { m: "F", t: "Lebih semangat kalau dikerjakan bareng", e: "🤗" },
      { m: "In", t: "Kerjakan sambil lihat mana yang gampang duluan", e: "🙂" },
    ],
  },
  {
    t: "Tempat yang paling kamu suka:",
    tipe: "emoji",
    o: [
      { m: "S", t: "Lapangan atau taman bermain", e: "⚽" },
      { m: "T", t: "Perpustakaan atau ruang belajar", e: "📚" },
      { m: "I", t: "Tempat baru yang belum pernah dikunjungi", e: "🗺️" },
      { m: "F", t: "Rumah, ramai sama keluarga", e: "🏡" },
      { m: "In", t: "Di mana saja, asal sama teman", e: "🚏" },
    ],
  },
];

/* Arah kemudi versi anak — dibuat 3 soal saja, bahasa sesederhana mungkin. */
const SOAL_ANAK_DRIVE = [
  {
    t: "Habis main rame-rame seharian, kamu jadi pengen:",
    o: [
      { d: "e", t: "Main lagi, masih semangat!" },
      { d: "i", t: "Istirahat sendirian dulu" },
    ],
  },
  {
    t: "Kalau ada ide seru, kamu maunya:",
    o: [
      { d: "e", t: "Langsung cerita ke semua orang" },
      { d: "i", t: "Disimpan dulu, dinikmati sendiri" },
    ],
  },
  {
    t: "Kamu lebih suka main:",
    o: [
      { d: "e", t: "Rame-rame sama banyak teman" },
      { d: "i", t: "Berdua atau sendirian" },
    ],
  },
];
