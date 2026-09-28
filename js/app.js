/**
 * app.js — alur aplikasi, dua jalur:
 *   'anak'   → visual (warna/emoji), tanpa jargon, hasil untuk anak & orang tua
 *   'dewasa' → teks, hasil dilengkapi arah jurusan (SMP/SMA/SMK)
 */

const KUNCI_SIMPAN = "stifin.riwayat";

let jalur = "dewasa"; // 'anak' | 'dewasa'
let SEMUA_SOAL = [];
let indeks = 0;
let jawaban = [];

/* ---------- pembantu ---------- */
const $ = (id) => document.getElementById(id);

function gantiLayar(id) {
  document.querySelectorAll(".layar").forEach((el) => el.classList.remove("layar--aktif"));
  $(id).classList.add("layar--aktif");
  window.scrollTo({ top: 0, behavior: "instant" });
}

/* ---------- poros otak di halaman pembuka ---------- */
function gambarPoros() {
  const peta = {
    "poros-kiri": ["T", "S"],
    "poros-tengah": ["In"],
    "poros-kanan": ["I", "F"],
  };
  for (const [wadahId, kode] of Object.entries(peta)) {
    $(wadahId).innerHTML = kode
      .map((k) => {
        const m = MESIN[k];
        return `<div class="mesin-tag" style="--w:${m.warna}">
                  <b>${m.nama}</b><span>${m.letak}</span>
                </div>`;
      })
      .join("");
  }
}

/* ---------- mulai kuis ---------- */
function mulaiKuis(pilihanJalur) {
  jalur = pilihanJalur;

  if (jalur === "anak") {
    SEMUA_SOAL = SOAL_ANAK.map((s) => ({ ...s, bagian: "mesin" })).concat(
      SOAL_ANAK_DRIVE.map((s) => ({ ...s, bagian: "drive" }))
    );
  } else {
    SEMUA_SOAL = SOAL_MESIN.map((s) => ({ ...s, bagian: "mesin" })).concat(
      SOAL_DRIVE.map((s) => ({ ...s, bagian: "drive" }))
    );
  }

  indeks = 0;
  jawaban = [];
  document.body.classList.toggle("mode-anak", jalur === "anak");
  gantiLayar("layar-kuis");
  tampilkanSoal();
}

function tampilkanSoal() {
  const soal = SEMUA_SOAL[indeks];
  const total = SEMUA_SOAL.length;

  $("kemajuan-isi").style.width = `${(indeks / total) * 100}%`;
  $("kemajuan-angka").textContent = `${indeks + 1} / ${total}`;

  if (jalur === "anak") {
    $("kuis-bagian").textContent = soal.bagian === "mesin" ? "Yuk pilih!" : "Satu lagi";
  } else {
    $("kuis-bagian").textContent =
      soal.bagian === "mesin" ? "Bagian 1 — mesin kecerdasan" : "Bagian 2 — arah kemudi";
  }
  $("kuis-soal").textContent = soal.t;

  const wadah = $("kuis-pilihan");
  wadah.innerHTML = "";
  wadah.className = jalur === "anak" && soal.bagian === "mesin" ? "pilihan pilihan--besar" : "pilihan";

  soal.o.forEach((opsi) => {
    const btn = document.createElement("button");
    btn.type = "button";

    if (jalur === "anak" && soal.tipe === "warna") {
      btn.innerHTML = `<span class="pilihan__swatch" style="background:${opsi.warna}"></span><span>${opsi.t}</span>`;
    } else if (jalur === "anak" && soal.tipe === "emoji") {
      btn.innerHTML = `<span class="pilihan__emoji">${opsi.e}</span><span>${opsi.t}</span>`;
    } else {
      btn.textContent = opsi.t;
    }

    btn.addEventListener("click", () => pilih(opsi));
    wadah.appendChild(btn);
  });

  $("btn-mundur").style.visibility = indeks === 0 ? "hidden" : "visible";
}

function pilih(opsi) {
  jawaban[indeks] = opsi;
  indeks += 1;
  if (indeks < SEMUA_SOAL.length) {
    tampilkanSoal();
  } else {
    const hasil = hitung();
    simpan(hasil);
    jalur === "anak" ? tampilkanHasilAnak(hasil) : tampilkanHasilDewasa(hasil);
  }
}

function mundur() {
  if (indeks > 0) {
    indeks -= 1;
    tampilkanSoal();
  }
}

/* ---------- perhitungan (dipakai kedua jalur) ---------- */
function hitung() {
  const skor = { S: 0, T: 0, I: 0, F: 0, In: 0 };
  const skorDrive = { i: 0, e: 0 };
  let totalMesin = 0;

  jawaban.forEach((o) => {
    if (o.m) { skor[o.m] += 1; totalMesin += 1; }
    if (o.d) skorDrive[o.d] += 1;
  });

  const urut = Object.entries(skor).sort((a, b) => b[1] - a[1]);
  const dominan = urut[0][0];
  const pendamping = urut[1][0];
  const selisih = urut[0][1] - urut[1][1];
  const drive = dominan === "In" ? null : skorDrive.i >= skorDrive.e ? "i" : "e";

  return {
    waktu: new Date().toISOString(),
    jalur,
    skor,
    totalMesin,
    dominan,
    pendamping,
    selisih,
    drive,
    kode: dominan === "In" ? "In" : dominan + drive,
  };
}

function batangSebaran(h) {
  return Object.entries(h.skor)
    .sort((a, b) => b[1] - a[1])
    .map(([k, v]) => {
      const persen = Math.round((v / h.totalMesin) * 100);
      return `<div class="batang" style="--w:${MESIN[k].warna}">
                <span class="batang__nama">${MESIN[k].nama}</span>
                <div class="batang__jalur"><div class="batang__isi" style="width:${persen}%"></div></div>
                <span class="batang__nilai">${persen}%</span>
              </div>`;
    })
    .join("");
}

/* ---------- hasil: jalur remaja/dewasa ---------- */
function tampilkanHasilDewasa(h) {
  const m = MESIN[h.dominan];
  const d = h.drive ? DRIVE[h.drive] : null;
  const namaLengkap = d ? `${m.nama} ${d.nama}` : m.nama;

  const catatanSelisih =
    h.selisih <= 1
      ? `<div class="blok"><h3>Hasilnya belum tegas</h3><p>Selisih ${m.nama} dengan
         ${MESIN[h.pendamping].nama} cuma ${h.selisih} poin. Baca profil keduanya, lalu
         pilih strategi belajar yang paling terasa cocok saat dicoba seminggu.</p></div>`
      : "";

  $("hasil-isi").innerHTML = `
    <div class="kepala" style="--aksen:${m.warna}">
      <p class="kepala__label">Kecenderungan terkuat</p>
      <h1 class="kepala__tipe">${namaLengkap}<span class="kepala__kode">${h.kode}</span></h1>
      <p class="kepala__ringkas">${m.ringkas}${d ? " " + d.ringkas : ""}</p>
    </div>

    <div class="sebaran">
      <h3>Sebaran jawabanmu</h3>
      ${batangSebaran(h)}
    </div>

    <div class="blok">
      <h3>Cara kamu menyerap pelajaran</h3>
      <p>${m.gayaBelajar}${d ? " " + d.catatan : ""}</p>
    </div>

    <div class="duo">
      <div class="blok">
        <h3>Yang jadi kekuatanmu</h3>
        <ul>${m.kekuatan.map((x) => `<li>${x}</li>`).join("")}</ul>
      </div>
      <div class="blok">
        <h3>Coba minggu ini</h3>
        <ul>${m.tipsBelajar.map((x) => `<li>${x}</li>`).join("")}</ul>
      </div>
    </div>

    <div class="blok">
      <h3>Posisimu kalau kerja kelompok</h3>
      <p>${m.perananTim}</p>
    </div>

    <div class="blok blok--jurusan">
      <h3>Arah jurusan yang mungkin cocok</h3>
      <ul>${m.jurusanSaran.map((x) => `<li>${x}</li>`).join("")}</ul>
      <p class="blok__catatan">
        Ini titik awal buat eksplorasi, bukan keputusan final. Cek juga minat pribadi,
        nilai mata pelajaran yang kamu senangi, dan coba tanya langsung ke kakak kelas
        atau orang yang sudah kuliah/kerja di bidang itu.
      </p>
    </div>

    ${catatanSelisih}

    <div class="hasil__aksi">
      <button class="tombol tombol--utama" id="btn-ulang" type="button">Ulangi pemetaan</button>
      <button class="tautan" id="btn-cetak" type="button">Simpan sebagai PDF</button>
    </div>
  `;

  $("btn-ulang").addEventListener("click", () => gantiLayar("layar-intro"));
  $("btn-cetak").addEventListener("click", () => window.print());
  gantiLayar("layar-hasil");
}

/* ---------- hasil: jalur anak-anak ---------- */
function tampilkanHasilAnak(h) {
  const m = MESIN[h.dominan];
  const a = m.anak;
  const d = h.drive ? DRIVE[h.drive] : null;

  $("hasil-isi").innerHTML = `
    <div class="kepala kepala--anak" style="--aksen:${m.warna}">
      <p class="kepala__label">Kamu tipe...</p>
      <h1 class="kepala__tipe">${m.nama}!</h1>
      <p class="kepala__ringkas">${a.ceritaHasil}</p>
    </div>

    <div class="duo">
      <div class="blok blok--anak">
        <h3>Warna favoritmu</h3>
        <p><span class="pilihan__swatch" style="background:${m.warna};display:inline-block;vertical-align:middle;margin-right:0.5rem;width:1.4rem;height:1.4rem;"></span>${a.warnaSuka}</p>
      </div>
      <div class="blok blok--anak">
        <h3>Hewan yang mirip kamu</h3>
        <p>${a.hewan}</p>
      </div>
    </div>

    <div class="blok blok--anak">
      <h3>Kegiatan yang paling seru buatmu</h3>
      <p>${a.aktivitas}</p>
    </div>

    <div class="sebaran">
      <h3>Sebaran jawabanmu</h3>
      ${batangSebaran(h)}
    </div>

    <div class="blok blok--anak blok--ortu">
      <h3>Untuk orang tua / wali kelas</h3>
      <p>${a.tipsOrangTua}${d ? " " + d.catatan : ""}</p>
      <p class="blok__catatan">
        Hasil ini dari kuesioner sederhana, bukan tes STIFIn resmi yang pakai sidik jari.
        Anggap sebagai bahan obrolan santai dengan anak, bukan label yang mengikat.
      </p>
    </div>

    <div class="hasil__aksi">
      <button class="tombol tombol--utama" id="btn-ulang" type="button">Main lagi</button>
      <button class="tautan" id="btn-cetak" type="button">Simpan sebagai PDF</button>
    </div>
  `;

  $("btn-ulang").addEventListener("click", () => gantiLayar("layar-intro"));
  $("btn-cetak").addEventListener("click", () => window.print());
  gantiLayar("layar-hasil");
}

/* ---------- riwayat (localStorage) ---------- */
function bacaRiwayat() {
  try {
    return JSON.parse(localStorage.getItem(KUNCI_SIMPAN)) || [];
  } catch {
    return [];
  }
}

function simpan(h) {
  try {
    const daftar = bacaRiwayat();
    daftar.unshift({ waktu: h.waktu, kode: h.kode, dominan: h.dominan, jalur: h.jalur });
    localStorage.setItem(KUNCI_SIMPAN, JSON.stringify(daftar.slice(0, 20)));
  } catch {
    /* penyimpanan diblokir browser — aplikasi tetap jalan tanpa riwayat */
  }
}

function tampilkanRiwayat() {
  const daftar = bacaRiwayat();
  $("riwayat-isi").innerHTML = daftar.length
    ? daftar
        .map((r) => {
          const m = MESIN[r.dominan];
          const t = new Date(r.waktu).toLocaleString("id-ID", {
            dateStyle: "medium",
            timeStyle: "short",
          });
          const label = r.jalur === "anak" ? "jalur anak-anak" : "jalur remaja/dewasa";
          return `<div class="riwayat__baris" style="--w:${m.warna}">
                    <b>${m.nama} (${r.kode})</b><span>${label} · ${t}</span>
                  </div>`;
        })
        .join("")
    : `<p class="riwayat__kosong">Belum ada pemetaan yang tersimpan. Selesaikan satu sesi, hasilnya akan muncul di sini.</p>`;
  gantiLayar("layar-riwayat");
}

/* ---------- pasang ---------- */
gambarPoros();
$("btn-jalur-anak").addEventListener("click", () => mulaiKuis("anak"));
$("btn-jalur-dewasa").addEventListener("click", () => mulaiKuis("dewasa"));
$("btn-mundur").addEventListener("click", mundur);
$("btn-riwayat").addEventListener("click", tampilkanRiwayat);
$("btn-riwayat-tutup").addEventListener("click", () => gantiLayar("layar-intro"));
$("btn-riwayat-hapus").addEventListener("click", () => {
  localStorage.removeItem(KUNCI_SIMPAN);
  tampilkanRiwayat();
});
